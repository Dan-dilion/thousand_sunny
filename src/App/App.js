import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Header from '../components/Header';
import Home from '../pages/Home/';
import Footer from '../components/Footer';

// import logo from './logo.svg';
// import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      paddingTop: '20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '85%',
      paddingTop: '30px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '80%',
      paddingTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      paddingTop: '50px',
    },
    margin: '0 auto',
    padding: 0,
    background: 'white',
    // border: '1px solid red',

  }
}))

export const App = () => {
  const classes = useStyles();
  const [ headerSelection, setHeaderSelection ] = useState('unset');
  const [ isHeaderMounted, setIsHeaderMounted ] = useState(false);
  const [ isHomeMounted, setIsHomeMounted ] = useState(false);

  useEffect( () => {
    setIsHeaderMounted(true);
    setIsHomeMounted(true);
    setTimeout(() => {        // Prevent selection underline position being set
      console.log('URL: ', window.location);

      switch (window.location.pathname.split('/').reverse()[0]) {
        case 'Home': setHeaderSelection(0); break;
        case 'thousand_sunny': setHeaderSelection(0); break;
        case '': setHeaderSelection(0); break;
        case 'Destinations': setHeaderSelection(1); break;
        case 'About': setHeaderSelection(2); break;
        case 'Partner': setHeaderSelection(3); break;
        default: break;
      }
      // setHeaderSelection(0)     // wonky during transitioning
    }, 1000);
  }, []);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.main}>
        <Header
          isHeaderMounted={isHeaderMounted}
          headerSelection={headerSelection}
          setHeaderPosition={setHeaderSelection}
        />

        <Route
          exact path={['/Home', '/']}
        >
          <Home isHomeMounted={isHomeMounted} setHeaderPosition={setHeaderSelection} />
        </Route>

        <Route
          path={'/Destinations'}
        >
          <h1>No Content</h1>
      </Route>

        <Route
          path={'/About'}
        >
          <h1>No Content</h1>
      </Route>

        <Route
          path={'/Partner'}
        >
          <h1>No Content</h1>
      </Route>

      </Container>

      <Footer />
    </Container>
  );
}
