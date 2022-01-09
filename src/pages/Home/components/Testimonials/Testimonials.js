import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';

import Animate from '../../../../globalComponents/Animate/';
import ImageSlider from '../../../../globalComponents/ImageSlider/';
import Review from './components/Review/';
import ImagePanel from './components/ImagePanel/'

import TestimonialsLogic from './TestimonialsLogic';

const Testimonials = (props) => {

  // Destructure logic
  const {
    isVisible,
    classes,
    imageTransitionList,
    reviewTransitionList,
    nextAction,
    prevAction,
    prevButtonDisabled,
    nextButtonDisabled,
    setNextButtonDisabled,
    setPrevButtonDisabled,
    currentSlide,
    images
  } = TestimonialsLogic(props);

  useEffect(() => {
    console.log('Initial Current Slide: ', currentSlide);
    setNextButtonDisabled(currentSlide === images.length -1 ? true : false);
    setPrevButtonDisabled(currentSlide === 0 ? true : false);
  }, [imageTransitionList]);

  return(
    <Container className={classes.root}>

      <div className={classes.wrapper}>

        <div className={classes.review}>
          <Animate isMounted={isVisible} type="left" delay={400}>
            <ImageSlider
              items={reviewTransitionList}
              ReturnComponent={Review}
              transitionStyle="slideOut"
              extraProps={{}}
            />
          </Animate>
        </div>

        <div className={classes.imagePanel}>
          <Animate isMounted={isVisible} type="right" delay={400}>
            <ImageSlider
              items={imageTransitionList}
              ReturnComponent={ImagePanel}
              transitionStyle="slideIn"
              extraProps={{
                isVisible: isVisible,
                nextAction: nextAction,
                prevAction: prevAction,
                prevButtonDisabled: prevButtonDisabled,
                nextButtonDisabled: nextButtonDisabled
              }}
            />
          </Animate>
        </div>

      </div>
    </Container>
  )
}

export default Testimonials;
