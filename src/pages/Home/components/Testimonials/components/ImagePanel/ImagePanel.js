import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@material-ui/core';

import { default as Next } from './assets/next.svg';
import { default as Previous } from './assets/previous.svg';
import ImagePanelLogic from './ImagePanelLogic.js';


const ImagePanel = (props) => {
  // De-structure logic
  const {
    classes,
    content,
    alt,
    imagePosition,
    nextAction,
    prevAction,
    nextButtonDisabled,
    prevButtonDisabled,
  } = ImagePanelLogic(props);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component='img'
        image={content}
        alt={alt}
        style={{backgroundPosition: imagePosition}}
      />
      <CardContent className={classes.content}>
        <IconButton
          className={classes.iconButton}
          onClick={prevAction}
          variant="contained"
          component="span"
          disabled={prevButtonDisabled}
        >
          <img
            className={classes.nextPrevButtons}
            src={Previous}
            alt='prev button'
            style={{opacity: prevButtonDisabled ? 0.3 : 1}}
          />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          onClick={nextAction}
          variant="contained"
          component="span"
          disabled={nextButtonDisabled}
        >
          <img
            className={classes.nextPrevButtons}
            src={Next}
            alt='next button'
            style={{opacity: nextButtonDisabled ? 0.3 : 1}}
          />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ImagePanel;
