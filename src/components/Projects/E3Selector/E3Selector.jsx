import React, { useState } from "react";
import { Grid, Paper, Box, Slide, Collapse } from '@material-ui/core';
import CButton from "./components/partials/CButton"

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { classes, theme } from "./res/muiStyles";
import "./res/extraStyles.sass";

import DataHandler from "./DataHandler";

import ProgramSelection from './components/ProgramSelection';
import Filters, { Catalog } from "./components/Filters";
import Courses, { SelectedCourses } from "./components/Courses";
import Overview from "./components/Overview";


export default function E3Selector() {
    const [selectedCourses, setSelectedCourses] = useState(DataHandler.getSelectedCourses());
    const [unselectedCourses, setUnselectedCourses] = useState(DataHandler.getUnselectedCourses());
    const [overviewData, setOverviewData] = useState({
        selectedCredits: DataHandler.getCredits(),
        workload: DataHandler.getWorkload(),
        conflicts: DataHandler.conflictExists(),
        booked: DataHandler.getBookedTimeSlots(),
        overBooked: DataHandler.getOverBookedTimeSlots(),
        creditsStatus: DataHandler.getCreditsStatus()
    });

    const setFilter = (family, item) => {
      DataHandler.setFilter(family, item);
      setUnselectedCourses(DataHandler.getUnselectedCourses());
    };

    const setSorting = (key) => {
      DataHandler.setSorting(key);
      setUnselectedCourses(DataHandler.getUnselectedCourses());
    }

    const handleSelection = (course) => {
        DataHandler.handleSelection(course);
        setSelectedCourses(DataHandler.getSelectedCourses());
        setUnselectedCourses(DataHandler.getUnselectedCourses());
        setOverviewData({
            selectedCredits: DataHandler.getCredits(),
            workload: DataHandler.getWorkload(),
            conflicts: DataHandler.conflictExists(),
            booked: DataHandler.getBookedTimeSlots(),
            overBooked: DataHandler.getOverBookedTimeSlots(),
            creditsStatus: DataHandler.getCreditsStatus()
        });
    }

    const [filtersDisplayed, setFiltersDisplayed] = useState(false);

    if (!DataHandler.isStudyProgramSet()) {
        return (
            <div style={{marginTop: "-40px"}}>
                <StylesProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ProgramSelection/>
                    </ThemeProvider>
                </StylesProvider>
            </div>
        );
    } else {
        return (
            <div style={{marginTop: "-40px"}}>
                <StylesProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Slide in={true} direction="up" mountOnEnter>
                            <div>
                                {/*Filters*/}
                                <Collapse in={filtersDisplayed}>
                                    <Paper elevation={3} style={{paddingTop: "40px"}}>
                                        <Filters action={setFilter} filterState={DataHandler.getFilterState()}/><br></br>
                                        <p className={classes.reset} onClick={() => {localStorage.removeItem("e3filters"); localStorage.removeItem("e3selected"); window.location.reload()}}>reset filters and selections</p>
                                    </Paper>
                                </Collapse>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <CButton filtersDisplayed={filtersDisplayed} action={() => setFiltersDisplayed(!filtersDisplayed)}>{filtersDisplayed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} Filters</CButton>
                                </Box>

                                {/*Main Grid*/}
                                <Grid container spacing={3} direction="row" alignItems="stretch" justify="center" style={{marginTop: "40px"}}>
                                    {/* Selected Courses */}
                                    <Grid item xs={5}>
                                        <SelectedCourses selectedList={selectedCourses} handleSel={handleSelection} booked={overviewData.booked} overBooked={overviewData.overBooked}/>
                                    </Grid>

                                    {/* Overview */}
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper} elevation={2}>
                                            <Overview selectedCredits={overviewData.selectedCredits} conflicts={overviewData.conflicts} workload={overviewData.workload} creditsStatus={overviewData.creditsStatus}/>
                                        </Paper>
                                    </Grid>

                                    {/* Catalog Filters */}
                                    <Grid item xs={12}>
                                        <Catalog action={setFilter} initial={DataHandler.getFilterState().search}/>
                                    </Grid>

                                    {/* Unselected Courses */}
                                    <Grid item xs={8}>
                                        <Courses list={unselectedCourses} sort={setSorting} selectedList={selectedCourses} booked={overviewData.booked} handleSel={handleSelection}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Slide>
                    </ThemeProvider>
                </StylesProvider>
            </div>
        );
    }
}
