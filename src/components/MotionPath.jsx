// StarPathAnimation.js
import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const MotionPath = () => {
  useEffect(() => {
    const starPath = anime.path('.star-path-demo path');

    anime({
      targets: '.star-path-demo .el',
      translateX: starPath('x'),
      translateY: starPath('y'),
      rotate: starPath('angle'),
      easing: 'linear',
      duration: 3000,
      loop: true
    });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-64 h-64 star-path-demo">
        <path fill="none" stroke="#000" d="M200,100 L240,220 L340,220 L260,290 L280,380 L200,320 L120,380 L140,290 L60,220 L160,220 Z"/>
        <circle className="el" cx="0" cy="0" r="10" fill="#0074D9"/>
      </svg>
    </div>
  );
};

export default MotionPath;
