import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import Animate from '../Animate/';

import { default as Raja_ampat } from './assets/Raja_ampat.jpg';
import { default as Fanjingshan } from './assets/Fanjingshan.jpg';
import { default as Vevey } from './assets/Vevey.jpg';
import { default as Skadar } from './assets/Skadar.jpg';
import { default as Cross } from '../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../global_assets/circle_medium.svg';

import FeaturedDestinationsLogic from './FeaturedDestinationsLogic';

const FeaturedDestinations = (props) => {

  // Destructure logic
  const {
    isVisible,
    setHeaderPosition,
    classes
  } = FeaturedDestinationsLogic(props);

  return(
    <Container className={classes.root}>
      <div className={classes.toplineWrapper}>
        <Animate isMounted={isVisible} type="top" delay={800}>
          <Container className={classes.topLine}>
            <Typography className={classes.title}>
              Featured Destinations
            </Typography>
            <Typography className={classes.ViewAll} component={Link} to="/Destinations" onClick={() => setHeaderPosition(1)}>
              View all >
            </Typography>
          </Container>
        </Animate>
      </div>

      <Container className={classes.imagesContainer}>
        <Container className={classes.topImages}>
          <Animate isMounted={isVisible} type="left" delay={0}>
            <img className={classes.image} src={Raja_ampat} alt="Raja_ampat" />
          </Animate>
          <Animate isMounted={isVisible} type="top" delay={400}>
            <img className={classes.image} src={Fanjingshan} alt="Fanjingshan" />
          </Animate>
        </Container>

        <Container className={classes.bottomImages}>
          <Animate isMounted={isVisible} type="bottom" delay={400}>
            <img className={classes.image} src={Vevey} alt="Vevey" />
          </Animate>
          <Animate isMounted={isVisible} type="right" delay={600}>
            <img className={classes.image} src={Skadar} alt="Skadar" />
          </Animate>
        </Container>
      </Container>

      <Container className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1400}>
          <img className={classes.cross} src={Cross} alt="Cross" />
          <img className={classes.circle1} src={Circle} alt="Circle1" />
          <img className={classes.circle2} src={Circle} alt="Circle2" />
        </Animate>
      </Container>
    </Container>
  )
}

export default FeaturedDestinations;
