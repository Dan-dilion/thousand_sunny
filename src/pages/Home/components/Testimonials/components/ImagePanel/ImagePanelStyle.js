import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderRadius: '10px',
    maxWidth: '100%',
    // top: '50%',
    // transform: 'translateY(-50%)'
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center'
  },
  media: {
    height: '30vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
    }
  },
  content: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '15%',
    width: '35%',
    zIndex: 1,
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    },
    backgroundColor: 'white',
    borderRadius: '20px 0 0 0',
    [theme.breakpoints.down(theme.breakpoints.values['md'])]: {
      // display: 'none'
      height: '20%',
      width: '100%',
      borderRadius: 'unset',
      // bottom: '-15%',
      zIndex: 1
    }
  },
  iconButton: {
    height: '100%',
    width: '50%'
  },
  iconButtonLabel: {
    height: '100%'
  },
  nextPrevButtons: {
    height: '100%',
    [theme.breakpoints.up('xl')]: {
      padding: '6px'
    }
  }
}));

export default useStyles;
