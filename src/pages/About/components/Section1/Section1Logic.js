import { useState } from 'react';
import useStyles from './Section1Style.js';

const Section1Logic = ({isVisible}) => {
  const classes = useStyles();
  const [ imageModalVisible, setImageModalVisible ] = useState(false);


  const imageModalOpen = () => {
    setImageModalVisible(true);
  };

  const imageModalClose = () => {
    setImageModalVisible(false);
  };


  return {
    isVisible,
    imageModalVisible,
    imageModalOpen,
    imageModalClose,
    classes
  }
}

export default Section1Logic;
