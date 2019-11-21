import React, { useState, useEffect } from "react";

import localforage from "localforage";

import Header from "components/Header";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import api from "utils/api";
import "./index.scss";
import { I_Customer } from "types";

const Item = ({ item }) => {
  return (
    <div className="cart-container">
      <img src={item.image} alt="item" className="cart-img" />
      <div className="cart-info">
        <p>{item.name}</p>
        <p>{item.price}USD</p>
      </div>
    </div>
  );
};

const Items = ({ items }) => {
  return items.map((item, i) => <Item item={item} key={item.i} />);
};

// MAIN
const index = () => {
  const [items, setItems] = useState();
  const [info, setInfo] = useState<String>("");

  // when page starts
  useEffect(() => {
    (async function IIFE() {
      const itemId: [string] = await localforage.getItem("cart");
      const toCalls = itemId.map(id => api.getItem(id));
      const responses = await Promise.all(toCalls);
      const items = responses.map(({ data: { item } }) => item);
      setItems(items);
    })();
  }, []);

  // Info Clean
  useEffect(() => {
    if (info)
      setTimeout(() => {
        setInfo("");
      }, 3000);
  }, [info]);

  const onCheckOut = async () => {
    const user: I_Customer = await localforage.getItem("user");
    console.log("TCL: onCheckOut -> user", user);
    const itemIds = items.map(({ _id }) => _id);
    if (!user) return setInfo("Please login to checkout");
    const payload = {
      customer: user[0]._id,
      items: itemIds
    };
    const response = await api.postOrder({ payload });
    setInfo(response.message);
    if (response.status === "success") {
      setItems([]);
      localforage.setItem("cart", []);
    }
  };

  const getTitle = () => {
    if (!items) return "Cart is empty";
    else if (items.length === 0) return "Cart is empty";
    else if (items) return "Cart";
  };

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <section>
        <p className="title">{getTitle()}</p>
        <div className="cart">{items && <Items items={items}></Items>}</div>
        <div className="info">{info}</div>
        <div className="checkOut-wrapper">
          <button className="pure-button checkOut" onClick={onCheckOut}>
            Check Out
          </button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default index;
