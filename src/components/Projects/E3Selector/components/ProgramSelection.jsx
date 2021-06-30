import React from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import SearchIcon from '@material-ui/icons/Search';

import Collapse from '@material-ui/core/Collapse';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CButton from "./partials/CButton";

import Filters from "./Filters";

import { classes } from "../res/muiStyles";
import DataHandler from "../DataHandler";


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

	const selectStudyProgram = () => {
		let selected = document.getElementById('studyprogram').value;
		if (studyPrograms.includes(selected)) {
			DataHandler.setStudyProgram(selected);
			DataHandler.saveFilterState();
			window.location.reload()
		}
	}

	const [moreInitialFilters, openInitialFilters] = React.useState(false);
    const changeInitialFiltersDisplayed = () => {
      openInitialFilters((prev) => !prev);
    };

	return (
		<Collapse in={true}>
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
							<Filters action={DataHandler.setFilter} filterState={DataHandler.getFilterState()}/>
						</div>
					</Grid>
					<p className={classes.moreFiltersButton} moreInitialFilters={moreInitialFilters} onClick={changeInitialFiltersDisplayed}>{moreInitialFilters ? "- show less" : "+ more options"}</p>
				</Paper>
				<CButton classes={classes.searchButton} radius={24} action={selectStudyProgram}><SearchIcon/> Search</CButton>
			</div>
		</Collapse>
	);
}
