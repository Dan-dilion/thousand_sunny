import useStyles from './GuidesByThousandStyle';

const GuidesByThousandLogic = ({isVisible}) => {
  const classes = useStyles();

  return {
    isVisible,
    classes
  }
}

export default GuidesByThousandLogic;
