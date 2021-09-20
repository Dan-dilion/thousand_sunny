import { Transition } from 'react-transition-group';

import { transitions, commonStyle } from '../../styling/transitions.js';

const Animate = ({isMounted, type, timeout = 0, children}) => {
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
