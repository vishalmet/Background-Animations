// StaggeringGridDemo.js
import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const StaggeringGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.staggering-grid-demo .el',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });
  }, []);

  const createGrid = () => {
    const elements = [];
    for (let i = 0; i < 70; i++) { // 14 * 5 grid
      elements.push(<div key={i} className="el"></div>);
    }
    return elements;
  };

  return (
    <div ref={gridRef} className="staggering-grid-demo">
      {createGrid()}
    </div>
  );
};

export default StaggeringGrid;
