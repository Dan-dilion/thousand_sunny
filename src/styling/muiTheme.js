import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      // superSmall: 375,
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
  palette: {
    primary: {
      light: '#f7aa31',
      main: '#f58f1d',
      dark: '#f06e09'
    },
    secondary: {
      light: '#50e3ae',
      main: '#24be84',
      dark: '#175144'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'white',
        },
      },
    },
    MuiButton: {
      outlinedPrimary: {
        border: '1px solid',
        borderRadius: '6px',
        '&:hover': {
          border: '1px solid'
        }
      },
      containedPrimary: {
        borderRadius: '6px',
      }
    }
  },
})

export default theme;
