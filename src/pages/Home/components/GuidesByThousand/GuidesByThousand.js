import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';

import Animate from '../../../../globalComponents/Animate/';

import { default as Backdrop } from './assets/guides_by_thousand_graphic.svg';
import { default as Cross } from '../../../../global_assets/cross_no_slant.svg';
import { default as CrossRight } from '../../../../global_assets/cross_right_slant.svg';
import { default as Circle } from '../../../../global_assets/circle_small.svg';

import GuidesByThousandLogic from './GuidesByThousandLogic';

const GuidesByThousand = (props) => {

  // Destructure logic
  const {
    isVisible,
    setHeaderUnderline,
    classes
  } = GuidesByThousandLogic(props);

  return(
    <Container className={classes.root}>

      <div className={classes.leftPanelWrapper}>
        <Animate isMounted={isVisible} type="left" delay={600}>
          <div className={classes.leftPanel}>
            <Typography className={classes.title}>
              Guides By Thousand Sunny
            </Typography>
            <Typography className={classes.text}>
            Packed with tips and advice from our on-the-ground
            experts, our city guides app (iOS and Android) is the
            ultimate resource before and during a trip.
            </Typography>
            <Button
              className={classes.button}
              component={Link}
              to="./about"
              onClick={() => setHeaderUnderline('about', true)}
              variant="contained"
              color="primary"
              disableElevation={true}
            >Download</Button>
          </div>
        </Animate>
      </div>

      <div className={classes.rightPanel}>
        <Animate isMounted={isVisible} type="right" delay={600}>
          <img className={classes.backdrop} src={Backdrop} alt="Backdrop" />
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1000}>
          <img className={classes.cross} src={Cross} alt="Cross"/>
          <img className={classes.crossRight} src={CrossRight} alt="Cross_right"/>
          <img className={classes.circle} src={Circle} alt="Circle"/>
        </Animate>
      </div>

    </Container>
  );
}

export default GuidesByThousand;
