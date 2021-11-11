import React from 'react';
import { Container, Card, Modal, Backdrop, Zoom, Typography, List, ListItem, Button } from '@material-ui/core';

import Animate from '../../../../globalComponents/Animate';

import Section1Logic from './Section1Logic.js';

import Thousand_Sunny_Design from './assets/thousand_sunny_design(1600x5588).jpeg'

const ListItemLink = (props) => {
  //Destructure Logic
  const { classes } = Section1Logic(props);

  return <ListItem
    className={classes.listItem}
    button={true}
    component="a"
    divider={true}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />;
}

const Section1 = (props) => {

    // destructure logic
    const {
      isVisible,
      imageModalVisible,
      imageModalOpen,
      imageModalClose,
      classes
    } = Section1Logic(props);

    return(
      <Card className={classes.section1} outline={1}>
        <div className={classes.titleContainer}>
          <Animate isMounted={isVisible} type="top" delay={200}>
            <Typography className={classes.title} variant="h1">About</Typography>
          </Animate>

          <div className={classes.buttonContainer}>
            <Animate isMounted={isVisible} type="bottom" delay={600}>
              <Button
                className={classes.modalButton}
                variant="contained"
                color="primary"
                onClick={imageModalOpen}
              >View Original Design</Button>
            </Animate>
          </div>
        </div>

        <Animate isMounted={isVisible} type="left" delay={400}>
          <Typography className={classes.text} variant="h5">
            This site is for demonstration purposes only, there is no back end.
          </Typography>
        </Animate>

        <Animate isMounted={isVisible} type="right" delay={500}>
          <Typography className={classes.text} variant="h5">
            It has been created from a static design provided by
            <a href="https://www.weareframework.co.uk/" target="_blank" rel="noopener noreferrer"> Framework Design </a>.
            The whole sight is responsive down to 300 pixels wide and
            is built using the following third party libraries:
          </Typography>
        </Animate>

        <Animate isMounted={isVisible} type="left" delay={500}>
          <Container>
            <List className={classes.list} component="nav">

              <ListItemLink href="https://www.npmjs.com/" divider={true}>
                <Typography className={classes.text} variant="h5">
                  Node Package Manager (NPM)
                </Typography>
              </ListItemLink>

              <ListItemLink href="https://create-react-app.dev/" divider={true}>
                <Typography className={classes.text} variant="h5">
                  Create-React-App
                </Typography>
              </ListItemLink>

              <ListItemLink href="https://reactjs.org/" divider={true}>
                <Typography className={classes.text} variant="h5">
                  React
                </Typography>
              </ListItemLink>

              <ListItemLink href="https://mui.com/" divider={true}>
                <Typography className={classes.text} variant="h5">
                  Material-UI
                </Typography>
              </ListItemLink>

              <ListItemLink
                href="http://reactcommunity.org/react-transition-group/"
                divider={true}
              >
                <Typography className={classes.text} variant="h5">
                  React Transition Group
                </Typography>
              </ListItemLink>
            </List>
          </Container>
        </Animate>

        <Card elevation={0}>
          <Modal
            className={classes.imageModal}
            open={imageModalVisible}
            onClose={imageModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500, }}
          >
            <Zoom in={imageModalVisible}>
              <Card className={classes.imageCard} onClick={imageModalClose} variant="elevated">
                <img className={classes.image} src={Thousand_Sunny_Design} alt="File Not Found!"/>
              </Card>
            </Zoom>
          </Modal>
        </Card>

        <Animate isMounted={isVisible} type="bottom" delay={500}>
          <Typography className={classes.text} variant="h5">

          </Typography>
        </Animate>
      </Card>
    )
}

export default Section1;
