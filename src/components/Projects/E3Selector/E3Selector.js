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
            name : 'Math',
            credits: 6,
            category: 'Seminar',
            time:'Tuesday 15-17',
            language : 'English',
            location :'Muelheim',
            description:'Looooooooooooooooooooooooooooooooonnnnng Description, Maybe need slider to fully read it ????',
            exam:'Essay'
        },
        {
            name : 'Yoga',
            credits: 1,
            category: 'Seminar',
            time:'Monday 10-12',
            language : 'English',
            location :'Online',
            description:'Looooooooooooooooooooooooooooooooonnooooooooooooooooooooooooonnooooooooooooooooooooooooonnooooooooooooooooooooooooonnooooooooooooooooooooooooonnooooooooooooooooooooooooonnooooooooooooooooooooooooonnooooooooooooooooooooooooonnnnng Description, Maybe need slider to fully read it ????',
            exam:''
        },
            {
            name : 'Physik',
            credits: 5,
            category : 'Blockseminar',
            language : 'German',
            location :'Duisburg',
            description:'Another Looooooooooooooooooooooooooooooooonnnnng Description, Maybe need slider to fully read it ????',
            exam:'Oral'
            },
            {
            name : 'Turkish language course',
            credits: 3,
            category : 'Blockseminar',
            time:'Tuesday 10-12',
            location: "Essen",
            language : 'Turkish',
            description:'Description, Maybe need slider to fully read it ????',
            exam:'Written'
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
