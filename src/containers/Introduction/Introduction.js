import React, { useState } from "react";
import styles from "./Introduction.module.scss";
import Header from "../../components/UI/Header/Header";
import TopHeader from "../../components/Introduction/TopHeader/TopHeader";
import WhatIs from "../../components/Introduction/WhatIs/WhatIs";
import WhyDev from "../../components/Introduction/WhyDev/WhyDev";
import Footer from "../../components/UI/Footer/Footer";
import Modal from "../../components/UI/Modal/Modal";
import SignIn from "./SignIn/SignIn";

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
