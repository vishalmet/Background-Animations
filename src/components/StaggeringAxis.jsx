// StaggeringAxisGridDemo.js
import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const StaggeringAxisGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.staggering-axis-grid-demo .el',
      translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
      translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
      rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
      delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
      easing: 'easeInOutQuad',
      loop: true // Make the animation continuous
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
    <div ref={gridRef} className="staggering-axis-grid-demo">
      {createGrid()}
    </div>
  );
};

export default StaggeringAxisGrid;
