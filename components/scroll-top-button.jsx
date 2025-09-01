"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-24 right-6  z-50 
            p-4 rounded-full 
            bg-primary/20 backdrop-blur-md border border-primary
            text-primary hover:bg-white/30 hover:text-primary
            shadow-lg transition
          "
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
