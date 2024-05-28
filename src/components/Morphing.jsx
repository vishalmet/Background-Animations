// MorphingAnimation.js
import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const MorphingAnimation = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const gradient = gradientRef.current;

    const animateGradient = () => {
      anime({
        targets: gradient,
        x1: ['0%', '100%'],
        y1: ['0%', '100%'],
        x2: ['100%', '0%'],
        y2: ['100%', '0%'],
        easing: 'linear',
        duration: 2000,
        loop: true
      });
    };

    animateGradient();

    anime({
      targets: '.morphing-demo .polymorph',
      points: [
        { value: [
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
          '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
        },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 4000,
      loop: true
    });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" className="w-96 h-96">
        <defs>
          <linearGradient id="gradient" ref={gradientRef} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0000FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="morphing-demo">
          <polygon className="polymorph" fill="url(#gradient)" points="70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369"/>
        </g>
      </svg>
    </div>
  );
};

export default MorphingAnimation;
