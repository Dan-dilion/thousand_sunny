import { Link } from 'react-router-dom';
import { Container, Tabs, Tab, Button } from '@material-ui/core';

import { ReactComponent as Logo } from '../../global_assets/logo.svg';
import Animate from '../Animate/';

import HeaderLogic from './HeaderLogic';

const Header = (props) => {

  // Destructure logic
  const {
    classes,
    isHeaderMounted,
    headerSelection,
    handleChange
  } = HeaderLogic(props);


  return(
    <Container className={classes.root}>
      <Animate isMounted={isHeaderMounted} type="top" delay={1000}>
        <Logo className={classes.logo}/>
      </Animate>
      <Animate isMounted={isHeaderMounted} type="bottom" delay={1200}>
        <Container className={classes.menuBar}>
          <Container className={classes.tabContainer}>
            <Tabs
              value={headerSelection}
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
