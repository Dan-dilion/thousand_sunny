import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Animate from '../Animate/';

import { default as ImageSlider } from './assets/photo.jpg';
import { default as Star } from '../../global_assets/star.svg'
import { default as Circle } from '../../global_assets/circle_small.svg';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginTop: '10%',
    padding: 0,
    justifyContent: 'space-between',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      marginTop: '5%',
      padding: '0 5%'
    },
  },
  rightPanel: {
    // border: '2px solid green',
    display: 'flex',
    justifyContent: 'center',
    // overflow: 'hidden',
    height: '100%',
    width: '100%',
    padding: 0,
    paddingRight: '1em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: '0',
    }
  },
  imageSlider: {
    height: '30vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
    }
  },
  leftPanelWrapper: {
    // border: '2px solid cyan',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
  },
  leftPanel: {
    // border: '2px solid blue',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
    fontWeight: '600',
    width: '80%',
    lineHeight: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
      fontSize: '1rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  stars: {
    padding: '0',
    marginBottom: '1em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      marginBottom: '.4em'
    }
  },
  star: {
    height: '1.5vw',
    marginRight: '.4em'
  },
  text: {
    width: '80%',
    marginBottom: '2em',
    color: theme.palette.grey['600'],
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
      marginBottom: '1em',
      width: '90%',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.7rem'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.2rem"
    },
  },
  authorName: {
    width: '80%',
    color: theme.palette.grey['800'],
    fontWeight: '800',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem'
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.7rem'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.2rem"
    },
  },
  authorOrganisation: {
    color: theme.palette.grey['400'],
  },
  decalContainer: {
    // border: '2px solid purple',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    height: '1vw',
    top: '55%',
    left: '-8%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      left: '-4%',
      height: '2vw',
    }
  }
}))

const Testimonials = ({isTestimonialsMounted}) => {

  const classes = useStyles();

  return(
    <Container className={classes.root}>

      <div className={classes.leftPanelWrapper}>
        <Animate isMounted={isTestimonialsMounted} type="left" delay={600}>
          <Typography className={classes.title}>
            Testimonials
          </Typography>

          <div className={classes.leftPanel}>

            <Container className={classes.stars}>
              <img className={classes.star} src={Star} alt="Star" />
              <img className={classes.star} src={Star} alt="Star" />
              <img className={classes.star} src={Star} alt="Star" />
              <img className={classes.star} src={Star} alt="Star" />
              <img className={classes.star} src={Star} alt="Star" />
            </Container>

            <Typography className={classes.text}>
            “Quisque in lacus a urna fermentum
            euismod. Integer mi nibh, dapibus ac
            scelerisque eu, facilisis quis purus. Morbi
            blandit sit amet turpis nec”
            </Typography>

            <Typography className={classes.authorName}>
              Edward Newgate
            </Typography>
            <Typography className={`${classes.authorName} ${classes.authorOrganisation}`}>
              Founder Circle
            </Typography>
          </div>
        </Animate>
      </div>

      <div className={classes.rightPanel}>
        <Animate isMounted={isTestimonialsMounted} type="right" delay={600}>
          <img className={classes.imageSlider} src={ImageSlider} alt="ImageSlider" />
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={isTestimonialsMounted} type="fade" delay={1000}>
          <img className={classes.circle} src={Circle} alt="Circle"/>
        </Animate>
      </div>

    </Container>
  )
}

export default Testimonials;
