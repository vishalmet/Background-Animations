import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const RandomSolidsAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const randomValues = () => {
      anime({
        targets: elementsRef.current,
        translateX: function(el) {
          // Ensure the elements don't overflow the screen on the X-axis
          const maxTranslateX = window.innerWidth - el.offsetWidth;
          return anime.random(0, maxTranslateX);
        },
        easing: 'easeInOutQuad',
        duration: 1500,
        complete: randomValues
      });
    };

    // Set all elements to the same initial position
    elementsRef.current.forEach(el => {
      if (el) {
        el.style.transform = 'translateX(0px)';
      }
    });

    randomValues();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="random-solids-demo space-y-4">
        <div ref={el => elementsRef.current[0] = el} className="el w-10 h-10 bg-blue-500 rounded-full"></div>
        <div ref={el => elementsRef.current[1] = el} className="el w-10 h-10 bg-red-500 rounded-full"></div>
        <div ref={el => elementsRef.current[2] = el} className="el w-10 h-10 bg-green-500 rounded-full"></div>
        {/* Add more solid elements if needed */}
      </div>
    </div>
  );
};

export default RandomSolidsAnimation;
