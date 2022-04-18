import React, { useState } from "react";
import { motion } from "framer-motion";
import { LineAnim } from "./../Animate";
const Toggel = ({ children, title }) => {
  const [toggel, setToggel] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggel(!toggel)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggel ? children : ""}
      <motion.div className="faq-line" variants={LineAnim}></motion.div>
    </motion.div>
  );
};
export default Toggel;
