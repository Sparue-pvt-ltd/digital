import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/common/Footer";

const defaultLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default defaultLayout;
