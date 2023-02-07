import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { FiChevronUp } from 'react-icons/fi';
import './ScrollButton.css';

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled <= 500) {
      setVisible(false);
    } else if (scrolled > 500) {
      setVisible(true);
    }
    // else if (scrolled >= 3000) {
    //   setVisible(false);
    // }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <button
        className={visible ? 'scrollButton active' : 'scrollButton'}
        onClick={scrollToTop}
      >
        <FiChevronUp className="scrollButton__icon" />
      </button>
    </>
  );
}

export default ScrollButton;
