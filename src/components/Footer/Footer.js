import { Container, Paper, Typography, Link, Grid, Divider, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from '../../global_assets/logo.svg';
import { ReactComponent as Twitter } from '../../global_assets/twitter_icon.svg';
import { ReactComponent as Facebook } from '../../global_assets/facebook_icon.svg';
import { ReactComponent as Instagram } from '../../global_assets/instagram_icon.svg';
import { ReactComponent as LinkedIn } from '../../global_assets/linkedin_icon.svg';
import { ReactComponent as YouTube } from '../../global_assets/youtube_icon.svg';


const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    bottom: '0',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '250px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '350px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '400px',
    },
    padding: 0,
    backgroundColor: theme.palette.grey['100']
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      paddingTop: '20px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '90%',
      paddingTop: '30px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '85%',
      paddingTop: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
      paddingTop: '50px',
    },
    margin: '0 auto',
    padding: 0,
    height: '100%'
  },
  gridContainer: {
    height: '80%',
    marginBottom: '2%',
    flexWrap: 'nowrap'
  },
  column: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'unset',
    overflowY: 'hidden',
    overflowX: 'hidden',
    color: theme.palette.grey['500'],
  },
  heading: {
    color: 'black',
    fontWeight: 'bold'
  },
  textSize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '.6rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    lineHeight: 1,
  },
  noWrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5px',
      width: '45%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingTop: '10px',
      width: '35%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      paddingTop: '20px',
      width: '30%',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '30px',
      width: '25%',
    },
  }
}))

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'), {noSsr: true});
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'), {noSsr: true});

  console.log('The theme: ', theme);

  const preventDefault = (event) => event.preventDefault();

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
