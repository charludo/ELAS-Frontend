class DataHandler {

	constructor() {
		this.data = require("./data/e3_courses.json").children.map(catalog => catalog.children).flat();
		this.filterState = JSON.parse(localStorage.getItem("e3filters")) || require("./data/filters.json");

		this.sortState = require("./data/sorting.json");

		this.courseList = [];
		this.selectedList = [];

		this.selectedSWS = 0;
		this.selectedCredits = [0, 0];
		this.bookedTimeSlots = {};

		const preSelectedCourses = JSON.parse(localStorage.getItem("e3selected")) || [];
		preSelectedCourses.forEach(c => this.handleSelection(c));

		this.tryToLoadSharedState();
	}

	tryToLoadSharedState() {
		const shared = new URLSearchParams(window.location.search).get("shared");
	    if (shared) {
	        fetch("http://localhost:5000/e3selector/shared/" + shared)
	        .then(response => response.json())
	        .then(data => {
	            localStorage.setItem("e3filters", data.e3filters);
	            localStorage.setItem("e3selected", data.e3selected);
	            window.location = "http://localhost:3000/e3selector"
	        })
	        .catch(error=>{
	            console.log(error)
	        })
	    }
	}

	setStudyProgram(program) {
		this.filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor[program] = false;

		if (program === "Bauingenieurwesen") {
			this.filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor["ALLE (außer Bauingenieurwesen (1. FS))"] = true;
			this.filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor["ALLE (außer Bauingenieurwesen)"] = true;
		}
	}

	isStudyProgramSet() {
		var selected = false;
		Object.keys(this.filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor).forEach((excluded, e) => {
			if (!excluded.includes("ALLE") && this.filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor[excluded] === false) {
				selected = true;
			}
		});
		return selected;
	}

	setFilter(family, item) {
		if (family === "credits") {
			this.filterState.credits = parseInt(item);
		} else if (family === "catalog") {
			if (item === "all") {
				Object.keys(this.filterState.catalog).forEach(k => this.filterState.catalog[k] = true);
			} else {
				Object.keys(this.filterState.catalog).forEach(k => this.filterState.catalog[k] = false);
				this.filterState.catalog[item] = true;
			}
		} else if (family === "search") {
			this.filterState.search = item;
		} else {
			this.filterState[family][item] = !this.filterState[family][item];
		}

		this.saveFilterState();
	}

	saveFilterState() {
		localStorage.setItem("e3filters", JSON.stringify(this.filterState));
	}

	setSorting(key) {
		var direction = (key === this.sortState.key) ? (this.sortState.direction * -1) : 1;
		this.sortState.direction = direction;
		this.sortState.key = key;

		this.data.sort((a, b) => a[key].localeCompare(b[key]) * direction);
	}

	handleSelection(course) {
		let e = this.selectedList.find(c => c.Title === course.title);

		const sws = parseInt(course.SWS) || 0;
		const slots = course.Times_manual.split(";");
		const credits = course.Credits.includes("-") ? parseInt(course.Credits.split("-")) : Array(2).fill(parseInt(course.Credits));

		if (e !== undefined) {
            this.selectedList = this.selectedList.filter(c => c.Title !== e.Title);

			this.selectedSWS -= sws;
			this.selectedCredits.map((n, i) => n - credits[i]);
			slots.forEach((time, t) => { this.bookedTimeSlots[time] -= 1 });
        } else {
            this.selectedList += this.courseList.find(c => c.Title === e.title);

			this.selectedSWS += sws;
			this.selectedCredits.map((n, i) => n + credits[i]);
			slots.forEach((time, t) => { this.bookedTimeSlots[time] = this.bookedTimeSlots[time]+1 || 1; });
        }

		localStorage.setItem("e3selected", JSON.stringify(this.selectedList));
	}

	getUnselectedCourses() {
		return this.courseList.filter(c => !this.selectedList.map(s => s.Title).includes(c.Title));
	}

	getSelectedCourses() {
		return this.selectedList;
	}

	getBookedTimeSlots() {
		return Object.keys(this.bookedTimeSlots).map((k, i) => k);
	}

	getOverBookedTimeSlots() {
		return Object.keys(this.bookedTimeSlots).map((k, i) => (this.bookedTimeSlots[k] > 1) ? k : null).filter(b => b);
	}

	conflictExists() {
		return this.getOverBookedTimeSlots().length ? true : false;
	}

	getWorkload() {
		return this.selectedSWS;
	}

	getCredits() {
		return (this.selectedCredits[0] === this.selectedCredits[1]) ? this.selectedCredits[0] : this.selectedCredits[0] + "-" + this.selectedCredits[1];
	}

	getCreditsStatus() {
		if (this.selectedCredits[0] === this.filterState.credits || this.selectedCredits[1] === this.filterState.credits) {
            return "on-ok";
        } else if (this.selectedCredits[0] > this.filterState.credits && this.selectedCredits[1] > this.filterState.credits) {
            return "on-warn";
        } else {
            return "on-info";
        }
	}

	getFilterState() {
		return this.filterState;
	}

	applyFilters() {
		this.courseList = this.data.filter(course => {
			var fitting = true;

			// Search
			if (this.filterState.search.length) {
				fitting = false;
				var reg = new RegExp(this.filterState.search.toLowerCase());
				/* VERSION THAT SEARCHES ALL FIELDS
				Object.keys(course).forEach(function(key) {
					if (reg.test(course[key].toString().toLowerCase())) {
						fitting = true;
					}
				});*/

				if (reg.test(course.Title.toString().toLowerCase())) {
					fitting = true;
				}
			}

			// Study Program
			let exempt = course.Ausgeschlossen_Ingenieurwissenschaften_Bachelor.split(/,|;/);
			exempt.forEach(function(program) {
				if (this.filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor[program] !== true) {
					fitting = false;
				}
			});

			// Time
			let times = course.Times_manual.split(";");
			times.forEach(function(slot) {
				if (this.filterState.time[slot] !== true) {
					fitting = false;
				}
			});

			// Location
			let locales = course.Location.split(";");
			locales.forEach(function(locale) {
				if (this.filterState.locales[locale] !== true) {
					fitting = false;
				}
			});

			// Language
			let languages = course.Language.split(";");
			languages.forEach(function(l) {
				if (this.filterState.languages[l] !== true) {
					fitting = false;
				}
			});

			// Exam
			let examTypes = course.Exam.split(";");
			examTypes.forEach(function(e) {
				if (this.filterState.exam[e] !== true) {
					fitting = false;
				}
			});

			// Course Type
			let courseTypes = course.Type.split(";");
			courseTypes.forEach(function(c) {
				if (this.filterState.courseType[c] !== true) {
					fitting = false;
				}
			});

			// Catalog
			if (this.filterState.catalog[course.catalog] !== true) {
				fitting = false;
			}

			// Credits
			let credits = course.Credits.match(/\d+/g).sort();
			if (this.filterState.credits < credits[0]) {
				fitting = false;
			}

			if (fitting === true) {
				return course;
			} else {
				return null;
			}
		});
	}
}

export default new DataHandler();
