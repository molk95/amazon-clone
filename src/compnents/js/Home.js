import React from "react";
import Product from "../js/Product";
import AmazonPrime from "../images/AmazonPrime.jpg";
import CODINGbook from "../images/CODINGbook.jpg";
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
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
}

export default Home;
