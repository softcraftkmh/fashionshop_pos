import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ShowCase from "../components/ShowCase";
import "./index.scss";

const index = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <ShowCase></ShowCase>
    </>
  );
};

export default index;
