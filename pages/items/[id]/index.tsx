import React from "react";

import Header from "components/Header";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import ItemDetail from "components/ItemDetail";
import "./index.scss";

import api from "utils/api";

const item = ({ item }) => {
  return (
    <>
      <Header />
      <NavBar />
      <ItemDetail item={item} />
      <Footer />
    </>
  );
};

item.getInitialProps = async ({ query }) => {
  const { id } = query;
  const { data } = await api.getItem(id);
  return { item: { ...data.item, id: data.item._id } };
};

export default item;
