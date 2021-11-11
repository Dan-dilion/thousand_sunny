import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  section1: {
    margin: '2em',
    padding: '1em',
    borderRadius: '15px',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  title: {
    fontFamily: ['"mulish"'].join(','),
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '7rem',
    }
  },
  buttonContainer: {
    margin: 'auto'
  },
  modalButton: {
    maxHeight: '60%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '0.6rem',
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
  text: {
    fontFamily: ['"mulish"'].join(','),
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      fontSize: '0.6rem',
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
