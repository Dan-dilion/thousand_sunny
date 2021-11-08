import useStyles from './FeaturedDestinationsStyle.js';

const FeaturedDestinationsLogic = ({isVisible, setHeaderUnderline}) => {
  const classes = useStyles();

  return {
    isVisible,
    setHeaderUnderline,
    classes
  }
}

export default FeaturedDestinationsLogic;
