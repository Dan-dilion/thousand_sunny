import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import '@fontsource/roboto';
import '@fontsource/playfair-display';
import '@fontsource/mulish';
import '@fontsource/inter';
import theme from './styling/muiTheme.js';
import { App } from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
