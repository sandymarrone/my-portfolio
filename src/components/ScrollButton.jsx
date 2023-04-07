import './ScrollButton.css';
import { motion } from 'framer-motion';

function ScrollButton() {
  const scrollButton = {
    hidden: { y: 50, opacity: 0, rotate: -90 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 2 },
    },
  };

  return (
    <>
      <motion.a
        class="link"
        href="#about"
        variants={scrollButton}
        initial="hidden"
        animate="show"
      >
        <span class="link__arrow">
          <span></span>
          <span></span>
        </span>
        <span class="link__line"></span>
        <span class="link__text">Scroll</span>
      </motion.a>
    </>
  );
}

export default ScrollButton;
