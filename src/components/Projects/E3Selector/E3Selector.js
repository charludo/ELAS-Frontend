import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Filters from "./Filters";
import Slider from '@material-ui/core/Slider';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import { theme } from "./theme"
import "./App.sass"
import getFilteredData from "./data.js"

class E3Selector extends Component {
    render() {
        console.log(getFilteredData());
        return (
            <div>
                <StylesProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <h1>E3 Selector</h1>
                        <Button variant="contained" color="primary">Primary</Button>
                        <br/><br/><Button variant="contained" color="secondary">Secondary</Button>
                        <br/><br/><Checkbox color="primary" value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        <br/><br/><Checkbox color="secondary" value="checkedB"  inputProps={{'Essen': 'Checkbox B'}}/>
                        <br/><br/><Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox C' }}/>
                        <br/><br/><Filters />
                        <br/><br/><Fab variant="extended" color="primary">Search</Fab>
                        <br/><br/><TextField
                          required
                          id="outlined-required"
                          label="Required"
                          variant="outlined"
                        />
                        <Slider
                          defaultValue={3}
                          width="20%"
                        />
                    </ThemeProvider>
                </StylesProvider>
            </div>
        )
    }
}

export default E3Selector;
