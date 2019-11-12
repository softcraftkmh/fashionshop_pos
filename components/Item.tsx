import React from "react";

import "./Item.scss";

const Item = ({ img, name, price }) => {
  return (
    <div className="item">
      <img src={img} alt={name} className="item-img" />
      <div>{name}</div>
      <div>{price}</div>
      <button className="pure-button item-button-success">Buy Now</button>
    </div>
  );
};

export default Item;
