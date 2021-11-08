import useStyles from './HomeStyle.js';

const HomeLogic = ({setHeaderUnderline}) => {
  const classes = useStyles();
  const VISIBILITY_OFFSET = 500;

  return{
    setHeaderUnderline,
    classes,
    VISIBILITY_OFFSET
  };
}

export default HomeLogic;
