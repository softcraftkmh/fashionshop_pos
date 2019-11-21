import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import _ from "lodash";

import AdminAppBar from "components/AdminAppBar";
import api from "../../../utils/api";
import helper from "../../../utils/helpers";

import "./index.scss";
import { I_Item, I_Info } from "../../../types";

interface Snackbar {}

const imgPlaceholder =
  "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081";

const index = () => {
  const [info, setInfo] = useState<I_Info>({
    desc: "",
    isShow: false
  });
  const [item, setItem] = useState<I_Item>({
    name: "",
    price: "",
    sizes: "",
    colors: "",
    image: "",
    id: ""
  });
  const [image, setImage] = useState<string>("");

  const { name, price, sizes, colors } = item;

  const onChangeItem = (value, tag) => {
    setItem({ ...item, [tag]: value });
  };

  const reset = () => {
    setInfo({ desc: "", isShow: false });
    setItem({ name: "", price: "", sizes: "", colors: "", image: "", id: "" });
    setImage("");
  };

  useEffect(() => {
    if (info.isShow) {
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }, [info]);

  const onDrop = useCallback(async acceptedFiles => {
    const { data } = await api.getCloudinary();
    const formData = helper.generateCloudinaryFormData({
      data,
      file: acceptedFiles[0]
    });
    const { secure_url } = await api.postImage({
      uploadUrl: data.uploadUrl,
      formData
    });
    setImage(secure_url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const submitItem = async event => {
    event.preventDefault();
    try {
      const response = await api.postItem({ payload: { ...item, image } });
      console.log("TCL: response", response);
      if (response.status === "success")
        setInfo({ desc: "Item created successfully.", isShow: true });
      else setInfo({ desc: "An error occurred.", isShow: true });
    } catch (error) {
      setInfo({ desc: "An error occurred.", isShow: true });
    }
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
                onChange={event => onChangeItem(event.target.value, "name")}
              />
            </div>

            <div className="pure-control-group">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                placeholder="Price"
                value={price}
                onChange={event => onChangeItem(event.target.value, "price")}
              />
            </div>

            <div className="pure-control-group">
              <label htmlFor="sizes">Available Sizes</label>
              <input
                id="sizes"
                type="text"
                placeholder="Sizes"
                value={sizes}
                onChange={event => onChangeItem(event.target.value, "sizes")}
              />
            </div>

            <div className="pure-control-group">
              <label htmlFor="colors">Available Colors</label>
              <input
                id="colors"
                type="text"
                placeholder="Colors"
                value={colors}
                onChange={event => onChangeItem(event.target.value, "colors")}
              />
            </div>

            <div className="pure-control-group ">
              <div className="itemImg" {...getRootProps()}>
                <div className="itemImg-label">Image</div>
                <div className="itemImg-imgContainer">
                  <input id="image" {...getInputProps()} />
                  <img
                    className="itemImg-img"
                    src={image ? image : imgPlaceholder}
                    alt="placeholder"
                  />
                </div>
              </div>
            </div>

            {info.isShow && <p className="info">{info.desc}</p>}

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
