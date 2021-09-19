import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Container, Paper, Button, Typography, Zoom } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Transition } from 'react-transition-group';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { transitions, commonStyle } from '../styling/transitions.js';

// import logo from './logo.svg';
// import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 0,
    padding: 0,
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      marginX: '2.5%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '90%'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '80%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%'
    },
    margin: '50px auto',
    padding: '0',
    background: 'white',
    // border: '1px solid red',

  }
}))

export const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [ isHeaderMounted, setIsHeaderMounted ] = useState(false);

  console.log('The theme: ', theme);

  useEffect( () => {
    setIsHeaderMounted(true)
  }, []);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.main}>
        <Header isHeaderMounted={isHeaderMounted} />
      
        <Route
          exact path={['/', '/Home']}
        >
          <h1>hello</h1>
        </Route>

      </Container>
      <Footer />
    </Container>
  );
}
