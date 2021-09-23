import { useState } from 'react'
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
  ExploreAndTravel: {
    // minHeight: '370px',
  },
  NewWayToExplore: {

  },
  FeaturedDestinations: {

  },
  GuidesByThousand: {

  },
  Testimonials: {

  },
  TrendingStories: {

  }
}))

const Home = (props) => {
  const classes = useStyles();

  const [ isNewWayToExploreMounted, setIsNewWayToExploreMounted ] = useState(0);
  const [ isFeaturedDestinationsMounted, setIsFeaturedDestinationsMounted ] = useState(0);
  const [ isGuidesByThousandMounted, setIsGuidesByThousandMounted ] = useState(0);
  const [ isTestimonialsMounted, setIsTestimonialsMounted ] = useState(0);
  const [ isTrendingStoriesMounted, setIsTrendingStoriesMounted ] = useState(0);

  const VISIBILITY_OFFSET = 300;

  return(
    <Container className={classes.root}>
      <ExploreAndTravel className={classes.ExploreAndTravel} isHomeMounted={props.isHomeMounted} />

      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => <NewWayToExplore className={classes.NewWayToExplore} isNewWayToExploreMounted={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => <FeaturedDestinations className={classes.FeaturedDestinations} isFeaturedDestinationsMounted={isVisible} setHeaderPosition={props.setHeaderPosition} /> }
      </TrackVisibility>

      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => <GuidesByThousand className={classes.GuidesByThousand} isGuidesByThousandMounted={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => <Testimonials className={classes.Testimonials} isTestimonialsMounted={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => <TrendingStories className={classes.TrendingStories} isTrendingStoriesMounted={isVisible} /> }
      </TrackVisibility>
    </Container>
  )
}

export default Home;
