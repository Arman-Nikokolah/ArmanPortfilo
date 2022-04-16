export const pageAnimate = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};
export const Tag = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const Tagp = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const ImageTag = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

export const NavAnimations = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
    when: "beforeChildren",
    ease: "easeOut",
    staggerChildren: 0.25,
    y: 0,
  },
};

export const LineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    transition: {
      duration: 1,
    },
    width: "100%",
  },
};

export const Slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const SliderLine = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};
