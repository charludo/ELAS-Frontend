import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
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
};
