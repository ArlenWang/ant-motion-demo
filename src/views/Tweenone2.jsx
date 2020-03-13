import React from 'react';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

function Tweenone2(props) {
  return (
    <TweenOne
      animation={{ 
        x: 80, 
        scale: 0.5, 
        rotate: 120, 
        yoyo: true, // demo 演示需要
        repeat: -1, // demo 演示需要
        duration: 1000
      }}
      paused={props.paused}
      style={{ transform: 'translateX(-80px)' }}
      className="code-box-shape"
    />
  );
}

Tweenone2.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
export default Tweenone2;