import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Item from "../components/Item";

import "./items.scss";

const items = ({ filter }) => {
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
            <Item
              img="/carousel(1).jpg"
              price="100 USD"
              name="Blue Jeans"
            ></Item>
            <Item
              img="/carousel(2).jpg"
              price="100 USD"
              name="Red Jeans"
            ></Item>
            <Item
              img="/carousel(3).jpg"
              price="100 USD"
              name="Green Jeans"
            ></Item>
            <Item
              img="/carousel(4).jpg"
              price="100 USD"
              name="Yellow Jeans"
            ></Item>
            <Item
              img="/carousel(5).jpg"
              price="100 USD"
              name="Black Jeans"
            ></Item>
            <Item
              img="/carousel(1).jpg"
              price="100 USD"
              name="White Jeans"
            ></Item>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

items.getInitialProps = ({ query }) => {
  return { filter: query.filter };
};

export default items;
