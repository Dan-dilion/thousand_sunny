import React from 'react';
import { Container } from '@material-ui/core';
import TrackVisibility from 'react-on-screen';

import ExploreAndTravel from './components/ExploreAndTravel';
import NewWayToExplore from './components/NewWayToExplore';
import FeaturedDestinations from './components/FeaturedDestinations';
import GuidesByThousand from './components/GuidesByThousand';
import Testimonials from './components/Testimonials';
import TrendingStories from './components/TrendingStories';

import HomeLogic from './HomeLogic';


const Home = (props) => {

  // Destructure logic
  const {
    setHeaderUnderline,
    classes,
    VISIBILITY_OFFSET
  } = HomeLogic(props);

  return(
    <Container className={classes.root}>
      <TrackVisibility className={classes.exploreAndTravel} partialVisibility>
        {({ isVisible }) => isVisible && <ExploreAndTravel
          isVisible={isVisible}
          setHeaderUnderline={setHeaderUnderline}
        /> }
      </TrackVisibility>

      <TrackVisibility className={classes.newWayToExplore} offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => isVisible && <NewWayToExplore
          isVisible={isVisible}
          setHeaderUnderline={setHeaderUnderline}
        /> }
      </TrackVisibility>

      <TrackVisibility className={classes.featuredDestinations} offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => isVisible && <FeaturedDestinations isVisible={isVisible} setHeaderUnderline={setHeaderUnderline} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.guidesByThousand} partialVisibility>
        {({ isVisible }) => isVisible && <GuidesByThousand
        isVisible={isVisible} setHeaderUnderline={setHeaderUnderline}
      /> }
      </TrackVisibility>

      <TrackVisibility className={classes.testimonials} partialVisibility>
        {({ isVisible }) => isVisible && <Testimonials isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility className={classes.trendingStories} partialVisibility>
        {({ isVisible }) => isVisible && <TrendingStories isVisible={isVisible} setHeaderUnderline={setHeaderUnderline} /> }
      </TrackVisibility>
    </Container>
  )
}

export default Home;
