import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FeqSection from "../components/FeqSection";
import { motion } from "framer-motion";
import { pageAnimate } from "../Animate";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FeqSection />
    </motion.div>
  );
};

export default AboutUs;
