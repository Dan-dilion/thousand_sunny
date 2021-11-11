import useStyles from './GuidesByThousandStyle';

const GuidesByThousandLogic = ({isVisible, setHeaderUnderline}) => {
  const classes = useStyles();

  return {
    isVisible,
    setHeaderUnderline,
    classes
  }
}

export default GuidesByThousandLogic;
