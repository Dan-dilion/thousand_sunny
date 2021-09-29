import useStyles from './HomeStyle.js';

const HomeLogic = ({setHeaderPosition}) => {
  const classes = useStyles();
  const VISIBILITY_OFFSET = 500;

  return{
    setHeaderPosition,
    classes,
    VISIBILITY_OFFSET
  };
}

export default HomeLogic;
