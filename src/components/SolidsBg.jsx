import { React, useEffect } from "react";
import "../App.css";

// const moveSolids = () => {
//   const solids = document.querySelectorAll(".gradient-solid");
//   solids.forEach((solid) => {
//     const randomX = Math.random() * window.innerWidth;
//     const randomY = Math.random() * window.innerHeight;
//     solid.style.left = `${randomX}px`;
//     solid.style.top = `${randomY}px`;
//   });
// };
const SolidsBg = () => {
//   useEffect(() => {
//     const intervalId = setInterval(moveSolids, 5000);  
//     return () => clearInterval(intervalId);  
//   }, []);

  return (
    <div className="fluid-background relative ">
      <div className="gradient-solid gradient-solid-1 absolute"></div>
      <div className="gradient-solid gradient-solid-2 absolute"></div>
    </div>
  );
};

export default SolidsBg;
