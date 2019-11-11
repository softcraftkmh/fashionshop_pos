import React from "react";

import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signIn-title">
        <span>Sign In</span>
        <br />
        <span>If you already have an account, sign in here</span>
      </div>
      <form className="pure-form pure-form-stacked ">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
        <div className="signIn-empty"></div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
        <div className="signIn-empty"></div>
        <button
          type="submit"
          className="pure-button pure-button-primary signIn-button"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
