import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    // marginTop: '10%',
    padding: 0,
    justifyContent: 'space-between',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      // padding: '5% 0',
      padding: '0 5%'
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  review: {
    width: '80%',
    // border: '2px solid cyan',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      maxWidth: '55%'
    }
  },
  imagePanel: {
    position: 'relative',
    height: '100%',
    width: '100%',
    maxWidth: '35%',
    padding: 0,
  }
}))

export default useStyles;
