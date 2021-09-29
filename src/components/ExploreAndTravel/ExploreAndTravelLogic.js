import { useState } from 'react';
import {
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import useStyles from './ExploreAndTravelStyle.js';

const ExploreAndTravelLogic = ({isVisible}) => {

  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.md), {noSsr: true});

  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');
  const [ isDateFocused, setIsDateFocused ] = useState(false);

  const handleDateFocus = event => {
    console.log('Enevt Here: ', event);
    switch (event.type) {
      case 'focus': setIsDateFocused(true); break;
      case 'blur': setIsDateFocused(false); break;
      default: break;
    }
  }

  // Handle the selection boxes
  const handleChange = event => {
    switch (event.target.name) {
      case "location":
        setLocation(event.target.value)
      break;

      case "activity":
        setActivity(event.target.value)
      break;

      case "grade":
        setGrade(event.target.value)
      break;

      case "date":
        setDate(event.target.value)
      break;

      default: break;
    }
  }

  return{
    isVisible,
    classes,
    isSmall,
    location,
    activity,
    grade,
    date,
    isDateFocused,
    handleDateFocus,
    handleChange
  }
}

export default ExploreAndTravelLogic;
