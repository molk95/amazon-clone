import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The book</p>
        <small>$</small>
        <strong>19.99</strong>
        <Rating />
        <img />
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default Product;
