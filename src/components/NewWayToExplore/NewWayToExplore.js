import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Animate from '../Animate/';

import { default as Backdrop } from './assets/new_way_graphic.svg';
import { default as Cross } from '../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../global_assets/circle_small.svg';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginTop: '7%',
    padding: 0,
    justifyContent: 'space-between',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      marginTop: '5%',
    },
  },
  leftPanel: {
    // border: '2px solid green',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    padding: 0,
    paddingRight: '1em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: '10% 0',
    }
  },
  backdrop: {
    height: '40vw',
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
      opacity: '.3',
    }
  },
  rightPanelWrapper: {
    // border: '2px solid orange',
    alignItems: 'start',
    width: '100%',
    padding: '10% 0',
    paddingLeft: '1em',
    zIndex: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      position: 'absolute',
      paddingLeft: 0,
      height: '100%',
    }
  },
  rightPanel: {
    // border: '2px solid blue',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
    }
  },
  title: {
    fontFamily: ['"Playfair Display"'].join(','),
    fontWeight: '800',
    width: '80%',
    marginBottom: '3%',
    lineHeight: 1,
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
  text: {
    // padding: '5em',
    fontFamily: ['"Mulish"'].join(','),
    color: theme.palette.grey['600'],
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '60%',
      margin: '0 auto 1em auto',
      fontSize: '.7rem'
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
  button: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem',
      minWidth: '11em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: ".9rem",
      minWidth: '9em'
    },
  },
  decalContainer: {
    // border: '2px solid purple',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cross: {
    position: 'absolute',
    height: '1.2vw',
    top: '10%',
    left: '50%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      height: '2.2vw',
      top: '10%',
      left: '46%',
    }
  },
  circle: {
    position: 'absolute',
    height: '1vw',
    top: '70%',
    left: '80%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '2vw',
      opacity: .7,
    }
  }
}))

const NewWayToExplore = ({isVisible}) => {
  const classes = useStyles();

  return(
    <Container className={classes.root}>
      <div className={classes.leftPanel}>
        <Animate isMounted={isVisible} type="left" delay={600}>
          <img className={classes.backdrop} src={Backdrop} alt="Backdrop" />
        </Animate>
      </div>

      <div className={classes.rightPanelWrapper}>
        <Animate isMounted={isVisible} type="left" delay={600}>
          <div className={classes.rightPanel}>
            <Typography className={classes.title}>
              A new way to explore the world
            </Typography>
            <Typography className={classes.text}>
            For decades travellers have reached for Lonely Planet
            books when looking to plan and execute their perfect
            trip, but now, they can also let Lonely Planet Experiences
            lead the way
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" disableElevation={true}>Learn More</Button>
          </div>
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1000}>
          <img className={classes.cross} src={Cross} alt="Cross"/>
          <img className={classes.circle} src={Circle} alt="Circle"/>
        </Animate>
      </div>

    </Container>
  );
}

export default NewWayToExplore;
