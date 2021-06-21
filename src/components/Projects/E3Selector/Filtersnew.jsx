import React, { Component, useState } from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";
import "./App.sass";
import Filters from "./Filters";
import Courses from "./Courses";
import getFilteredData, { updateFilters } from "./data.js";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Filtersnew() {
  const [courseData, setCourseData] = useState(getFilteredData());

  const updateCourseData = () => {
    setCourseData(getFilteredData());
  };

  const reflectFilter = (family, item) => {
    updateFilters(family, item);
    updateCourseData();
  };



  <FormControl component="fieldset">
<FormLabel component="legend">Location</FormLabel>
 <FormGroup aria-label="position" row></FormGroup>
 </FormControl>


  const handleCheckbox = (value) => {
    switch (value) {
      case "Essen":
      case "Essen (UKE)":
        reflectFilter("locales", "Essen");
        reflectFilter("locales", "Essen (UKE)");

      case "Duisburg":
      case "Duisburg (B)":
      case "Duisburg (L/M)":
        reflectFilter("locales", "Duisburg");
        reflectFilter("locales", "Duisburg (B)");
        reflectFilter("locales", "Duisburg (L/M)");
      case "Bochum":
        reflectFilter("locales", "Bochum");
        case "Dortmund":
          reflectFilter("locales", "Dortmund");


        case "Schriftliche Ausarbeitung":
          case "Klausur":
            reflectFilter("exam", "Schriftliche Ausarbeitung");
            reflectFilter("exam", "Klausur");
            case "Mündliche Prüfung":
          reflectFilter("exam", "Oral");
          case "Essay":
          reflectFilter("exam", "Essay");
          case "Präsentation":
          reflectFilter("exam", "Presentation");
          case "Dortmund":
          reflectFilter("locales", "Dortmund");


          case "Deutsch":
          reflectFilter("languages", "German");
          case "Englisch":
          reflectFilter("languages", "English");
          case "Türkisch":
          reflectFilter("languages", "Turkish");
          case "Niederländisch":
          reflectFilter("languages", "Dutch");


          case "VL/Übung":
          reflectFilter("Coursetype", "Lectures + Exercise");
          case "Seminar":
          reflectFilter("Coursetype", "Seminar");
          case "Blockseminar":
          reflectFilter("Coursetype", "Blocked Seminar");
          case "E-Learning":
          reflectFilter("Coursetype", "E-Learning");

    }
  };


  const options = [
    { value: "Essen", label: "Essen\n" },
    { value: "Duisburg", label: "Duisburg\n" },
    { value: "Bochum", label: "Bochum" },
    { value: "Dortmund", label: "Dortmund" },

    { value: "Schriftliche Ausarbeitung", label: "Written" },
    { value: "Mündliche Prüfung", label: "Oral" },
    { value: "Essay", label: "Essay" },
    { value: "Präsentation", label: "Presentation" },

    { value: "Deutsch", label: "German" },
    { value: "Englisch", label: "English" },
    { value: "Türkisch", label: "Turkish" },
    { value: "Niederländisch", label: "Dutch" },


    { value: "VL/Übung", label: "Lecture + exercise" },
    { value: "Vorlesung", label: "Lecture" },
    { value: "Seminar", label: "Seminar" },
    { value: "Blockseminar", label: "blocked Seminar" },
    { value: "E-Learning", label: "E-Learning" },


  ];
  

  return (
    <div>
      <FormControl component="fieldset">
<FormLabel component="legend">Location</FormLabel>
 <FormGroup aria-label="position" row></FormGroup>
 </FormControl>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <br></br>{options.map((option, key) => {
            return (
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    defaultChecked={true}
                    onClick={() => handleCheckbox(option.value)}
                    color="primary"
                  />
                }
                label={option.label}
                labelPlacement="end"
              />
            );
          })}
          <br></br>
          <Courses list={courseData} />
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

/*class E3Selector extends Component {
    state = {
        courseData: getFilteredData()
    }
    updateCourseData = () => {
        this.setState({
            courseData: getFilteredData()
        })
    }

    reflectFilter = (family, item) => {
        updateFilters(family, item);
        this.updateCourseData();
    }
 handleCheckbox = (value) => {
    switch (value) {
        case "Essen":
        case "Essen (UKE)":
         reflectFilter("locales", "Essen");
         reflectFilter("locales", "Essen (UKE)")
  
        case "Duisburg":
        case "Duisburg (B)":
        case "Duisburg (L/M)":
         reflectFilter("locales", "Duisburg");
         reflectFilter("locales", "Duisburg (B)");
         reflectFilter("locales", "Duisburg (L/M)");

      }
  
      
 }

 const options = [{value: "Essen", label: "Essen"}, {value: "Duisburg", label: "Duisburg"}];




    render() {
        return (
            <div>
            <StylesProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Filters action={this.reflectFilter}/><br></br>
                    <Courses list={this.state.courseData}/>
                </ThemeProvider>
            </StylesProvider>
        </div>
        )
    }
}

export default E3Selector;
*/
