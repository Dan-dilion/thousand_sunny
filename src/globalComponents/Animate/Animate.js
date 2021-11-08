import { useState } from 'react';
import { Transition } from 'react-transition-group';

import { transitions, commonStyle } from '../../styling/transitions.js';


const Animate = ({
  isMounted,
  type = 'top',
  timeout = 0,
  children = <h1>No Children</h1>,
  delay = 0
}) => {
  const [ isMountedDelayed, setIsMountedDelayed ] = useState(false);

  if (isMounted) {
    setTimeout(() => {
      setIsMountedDelayed(true);
    }, delay);
  }

  return(
    <Transition in={isMountedDelayed} timeout={timeout}>
      {state => (
        <div style={{...commonStyle, ...transitions[type][state]}}>
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Animate;
