import React from "react";
import Menus from "../components/Menus";

const WaveBg = () => {
  return (
    <div className="bricolage-font">
      <div className="flex">
        <Menus />
      </div>
      <section className="wave-section">
        <div className="content-container text-white">
          <p className="flex justify-center text-xl md:text-4xl lg:text-6xl font-medium pb-16 md:pb-28">
            Wave background
          </p>
          <p className="flex justify-center text-base md:text-2xl lg:text-4xl">
            Explore other pages too, for more!
          </p>
        </div>
        <div className="wave-container">
          <svg
            className="wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#3c31dd"
              fillOpacity="1"
              d="M0,224L60,224C120,224,240,224,360,224C480,224,600,224,720,208C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <path
              fill="#2b2780"
              fillOpacity="1"
              d="M0,320L60,320C120,320,240,320,360,288C480,256,600,192,720,160C840,128,960,128,1080,128C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default WaveBg;
