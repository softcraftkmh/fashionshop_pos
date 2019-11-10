import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./ShowCase.scss";

const ShowCase = () => {
  return (
    <div className="showCase">
      <span className="showCase-promotionalText">
        Show up now and get 15% off in offer
      </span>
      <div>
        <Carousel className="showCase-carousel" showThumbs={false}>
          <div>
            <img src="/carousel(1).jpg" className="showCase-img" />
          </div>
          <div>
            <img src="/carousel(2).jpg" className="showCase-img" />
          </div>
          <div>
            <img src="/carousel(3).jpg" className="showCase-img" />
          </div>
          <div>
            <img src="/carousel(4).jpg" className="showCase-img" />
          </div>
          <div>
            <img src="/carousel(5).jpg" className="showCase-img" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ShowCase;
