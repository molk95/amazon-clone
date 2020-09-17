import React from "react";
import AmazonLogo from "./amazon_PNG11.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={AmazonLogo} alt="amazonLogo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Bonjour, Identifiez-vous</span>
          <span className="header__optionTwo">Compte et listes</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Retours </span>
          <span className="header__optionTwo">et Commandes</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Testez</span>
          <span className="header__optionTwo">Prime</span>
        </div>
       < div className='header__optionCart'>
         <ShoppingCartIcon  />
         <span className='header__optionTwo header__optionCartCount' >0</span>
       </div>
      </div>
    </div>
  );
}

export default Header;
