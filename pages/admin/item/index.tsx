import React, { useState } from "react";

import AdminAppBar from "components/AdminAppBar";

import "./index.scss";

const index = () => {
  const [{}, setValue] = useState("");

  return (
    <div>
      <AdminAppBar></AdminAppBar>
      <section>
        <form className="pure-form pure-form-aligned formWrapper">
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="name">Item Name</label>
              <input id="name" type="text" placeholder="Item Name" />
            </div>

            <div className="pure-control-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Password" />
            </div>

            <div className="pure-control-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="Email Address" />
            </div>

            <div className="pure-control-group">
              <label htmlFor="foo">Supercalifragilistic Label</label>
              <input
                id="foo"
                type="text"
                placeholder="Enter something here..."
              />
            </div>

            <div className="pure-controls">
              <label htmlFor="cb" className="pure-checkbox">
                <input id="cb" type="checkbox" /> I've read the terms and
                conditions
              </label>

              <button type="submit" className="pure-button pure-button-primary">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default index;
