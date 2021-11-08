import useStyles from './DestinationCardStyle.js';

const DestinationCardLogic = ({Image, alt = 'File not found!', title, text, imagePosition = 'top'}) => {
  const classes = useStyles();

  return{
    Image,
    alt,
    title,
    text,
    imagePosition,
    classes
  };
}

export default DestinationCardLogic;
