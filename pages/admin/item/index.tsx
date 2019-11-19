import React, { useState } from "react";

import AdminAppBar from "components/AdminAppBar";

import "./index.scss";

interface Item {
  name: string;
  price: string;
  sizes: string;
  colors: string;
}

const index = () => {
  const [item, setItem] = useState<Item>({
    name: "",
    price: "",
    sizes: "",
    colors: ""
  });

  const { name, price, sizes, colors } = item;

  const onChangeItem = (event, tag) => {
    const { value } = event.target;
    setItem({ ...item, [tag]: value });
  };

  const submitItem = event => {
    event.preventDefault();
    console.log(item);
  };

  return (
    <div>
      <AdminAppBar></AdminAppBar>
      <section>
        <form className="pure-form pure-form-aligned formWrapper">
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="name">Item Name</label>
              <input
                id="name"
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={event => onChangeItem(event, "name")}
              />
            </div>

            <div className="pure-control-group">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                placeholder="Price"
                value={price}
                onChange={event => onChangeItem(event, "price")}
              />
            </div>

            <div className="pure-control-group">
              <label htmlFor="sizes">Available Sizes</label>
              <input
                id="sizes"
                type="text"
                placeholder="Sizes"
                value={sizes}
                onChange={event => onChangeItem(event, "sizes")}
              />
            </div>

            <div className="pure-control-group">
              <label htmlFor="colors">Available Colors</label>
              <input
                id="colors"
                type="text"
                placeholder="Colors"
                value={colors}
                onChange={event => onChangeItem(event, "colors")}
              />
            </div>

            <div className="pure-controls">
              <button
                type="submit"
                className="pure-button pure-button-primary"
                onClick={submitItem}
              >
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
