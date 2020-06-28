import React from "react";
import styles from "./Introduction.module.scss";
import Header from "../UI/Header/Header";
import TopHeader from "./TopHeader/TopHeader";
import WhatIs from "./WhatIs/WhatIs";
import WhyDev from "./WhyDev/WhyDev";
import Footer from "../UI/Footer/Footer";
import Modal from "../UI/Modal/Modal";
// import useOnScreen from "../../hooks/useOnScreen";

const Introduction = () => {
  return (
    <React.Fragment>
      <Header />
      <TopHeader />
      <WhatIs />

      <WhyDev />

      <Footer />
    </React.Fragment>
  );
};

export default Introduction;
