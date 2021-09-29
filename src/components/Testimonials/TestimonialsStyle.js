import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    width: '100%',
    marginTop: '10%',
    padding: 0,
    justifyContent: 'space-between',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      marginTop: '5%',
      padding: '0 5%'
    },
  },
  rightPanel: {
    // border: '2px solid green',
    display: 'flex',
    justifyContent: 'center',
    // overflow: 'hidden',
    height: '100%',
    width: '100%',
    padding: 0,
    paddingRight: '1em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: '0',
    }
  },
  imageSlider: {
    height: '30vw',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
    }
  },
  leftPanelWrapper: {
    // border: '2px solid cyan',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
  },
  leftPanel: {
    // border: '2px solid blue',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontFamily: ['"Playfair Display"'].join(','),
    fontWeight: '800',
    width: '80%',
    lineHeight: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
      fontSize: '1rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  stars: {
    padding: '0',
    marginBottom: '1em',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      marginBottom: '.4em'
    }
  },
  star: {
    height: '1.5vw',
    marginRight: '.4em'
  },
  text: {
    fontFamily: ['"Mulish"'].join(','),
    width: '80%',
    marginBottom: '2em',
    color: theme.palette.grey['600'],
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
      marginBottom: '1em',
      width: '90%',
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
  authorName: {
    fontFamily: ['"Mulish"'].join(','),
    width: '80%',
    color: theme.palette.grey['800'],
    fontWeight: '800',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem'
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
  authorOrganisation: {
    color: theme.palette.grey['400'],
  },
  decalContainer: {
    // border: '2px solid purple',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    height: '1vw',
    top: '55%',
    left: '-8%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      left: '-4%',
      height: '2vw',
    }
  }
}))

export default useStyles;
