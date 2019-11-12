import React from "react";

import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signUp-title">
        <span>Create Account</span>
        <br />
        <span>If you don't have account, sign up here</span>
      </div>
      <form className="pure-form pure-form-stacked ">
        <label htmlFor="email">Email</label>
        <input
          id="signUp-email"
          type="email"
          placeholder="Enter your email address"
        />
        <div className="signUp-empty"></div>
        <label htmlFor="password">Create Password</label>
        <input
          id="signUp-password"
          type="password"
          placeholder="Enter your password"
        />
        <label htmlFor="password">Re-enter Password</label>
        <input
          id="signUp-re-password"
          type="password"
          placeholder="Re-enter your password"
        />
        <div className="signUp-empty"></div>
        <button
          type="submit"
          className="pure-button pure-button-primary signUp-button"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
