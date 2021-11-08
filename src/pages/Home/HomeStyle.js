import { makeStyles } from '@material-ui/core/styles';

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
  exploreAndTravel: {
    // border: '2px solid red',
    [theme.breakpoints.down('xs')]: {
      height: '85vw'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '60vw'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '50vw'
    },
    [theme.breakpoints.up(theme.breakpoints.values['md'])]: {
      height: '40vw'
    }
  },
  newWayToExplore: {
    // border: '2px solid purple',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '70vw'
    },
    [theme.breakpoints.up(theme.breakpoints.values['sm'])]: {
      height: '40vw'
    }
  },
  featuredDestinations: {
    // border: '2px solid orange',
    [theme.breakpoints.down('xs')]: {
      height: '110vw',
      minHeight: '380px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '100vw'
    },
    [theme.breakpoints.up(theme.breakpoints.values['sm'])]: {
      height: '40vw',
      maxHeight: '550px'
    }
  },
  guidesByThousand: {
    // border: '2px solid magenta',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '70vw'
    },
    [theme.breakpoints.up(theme.breakpoints.values['sm'])]: {
      height: '40vw'
    }
  },
  testimonials: {
    // border: '2px solid cyan',
    [theme.breakpoints.down(theme.breakpoints.values['sm'])]: {
      height: '70vw'
    },
    [theme.breakpoints.up(theme.breakpoints.values['sm'])]: {
      height: '40vw',
      maxHeight: '550px'
    }
  },
  trendingStories: {
    // border: '2px solid blue',
    [theme.breakpoints.down('xs')]: {
      height: '140vw'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '100vw'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '70vw'
    },
    [theme.breakpoints.up(theme.breakpoints.values['md'])]: {
      height: '60vw',
      maxHeight: '700px'
    }
  }
}))

export default useStyles;
