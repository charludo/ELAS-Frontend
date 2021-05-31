import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import "./App.sass"

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#F2994A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0057a7',
    },
    background: {
      paper: '#FAFAFA',
      default: '#FAFAFA',
    },
    text: {
      primary: '#333333',
      secondary: 'rgba(0,0,0,0.6)',
    },
    success: {
      main: '#27a360',
    },
    info: {
      main: '#0057A7',
    },
    warning: {
      main: '#f2994a',
      contrastText: '#ffffff',
    },
  },
});

class E3Selector extends Component {
    render() {
        return (
            <div>
                <StylesProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Button variant="contained" color="primary">Primary</Button>
                        <Button variant="contained" color="secondary">Secondary</Button>
                    </ThemeProvider>
                </StylesProvider>
            </div>
        )
    }
}

export default E3Selector;
