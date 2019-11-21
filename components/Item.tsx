import React from "react";
import Router from "next/router";

import "./Item.scss";

const Item = ({ img, name, price, id }) => {
  return (
    <div className="item">
      <img src={img} alt={name} className="item-img" />
      <div>{name}</div>
      <div>{price} USD</div>
      <button
        className="pure-button item-button-success"
        onClick={() => Router.push("/items/" + id)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Item;
