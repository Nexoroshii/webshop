import React from "react";
import "./promo.css";
import promoImg from "./../../img/images/header-img.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo_text">Text</div>
          <div className="promo__img">
            <img src={promoImg} alt="promoImg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
