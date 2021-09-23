import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '15vw',
    width: '100%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: '1em',
    },
    [theme.breakpoints.between('sm','md')]: {
      padding: '.4em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: '.7em',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '1em',
    },
  },
  media: {
    padding: 0,
    height: '15vw',
    borderRadius: '5% 5% 0 0',
    // backgroundPosition: 'top'
  },
  title: {
    padding: '.5em 0',
    overflow: 'auto',
    // maxHeight: '3em',
    fontWeight: 600,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
      // height: '10%',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.7rem',
      height: '5em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem',
      height: '5em',
    },
    [theme.breakpoints.up('lg')]: {
      height: '5em',
      fontSize: "1.2rem"
    },
  },
  text: {
    overflow: 'auto',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
      // height: '10%',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.65rem',
      height: '8em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem',
      height: '6em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.2rem",
      height: '6em',
    },
  },
  readMore: {
    padding: 0,
    textAlign: 'start',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.65rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.2rem",
    },
  },
  noPadding: {
    padding: 0
  }
}))

const StoryCard = ({image, alt = "File not found", title, text, imagePosition = 'top'}) => {
  const classes = useStyles();

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
