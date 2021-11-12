import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  section1: {
    margin: '2em',
    padding: '3em',
    borderRadius: '15px',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    },
  },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  titleContainer: {
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
    }
  },
  title: {
    // marginRight: 'auto',
    fontFamily: ['"Playfair Display"'].join(','),
    fontWeight: '800',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '3rem',
      // margin: '0 auto',
      textAlign: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '6rem',
    }
  },
  buttonContainer: {
    display: 'flex',
    margin: 'auto 0',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '2rem',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  modalButton: {
    maxHeight: '60%',
    padding: '0.5rem',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '0.5rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.5rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    }
  },
  bodyContainr: {
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      padding: 0
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '0.2rem'
    },
  },
  text: {
    fontFamily: ['"mulish"'].join(','),
    lineHeight: '2',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '0.6rem',
      lineHeight: '1.7',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    }
  },
  frameworkLink: {
    fontFamily: ['"mulish"'].join(','),
    fontWeight: '800',
    color: theme.palette.primary,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#fdeed6'
    }
  },
  list: {
    fontFamily: ['"mulish"'].join(','),
    // width: '50%',
    borderRadius: '10px',
    paddingBottom: '1rem',
    [theme.breakpoints.down(theme.breakpoints.values['xs'])]: {
      fontSize: '0.6rem',
      width: '90%',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.8rem',
      width: '60%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.8rem',
      width: '50%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '1rem',
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
      width: '40%',
    }
  },
  listItem: {
    padding: 0
  },
  imageCard: {
    height: '70vh',
    width: '70vw',
    margin: '15vh auto',
    borderRadius: '20px',
    overflow: 'auto'
  },
  imageModal: {
  },
  image: {
    height: 'auto',
    width: '100%',
    overflowX: 'scroll'
  }
}));

export default useStyles;
