import React from "react";
import "./brands.css";
import hmImg from "./../../img/brands/HM.png";
import obeyImg from "./../../img/brands/Obey.png";
import shopifyImg from "./../../img/brands/Shopify.png";
import lacosteImg from "./../../img/brands/Lacoste.png";
import levisImg from "./../../img/brands/Levis.png";
import amazonImg from "./../../img/brands/Amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img src={hmImg} alt="h%m" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={obeyImg} alt="obey" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={shopifyImg} alt="shopify" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={lacosteImg} alt="lacoste" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={levisImg} alt="levis" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={amazonImg} alt="amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
