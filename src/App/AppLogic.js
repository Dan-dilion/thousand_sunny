import { useState } from 'react';
import useStyles from './AppStyle.js';

const AppLogic = () => {
  const classes = useStyles();
  const [ headerSelection, setHeaderSelection ] = useState('unset');

  const setHeaderUnderline = (routeName, delay = false) => {

    const imposeDelay = (callback) => {
      setTimeout(() => {
        callback();
      }, (delay ? 2500 : 0));
    }

    if ( delay ) setHeaderSelection(null);

    switch (routeName) {
      case 'home':
      case 'Home': imposeDelay(() => setHeaderSelection(0)); break;
      case 'thousand_sunny':
      case 'Thousand_sunny': imposeDelay(() => setHeaderSelection(0)); break;
      case '': imposeDelay(() => setHeaderSelection(0)); break;
      case 'about':
      case 'About': imposeDelay(() => setHeaderSelection(1)); break;
      case 'stories':
      case 'Stories': imposeDelay(() => setHeaderSelection(2)); break;
      case 'destinations':
      case 'Destinations': imposeDelay(() => setHeaderSelection(3)); break;
      default: break;
    }
  };

  return {
    classes,
    headerSelection,
    setHeaderUnderline,
  };
}

export default AppLogic;
