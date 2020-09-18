import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "../css/Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                <StarIcon className="product__star" />
              </span>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="product" />
      <button className="product__button">Ajouter au panier</button>
    </div>
  );
}

export default Product;
