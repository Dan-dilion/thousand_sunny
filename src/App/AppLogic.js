import { useState } from 'react';
import useStyles from './AppStyle.js';

const AppLogic = () => {
  const classes = useStyles();
  const [ headerSelection, setHeaderSelection ] = useState('unset');
  const [ isHeaderMounted, setIsHeaderMounted ] = useState(false);
  const [ isHomeMounted, setIsHomeMounted ] = useState(false);

  return {
    classes,
    headerSelection,
    setHeaderSelection,
    isHeaderMounted,
    setIsHeaderMounted,
    isHomeMounted,
    setIsHomeMounted
  }
}

export default AppLogic;
