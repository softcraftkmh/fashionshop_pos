import React from "react";
import Link from "next/link";

import "./NavBar.scss";

const AdminAppBar = () => {
  return (
    <div className="navBar">
      <Link href="/admin/items">
        <button className="pure-button navBar-button">Items</button>
      </Link>
      <Link href="/admin/orders">
        <button className="pure-button navBar-button">Orders</button>
      </Link>
    </div>
  );
};

export default AdminAppBar;
