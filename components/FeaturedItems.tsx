import React from "react";

import "./FeaturedItems.scss";

const FeaturedItem = ({ name, img, description }) => (
  <div className="featuredItems-item">
    <div className="featuredItems-title">{name}</div>
    <img src={img} alt={name} className="featuredItems-img" />
    <div className="featuredItems-description">{description}</div>
  </div>
);

const FeaturedItems = () => {
  return (
    <section className="featuredItems">
      <FeaturedItem
        name="New Arrivals"
        img="/carousel(1).jpg"
        description="Take a look"
      />
      <div></div>
      <FeaturedItem name="Hot" img="/carousel(2).jpg" description="Show now" />
    </section>
  );
};

export default FeaturedItems;
