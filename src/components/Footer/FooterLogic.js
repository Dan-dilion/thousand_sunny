import { useTheme, useMediaQuery } from '@material-ui/core';

import useStyles from './FooterStyle';

const FooterLogic = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'), {noSsr: true});
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'), {noSsr: true});
  const preventDefault = (event) => event.preventDefault();

  return {
    classes,
    isSmall,
    isMedium,
    preventDefault
  }
}

export default FooterLogic;
