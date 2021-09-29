import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../components/Header';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import About from '../pages/About';
import Destinations from '../pages/Destinations';
import Partner from '../pages/Partner';

import AppLogic from './AppLogic';

export const App = () => {

  // Destructure logic
  const {
    classes,
    headerSelection,
    setHeaderSelection,
    isHeaderMounted,
    setIsHeaderMounted,
    isHomeMounted,
    setIsHomeMounted
  } = AppLogic();

  useEffect( () => {
    setIsHeaderMounted(true);
    setIsHomeMounted(true);
    setTimeout(() => {        // Prevent selection underline position being set during transitioning
      switch (window.location.pathname.split('/').reverse()[0]) {
        case 'Home': setHeaderSelection(0); break;
        case 'thousand_sunny': setHeaderSelection(0); break;
        case '': setHeaderSelection(0); break;
        case 'Destinations': setHeaderSelection(1); break;
        case 'About': setHeaderSelection(2); break;
        case 'Partner': setHeaderSelection(3); break;
        default: break;
      }
    }, 2000);     // This delay must be >= the transition time of the header bar
  }, [setIsHeaderMounted, setIsHomeMounted, setHeaderSelection] );

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
          <Destinations />
        </Route>

        <Route
          path={'/About'}
        >
          <About />
      </Route>

        <Route
          path={'/Partner'}
        >
          <Partner />
      </Route>

      </Container>

      <Footer />
    </Container>
  );
}
