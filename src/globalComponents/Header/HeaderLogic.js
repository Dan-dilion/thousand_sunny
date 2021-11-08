import useStyles from './HeaderStyle';

const HeaderLogic = ({isHeaderMounted, headerSelection, setHeaderUnderline}) => {

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    // The newValue is the numerical location for the tab underline
    // However for consistency I am changing the position with the
    // routName. It's better this way if I need to change the order
    // of the tabs I only have to change it on one place
    // (the setHeaderUnderline() function)
    setHeaderUnderline(event.target.textContent); // This variable in the event object conveniently holds the route name
  };

  return {
    classes,
    isHeaderMounted,
    headerSelection,
    handleChange
  }
}

export default HeaderLogic;
