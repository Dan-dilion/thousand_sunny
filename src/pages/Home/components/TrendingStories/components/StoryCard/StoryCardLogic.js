import useStyles from './StoryCardStyle';

const StoryCardLogic = ({image, alt = "File not found", title, text, imagePosition = 'top'}) => {
  const classes = useStyles();

  return{
    image,
    alt,
    title,
    text,
    imagePosition,
    classes
  }
}

export default StoryCardLogic;
