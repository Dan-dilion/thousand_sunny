import useStyles from './ImagePanelStyle.js';

const ImagePanelLogic = ({
  content,
  alt = 'File Not Found',
  extraProps
}) => {
  const classes = useStyles();

  const {
    imagePosition = 'top',
    prevAction,
    nextAction,
    nextButtonDisabled,
    prevButtonDisabled
  } = extraProps;

  return {
    classes,
    content,
    alt,
    imagePosition,
    nextAction,
    prevAction,
    nextButtonDisabled,
    prevButtonDisabled,
  };
};

export default ImagePanelLogic;
