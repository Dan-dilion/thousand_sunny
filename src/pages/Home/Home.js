import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrackVisibility from 'react-on-screen';

import ExploreAndTravel from '../../components/ExploreAndTravel';
import NewWayToExplore from '../../components/NewWayToExplore';
import FeaturedDestinations from '../../components/FeaturedDestinations';
import GuidesByThousand from '../../components/GuidesByThousand';
import Testimonials from '../../components/Testimonials';
import TrendingStories from '../../components/TrendingStories';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid blue'
    minHeight: '300px',
    [theme.breakpoints.down('sm')]: {
      padding: '1em 0',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '3em 0',
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      padding: '5em 0',
      width: '100%'
    },
  },
  exploreAndTravel: {
    // border: '2px solid red',
    height: '40vw'
  },
  newWayToExplore: {
    // border: '2px solid purple',
    height: '40vw'
  },
  featuredDestinations: {
    // border: '2px solid orange',
    height: '25vw'
  },
  guidesByThousand: {
    // border: '2px solid magenta',
    height: '40vw'
  },
  testimonials: {
    // border: '2px solid cyan',
    height: '40vw'
  },
  trendingStories: {
    // border: '2px solid blue',
    height: '40vw'
  }
}))

const Home = (props) => {
  const classes = useStyles();
  const VISIBILITY_OFFSET = 600;

  return(
    <Container className={classes.root}>
      <TrackVisibility className={classes.exploreAndTravel} partialVisibility>
        {({ isVisible }) => isVisible && <ExploreAndTravel isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.newWayToExplore} offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => isVisible && <NewWayToExplore isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.featuredDestinations} partialVisibility>
        {({ isVisible }) => isVisible && <FeaturedDestinations isVisible={isVisible} setHeaderPosition={props.setHeaderPosition} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.guidesByThousand} partialVisibility>
        {({ isVisible }) => isVisible && <GuidesByThousand isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.testimonials} partialVisibility>
        {({ isVisible }) => isVisible && <Testimonials isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.trendingStories} partialVisibility>
        {({ isVisible }) => isVisible && <TrendingStories isVisible={isVisible} /> }
      </TrackVisibility>
    </Container>
  )
}

export default Home;
