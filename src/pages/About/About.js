import { Container } from '@material-ui/core';
import TrackVisibility from 'react-on-screen';

import Animate from '../../globalComponents/Animate';

import AboutLogic from './AboutLogic.js';

const Section1 = ({isVisible}) => {

  // destructure logic
  const {
    classes
  } = AboutLogic();

  return(
    <Container className={classes.section1}>
      <Animate isMounted={isVisible} type="top" delay={800}>
        <h1>About page to go here</h1>
      </Animate>
    </Container>
  )
}

const About = () => {

  // destructure logic
  const {
    classes
  } = AboutLogic();

  return (
    <Container>
      <TrackVisibility >
        {({ isVisible }) => isVisible && <Section1 isVisible={isVisible}/> }
      </TrackVisibility>
    </Container>
  )
}

export default About;
