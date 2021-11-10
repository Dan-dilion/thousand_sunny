import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

import DestinationCardLogic from './DestinationCardLogic.js';

const DestinationCard = (props) => {
  //destructure logic
  const {
    Image,
    alt,
    title,
    text,
    imagePosition,
    classes
  } = DestinationCardLogic(props);

  return(
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component='img'
          style={{backgroundPosition: imagePosition}}
          image={Image}
          alt={alt}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.text}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DestinationCard;
