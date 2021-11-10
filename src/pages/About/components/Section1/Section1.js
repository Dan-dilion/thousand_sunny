import React from 'react';
import { Container, Card, Modal, Backdrop, Zoom, Typography, List, ListItem, Button } from '@material-ui/core';

import Animate from '../../../../globalComponents/Animate';

import Section1Logic from './Section1Logic.js';

import Thousand_Sunny_Design from './assets/thousand_sunny_design(1600x5588).jpeg'

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
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
      <Card className={classes.section1} variant="outlined" outline={1}>
        <Animate isMounted={isVisible} type="top" delay={200}>
          <Typography className={classes.title} variant="h1">Hello and welcome</Typography>
        </Animate>

        <Animate isMounted={isVisible} type="left" delay={400}>
          <Typography className={classes.text} variant="h5">
            This site is for demostration purposes only, there is no back end.
          </Typography>
        </Animate>

        <Animate isMounted={isVisible} type="right" delay={500}>
          <Typography className={classes.text} variant="h5">
            It has been created from a given static design and encorporates the
            following technologies:
          </Typography>
        </Animate>

        <Animate isMounted={isVisible} type="left" delay={500}>
          <Container>
            <List className={classes.list} component="nav">

              <ListItemLink href="https://www.npmjs.com/">
                <Typography className={classes.text} variant="h5">
                  Node Package Manager (NPM)
                </Typography>
              </ListItemLink>

              <ListItemLink href="https://create-react-app.dev/">
                <Typography className={classes.text} variant="h5">
                  Create-React-App
                </Typography>
              </ListItemLink>

              <ListItemLink href="https://reactjs.org/">
                <Typography className={classes.text} variant="h5">
                  React
                </Typography>
              </ListItemLink>

              <ListItemLink href="https://mui.com/">
                <Typography className={classes.text} variant="h5">
                  Material-UI
                </Typography>
              </ListItemLink>

              <ListItemLink href="http://reactcommunity.org/react-transition-group/">
                <Typography className={classes.text} variant="h5">
                  React Transition Group
                </Typography>
              </ListItemLink>
            </List>
          </Container>
        </Animate>

        <Card elevation={0}>
          <Button
            className={classes.modalButton}
            variant="contained"
            color="primary"
            onClick={imageModalOpen}
          >View Original Design</Button>

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
      </Card>
    )
}

export default Section1;
