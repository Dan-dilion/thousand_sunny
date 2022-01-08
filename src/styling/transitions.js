const duration = 700;

export const commonStyle = {
  position: 'relative',
  padding: 0,
  margin: 0,
  height: '100%',
  transition: `
    opacity ${duration * 3}ms ease-out,
    transform ${duration}ms ease-out,
    left ${duration}ms ease-out,
    right ${duration}ms ease-out,
    top ${duration}ms ease-out,
    bottom ${duration}ms ease-out
  `,
  opacity: 0,
}

export const sliderCommonStyle = {
  position: 'absolute',
  display: 'flex',
  padding: 0,
  margin: 0,
  height: '100%',
  transition: `
    opacity ${duration}ms ease-out,
    transform ${duration}ms ease-out,
    left ${duration}ms ease-out,
    right ${duration}ms ease-out,
    top ${duration}ms ease-out,
    bottom ${duration}ms ease-out
  `,
  opacity: 0,
};

export const transitions = {
  top: {
    entering: { opacity: 1, transform: 'scale(0.8)', top: '1vw', left: '1vw'},
    entered:  { opacity: 1, transform: 'scale(1)', top: 0, left: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', top: 0, left: 0},
    exited:  { opacity: 0, transform: 'scale(0.8)', top: '-1vw', left: '1vw'},
  },
  bottom: {
    entering: { opacity: 1, transform: 'scale(0.8)', bottom: '1vw', right: '1vw'},
    entered:  { opacity: 1, transform: 'scale(1)', bottom: 0, right: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', bottom: 0, right: 0},
    exited:  { opacity: 0, transform: 'scale(0.8)', bottom: '-1vw', right: '1vw'},
  },
  left: {
    entering: { opacity: 1, transform: 'scale(0.8)', left: '2vw', top: '.5vw'},
    entered:  { opacity: 1, transform: 'scale(1)', left: 0, top: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', left: 0, top: 0},
    exited:  { opacity: 0, transform: 'scale(0.8)', left: '-2vw', top: '.5vw'},
  },
  right: {
    entering: { opacity: 1, transform: 'scale(0.8)', right: '2vw', bottom: '.5vw'},
    entered:  { opacity: 1, transform: 'scale(1)', right: 0, bottom: 0},
    exiting:  { opacity: 0, transform: 'scale(1)', right: 0, bottom: 0},
    exited:  { opacity: 0, transform: 'scale(0.8)', right: '-2vw', bottom: '.5vw'},
  },
  fade: {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  },
  slideIn: {
    entering: { opacity: 0, transform: 'scale(0.1)'},
    entered:  { opacity: 1, transform: 'scale(1)'},
    exiting:  { opacity: 0, transform: 'scale(1.2)'},
    exited:  { opacity: 1, transform: 'scale(1)'},
  }
};
