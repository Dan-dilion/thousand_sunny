import { Container, Typography, Button } from '@material-ui/core';

import Animate from '../../../../globalComponents/Animate/';

import { default as Backdrop } from './assets/new_way_graphic.svg';
import { default as Cross } from '../../../../global_assets/cross_no_slant.svg';
import { default as Circle } from '../../../../global_assets/circle_small.svg';

import NewWayToExploreLogic from './NewWayToExploreLogic';

const NewWayToExplore = (props) => {

  // Destructure logic
  const {
    isVisible,
    classes
  } = NewWayToExploreLogic(props);

  return(
    <Container className={classes.root}>
      <div className={classes.leftPanel}>
        <Animate isMounted={isVisible} type="left" delay={600}>
          <img className={classes.backdrop} src={Backdrop} alt="Backdrop" />
        </Animate>
      </div>

      <div className={classes.rightPanelWrapper}>
        <Animate isMounted={isVisible} type="left" delay={600}>
          <div className={classes.rightPanel}>
            <Typography className={classes.title}>
              A new way to explore the world
            </Typography>
            <Typography className={classes.text}>
            For decades travellers have reached for Lonely Planet
            books when looking to plan and execute their perfect
            trip, but now, they can also let Lonely Planet Experiences
            lead the way
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" disableElevation={true}>Learn More</Button>
          </div>
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1000}>
          <img className={classes.cross} src={Cross} alt="Cross"/>
          <img className={classes.circle} src={Circle} alt="Circle"/>
        </Animate>
      </div>

    </Container>
  );
}

export default NewWayToExplore;
