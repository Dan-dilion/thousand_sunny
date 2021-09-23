import { useState } from 'react';
import {
  Container,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { ReactComponent as Graphic } from './assets/backpacker.svg';
import { ReactComponent as CrossLeft } from '../../global_assets/cross_small_left_slant.svg';
import { ReactComponent as CircleSmall } from '../../global_assets/circle_small.svg';
import { ReactComponent as CircleMedium } from '../../global_assets/circle_medium.svg';

import Animate from '../Animate/';

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 0,
  },
  leftPanelWrapper: {
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '80%'
    },

    overflow: 'hidden',
    zIndex: 1,
    // border: '2px solid purple',
    // height: '40vw',
    width: '100%',
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    padding: 0,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      alignItems: 'center',
      textAlign: 'center',
    }
  },
  title: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
    fontWeight: '600',
    width: '80%',
    maxWidth: '6em',
    minWidth: '225px',
    marginBottom: '3%',
    lineHeight: 1,
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      width: '100%',
      fontSize: '2rem',
      maxWidth: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '2.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h2.fontSize,
      minWidth: '325px',
    },
  },
  subHeading: {
    fontWeight: '600',
    marginBottom: '3%',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h6.fontSize
    },
  },
  line: {
    marginBottom: '3%',
    width: '1.5em',
    border: '1px solid black',
    backgroundColor: '#000000ff',
    // opacity: '1'
  },
  holidayFinderForm: {
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: '100%'
  },
  selectorRow: {
    width: '100%',
    padding: 0,
    marginBottom: '3%',
    display: 'flex',
    justifyContent: 'start',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      justifyContent: 'center',
    }
  },
  selectorsControl: {
    // border: '2px solid green',
    width: '30%',
    minWidth: '90px',
    marginRight: '3%',
  },
  selectorLabel: {
    [theme.breakpoints.down('md')]: {
      fontSize: '.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem",
    },
  },
  dateLabel: {
    [theme.breakpoints.down('md')]: {
      fontSize: '.75rem',
      padding: '.68rem 0'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem",
      padding: '1.1rem 0'
    },
  },
  endAdornment: {
    marginRight: '-7px',
    color: theme.palette.grey['600']
  },
  button: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1rem"
    },
  },
  rightPanel: {
    // border: '2px solid blue',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      position: 'absolute',
    },
    height: '100%',
    width: '100%',
    padding: 0,
  },
  graphic: {
    height: '40vw',
    width: '100%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '40vw',
      opacity: '.3',
    }
  },
  decalContainer: {
    // border: '2px solid red',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  crossLeft: {
    position: 'absolute',
    height: '2.5vw',
    top: '5%',
    left: '42%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      top: '10%',
      left: '40%',
    }
  },
  circleSmall: {
    position: 'absolute',
    height: '2vw',
    top: '90%',
    left: '45%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      top: '85%',
      left: '80%',
    }
  },
  circleMedium: {
    position: 'absolute',
    height: '3vw',
    top: '50%',
    left: '-10%',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      opacity: .7,
      top: '50%',
      left: '17%',
    }
  },
}))

const ExploreAndTravel = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.md), {noSsr: true});

  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case "location":
        setLocation(event.target.value)
      break;

      case "activity":
        setActivity(event.target.value)
      break;

      case "grade":
        setGrade(event.target.value)
      break;

      case "date":
        setDate(event.target.value)
      break;

      default: break;
    }
  }

  return(
    <Container className={classes.root}>
      <div className={classes.leftPanelWrapper}>
        <Animate isMounted={props.isHomeMounted} type="left" delay={500}>
          <Container className={classes.leftPanel}>
            <Typography className={classes.title}>
              Explore and Travel
            </Typography>

            <Typography className={classes.subHeading}>
              Holiday Finder
            </Typography>
            <Divider className={classes.line} />


            <Container className={classes.holidayFinderForm}>
              <Container className={classes.selectorRow}>
                <FormControl className={classes.selectorsControl} variant="outlined" margin={isSmall ? "dense" : "none"}>
                  <InputLabel className={classes.selectorLabel} id="location-label">Location</InputLabel>
                  <Select
                    id="location"
                    name="location"
                    labelId="location-label"
                    value={location}
                    onChange={handleChange}
                    label="Location"
                    SelectDisplayProps={{style: {fontSize: (isSmall ? '.75rem' : '1rem') }}}
                  >
                    <MenuItem value="">
                      <em>-- None --</em>
                    </MenuItem>
                    <MenuItem value={10}>Africa</MenuItem>
                    <MenuItem value={20}>Antarctica</MenuItem>
                    <MenuItem value={30}>Asia</MenuItem>
                    <MenuItem value={40}>Europe</MenuItem>
                    <MenuItem value={50}>America</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.selectorsControl} variant="outlined" margin={isSmall ? "dense" : "none"}>
                  <InputLabel className={classes.selectorLabel} id="activity-label">Activity</InputLabel>
                  <Select
                    id="activity"
                    name="activity"
                    labelId="activity-label"
                    value={activity}
                    onChange={handleChange}
                    label="Activity"
                    SelectDisplayProps={{style: {fontSize: (isSmall ? '.75rem' : '1rem') }}}
                  >
                    <MenuItem value="">
                      <em>-- None --</em>
                    </MenuItem>
                    <MenuItem value={10}>Hiking</MenuItem>
                    <MenuItem value={20}>Cycling</MenuItem>
                    <MenuItem value={30}>Relaxing</MenuItem>
                  </Select>
                </FormControl>
              </Container>

              <Container className={classes.selectorRow}>
                <FormControl className={classes.selectorsControl} variant="outlined" margin={isSmall ? "dense" : "none"}>
                  <InputLabel className={classes.selectorLabel} id="grade-label">Grade</InputLabel>
                  <Select
                    id="grade"
                    name="grade"
                    labelId="grade-label"
                    value={grade}
                    onChange={handleChange}
                    label="Grade"
                    SelectDisplayProps={{style: {fontSize: (isSmall ? '.75rem' : '1rem') }}}
                  >
                    <MenuItem value="">
                      <em>-- None --</em>
                    </MenuItem>
                    <MenuItem value={10}>A</MenuItem>
                    <MenuItem value={20}>B</MenuItem>
                    <MenuItem value={30}>C</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.selectorsControl}>
                  <TextField
                    name="date"
                    type="date"
                    variant="outlined"
                    focused={(date ? true : false)}
                    margin={isSmall ? "dense" : "none"}
                    inputProps={{style: { width: '100%', fontSize: (date ? '' : 0), minHeight: (date ? '' : '19px') }}}
                    InputProps={{
                      classes: {
                        input: classes.dateLabel
                      },
                      endAdornment: (date ? '' :
                        <InputAdornment position="end">
                          <ArrowDropDownIcon className={classes.endAdornment} />
                        </InputAdornment>
                      )
                    }}
                    value={date}
                    onChange={handleChange}
                    InputLabelProps={{style: {fontSize: (isSmall ? '.75rem' : '1rem') }}}
                    label="Date"
                    SelectDisplayProps={{style: {fontSize: (isSmall ? '.75rem' : '1rem') }}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </TextField>
                </FormControl>
              </Container>
            </Container>

            <Button className={classes.button} variant="contained" color="primary" disableElevation={true}>Explore</Button>
          </Container>
        </Animate>
      </div>


      <div className={classes.rightPanel}>
        <Animate isMounted={props.isHomeMounted} type="right" delay={300}>
          <Graphic className={classes.graphic}/>
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={props.isHomeMounted} type="fade" delay={1000}>
          <CrossLeft className={classes.crossLeft}/>
          <CircleSmall className={classes.circleSmall}/>
          <CircleMedium className={classes.circleMedium}/>
        </Animate>
      </div>


    </Container>
  )
}

export default ExploreAndTravel;
