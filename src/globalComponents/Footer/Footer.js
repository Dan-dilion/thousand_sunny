import { Container, Paper, Typography, Link, Grid, Divider } from '@material-ui/core';

import { ReactComponent as Logo } from '../../global_assets/logo.svg';
import { ReactComponent as Twitter } from '../../global_assets/twitter_icon.svg';
import { ReactComponent as Facebook } from '../../global_assets/facebook_icon.svg';
import { ReactComponent as Instagram } from '../../global_assets/instagram_icon.svg';
import { ReactComponent as LinkedIn } from '../../global_assets/linkedin_icon.svg';
import { ReactComponent as YouTube } from '../../global_assets/youtube_icon.svg';

import FooterLogic from './FooterLogic';

const Footer = () => {

  // Destructure logic
  const {
    classes,
    isSmall,
    isMedium,
    preventDefault
  } = FooterLogic();


  return(
    <Container className={classes.root} maxWidth={false}>
      <Container className={classes.container}>
        <Grid className={classes.gridContainer} container spacing={isSmall ? 2 : 10}>
          <Grid item xs={isSmall ? 5 : isMedium ? 4 : 3}>
            <Paper className={classes.column} elevation={0}>
              <Logo />
              <Typography className={classes.textSize}>
                Plan and book your perfect trip with
                expert advice, travel tips destination
                information from us
              </Typography>
              <Typography className={classes.textSize}>
                ©2020 Thousand Sunny. All rights reserved
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.column} elevation={0}>
              <Typography className={`${classes.heading} ${classes.textSize}`}>
                Destinations
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Africa</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Antarctica</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Asia</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Europe</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>America</Link>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.column} elevation={0}>
              <Typography className={`${classes.heading} ${classes.textSize}`}>
                Shop
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Destination Guides</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Pictorial & Gifts</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Special Offers</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Delivery Times</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>FAQs</Link>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.column} elevation={0}>
              <Typography className={`${classes.heading} ${classes.textSize}`}>
                Interests
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Adventure Travel</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Art And Culture</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Wildlife And Nature</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Family Holidays</Link>
              </Typography>
              <Typography>
                <Link className={`${classes.textSize} ${classes.noWrap}`} color={'inherit'} href="#" onClick={preventDefault}>Food And Drink</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider />

        <Container className={classes.socialMediaContainer}>
          <Twitter />
          <Facebook />
          <Instagram />
          <LinkedIn />
          <YouTube />
        </Container>

      </Container>
    </Container>
  )
};

export default Footer;
