import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../../styles/component/animatedBackground.css';

const AnimatedBackground = () => {
  const gradientProps = useSpring({
    loop: true,
    to: async (next) => {
      while (true) {
        await next({ backgroundPosition: '0% 50%' });
        await next({ backgroundPosition: '100% 50%' });
      }
    },
    from: { backgroundPosition: '0% 50%' },
    config: { duration: 15000, tension: 120, friction: 14 },
  });

  const starProps = useSpring({
    loop: true,
    to: async (next) => {
      while (true) {
        await next({ backgroundPosition: '0% 0%' });
        await next({ backgroundPosition: '100% 100%' });
      }
    },
    from: { backgroundPosition: '0% 0%' },
    config: { duration: 15000, tension: 120, friction: 14 }, 
  });

  return (
    <>
      <animated.div className="animated-background" style={gradientProps}></animated.div>
      <animated.div className="star-overlay" style={starProps}></animated.div>
    </>
  );
};

export default AnimatedBackground;
