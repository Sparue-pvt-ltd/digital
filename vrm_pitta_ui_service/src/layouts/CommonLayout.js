import React from "react";
import Header from "../components/common/Header";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
};

export default CommonLayout;
