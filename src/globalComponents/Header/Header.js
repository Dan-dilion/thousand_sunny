import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Tabs, Tab, Button } from '@material-ui/core';

import { ReactComponent as Logo } from '../../global_assets/logo.svg';
import Animate from '../Animate/';

import HeaderLogic from './HeaderLogic';

const Header = (props) => {

  // Destructure logic
  const {
    classes,
    isVisible,
    headerSelection,
    handleChange
  } = HeaderLogic(props);


  return(
    <Container className={classes.root}>
      <Animate isMounted={isVisible} type="top" delay={700}>
        <Logo className={classes.logo}/>
      </Animate>
      <Animate isMounted={isVisible} type="fade" delay={900}>
        <Container className={classes.menuBar}>
          <Container className={classes.tabContainer}>
            <Tabs
              value={headerSelection}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              <Tab className={classes.tab} component={ Link } to="/Home" label='Home' />
              <Tab className={classes.tab} component={ Link } to="/About" label='About' />
              <Tab className={classes.tab} component={ Link } to="/Stories" label='Stories' />
              <Tab className={classes.tab} component={ Link } to="/Destinations" label='Destinations' />
            </Tabs>
          </Container>
          <Container className={classes.buttonContainer}>
            <Button className={classes.buttons} variant="outlined" color="primary">Login</Button>
            <Button className={classes.buttons} variant="contained" color="primary" disableElevation={true}>Register</Button>
          </Container>
        </Container>
      </Animate>
    </Container>
  )

}

export default Header;
