import { Transition } from 'react-transition-group';

import { transitions, commonStyle } from '../../styling/transitions.js';

const Animate = ({
  isMounted,
  type = 'top',
  timeout = 0,
  children = <h1>No Children</h1>
}) => {
  return(
    <Transition in={isMounted} timeout={timeout}>
      {state => (
        <div style={{...commonStyle, ...transitions[type][state]}}>
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Animate;
