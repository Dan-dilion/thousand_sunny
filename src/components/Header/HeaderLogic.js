import useStyles from './HeaderStyle';

const HeaderLogic = ({isHeaderMounted, headerSelection, setHeaderPosition}) => {

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setHeaderPosition(newValue);
  };

  return {
    classes,
    isHeaderMounted,
    headerSelection,
    handleChange
  }
}

export default HeaderLogic;
