import { useState } from 'react';
import useStyles from './AppStyle.js';

const AppLogic = () => {
  const classes = useStyles();
  const [ headerSelection, setHeaderSelection ] = useState('unset');
  const [ isHeaderMounted, setIsHeaderMounted ] = useState(false);

  const setHeaderUnderline = (routeName) => {
    switch (routeName) {
      case 'Home': setHeaderSelection(0); break;
      case 'thousand_sunny': setHeaderSelection(0); break;
      case '': setHeaderSelection(0); break;
      case 'About': setHeaderSelection(1); break;
      case 'Stories': setHeaderSelection(2); break;
      case 'Destinations': setHeaderSelection(3); break;
      default: break;
    }
  };

  return {
    classes,
    headerSelection,
    setHeaderUnderline,
    isHeaderMounted,
    setIsHeaderMounted,
  };
}

export default AppLogic;
