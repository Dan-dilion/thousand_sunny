import useStyles from './Section1Style.js';

const Section1Logic = ({isVisible}) => {
  const classes = useStyles();

  return {
    isVisible,
    classes
  }
}

export default Section1Logic;
