import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import StoryCard from '../StoryCard'
import Animate from '../Animate/';

import { default as HealingHoliday } from './assets/healing_holiday.jpg';
import { default as KyotoResturant } from './assets/kyoto_resturant.jpg';
import { default as Yucatan } from './assets/yucatan.jpg';
import { default as SurfsUp } from './assets/surfs_up.jpg';

import { default as Cross } from '../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../global_assets/circle_medium.svg';



const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    padding: 0,
    marginTop: '15%',
    marginBottom: '10%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
    //   width: '80%'
    // }
  },
  toplineWrapper: {
    zIndex: 1
  },
  topLine: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2em',
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
    textDecoration: 'none',
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
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    }
  },
  bottomImages: {
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    }
  },
  storyCard: {
    border: '2px solid blue',
    // padding: '0 1em',
    // width: '20vw'
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
    top: '-8%',
    left: '30%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '50%',
      left: '-5%',
    }
  },
  circle1: {
    position: 'absolute',
    top: '105%',
    left: '70%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '6%',
      left: '70%',
    }
  },
  circle2: {
    position: 'absolute',
    top: '60%',
    left: '-8%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '100%',
      left: '40%',
    }
  }
}))

const TrendingStories = ({isTrendingStoriesMounted}) => {
  const classes = useStyles();

  const handleLink = (event) => {
    event.preventDefault();
  }

  return(
    <Container className={classes.root}>
      <div className={classes.toplineWrapper}>
        <Animate isMounted={isTrendingStoriesMounted} type="top" delay={0}>
          <Container className={classes.topLine}>
            <Typography className={classes.title}>
              Trending Stories
            </Typography>
            <Typography className={classes.ViewAll} component={Link} onClick={handleLink}>
              View all >
            </Typography>
          </Container>
        </Animate>
      </div>

      <Container className={classes.imagesContainer}>
        <Container className={classes.topImages}>
          <Animate isMounted={isTrendingStoriesMounted} type="left" delay={200}>
            <StoryCard
              className={classes.storyCard}
              image={HealingHoliday}
              alt="HealingHoliday"
              title="The many benefits of taking a healing holiday"
              text="‘Helaing holidays’ are on the rise to help maximise your health and happines..."
            />
          </Animate>
          <Animate isMounted={isTrendingStoriesMounted} type="top" delay={400}>
            <StoryCard
              className={classes.storyCard}
              image={KyotoResturant}
              alt="KyotoResturant"
              title="The best Kyoto restaurant to try Japanese food"
              text="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit..."
            />
          </Animate>
        </Container>

        <Container className={classes.bottomImages}>
          <Animate isMounted={isTrendingStoriesMounted} type="bottom" delay={800}>
            <StoryCard
              className={classes.storyCard}
              image={Yucatan}
              alt="Yucatan"
              title="Skip Chichen Itza and head to this remote Yucatan"
              text="It’s remote and challenging to get, but braving the jungle and exploring these ruins without the..."
            />
          </Animate>
          <Animate isMounted={isTrendingStoriesMounted} type="right" delay={1000}>
            <StoryCard
              className={classes.storyCard}
              image={SurfsUp}
              alt="SurfsUp"
              title="Surf’s up at these beginner spots around the world"
              text="If learning to surf has in on your to-do list for a while, the good news is: it’s never too late..."
            />
          </Animate>
        </Container>
      </Container>

      <Container className={classes.decalContainer}>
        <Animate isMounted={isTrendingStoriesMounted} type="fade" delay={1400}>
          <img className={classes.cross} src={Cross} alt="Cross" />
          <img className={classes.circle1} src={Circle} alt="Circle1" />
          <img className={classes.circle2} src={Circle} alt="Circle2" />
        </Animate>
      </Container>
    </Container>
  )
}

export default TrendingStories;
