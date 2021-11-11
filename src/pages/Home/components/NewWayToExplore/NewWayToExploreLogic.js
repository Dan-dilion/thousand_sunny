import useStyles from './NewWayToExploreStyle';

const NewWayToExploreLogic = ({isVisible, setHeaderUnderline}) => {
  const classes = useStyles();

  return {
    isVisible,
    setHeaderUnderline,
    classes
  }
}

export default NewWayToExploreLogic;
