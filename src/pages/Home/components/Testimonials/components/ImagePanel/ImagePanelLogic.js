import useStyles from './ImagePanelStyle.js';

const ImagePanelLogic = ({
  content,  // The image
  alt = 'File Not Found',
  extraProps
}) => {
  const classes = useStyles();

  const {
    imagePosition = 'top',
    isVisible,
    prevAction,
    nextAction,
    nextButtonDisabled,
    prevButtonDisabled
  } = extraProps;

  return {
    classes,
    isVisible,
    content,    // the image
    alt,
    imagePosition,
    nextAction,
    prevAction,
    nextButtonDisabled,
    prevButtonDisabled,
  };
};

export default ImagePanelLogic;
