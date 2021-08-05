import React from "react";
import Header from "../components/home/Header";

const defaultLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
};

export default defaultLayout;
