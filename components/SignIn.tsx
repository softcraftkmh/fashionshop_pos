import React, { useState, useEffect } from "react";
import Router from "next/router";
import localforage from "localforage";

import "./SignIn.scss";
import { I_Customer } from "types";
import api from "utils/api";

const SignIn = () => {
  const [user, setUser] = useState<I_Customer>({ email: "", password: "" });
  const [info, setInfo] = useState<String>("");

  useEffect(() => {
    if (info)
      setTimeout(() => {
        setInfo("");
      }, 3000);
  }, [info]);

  const onSignIn = async e => {
    e.preventDefault();
    const response = await api.loginUser({ payload: { ...user } });
    if (response.status === "success") {
      await localforage.setItem("user", response.data.customer);
      Router.push("/");
    } else setInfo(response.message);
  };

  return (
    <div className="signIn">
      <div className="signIn-title">
        <span>Sign In</span>
        <br />
        <span>If you already have an account, sign in here</span>
      </div>
      <form className="pure-form pure-form-stacked ">
        <label htmlFor="signIn-email">Email</label>
        <input
          id="signIn-email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={e => {
            const { value } = e.target;
            setUser({ ...user, email: value });
          }}
        />
        <div className="signIn-empty"></div>
        <label htmlFor="signIn-password">Password</label>
        <input
          id="signIn-password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={e => {
            const { value } = e.target;
            setUser({ ...user, password: value });
          }}
        />
        <div className="signIn-empty"></div>
        <div className="info">{info}</div>
        <button
          type="submit"
          className="pure-button pure-button-primary signIn-button"
          onClick={onSignIn}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
