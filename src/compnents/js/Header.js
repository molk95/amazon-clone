import React from "react";
import AmazonLogo from "../images/amazon_PNG11.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "../css/Header.css";
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={AmazonLogo} alt="amazonLogo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Bonjour, Identifiez-vous</span>
            <span className="header__optionTwo">Compte et listes</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Retours </span>
            <span className="header__optionTwo">et Commandes</span>
          </div>
        </Link>
        <Link to="/prime" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Testez</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <ShoppingCartIcon />
            <span className="header__optionTwo header__optionCartCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
