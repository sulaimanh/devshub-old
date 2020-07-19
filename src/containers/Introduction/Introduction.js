import React, { Fragment, useState } from "react";

import Header from "../../components/UI/Header/HeaderIntro/HeaderIntro";
import Modal from "../../components/UI/Modal/Modal";
import SignIn from "./SignIn/SignIn";
import TopHeader from "../../components/Introduction/TopHeader/TopHeader";
import WhatIs from "../../components/Introduction/WhatIs/WhatIs";
import WhyDev from "../../components/Introduction/WhyDev/WhyDev";

const Introduction = () => {
  const [showModal, setModal] = useState({
    showModal: false,
    isSignUp: false
  });

  const changeModalHandler = (event, action) => {
    let isSignUp = false;
    if (action === "sign up") {
      isSignUp = true;
    }

    setModal({
      showModal: !showModal.showModal,
      isSignUp: isSignUp
    });
  };

  return (
    <Fragment>
      {showModal.showModal ? (
        <Modal
          className='intro'
          handler={changeModalHandler}
          show={showModal.showModal}
        >
          <SignIn isSignUp={showModal.isSignUp} isModal='true' />
        </Modal>
      ) : null}
      <Header
        showModal={showModal.showModal}
        handleSignIn={changeModalHandler}
      />
      <TopHeader handleSignIn={changeModalHandler} />
      <WhatIs />
      <WhyDev handleSignIn={changeModalHandler} />
    </Fragment>
  );
};

export default Introduction;
