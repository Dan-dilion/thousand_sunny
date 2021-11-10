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
    height: '70vh',
    width: '70vw',
    margin: '15vh auto',
    borderRadius: '20px',
    // padding: '2em',
    // backgroundColor: 'black',
    // WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 48% 48%, black 40%, transparent 60%)',
    // WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))',
    overflow: 'auto'
  },
  modalButton: {

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
