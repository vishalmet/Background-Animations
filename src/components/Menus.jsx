import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-transparent backdrop-filter backdrop-blur-lg backdrop-opacity-20 z-50 w-full fixed ">
      <div className=" flex justify-end  p-10">
        <div className=" ">
          <motion.button
            onClick={handleMenuClick}
            className="bg-black text-white px-4 py-2 rounded-md"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.button>

          <ul>
            <motion.div
              className="mt-4 p-2 space-y-2 bg-gray-400 rounded-md h-fit w-fit"
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -100 }}
              transition={{ duration: 0.3 }}
            >
              <li>
                <motion.a
                  href="/"
                  className=" px-4 py-2 rounded hover:cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  //   onClick={() => handleMenuItemClick('animated-solids')}
                >
                  Animated Solids
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/curvybg"
                  className=" px-4 py-2 rounded-md hover:cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  //   onClick={() => handleMenuItemClick('curve-background')}
                >
                  Curve Background
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/wavebg"
                  className=" px-4 py-2 rounded-md hover:cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  //   onClick={() => handleMenuItemClick('menu-item-3-section')}
                >
                  Wave Background
                </motion.a>
              </li>
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menus;
