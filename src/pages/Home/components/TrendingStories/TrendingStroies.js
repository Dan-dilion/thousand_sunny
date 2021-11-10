import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import StoryCard from './components/StoryCard'
import Animate from '../../../../globalComponents/Animate/';

import { default as HealingHoliday } from './assets/healing_holiday.jpg';
import { default as KyotoResturant } from './assets/kyoto_resturant.jpg';
import { default as Yucatan } from './assets/yucatan.jpg';
import { default as SurfsUp } from './assets/surfs_up.jpg';

import { default as Cross } from '../../../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../../../global_assets/circle_medium.svg';

import TrendingStoriesLogic from './TrendingStoriesLogic';

const TrendingStories = (props) => {

  // Destructure logic
  const {
    isVisible,
    setHeaderUnderline,
    classes
  } = TrendingStoriesLogic(props);


  return(
    <Container className={classes.root}>
      <div className={classes.toplineWrapper}>
        <Animate isMounted={isVisible} type="top" delay={800}>
          <Container className={classes.topLine}>
            <Typography className={classes.title}>
              Trending Stories
            </Typography>
            <Typography
              className={classes.ViewAll}
              component={Link}
              to="/Stories"
              onClick={() => setHeaderUnderline('Stories')}
            >
              View all >
            </Typography>
          </Container>
        </Animate>
      </div>

      <Container className={classes.imagesContainer}>
        <Container className={classes.topImages}>
          <Animate isMounted={isVisible} type="left" delay={0}>
            <StoryCard
              className={classes.storyCard}
              image={HealingHoliday}
              alt="HealingHoliday"
              title="The many benefits of taking a healing holiday"
              text="‘Helaing holidays’ are on the rise to help maximise your health and happines..."
            />
          </Animate>
          <Animate isMounted={isVisible} type="top" delay={200}>
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
          <Animate isMounted={isVisible} type="bottom" delay={400}>
            <StoryCard
              className={classes.storyCard}
              image={Yucatan}
              alt="Yucatan"
              title="Skip Chichen Itza and head to this remote Yucatan"
              text="It’s remote and challenging to get, but braving the jungle and exploring these ruins without the..."
            />
          </Animate>
          <Animate isMounted={isVisible} type="right" delay={600}>
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
        <Animate isMounted={isVisible} type="fade" delay={1400}>
          <img className={classes.cross} src={Cross} alt="Cross" />
          <img className={classes.circle1} src={Circle} alt="Circle1" />
          <img className={classes.circle2} src={Circle} alt="Circle2" />
        </Animate>
      </Container>
    </Container>
  )
}

export default TrendingStories;
