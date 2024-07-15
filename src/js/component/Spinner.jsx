import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import "../../styles/component/spinner.css"

const Spinner = ({ color = 'yellow', size = 50 }) => {
  const spinnerAnimation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 1000 }
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
    }}>
      <animated.div style={{
        ...spinnerAnimation,
        width: size,
        height: size,
        border: `${size / 10}px solid ${color}`,
        borderTop: `${size / 10}px solid transparent`,
        borderRadius: '50%',
      }} />
    </div>
  );
};

export default Spinner;
