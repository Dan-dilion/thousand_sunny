import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import useStyles from './TestimonialsStyle';

// If this project had a back-end these images would have to be stored in a
// global folder like /public and then it would be possible to reference their
// address as a string in the <img> component's src prop using PUBLIC_URL. That
// way it would be possible to fetch a list of images from the server and just
// store their filenames in the images array
import { default as image1 } from './assets/images/image 6.jpg';
import { default as image2 } from './assets/images/IMG_3980.jpg';
import { default as image3 } from './assets/images/Picture 180.jpg';


const TestimonialsLogic = ({isVisible}) => {
  const classes = useStyles();
  const images = [image1, image2, image3];

  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ prevButtonDisabled, setPrevButtonDisabled ] = useState(true);
  const [ nextButtonDisabled, setNextButtonDisabled ] = useState(false);
  const [ imageTransitionList, setImageTransitionList ] = useState([{
    id: uuid(),
    content: images[currentSlide]
  }]);

  const nextAction = () => {
    if (currentSlide < images.length -1) {
      setImageTransitionList([{
        id: uuid(),
        content: images[currentSlide +1]
      }]);
      setCurrentSlide(currentSlide +1);
    }
  }

  const prevAction = () => {
    if (currentSlide > 0) {
      setImageTransitionList([{
        id: uuid(),
        content: images[currentSlide -1]
      }]);
      setCurrentSlide(currentSlide -1);
    }
  }

  return{
    isVisible,
    classes,
    imageTransitionList,
    nextAction,
    prevAction,
    prevButtonDisabled,
    nextButtonDisabled,
    setNextButtonDisabled,
    setPrevButtonDisabled,
    currentSlide,
    images
  }
}

export default TestimonialsLogic;
