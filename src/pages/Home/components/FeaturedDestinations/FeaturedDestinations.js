import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import Animate from '../../../../globalComponents/Animate/';
import DestinationCard from './components/DestinationCard/';

import { default as Raja_ampat } from './assets/Raja_ampat.jpg';
import { default as Fanjingshan } from './assets/Fanjingshan.jpg';
import { default as Vevey } from './assets/Vevey.jpg';
import { default as Skadar } from './assets/Skadar.jpg';
import { default as Cross } from '../../../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../../../global_assets/circle_medium.svg';

import FeaturedDestinationsLogic from './FeaturedDestinationsLogic';

const FeaturedDestinations = (props) => {

  // Destructure logic
  const {
    isVisible,
    setHeaderUnderline,
    classes
  } = FeaturedDestinationsLogic(props);

  return(
    <Container className={classes.root}>
      <div className={classes.toplineWrapper}>
        <Animate isMounted={isVisible} type="top" delay={600}>
          <Container className={classes.topLine}>
            <Typography className={classes.title}>
              Featured Destinations
            </Typography>
            <Typography
              className={classes.ViewAll}
              component={Link}
              to="/Destinations"
              onClick={() => setHeaderUnderline('Destinations', true)}
            >
              View all >
            </Typography>
          </Container>
        </Animate>
      </div>

      <Container className={classes.imagesContainer}>
        <Container className={classes.topImages}>
          <Animate isMounted={isVisible} type="left" delay={0}>

            <DestinationCard
              Image={Raja_ampat}
              alt='Raja Ampat - Indonesia'
              title='Raja Ampat'
              text='Indonesia'
            />

          </Animate>
          <Animate isMounted={isVisible} type="top" delay={200}>
            <DestinationCard
              Image={Fanjingshan}
              alt="Fanjingshan - China"
              title="Fanjingshan"
              text="China"
            />
          </Animate>
        </Container>

        <Container className={classes.bottomImages}>
          <Animate isMounted={isVisible} type="bottom" delay={200}>
            <DestinationCard Image={Vevey} alt="Vevey - Switzerland" title="Vevey" text="Switzerland" />
          </Animate>
          <Animate isMounted={isVisible} type="right" delay={400}>
            <DestinationCard Image={Skadar} alt="Skadar - Montenegro" title="Skadar" text="Montenegro" />
          </Animate>
        </Container>
      </Container>

      <Container className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1000}>
          <img className={classes.cross} src={Cross} alt="Cross" />
          <img className={classes.circle1} src={Circle} alt="Circle1" />
          <img className={classes.circle2} src={Circle} alt="Circle2" />
        </Animate>
      </Container>
    </Container>
  )
}

export default FeaturedDestinations;
