import useStyles from './StoriesStyle.js';
import { Container } from '@material-ui/core';

const Stories = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1>Stories page to go here</h1>
    </Container>
  )
}

export default Stories;
