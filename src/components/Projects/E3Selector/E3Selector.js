import React, {Component, useState} from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "./theme"
import "./App.sass"
import Filters from "./Filters";
import Courses from "./Courses"
import getFilteredData, {updateFilters} from "./data.js"

class E3Selector extends Component {
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

  render() {
      return (
          <div>
          <StylesProvider>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Filters action={this.reflectFilter}/><br></br>
                  <Courses list={this.state.courseData} />
              </ThemeProvider>
          </StylesProvider>
      </div>
      )
  }
}

export default E3Selector;