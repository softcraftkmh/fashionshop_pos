import React, { useState, useCallback, useEffect } from "react";

import "./SignUp.scss";

import { I_Customer } from "types";
import api from "utils/api";

const SignUp = () => {
  const [customer, setCustomer] = useState<I_Customer>({
    name: "",
    password: "",
    email: ""
  });
  const [info, setInfo] = useState<String>("");

  const onSignUp = async e => {
    e.preventDefault();
    const response = await api.postUser({ payload: customer });
    setInfo(response.message);
  };

  useEffect(() => {
    if (info)
      setTimeout(() => {
        setInfo("");
      }, 3000);
  }, [info]);

  return (
    <div className="signUp">
      <div className="signUp-title">
        <span>Create Account</span>
        <br />
        <span>If you don't have account, sign up here</span>
      </div>
      <form className="pure-form pure-form-stacked ">
        <label htmlFor="signUp-name">Name</label>
        <input
          id="signUp-name"
          type="text"
          placeholder="Enter your name"
          value={customer.name}
          onChange={event => {
            const { value } = event.target;
            setCustomer({ ...customer, name: value });
          }}
        />
        <div className="signUp-empty"></div>

        <label htmlFor="signUp-email">Email</label>
        <input
          id="signUp-email"
          type="email"
          placeholder="Enter your email address"
          value={customer.email}
          onChange={event => {
            const { value } = event.target;
            setCustomer({ ...customer, email: value });
          }}
        />
        <div className="signUp-empty"></div>

        <label htmlFor="signUp-password">Create Password</label>
        <input
          id="signUp-password"
          type="password"
          placeholder="Enter your password"
          value={customer.password}
          onChange={event => {
            const { value } = event.target;
            setCustomer({ ...customer, password: value });
          }}
        />

        <label htmlFor="signUp-re-password">Re-enter Password</label>
        <input
          id="signUp-re-password"
          type="password"
          placeholder="Re-enter your password"
        />
        <div className="signUp-empty"></div>

        <div className="info">{info}</div>

        <button
          type="submit"
          className="pure-button pure-button-primary signUp-button"
          onClick={onSignUp}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
