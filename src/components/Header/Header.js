import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Tabs, Tab, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from '../../global_assets/logo.svg';
import Animate from '../Animate/';

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
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap-reverse',
    },
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
    padding: 0,
    margin: 0,
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'end',
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
    justifyContent: 'end',
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

const Header = (props) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    props.setHeaderPosition(newValue);
  };


  return(
    <Container className={classes.root}>
      <Animate isMounted={props.isHeaderMounted} type="top">
        <Logo className={classes.logo}/>
      </Animate>
      <Animate isMounted={props.isHeaderMounted} type="bottom">
        <Container className={classes.menuBar}>
          <Container className={classes.tabContainer}>
            <Tabs
              value={props.headerSelection}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              <Tab className={classes.tab} component={ Link } to="/Home" label='Home' />
              <Tab className={classes.tab} component={ Link } to="/Destinations" label='Destinations' />
              <Tab className={classes.tab} component={ Link } to="/About" label='About' />
              <Tab className={classes.tab} component={ Link } to="/Partner" label='Partner' />
            </Tabs>
          </Container>
          <Container className={classes.buttonContainer}>
            <Button className={classes.buttons} variant="outlined" color="primary">Login</Button>
            <Button className={classes.buttons} variant="contained" color="primary" disableElevation={true}>Register</Button>
          </Container>
        </Container>
      </Animate>
    </Container>
  )

}

export default Header;
