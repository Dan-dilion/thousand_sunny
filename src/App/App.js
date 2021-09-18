import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Container, Paper, Button, Typography, Zoom } from '@material-ui/core';
import { Transition } from 'react-transition-group';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [ isMounted, setIsMounted ] = useState(false);

  const duration = 1000;

  const defaultStyle = {
    position: "relative",
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out, left ${duration}ms ease-out, top ${duration}ms ease-out`,
    opacity: 0,
  }

  const transitionLeft = {
    entering: { opacity: 1, transform: "scale(0.99)", left: "2vw", top: ".5vw"},
    entered:  { opacity: 1, transform: "scale(1)", left: 0, top: 0},
    exiting:  { opacity: 0, transform: "scale(1)", left: 0, top: 0},
    exited:  { opacity: 0, transform: "scale(0.99)", left: "-2vw", top: ".5vw"},
  };

  const handleClick = () => {
    setIsMounted(prev => !prev)
  }

  return (
    <Container>
      <Button onClick={handleClick}>click me</Button>
      <Transition in={isMounted} timeout={0}>
        {state => (
          <Paper style={{...defaultStyle, ...transitionLeft[state]}}>
            <Typography component="h1">Hello!</Typography>
          </Paper>
        )}
      </Transition>
    </Container>
  );
}

export default App;
