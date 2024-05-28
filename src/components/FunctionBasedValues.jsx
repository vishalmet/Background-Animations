// FunctionBasedValuesDemo.js
import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import image1 from '../assets/avatar.png';
import image2 from '../assets/customer1.png';
import image3 from '../assets/gem.png';
import image4 from '../assets/hands.png';

const FunctionBasedValues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".function-based-values-demo .el",
      translateX: function (el) {
        return el.getAttribute("data-x");
      },
      translateY: function (el, i) {
        return 50 + -50 * i;
      },
      scale: function (el, i, l) {
        return l - i + 0.25;
      },
      rotate: function () {
        return anime.random(-360, 360);
      },
      borderRadius: function () {
        return ["50%", anime.random(10, 35) + "%"];
      },
      duration: function () {
        return anime.random(1200, 1800);
      },
      delay: function () {
        return anime.random(0, 400);
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div ref={containerRef} className="function-based-values-demo">
      <div
        className="el"
        data-x="100"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div
        className="el"
        data-x="200"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      <div
        className="el"
        data-x="300"
        style={{ backgroundImage: `url(${image3})` }}
      ></div>
      <div
        className="el"
        data-x="400"
        style={{ backgroundImage: `url(${image4})` }}
      ></div>
    </div>
  );
};

export default FunctionBasedValues;
