import React, { useState } from "react";

import Header from "components/Header";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Item from "components/Item";

import "./items.scss";
import api from "utils/api";

const Items = ({ items }) => {
  console.log("TCL: items", items);
  return items.map(item => (
    <Item
      id={item._id}
      key={item._id}
      name={item.name}
      img={item.image}
      price={item.price}
    ></Item>
  ));
};

const items = ({ filter, data }) => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <section className="items">
        <div className={"items-options " + `items-${filter}`}>
          {filter === "women" && (
            <>
              <h3>Women</h3>
              <ul>
                <li>Tops</li>
                <li>Dress</li>
                <li>Bottoms</li>
              </ul>
            </>
          )}
          {filter === "men" && (
            <>
              <h3>Men</h3>
              <ul>
                <li>Tops</li>
                <li>Bottoms</li>
              </ul>
            </>
          )}

          <h3>Style</h3>
          <ul>
            <li>Active</li>
            <li>Fashion</li>
            <li>Street wear</li>
            <li>Casual</li>
            <li>Formal</li>
          </ul>
          <h3>Size</h3>
          <ul>
            <li>Xs</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>Xl</li>
          </ul>
        </div>
        <div className="items-filteredItems">
          <h2 className="items-header">
            {filter === "women" ? "Women" : "Men"}
          </h2>
          <div className="items-filteredItems-container">
            <Items items={data.items}></Items>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

items.getInitialProps = async ({ query }) => {
  const { data } = await api.getItems();
  return { filter: query.filter, data };
};

export default items;
