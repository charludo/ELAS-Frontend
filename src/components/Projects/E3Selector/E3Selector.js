import React, {Component} from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "./theme"
import "./App.sass"
import Filters from "./Filters";
import Courses from "./Courses"
import getFilteredData, { updateFilters } from "./data.js"

class E3Selector extends Component {

    render() {
      console.log(getFilteredData());
        return (
            <div>
            <StylesProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Filters action={updateFilters}/><br></br>
                    <Courses list={getFilteredData()}/>
                </ThemeProvider>
            </StylesProvider>
        </div>
        )
    }
}

export default E3Selector;
