import React, { useState } from "react";
import styles from "./Introduction.module.scss";
import Header from "../UI/Header/Header";
import TopHeader from "./TopHeader/TopHeader";
import WhatIs from "./WhatIs/WhatIs";
import WhyDev from "./WhyDev/WhyDev";
import Footer from "../UI/Footer/Footer";
import Modal from "../UI/Modal/Modal";
import SignIn from "../../containers/Introduction/SignIn/SignIn";

const Introduction = () => {
  const [showModal, setBackdrop] = useState({
    showModal: false,
    isSignUp: false
  });

  const changeModalHandler = (action) => {
    let isSignUp = false;
    if (action === "sign up") {
      isSignUp = true;
    }

    setBackdrop({
      showModal: !showModal.showModal,
      isSignUp: isSignUp
    });
  };

  return (
    <React.Fragment>
      {showModal.showModal ? (
        <Modal handler={changeModalHandler} show={showModal.showModal}>
          <SignIn isSignUp={showModal.isSignUp} isModal="true" />
        </Modal>
      ) : null}
      <Header handleSignIn={changeModalHandler} />
      <TopHeader handleSignIn={changeModalHandler} />
      <WhatIs />
      <WhyDev handleSignIn={changeModalHandler} />
      <Footer />
    </React.Fragment>
  );
};

export default Introduction;
