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
}))

const Home = (props) => {
  const classes = useStyles();
  const VISIBILITY_OFFSET = 600;

  return(
    <Container className={classes.root}>
      <TrackVisibility partialVisibility>
        {({ isVisible }) => <ExploreAndTravel isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => <NewWayToExplore isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility partialVisibility>
        {({ isVisible }) => <FeaturedDestinations isVisible={isVisible} setHeaderPosition={props.setHeaderPosition} /> }
      </TrackVisibility>

      <TrackVisibility partialVisibility>
        {({ isVisible }) => <GuidesByThousand isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility partialVisibility>
        {({ isVisible }) => <Testimonials isVisible={isVisible} /> }
      </TrackVisibility>

      <TrackVisibility partialVisibility>
        {({ isVisible }) => <TrendingStories isVisible={isVisible} /> }
      </TrackVisibility>
    </Container>
  )
}

export default Home;
