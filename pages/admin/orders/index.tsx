import React, { useState, useCallback, useEffect } from "react";

import AdminAppBar from "components/AdminAppBar";
import api from "../../../utils/api";

import "./index.scss";

const Item = ({ item }) => {
  return (
    <div className="items-container">
      <img src={item.image} alt="item" className="items-img" />
      <div className="items-info">
        <p>{item.name}</p>
        <p>{item.price}USD</p>
      </div>
    </div>
  );
};

const Items = ({ items }) => {
  return items.map((item, i) => <Item item={item} key={item.i} />);
};

const Order = ({ order }) => {
  return (
    <div>
      <div className="customerName">Customer Name: {order.customer.name}</div>
      <div className="customerName">Items: </div>

      <div className="items">
        <Items items={order.items}></Items>
      </div>

      <hr />
    </div>
  );
};

const Orders = ({ orders }) => {
  return orders.map((order, i) => {
    return <Order order={order} key={i} />;
  });
};

const index = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function IIFE() {
      const response = await api.getOrders();
      setOrders(response.data.orders);
    })();
  }, []);

  return (
    <>
      <AdminAppBar />
      <section className="container">
        {orders && <Orders orders={orders}></Orders>}
      </section>
    </>
  );
};

export default index;
