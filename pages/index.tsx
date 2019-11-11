import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ShowCase from "../components/ShowCase";
import FeaturedItems from "../components/FeaturedItems";
import Footer from "../components/Footer";
import "./index.scss";

const index = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <ShowCase></ShowCase>
      <FeaturedItems></FeaturedItems>
      <Footer></Footer>
    </>
  );
};

export default index;
