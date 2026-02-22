// Page Transitions (Slide & Fade)
export const pageVariants = {
  initial: {
    opacity: 0,
    x: 20, // Slide in from right slightly
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // ease-out
    },
  },
  exit: {
    opacity: 0,
    x: -20, // Slide out to left
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1], // ease-in
    },
  },
};

// Card Reveal (Staggered Children)
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for lists/grids
    },
  },
};

// Individual Item Reveal
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

// Card Flip Animation (for Tarot)
export const flipVariants = {
  front: {
    rotateY: 0,
    transition: { duration: 0.6 }
  },
  back: {
    rotateY: 180,
    transition: { duration: 0.6 }
  }
};

// Pulse Animation (for Scanning/Loading)
export const pulseVariants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
