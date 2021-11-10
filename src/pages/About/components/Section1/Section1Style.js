import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  section1: {
    // backgroundColor: theme.palette.info.light,
    margin: '2em',
    padding: '1em',
    borderRadius: '15px',
  },
  title: {
    fontFamily: ['"Mulish"'].join(','),
  },
  list: {
    width: '40%',
    borderRadius: '10px'
  },
  imageCard: {
    height: '30vh',
    maxHight: '30vh',
    overflow: 'auto'
  },
  image: {
    height: 'auto',
    width: '100%',
    // backgroundSize: 'cover',
    overflowX: 'scroll'
  }
}));

export default useStyles;
