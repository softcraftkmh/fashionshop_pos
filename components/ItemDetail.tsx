import React, { useState, useEffect } from "react";
import localforage from "localforage";

import { I_Item } from "../types";
import "./ItemDetail.scss";

const ItemDetail = ({ item }: { item: I_Item }) => {
  // Destructuring
  const { name, price, image, colors, sizes, id } = item;

  // State
  const [info, setInfo] = useState("");

  // Effects
  useEffect(() => {
    if (info) {
      setTimeout(() => {
        setInfo("");
      }, 3000);
    }
  }, [info]);

  // Functions
  const onAddToCart = async id => {
    let cartItems = [];
    const storedCartItems: [string] = await localforage.getItem("cart");
    if (storedCartItems) cartItems = storedCartItems;
    cartItems.push(id);
    setInfo("New item added to cart");
    await localforage.setItem("cart", cartItems);
  };

  return (
    <section className="ItemDetail">
      <img className="ItemDetail-img" src={image} alt="Item" />
      <div className="ItemDetail-infoWrapper">
        <div className="ItemDetail-contentContainer">
          <div className="ItemDetail-contentTitle">Product Name</div>
          <div className="ItemDetail-content">{name}</div>
          <div className="ItemDetail-contentTitle">Price</div>
          <div className="ItemDetail-content">{price}</div>
          <div className="ItemDetail-contentTitle">Available Sizes</div>
          <div className="ItemDetail-content">{sizes}</div>
          <div className="ItemDetail-contentTitle">Available Colors</div>
          <div className="ItemDetail-content">{colors}</div>
        </div>
        <div className="ItemDetail-info">{info}</div>
        <div className="ItemDetail-atcContainer">
          <button
            className="pure-button ItemDetail-atc"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
