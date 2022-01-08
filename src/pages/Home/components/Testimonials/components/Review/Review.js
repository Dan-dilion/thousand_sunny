import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';


import ReviewLogic from './ReviewLogic.js';


const Review = (props) => {
  // De-structure logic
  const {
    classes,
    content,
    starDropper,
    stars
  } = ReviewLogic(props);

  const {
    numOfStars,
    text,
    authName,
    authOrganisation
  } = content;

  useEffect(() => {
    starDropper(numOfStars);
  }, [])

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Testimonials
      </Typography>

      <div className={classes.leftPanel}>

        <Container className={classes.stars}>
          {stars}
        </Container>

        <Typography className={classes.text}>
          {text}
        </Typography>

        <Typography className={classes.authorName}>
          {authName}
        </Typography>
        <Typography className={`${classes.authorName} ${classes.authorOrganisation}`}>
          {authOrganisation}
        </Typography>
      </div>
    </div>
  );
};

export default Review;
