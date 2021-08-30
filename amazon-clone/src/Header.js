import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import {connect} from 'react-redux';

function Header({cartLength}) {
  const src =
    "https://p.kindpng.com/picc/s/17-172246_amazon-logo-white-amazon-logo-png-on-black.png";
  const src1 =
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg";
  const src2 =
    "https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png";
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img className="header__logo" src={src2}></img>
      </Link>
      {/* searchbox */}
      <div className="header__searchbox">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3links */}

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Abhijit</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo"> Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            {/* <ShoppingBasketOutlinedIcon/> */}
            {/* <span className="header__optionLineTwo"></span> */}
            <span className="header__optionLineTwo header__basketCount">{cartLength}</span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
      {/* <h1>header</h1> */}
    </nav>
  );
}

const mapStateToProps =(state)=>{
  return{
    cartLength: state.totalItems 
  }
}


export default connect(mapStateToProps)(Header);
