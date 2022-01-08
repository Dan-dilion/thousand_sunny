import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Animate from '../../../../../../globalComponents/Animate/';

import { default as Star } from '../../assets/star.svg'

import ReviewLogic from './ReviewLogic.js';


const review = (props) => {
  // De-structure logic
  const {
    classes
  } = ReviewLogic(props);

  return (
    <>
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
    < />
  );
};

export default review;
