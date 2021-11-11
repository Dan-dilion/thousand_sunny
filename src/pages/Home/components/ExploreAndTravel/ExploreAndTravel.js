import React from 'react';
import { Link } from 'react-router-dom';
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
  InputAdornment
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { ReactComponent as Graphic } from './assets/backpacker.svg';
import { ReactComponent as CrossLeft } from '../../../../global_assets/cross_small_left_slant.svg';
import { ReactComponent as CircleSmall } from '../../../../global_assets/circle_small.svg';
import { ReactComponent as CircleMedium } from '../../../../global_assets/circle_medium.svg';

import Animate from '../../../../globalComponents/Animate/';

import ExploreAndTravelLogic from './ExploreAndTravelLogic';

const ExploreAndTravel = (props) => {

  // Destructure logic
  const {
    isVisible,
    setHeaderUnderline,
    classes,
    isSmall,
    location,
    activity,
    grade,
    date,
    isDateFocused,
    handleDateFocus,
    handleChange
  } = ExploreAndTravelLogic(props);

  return(
    <Container className={classes.root}>
      <div className={classes.leftPanelWrapper}>
        <Animate isMounted={isVisible} type="left" delay={500}>
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
                    inputProps={{
                      classes: {
                        select: classes.selectDisplay
                      }
                    }}
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
                    inputProps={{
                      classes: {
                        select: classes.selectDisplay
                      }
                    }}                  >
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
                    inputProps={{
                      classes: {
                        select: classes.selectDisplay
                      }
                    }}                  >
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
                    focused={isDateFocused}
                    onFocus={handleDateFocus}
                    onBlur={handleDateFocus}
                    margin={isSmall ? "dense" : "none"}
                    inputProps={{style: { opacity: (date ? '1' : '0')}}}
                    InputProps={{
                      classes: {
                        input: classes.selectedDate
                      },
                      endAdornment: date ? isSmall ? "" : <div /> :
                        <InputAdornment position="end">
                          <ArrowDropDownIcon className={classes.endAdornment} />
                        </InputAdornment>
                    }}
                    value={date}
                    onChange={handleChange}
                    InputLabelProps={{
                      classes: {
                        root: classes.dateInputLabel
                      }
                    }}
                    label="Date"
                  />
                </FormControl>
              </Container>
            </Container>

            <Button
              className={classes.button}
              component={Link}
              to="./about"
              onClick={() => setHeaderUnderline('About')}
              variant="contained"
              color="primary"
              disableElevation={true}
            >Explore</Button>
          </Container>
        </Animate>
      </div>


      <div className={classes.rightPanel}>
        <Animate isMounted={isVisible} type="right" delay={0}>
          <Graphic className={classes.graphic}/>
        </Animate>
      </div>

      <div className={classes.decalContainer}>
        <Animate isMounted={isVisible} type="fade" delay={1000}>
          <CrossLeft className={classes.crossLeft}/>
          <CircleSmall className={classes.circleSmall}/>
          <CircleMedium className={classes.circleMedium}/>
        </Animate>
      </div>


    </Container>
  )
}

export default ExploreAndTravel;
