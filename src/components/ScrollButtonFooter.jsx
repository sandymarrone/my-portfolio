import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import { FiChevronUp } from 'react-icons/fi';
import './ScrollButtonFooter.css';

function ScrollButtonFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <button className="scrollButtonFooter" onClick={scrollToTop}>
        <span className="scrollButtonFooter__text">Volver arriba</span>
        <FiChevronUp className="scrollButton__icon" />
      </button>
      {/* <button className={'scrollButtonFooter'} onClick={scrollToTop}>
        <FiChevronUp className="scrollButton__icon" />
      </button> */}
    </>
  );
}

export default ScrollButtonFooter;
