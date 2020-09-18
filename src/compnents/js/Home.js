import React from "react";
import Product from "../js/Product";
import AmazonPrime from "../images/AmazonPrime.jpg";
import CODINGbook from "../images/CODINGbook.jpg";
import Asp from '../images/asp_.jpg'
import cap from '../images/bcap.jpg'
import cat from '../images/cat.jpg'
import unicorn from '../images/unicorn.jpg'

import "../css/Home.css";
function Home() {
  return (
    <div className="home">
      <img className="home__image" src={AmazonPrime} alt="AmazonPrime" />

      <div className="home__row">
        <Product
          id="1"
          title="Cracking the Coding Interview, 6th Edition: 189 Programming Questions and Solutions"
          price="37.62"
          rating={5}
          image={CODINGbook}
        />
        <Product
          id="2"
          title="Rowenta RY8544WH Clean & Steam Multi, ​nettoyeur Vapeur 2 en 1, Nettoie et Aspire en Même Temps à la Vapeur Tous les Sols et Toutes les Sufaces Performant"
          price="292.99"
          rating={5}
          image={Asp}
        />
       
      </div>
      <div className="home__row">
      <Product
          id="3"
          title="Tasses en céramique pour lait, café, thé–tasse pour petit déjeuner avec animal 3D, Cadeau idéal pour boisson du matin, ou pour les mariages, anniversaires, Céramique, 8oz "
          price="12.99"
          rating={3}
          image={cap}
        />
      <Product
          id="4"
          title="Tasses en céramique pour lait, café, thé–tasse pour petit déjeuner avec animal 3D, Cadeau idéal pour boisson du matin, ou pour les mariages, anniversaires, Céramique, 8oz "
          price="14.20"
          rating={3}
          image={unicorn}
        />
      <Product
          id="5"
          title="Tasses en céramique pour lait, café, thé–tasse pour petit déjeuner avec animal 3D, Cadeau idéal pour boisson du matin, ou pour les mariages, anniversaires, Céramique, 8oz "
          price="16.95"
          rating={3}
          image={cat}
        />
      </div>
      <div className="home__row"></div>
    </div>
  );
}

export default Home;
