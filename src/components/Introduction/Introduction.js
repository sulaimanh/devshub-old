import React, { useState, useEffect, useRef } from "react";
import Header from "../UI/Header/Header";
import TopHeader from "./TopHeader/TopHeader";
import WhatIs from "./WhatIs/WhatIs";
import WhyDev from "./WhyDev/WhyDev";
import Footer from "../UI/Footer/Footer";

const Introduction = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-20px");
  return (
    <React.Fragment>
      <Header />
      <TopHeader />
      <WhatIs />
      <div ref={ref}>{onScreen ? <WhyDev onScreen={onScreen} /> : null}</div>
      <Footer />
    </React.Fragment>
  );
};

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export default Introduction;
