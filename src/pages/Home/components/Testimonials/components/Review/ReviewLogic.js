import { useState } from 'react';
import useStyles from './ReviewStyle.js';
import { v4 as uuid } from 'uuid';

import { default as Star } from '../../assets/star.svg'


const ReviewLogic = ({ id, content }) => {
  const classes = useStyles();
  const [ stars, setStars ] = useState([]);

  const starDropper = (number) => {
    const starsArray = [];
    for (let i = 1; i <= number; i++) {
      console.log('Star number: ' + i);
      console.log('Number of stars: ' + number);
      starsArray.push(<img className={classes.star} key={uuid()} src={Star} alt="Star" />);
    }
    setStars(starsArray);
  }

  return {
    classes,
    content,
    starDropper,
    stars
  };
};

export default ReviewLogic;
