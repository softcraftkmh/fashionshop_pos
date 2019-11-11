import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

import "./account.scss";

const account = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <section className="account">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default account;
