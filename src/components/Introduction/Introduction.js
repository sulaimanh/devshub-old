import React from "react";
import Header from "../UI/Header/Header";
import TopHeader from "./TopHeader/TopHeader";
import WhatIs from "./WhatIs/WhatIs";
import WhyDev from "./WhyDev/WhyDev";

const introduction = () => {
  return (
    <React.Fragment>
      <Header />
      <TopHeader />
      <WhatIs />
      <WhyDev />
    </React.Fragment>
  );
};

export default introduction;
