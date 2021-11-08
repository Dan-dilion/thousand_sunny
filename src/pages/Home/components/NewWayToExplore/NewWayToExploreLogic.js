import useStyles from './NewWayToExploreStyle';

const NewWayToExploreLogic = ({isVisible}) => {
  const classes = useStyles();

  return {
    isVisible,
    classes
  }
}

export default NewWayToExploreLogic;
