import React from "react";
import CODINGbook from "../images/CODINGbook.jpg";
import "../css/Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Cracking the Coding Interview, 6th Edition: 189 Programming Questions
          and Solutions
        </p>
        <p className="product__price">
          <small>€</small>
          <strong>37,62</strong>
        </p>
        <div className="product__rating">
          <span role="img" aria-label="star">
            ⭐
          </span>
        </div>
        <img
         className='product__image' src={CODINGbook} alt="CODINGbookImage" />

        <button className='buy'>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default Product;
