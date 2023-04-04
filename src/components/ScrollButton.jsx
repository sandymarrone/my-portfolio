import { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { FiChevronUp } from 'react-icons/fi';
import './ScrollButton.css';
import { motion } from 'framer-motion';

function ScrollButton() {
  // const [visible, setVisible] = useState(false);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled <= 500) {
  //     setVisible(false);
  //   } else if (scrolled > 500) {
  //     setVisible(true);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // };

  // window.addEventListener('scroll', toggleVisible);

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
      {/* <button
        className={visible ? 'scrollButton active' : 'scrollButton'}
        onClick={scrollToTop}
      >
        <FiChevronUp className="scrollButton__icon" />
      </button> */}
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
