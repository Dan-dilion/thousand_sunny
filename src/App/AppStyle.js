import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      paddingTop: '20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '85%',
      paddingTop: '30px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '80%',
      paddingTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      paddingTop: '50px',
    },
    margin: '0 auto',
    padding: 0,
    background: 'white',
    // border: '1px solid red',

  }
}))

export default useStyles;
