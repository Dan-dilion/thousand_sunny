import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  root: {
    position: 'reletive',
    borderRadius: '10px 10px 10px 0',
    maxWidth: '95%',
  },
  media: {
    padding: '0',
    width: '100%'
  },
  content: {
    position: 'absolute',
    bottom: 0,
    padding: '1em 1em 0 0',
    width: '45%',
    backgroundColor: 'white',
    borderRadius: '0 7px 0 0',
    // zIndex: 1,
  },
  title: {
    fontFamily: ['"Inter"'].join(','),
    fontWeight: '800',
    [theme.breakpoints.down(theme.breakpoints.values['xs'])]: {
      fontSize: '0.5em',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.7em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.55em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1em',
    },
  },
  text: {
    fontFamily: ['"Inter"'].join(','),
    fontWeight: '400',
    color: theme.palette.grey['600'],
    [theme.breakpoints.down(theme.breakpoints.values['xs'])]: {
      fontSize: '0.5em',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.7em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.55em',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1em',
    },
  }
}));

export default useStyles;
