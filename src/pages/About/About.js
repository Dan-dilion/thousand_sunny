import React from 'react';
import { Container } from '@material-ui/core';
import TrackVisibility from 'react-on-screen';

import Animate from '../../globalComponents/Animate';
import Section1 from './components/Section1/'
import AboutLogic from './AboutLogic.js';

const About = () => {

  // destructure logic
  const {
    classes
  } = AboutLogic();

  return (
    <Container className={classes.root}>
      <Section1 className={classes.section1} isVisible={true} />
    </Container>
  )
}

export default About;
