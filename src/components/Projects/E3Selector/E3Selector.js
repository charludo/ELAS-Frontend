import React, { Component, useState } from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";
import "./App.sass";
import Filters, { Catalog } from "./Filters";
import Courses from "./Courses";
import getFilteredData, { updateFilters } from "./data.js";
import Popup from "./Popup";

export default function E3Selector() {
    const [courseData, setCourseData] = useState(getFilteredData());
    const updateCourseData = () => {
      setCourseData(getFilteredData());
    };

    const reflectFilter = (family, item) => {
      updateFilters(family, item);
      updateCourseData();
    };

    return (
        <div>
        <StylesProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Filters action={reflectFilter}/><br></br>
                <Catalog action={reflectFilter}/><br></br>
                <Courses list={courseData}/>
                <Popup />
            </ThemeProvider>
        </StylesProvider>
    </div>
    );
}
