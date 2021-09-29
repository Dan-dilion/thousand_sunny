import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 0,
  },
  leftPanelWrapper: {
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '80%'
    },

    overflow: 'hidden',
    zIndex: 1,
    // border: '2px solid purple',
    // height: '40vw',
    width: '100%',
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      alignItems: 'center',
      textAlign: 'center',
    }
  },
  title: {
    fontFamily: ['"Playfair Display"'].join(','),
    fontWeight: '800',
    width: '80%',
    maxWidth: '6em',
    minWidth: '225px',
    marginBottom: '3%',
    lineHeight: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
      fontSize: '2rem',
      maxWidth: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '2.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h2.fontSize,
      minWidth: '325px',
    },
  },
  subHeading: {
    fontFamily: ['"Mulish"'].join(','),
    fontWeight: '600',
    marginBottom: '3%',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h6.fontSize
    },
  },
  line: {
    marginBottom: '3%',
    width: '1.5em',
    border: '1px solid black',
    backgroundColor: '#000000ff',
    // opacity: '1'
  },
  holidayFinderForm: {
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: '100%'
  },
  selectorRow: {
    width: '100%',
    padding: 0,
    marginBottom: '3%',
    display: 'flex',
    justifyContent: 'start',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      justifyContent: 'center',
    }
  },
  selectorsControl: {
    // border: '2px solid green',
    width: '30%',
    minWidth: '90px',
    marginRight: '3%',
  },
  selectorLabel: {
    [theme.breakpoints.down('md')]: {
      fontSize: '.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem",
    },
  },
  selectDisplay: {
    [theme.breakpoints.down('md')]: {
      fontSize: '.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem",
    },
  },
  selectedDate: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '.75rem',
      padding: '.8rem 0'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem",
      padding: '1.1rem 0'
    },
  },
  dateInputLabel: {
    [theme.breakpoints.down('md')]: {
      fontSize: '.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem",
    },
  },
  endAdornment: {
    marginRight: '-7px',
    color: theme.palette.grey['600']
  },
  button: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem"
    },
  },
  rightPanel: {
    // border: '2px solid blue',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      position: 'absolute',
    },
    height: '100%',
    width: '100%',
    padding: 0,
  },
  graphic: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
      opacity: '.3',
    }
  },
  decalContainer: {
    // border: '2px solid red',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  crossLeft: {
    position: 'absolute',
    height: '2.5vw',
    top: '5%',
    left: '42%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      top: '10%',
      left: '40%',
    }
  },
  circleSmall: {
    position: 'absolute',
    height: '2vw',
    top: '90%',
    left: '45%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      top: '85%',
      left: '80%',
    }
  },
  circleMedium: {
    position: 'absolute',
    height: '3vw',
    top: '50%',
    left: '-10%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      top: '50%',
      left: '17%',
    }
  },
}))

export default useStyles;
