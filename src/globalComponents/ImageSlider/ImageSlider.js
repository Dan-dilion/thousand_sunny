import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import { transitions, sliderCommonStyle } from '../../styling/transitions.js';

const ImageSlider = ({ items, ReturnComponent, extraProps }) => {
  return(
    <div
      style={{
        marginBottom: '1rem',
        position: 'relative',
        height: '100%',
      }}
    >
      <TransitionGroup>
        {items.map(({ id, content }) => (
          <Transition
            key={id}
            timeout={{
              enter: 150,
              exit: 700,
            }}
          >
            {state => (
              <div
                style={{
                  ...sliderCommonStyle,
                  ...transitions['slideIn'][state]
                }}
              >
                <ReturnComponent id={id} content={content} extraProps={extraProps} />
              </div>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default ImageSlider;
