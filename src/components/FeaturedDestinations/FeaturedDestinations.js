import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Animate from '../Animate/';

import { default as Raja_ampat } from './assets/Raja_ampat.jpg';
import { default as Fanjingshan } from './assets/Fanjingshan.jpg';
import { default as Vevey } from './assets/Vevey.jpg';
import { default as Skadar } from './assets/Skadar.jpg';
import { default as Cross } from '../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../global_assets/circle_medium.svg';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  toplineWrapper: {
    zIndex: 1
  },
  topLine: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3em',
  },
  title: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
    fontWeight: '600',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
      fontSize: '1rem',
      maxWidth: '12em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
      maxWidth: '12em',
    },
  },
  ViewAll: {
    position: 'relative',
    zIndex: 1,
    color: theme.palette.primary.main,
    minWidth: '5em',
    textDecoration: 'none'
  },
  imagesContainer: {
    // border: '2px solid red',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      flexWrap: 'wrap'
    }
  },
  topImages: {
    // border: '2px solid green',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 .5em 0 0',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    }
  },
  bottomImages: {
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 0 0 .5em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    }
  },
  image: {
    padding: '0 1em',
    width: '100%'
  },
  decalContainer: {
    // border: '2px solid purple',
    zIndex: 0,
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  cross: {
    position: 'absolute',
    top: '50%',
    left: '-10%',
    height: '1.5vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '50%',
      left: '-5%',
    }
  },
  circle1: {
    position: 'absolute',
    top: '-7%',
    left: '70%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '6%',
      left: '70%',
    }
  },
  circle2: {
    position: 'absolute',
    top: '105%',
    left: '40%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '100%',
      left: '40%',
    }
  }
}))

const FeaturedDestinations = ({isFeaturedDestinationsMounted, setHeaderPosition}) => {
  const classes = useStyles();

  return(
    <Container className={classes.root}>
      <div className={classes.toplineWrapper}>
        <Animate isMounted={isFeaturedDestinationsMounted} type="top" delay={0}>
          <Container className={classes.topLine}>
            <Typography className={classes.title}>
              Featured Destinations
            </Typography>
            <Typography className={classes.ViewAll} component={Link} to="/Destinations" onClick={() => setHeaderPosition(1)}>
              ViewAll >
            </Typography>
          </Container>
        </Animate>
      </div>

      <Container className={classes.imagesContainer}>
        <Container className={classes.topImages}>
          <Animate isMounted={isFeaturedDestinationsMounted} type="left" delay={200}>
            <img className={classes.image} src={Raja_ampat} alt="Raja_ampat" />
          </Animate>
          <Animate isMounted={isFeaturedDestinationsMounted} type="top" delay={400}>
            <img className={classes.image} src={Fanjingshan} alt="Fanjingshan" />
          </Animate>
        </Container>

        <Container className={classes.bottomImages}>
          <Animate isMounted={isFeaturedDestinationsMounted} type="bottom" delay={800}>
            <img className={classes.image} src={Vevey} alt="Vevey" />
          </Animate>
          <Animate isMounted={isFeaturedDestinationsMounted} type="right" delay={1000}>
            <img className={classes.image} src={Skadar} alt="Skadar" />
          </Animate>
        </Container>
      </Container>

      <Container className={classes.decalContainer}>
        <Animate isMounted={isFeaturedDestinationsMounted} type="fade" delay={1400}>
          <img className={classes.cross} src={Cross} alt="Cross" />
          <img className={classes.circle1} src={Circle} alt="Circle1" />
          <img className={classes.circle2} src={Circle} alt="Circle2" />
        </Animate>
      </Container>
    </Container>
  )
}

export default FeaturedDestinations;
