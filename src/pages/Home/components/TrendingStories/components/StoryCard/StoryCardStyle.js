import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '15vw',
    width: '100%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: '1em',
    },
    [theme.breakpoints.between('sm','md')]: {
      padding: '.4em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      padding: '.7em',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '1em',
    },
  },
  media: {
    padding: 0,
    height: '15vw',
    borderRadius: '5% 5% 0 0',
    // backgroundPosition: 'top'
  },
  title: {
    fontFamily: ['"Mulish"'].join(','),
    padding: '.5em 0',
    overflow: 'auto',
    // maxHeight: '3em',
    fontWeight: 600,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
      // height: '10%',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.6rem',
      height: '6em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem',
      height: '5em',
    },
    [theme.breakpoints.up('lg')]: {
      height: '5em',
      fontSize: "1.2rem"
    },
  },
  text: {
    fontFamily: ['"Mulish"'].join(','),
    overflow: 'auto',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
      // height: '10%',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.6rem',
      height: '8.5em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.8rem',
      height: '6.5em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1rem",
      height: '7.5em',
    },
  },
  readMore: {
    padding: 0,
    textAlign: 'start',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.between('sm','md')]: {
      fontSize: '.65rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '.9rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.2rem",
    },
  },
  noPadding: {
    padding: 0
  }
}))

export default useStyles;
