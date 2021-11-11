import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import TrackVisibility from 'react-on-screen';

import ScrollToTop from '../globalComponents/ScrollToTop';
import Header from '../globalComponents/Header';
import Home from '../pages/Home';
import Footer from '../globalComponents/Footer';
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
  } = AppLogic();

  useEffect( () => {
    const routeName = window.location.pathname.endsWith('/')
      ? window.location.pathname.split('/').reverse()[1]      // Don't select '/' if path
      : window.location.pathname.split('/').reverse()[0];     // has a '/' at the end

    setHeaderUnderline(routeName, true);
  }, []); // I'm leaving the empty dependancy array because this only needs to run once

  return (
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.main}>
        <TrackVisibility partialVisibility>
          {({isVisible}) => isVisible && <Header
            isVisible={isVisible}
            headerSelection={headerSelection}
            setHeaderUnderline={setHeaderUnderline}
          />}
        </TrackVisibility>

        <Route exact path={['/Home', '/']}>
          <Home setHeaderUnderline={setHeaderUnderline} />
        </Route>

        <Route path={'/About'}>
          <ScrollToTop />
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
