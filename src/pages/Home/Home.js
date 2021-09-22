import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ExploreAndTravel from '../../components/ExploreAndTravel';
import NewWayToExplore from '../../components/NewWayToExplore';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid blue'
    minHeight: '300px',
    [theme.breakpoints.down('sm')]: {
      padding: '1em 0',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '3em 0',
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      padding: '5em 0',
      width: '100%'
    },
  },
  ExploreAndTravel: {
    // minHeight: '370px',
  },
  NewWayToExplore: {

  }
}))

const Home = (props) => {
  const classes = useStyles();

  return(
    <Container className={classes.root}>
      <ExploreAndTravel className={classes.ExploreAndTravel} isHomeMounted={props.isHomeMounted} />
      <NewWayToExplore className={classes.NewWayToExplore} isNewWayToExploreMounted={props.isHomeMounted} />
    </Container>
  )
}

export default Home;
