import useStyles from './TestimonialsStyle';

const TestimonialsLogic = ({isVisible}) => {
  const classes = useStyles();

  return{
    isVisible,
    classes
  }
}

export default TestimonialsLogic;
