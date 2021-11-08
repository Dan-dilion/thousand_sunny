import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    bottom: '0',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '250px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '350px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '400px',
    },
    padding: 0,
    backgroundColor: theme.palette.grey['100']
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      paddingTop: '20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '90%',
      paddingTop: '30px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '85%',
      paddingTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
      paddingTop: '50px',
    },
    margin: '0 auto',
    padding: 0,
    height: '100%'
  },
  gridContainer: {
    height: '80%',
    marginBottom: '2%',
    flexWrap: 'nowrap'
  },
  column: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'unset',
    overflowY: 'hidden',
    overflowX: 'hidden',
    color: theme.palette.grey['500'],
  },
  heading: {
    color: 'black',
    fontWeight: 'bold'
  },
  textSize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '.6rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    lineHeight: 1,
  },
  noWrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5px',
      width: '45%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingTop: '10px',
      width: '35%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      paddingTop: '20px',
      width: '30%',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '30px',
      width: '25%',
    },
  }
}))

export default useStyles;
