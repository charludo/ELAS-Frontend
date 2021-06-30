import React, { Component, useState, useEffect } from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchIcon from '@material-ui/icons/Search';
import Box from "@material-ui/core/Box";
import { theme } from "./theme";
import "./App.sass";
import Filters, { Catalog } from "./Filters";
import Courses from "./Courses";
import Overview from "./Components/Overview.jsx";
import getFilteredData, { setStudyProgram, updateFilters, sortCourses, filterState } from "./data.js";
import Filtersnew from "./Filtersnew";
import {Grid} from '@material-ui/core';
import {CButton} from "./Components/Components.js"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SelectedCourses } from "./Courses";
import { useParams } from 'react-router-dom'

export default function E3Selector() {
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

    const [selectedList, setselectedList] = useState(JSON.parse(localStorage.getItem("e3selected")) || [])
    const handleSel = (title) => {
        let e = selectedList.find(c => c.Title === title)
        if(e !== undefined){
            setselectedList(selectedList.filter(c => c !== e))
        }else{
            setselectedList(selectedList.concat(courseData.find(c => c.Title === title)))
        }
    }
    useEffect(() => {
        populateOverview();
        localStorage.setItem("e3selected", JSON.stringify(selectedList));
    }, [selectedList]);

    const [courseData, setCourseData] = useState(getFilteredData());
    const updateCourseData = () => {
      setCourseData(getFilteredData());
    };

    const [selectedCredits, setSelectedCredits] = useState();
    const [workload, setWorkload] = useState();
    const [conflicts, setConflicts] = useState();
    const [booked, setBooked] = useState();
    const [overBooked, setOverBooked] = useState();
    const [creditsStatus, setCreditsStatus] = useState();
    const populateOverview = () => {
        var minCount = 0;
        var maxCount = 0;
        var sws = 0;
        var booked = {};

        selectedList.forEach((course, c) => {
            if (course.Credits.includes("-")) {
                var credits = course.Credits.split("-");
                minCount += parseInt(credits[0]);
                maxCount += parseInt(credits[1]);
            } else {
                minCount += parseInt(course.Credits);
                maxCount += parseInt(course.Credits);
            }
            sws += parseInt(course.SWS) || 0;

            let times = course.Times_manual.split(";");
            times.forEach((time, t) => {
                booked[time] = booked[time]+1 || 1;
            });

        });

        let booked_slot = Object.keys(booked).map((k, i) => k);
        let overlappings = Object.keys(booked).map((k, i) => (booked[k] > 1) ? k : null).filter(b => b);

        let wanted = filterState.credits;
        if (minCount == wanted || maxCount == wanted) {
            var status = "on-ok";
        } else if (minCount > wanted && maxCount > wanted) {
            var status = "on-warn";
        } else {
            var status = "on-info";
        }

        setSelectedCredits((minCount === maxCount) ? minCount : minCount + "-" + maxCount);
        setConflicts(overlappings.length ? true : false);
        setBooked(booked_slot);
        setOverBooked(overlappings);
        setWorkload(sws);
        setCreditsStatus(status);
    }


    const reflectFilter = (family, item) => {
      updateFilters(family, item);
      updateCourseData();
      localStorage.setItem("e3filters", JSON.stringify(filterState));
    };

    const reflectSort = (key) => {
      sortCourses(key);
      updateCourseData();
      localStorage.setItem("e3filters", JSON.stringify(filterState));
    }

    const [moreInitialFilters, openInitialFilters] = React.useState(false);
    const changeInitialFiltersDisplayed = () => {
      openInitialFilters((prev) => !prev);
    };

    const [filtersDisplayed, setFiltersDisplayed] = React.useState(false);
    const changeFiltersDisplayed = () => {
      setFiltersDisplayed((prev) => !prev);
    };

    const classes = useStyles();

    return (
        <div style={{marginTop: "-40px"}}>
        <StylesProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                {/*Actual Application*/}
                <Slide in={studyProgramSelected} direction="up" mountOnEnter>
                    <div>
                        {/*Filters*/}
                        <Collapse in={filtersDisplayed}>
                            <Paper elevation={3} style={{paddingTop: "40px"}}>
                                <Filters action={reflectFilter} filterState={filterState}/><br></br>
                                <p className={classes.reset} onClick={() => {localStorage.removeItem("e3filters"); localStorage.removeItem("e3selected"); window.location.reload()}}>reset filters and selections</p>
                            </Paper>
                        </Collapse>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <CButton filtersDisplayed={filtersDisplayed} action={changeFiltersDisplayed}>{filtersDisplayed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} Filters</CButton>
                        </Box>

                        {/*Main Grid*/}
                        <Grid container spacing={3} direction="row" alignItems="stretch" justify="center" style={{marginTop: "40px"}}>
                            <Grid item xs={5}>
                                <SelectedCourses selectedList={selectedList} handleSel={handleSel} booked={booked} overBooked={overBooked}/>
                            </Grid>
                            <Grid item xs={3}>
                              <Paper className={classes.paper} elevation={2}>
                                <Overview selectedList={selectedList} selectedCredits={selectedCredits} conflicts={conflicts} workload={workload} creditsStatus={creditsStatus}/>
                              </Paper>
                            </Grid>

                            {/*Course Table*/}
                            <Grid item xs={12}>
                                <Catalog action={reflectFilter} initial={filterState.search}/>
                            </Grid>
                            <Grid item xs={8}>
                                <Courses list={courseData} sort={reflectSort} selectedList={selectedList} booked={booked} handleSel={handleSel}/>
                            </Grid>
                        </Grid>
                    </div>
                </Slide>
            </ThemeProvider>
        </StylesProvider>
    </div>
    );
}
