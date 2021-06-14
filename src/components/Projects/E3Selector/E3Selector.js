
import React, { Component, useState } from "react";
import Filtersnew from "./Filtersnew";
import Credits from "./Credits";

export default function E3Selector() {
  
  return (
    <div>
      <Filtersnew/>
      <Credits/>
         
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
