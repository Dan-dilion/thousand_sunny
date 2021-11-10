import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

import StoryCardLogic from './StoryCardLogic';

const StoryCard = (props) => {

  // Destructure logic
  const {
    image,
    alt,
    title,
    text,
    imagePosition,
    classes
  } = StoryCardLogic(props);

  return(
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{backgroundPosition: imagePosition}}
          image={image}
          alt={alt}
          title={title}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.noPadding}>
        <Button className={classes.readMore} size="small" color="primary">
          Read more...
        </Button>
      </CardActions>
    </Card>
  )
}

export default StoryCard;
