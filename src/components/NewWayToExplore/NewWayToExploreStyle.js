import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    width: '100%',
    // marginTop: '7%',
    padding: 0,
    justifyContent: 'space-between',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      marginTop: '5%',
    },
  },
  leftPanel: {
    // border: '2px solid green',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    padding: 0,
    paddingRight: '1em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: '10% 0',
    }
  },
  backdrop: {
    height: '40vw',
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
      opacity: '.3',
    }
  },
  rightPanelWrapper: {
    // border: '2px solid orange',
    alignItems: 'start',
    width: '100%',
    padding: '10% 0',
    paddingLeft: '1em',
    zIndex: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      position: 'absolute',
      paddingLeft: 0,
      height: '100%',
    }
  },
  rightPanel: {
    // border: '2px solid blue',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
    }
  },
  title: {
    fontFamily: ['"Playfair Display"'].join(','),
    fontWeight: '800',
    width: '80%',
    marginBottom: '3%',
    lineHeight: 1,
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
  text: {
    // padding: '5em',
    fontFamily: ['"Mulish"'].join(','),
    color: theme.palette.grey['600'],
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '60%',
      margin: '0 auto 1em auto',
      fontSize: '.7rem'
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.7rem'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.2rem"
    },
  },
  button: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem',
      minWidth: '11em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: ".9rem",
      minWidth: '9em'
    },
  },
  decalContainer: {
    // border: '2px solid purple',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cross: {
    position: 'absolute',
    height: '1.2vw',
    top: '10%',
    left: '50%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      height: '2.2vw',
      top: '10%',
      left: '46%',
    }
  },
  circle: {
    position: 'absolute',
    height: '1vw',
    top: '70%',
    left: '80%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '2vw',
      opacity: .7,
    }
  }
}))

export default useStyles;
