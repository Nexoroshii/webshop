import React from "react";
import "./promo.css";
import promoImg from "./../../img/images/header-img.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span class="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span class="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__descr">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promoImg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
