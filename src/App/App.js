import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../components/Header';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import About from '../pages/About';
import Destinations from '../pages/Destinations';
import Stories from '../pages/Stories';

import AppLogic from './AppLogic';

export const App = () => {

  // Destructure logic
  const {
    classes,
    headerSelection,
    setHeaderUnderline,
    isHeaderMounted,
    setIsHeaderMounted,
  } = AppLogic();

  useEffect( () => {
    setIsHeaderMounted(true);
    setTimeout(() => {        // Prevent wonkey underline position being set during transitioning
      const routeName = window.location.pathname.endsWith('/')
        ? window.location.pathname.split('/').reverse()[1]      // Select next item if path
        : window.location.pathname.split('/').reverse()[0];     // has a '/' at the end

      setHeaderUnderline(routeName);
    }, 2000);     // This delay must be >= the transition time of the header bar
  }, [setIsHeaderMounted, setHeaderUnderline] );

  return (
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.main}>
        <Header
          isHeaderMounted={isHeaderMounted}
          headerSelection={headerSelection}
          setHeaderUnderline={setHeaderUnderline}
        />

        <Route exact path={['/Home', '/']}>
          <Home setHeaderUnderline={setHeaderUnderline} />
        </Route>

        <Route path={'/About'}>
          <About />
        </Route>

        <Route path={'/Stories'}>
          <Stories />
        </Route>

        <Route path={'/Destinations'}>
          <Destinations />
        </Route>

      </Container>

      <Footer />
    </Container>
  );
}
