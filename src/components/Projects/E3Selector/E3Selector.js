import React, {Component} from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "./theme"
import "./App.sass"
import Courses from "./Courses"
// comment in Nassim branch 
//another one
class E3Selector extends Component {
    
    render() {
        const l=[
            {
            title : 'Math',
            credits: 6,
            category: 'Seminar',
            SWS: "3h",
            times_manual:'Tuesday 15-17',
            language : 'English',
            location :'Muelheim',
            Exam:'Essay'
        }

        ];
        return (
            <div>
            <StylesProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Courses list={l}/>
                </ThemeProvider>
            </StylesProvider>
        </div>
        )
    }
}

export default E3Selector;
