import React from 'react';
import {
  Container,
  Card,
  Modal,
  Backdrop,
  Zoom,
  Typography,
  List,
  ListItem,
  Button
} from '@material-ui/core';

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
        <div className={classes.titleRow}>
          <div className={classes.titleContainer}>
            <Animate isMounted={isVisible} type="top" delay={200}>
              <Typography className={classes.title} variant="h1">About</Typography>
            </Animate>
          </div>

          <div className={classes.buttonContainer}>
            <Animate isMounted={isVisible} type="bottom" delay={1200}>
              <Button
                className={classes.modalButton}
                variant="contained"
                color="primary"
                onClick={imageModalOpen}
              >Original Design</Button>
            </Animate>
          </div>
        </div>

        <Container className={classes.bodyContainer} maxWidth={false}>
          <Animate isMounted={isVisible} type="left" delay={300}>
            <Typography className={classes.text} variant="h5">
              This site is for demonstration purposes only, there is no back end.
            </Typography>
            <Typography className={classes.text} variant="h5">
              <a href="https://github.com/Dan-dilion/thousand_sunny"
                target="_blank" rel="noreferrer"
              > Download the source code here</a>.
            </Typography>
          </Animate>

          <Animate isMounted={isVisible} type="right" delay={600}>
            <Typography className={classes.text} variant="h5">
              It has been created from a static design provided by a third party.
              The whole site is responsive down to 300 pixels wide. To view the
              layout originally specified in the design make sure your browser
              window is at least 960 pixels wide.
            </Typography>
          </Animate>

          <Animate isMounted={isVisible} type="left" delay={900}>
            <Typography className={classes.text} variant="h5">
              This project was built using the following libraries:
            </Typography>
          </Animate>

          <Animate isMounted={isVisible} type="right" delay={1200}>
            <Container>
              <List className={classes.list} component="nav">

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
        </Container>

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

      </Card>
    )
}

export default Section1;
