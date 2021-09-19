const duration = 1000;

export const commonStyle = {
  position: 'relative',
  padding: 0,
  margin: 0,
  transition: `
    opacity ${duration * 3}ms ease-out,
    transform ${duration}ms ease-out,
    left ${duration * .7}ms ease-out,
    right ${duration * .7}ms ease-out,
    top ${duration * .7}ms ease-out,
    bottom ${duration * .7}ms ease-out
  `,
  opacity: 0,
}

export const transitions = {
  top: {
    entering: { opacity: 1, transform: 'scale(0.9)', top: '1vw', left: '1vw'},
    entered:  { opacity: 1, transform: 'scale(1)', top: 0, left: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', top: 0, left: 0},
    exited:  { opacity: 0, transform: 'scale(0.9)', top: '-1vw', left: '1vw'},
  },
  bottom: {
    entering: { opacity: 1, transform: 'scale(0.9)', bottom: '1vw', right: '1vw'},
    entered:  { opacity: 1, transform: 'scale(1)', bottom: 0, right: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', bottom: 0, right: 0},
    exited:  { opacity: 0, transform: 'scale(0.9)', bottom: '-1vw', right: '1vw'},
  },
  left: {
    entering: { opacity: 1, transform: 'scale(0.9)', left: '2vw', top: '.5vw'},
    entered:  { opacity: 1, transform: 'scale(1)', left: 0, top: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', left: 0, top: 0},
    exited:  { opacity: 0, transform: 'scale(0.9)', left: '-2vw', top: '.5vw'},
  }
};
