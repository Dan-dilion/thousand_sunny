import useStyles from './TrendingStoriesStyle';

const TrendingStoriesLogic = ({isVisible, setHeaderUnderline}) => {

  const classes = useStyles();

  return{
    isVisible,
    setHeaderUnderline,
    classes,
  }
}

export default TrendingStoriesLogic;
