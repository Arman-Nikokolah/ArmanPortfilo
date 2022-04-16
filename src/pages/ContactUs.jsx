import React from "react";
import { motion } from "framer-motion";
import { pageAnimate } from "../Animate";
const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimate}
      initial="hidden"
      animate="show"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
