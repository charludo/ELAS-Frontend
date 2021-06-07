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
<<<<<<< HEAD
                    <Filters />
                    <Courses list={l}/>
=======
                    <Filters action={updateFilters}/><br></br>
                    <Courses list={getFilteredData()}/>
>>>>>>> 44f9a1c6c9d151316152feb9e38ee5441f06fa8e
                </ThemeProvider>
            </StylesProvider>
        </div>
        )
    }
}

export default E3Selector;
