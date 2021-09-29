import useStyles from './TrendingStoriesStyle';

const TrendingStoriesLogic = ({isVisible}) => {

  const classes = useStyles();

  const handleLink = (event) => {
    event.preventDefault();
  }

  return{
    isVisible,
    classes,
    handleLink
  }
}

export default TrendingStoriesLogic;
