import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '100%',
  },
  menuBar: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap-reverse',
    },
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    },
    padding: 0,
    margin: 0,
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
  },
  tab: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.up('xs')]: {
      fontSize: '.65rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '.8rem',
    },
    minWidth: '8em',
    width: '8em'
  },
  buttonContainer: {
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      width: '6em',
    },
    [theme.breakpoints.up('xs')]: {
      fontSize: '.65rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '.8rem',
    },
    minWidth: '6em',
    width: '8em',
    margin: 'auto 8px',
  }
}))

export default useStyles;
