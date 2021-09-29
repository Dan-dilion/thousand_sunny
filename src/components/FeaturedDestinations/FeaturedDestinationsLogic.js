import useStyles from './FeaturedDestinationsStyle.js';

const FeaturedDestinationsLogic = ({isVisible, setHeaderPosition}) => {
  const classes = useStyles();

  return {
    isVisible,
    setHeaderPosition,
    classes
  }
}

export default FeaturedDestinationsLogic;
