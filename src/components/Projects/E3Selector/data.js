import rawData from "./e3_courses.json"

let data = rawData.children.map(catalog => catalog.children).flat();

let filterState = {
	"time": {
		"Mo8-10": true,
		"Mo10-12": true,
		"Mo12-14": true,
		"Mo14-16": true,
		"Mo16-18": true,
		"Mo18-20": true,
		"Di8-10": true,
		"Di10-12": true,
		"Di12-14": true,
		"Di14-16": true,
		"Di16-18": true,
		"Di18-20": true,
		"Mi8-10": true,
		"Mi10-12": true,
		"Mi12-14": true,
		"Mi14-16": true,
		"Mi16-18": true,
		"Mi18-20": true,
		"Do8-10": true,
		"Do10-12": true,
		"Do12-14": true,
		"Do14-16": true,
		"Do16-18": true,
		"Do18-20": true,
		"Fr8-10": true,
		"Fr10-12": true,
		"Fr12-14": true,
		"Fr14-16": true,
		"Fr16-18": true,
		"Fr18-20": true,
		"Sa8-10": true,
		"Sa10-12": true,
		"Sa12-14": true,
		"Sa14-16": true,
		"Sa16-18": true,
		"Sa18-20": true,
		"So8-10": true,
		"So10-12": true,
		"So12-14": true,
		"So14-16": true,
		"So16-18": true,
		"So18-20": true,
		"": true,
	},
	"locales": {
		"Duisburg (L/M)": true,
		"Duisburg (B)": true,
		"Essen": true,
		"Bochum": true,
		"Dortmund": true,
		"online": true,
		"Essen (UKE)": true,
		"Duisburg": true,
	},
	"languages": {
		"Deutsch": true,
		"Englisch": true,
		"Türkisch": true,
		"Niederländisch": true,
	},
	"exam": {
		"Präsentation": true,
		"Schriftliche Ausarbeitung": true,
		"Mündliche Prüfung": true,
		"Klausur": true,
		"Essay": true,
		"unknown": true,
	},
	"courseType": {
		"Vorlesung": true,
		"Blockseminar": true,
		"VL/Übung": true,
		"Seminar": true,
		"E-Learning": true,
	},
	"catalog": {
		"BNE": true,
		"IOS": true,
		"Kultur und Gesellschaft": true,
		"Natur und Technik": true,
		"Wirtschaft": true,
	},
	"credits": 6
}

export function updateFilters(family, item) {
	if (family == "credits") {
		filterState.credits = parseInt(item);
	} else {
		filterState[family][item] = !filterState[family][item];
	}
	console.log(getFilteredData());
}

function applyFilters() {
	let filteredData = data.filter(course => {
		var fitting = true;

		// Time
		let times = course.Times_manual.split(";");
		times.forEach(function(slot) {
			if (filterState.time[slot] !== true) {
				fitting = false;
			}
		});

		// Location
		let locales = course.Location.split(";");
		locales.forEach(function(locale) {
			if (filterState.locales[locale] !== true) {
				fitting = false;
			}
		});

		// Language
		let languages = course.Language.split(";");
		languages.forEach(function(l) {
			if (filterState.languages[l] !== true) {
				fitting = false;
			}
		});

		// Exam
		let examTypes = course.Exam.split(";");
		examTypes.forEach(function(e) {
			if (filterState.exam[e] !== true) {
				fitting = false;
			}
		});

		// Course Type
		let courseTypes = course.Type.split(";");
		courseTypes.forEach(function(c) {
			if (filterState.courseType[c] !== true) {
				fitting = false;
			}
		});

		// Catalog
		if (filterState.catalog[course.catalog] !== true) {
			fitting = false;
		}

		// Credits
		let credits = course.Credits.match(/\d+/g).sort();
		if (filterState.credits <= credits[0]) {
			fitting = false;
		}

		if (fitting === true) {
			return course;
		}
	});
	return filteredData;
}

// updateFilters("languages", "Deutsch");

export default function getFilteredData() {
	return applyFilters();
}
