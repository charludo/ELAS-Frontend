import React from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import Collapse from '@material-ui/core/Collapse';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CButton from "./components/partials/CButton";

import Filters from "./components/Filters";

import classes from "./res/muiStyles";


export default function ProgramSelection(props) {
	const studyPrograms = [
	    "Angewandte Informatik",
	    "Bauingenieurwesen",
	    "Elektrotechnik und Informationstechnik",
	    "ISE",
	    "Komedia",
	    "Maschinenbau",
	    "MedizinTechnik",
	    "Nano Engineering",
	    "Wirtschaftsingenieurwesen"
	];

	const [studyProgramSelected, setStudyProgramSelected] = useState(() => {
		let selected = false;
		Object.keys(filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor).forEach((excluded, e) => {
			if (!excluded.includes("ALLE") && filterState.Ausgeschlossen_Ingenieurwissenschaften_Bachelor[excluded] === false) {
				selected = true;
			}
		});
		return selected;

	});
	const selectStudyProgram = () => {
		let selected = document.getElementById('studyprogram').value;
		if (studyPrograms.includes(selected)) {
			setStudyProgram(selected);
			setStudyProgramSelected(true);
			localStorage.setItem("e3filters", JSON.stringify(filterState));
		}
	}

	return (
		<Collapse in={!studyProgramSelected}>
			<div className={classes.preselect}>
				<h1 className={classes.h1}>E3 Selector</h1>
				<Paper className={classes.prePaper} elevation={6}>
					<Grid container direction="column" justify="flex-start" alignItems="center">
						<Autocomplete
							id="studyprogram"
							options={studyPrograms}
							style={{ width: 350 }}
							renderInput={(params) => <TextField {...params} label="Study Program" variant="outlined" />}
							/>
						<div className={moreInitialFilters ? classes.initialFilters : classes.initialFiltersHidden}>
							<Filters action={reflectFilter} filterState={filterState}/>
						</div>
					</Grid>
					<p className={classes.moreFiltersButton} moreInitialFilters={moreInitialFilters} onClick={changeInitialFiltersDisplayed}>{moreInitialFilters ? "- show less" : "+ more options"}</p>
				</Paper>
				<CButton classes={classes.searchButton} radius={24} action={selectStudyProgram}><SearchIcon/> Search</CButton>
			</div>
		</Collapse>
	);
}
