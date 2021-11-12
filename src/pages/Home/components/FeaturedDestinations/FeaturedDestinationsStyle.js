import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    padding: 0,
    // marginTop: '5%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '80%'
    }
  },
  toplineWrapper: {
    zIndex: 1
  },
  topLine: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3em',
  },
  title: {
    fontFamily: ['"Playfair Display"'].join(','),
    fontWeight: '800',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
      fontSize: '1rem',
      maxWidth: '12em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
      maxWidth: '12em',
    },
  },
  ViewAll: {
    position: 'relative',
    zIndex: 1,
    color: theme.palette.primary.main,
    minWidth: '5em',
    textDecoration: 'none'
  },
  imagesContainer: {
    // border: '2px solid red',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      flexWrap: 'wrap'
    }
  },
  topImages: {
    // border: '2px solid green',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 0,
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0,
      marginBottom: '2.5%',
    }
  },
  bottomImages: {
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    }
  },
  decalContainer: {
    // border: '2px solid purple',
    zIndex: 0,
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  cross: {
    position: 'absolute',
    top: '50%',
    left: '-10%',
    height: '1.5vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '50%',
      left: '-5%',
    }
  },
  circle1: {
    position: 'absolute',
    top: '-7%',
    left: '70%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '6%',
      left: '70%',
    }
  },
  circle2: {
    position: 'absolute',
    top: '105%',
    left: '40%',
    height: '1.2vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      top: '100%',
      left: '40%',
    }
  }
}))

export default useStyles;
