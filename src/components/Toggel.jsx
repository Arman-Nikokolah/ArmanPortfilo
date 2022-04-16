import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggel = ({ children, title }) => {
  const [toggel, setToggel] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggel(!toggel)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggel ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};
export default Toggel;
