import React, { Component, useState } from "react";
import { makeStyles, StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchIcon from '@material-ui/icons/Search';
import Box from "@material-ui/core/Box";
import { theme } from "./theme";
import "./App.sass";
import Filters, { Catalog } from "./Filters";
import Courses from "./Courses";
import Popup from "./Popup";
import getFilteredData, { setStudyProgram, updateFilters, sortCourses } from "./data.js";
import Filtersnew from "./Filtersnew";
import {Grid} from '@material-ui/core';
import {CButton} from "./Components/Components.js"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SelectedCourses } from "./Courses";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "240px",
    color: theme.palette.text.secondary,
  },
  paperSelected: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "240px",
    color: theme.palette.text.secondary
  },
  preselect: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "200px"
  },
  prePaper: {
    padding: "40px",
    borderRadius: "24px"
  },
  searchButton: {
    transform: "translateY(-50%)",
    padding: "12px 16px"
  },
  h1: {
    fontSize: "3rem",
    marginBottom: 0
  }
}));

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

export default function E3Selector() {
    const [courseData, setCourseData] = useState(getFilteredData());
    const updateCourseData = () => {
      setCourseData(getFilteredData());
    };

    const [studyProgramSelected, setStudyProgramSelected] = useState(false);
    const selectStudyProgram = () => {
        let selected = document.getElementById('studyprogram').value;
        if (studyPrograms.includes(selected)) {
            setStudyProgram(selected);
            setStudyProgramSelected(true);
        }
    }
    const [selectedList, setselectedList] = useState([])
    const handleSel = (title) => {
        let e = selectedList.find(c => c.Title === title)
        if(e !== undefined){
            setselectedList(selectedList.filter(c => c !== e))
        }else{
            setselectedList(selectedList.concat(courseData.find(c => c.Title === title)))
        }
    }
    const reflectFilter = (family, item) => {
      updateFilters(family, item);
      updateCourseData();
    };

    const reflectSort = (key) => {
      sortCourses(key);
      updateCourseData();
    }

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
                {/*Pre-Select*/}
                <Collapse in={!studyProgramSelected}>
                    <div className={classes.preselect}>
                        <h1 className={classes.h1}>E3 Selector</h1>
                        <Paper className={classes.prePaper} elevation={6}>
                            <Autocomplete
                              id="studyprogram"
                              options={studyPrograms}
                              style={{ width: 350 }}
                              renderInput={(params) => <TextField {...params} label="Study Program" variant="outlined" />}
                            />
                        </Paper>
                        <CButton classes={classes.searchButton} radius={24} action={selectStudyProgram}><SearchIcon/> Search</CButton>
                    </div>
                </Collapse>

                {/*Actual Application*/}
                <Slide in={studyProgramSelected} direction="up" mountOnEnter>
                    <div>
                        {/*Filters*/}
                        <Collapse in={filtersDisplayed}>
                            <Paper elevation={3} style={{paddingTop: "40px"}}>
                                <Filters action={reflectFilter}/><br></br>
                            </Paper>
                        </Collapse>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <CButton filtersDisplayed={filtersDisplayed} action={changeFiltersDisplayed}>{filtersDisplayed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} Filters</CButton>
                            <CButton action={() => reflectSort("Title")}>Sort</CButton>
                        </Box>

                        {/*Main Grid*/}
                        <Grid container spacing={3} direction="row" alignItems="stretch" justify="center" style={{marginTop: "40px"}}>
                            <Grid item xs={5}>
                                <Paper className={classes.paperSelected} elevation={2}>
                                    <SelectedCourses selectedList={selectedList} handleSel={handleSel}/>
                                </Paper></Grid>
                            <Grid item xs={3}>
                              <Paper className={classes.paper} elevation={2}>
                                <Popup />
                              </Paper>
                            </Grid>

                            {/*Course Table*/}
                            <Grid item xs={12}>
                                <Catalog action={reflectFilter} />
                            </Grid>
                            <Grid item xs={8}>
                                <Courses list={courseData} sort={reflectSort} selectedList={selectedList}handleSel={handleSel}/>
                            </Grid>
                        </Grid>
                    </div>
                </Slide>
            </ThemeProvider>
        </StylesProvider>
    </div>
    );
}
