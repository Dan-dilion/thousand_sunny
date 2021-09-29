import { Container, Typography } from '@material-ui/core';

import Animate from '../Animate/';

import { default as ImageSlider } from './assets/photo.jpg';
import { default as Star } from '../../global_assets/star.svg'
import { default as Circle } from '../../global_assets/circle_small.svg';

import TestimonialsLogic from './TestimonialsLogic';

const Testimonials = (props) => {

  // Destructure logic
  const {
    isVisible,
    classes
  } = TestimonialsLogic(props);

  return(
    <Container className={classes.root}>

      <div className={classes.leftPanelWrapper}>
        <Animate isMounted={isVisible} type="left" delay={600}>
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
        </Animate>
      </div>

      <div className={classes.rightPanel}>
        <Animate isMounted={isVisible} type="right" delay={600}>
          <img className={classes.imageSlider} src={ImageSlider} alt="ImageSlider" />
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1000}>
          <img className={classes.circle} src={Circle} alt="Circle"/>
        </Animate>
      </div>

    </Container>
  )
}

export default Testimonials;
