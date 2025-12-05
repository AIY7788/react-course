import "./Header.css";
import { NavLink, Link, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
import logoWite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png";

function Header({ cartItems }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  let cartQuantity = 0;

  cartItems.forEach((item) => {
    cartQuantity += item.quantity;
  });

  const [inputText, setInputText] = useState(search || "");

  const updateSearchInput = (e) => {
    setInputText(e.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${inputText}`);
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      navigate(`/?search=${inputText}`);
    }
  }

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src={logoWite} />
          <img className="mobile-logo" src={mobileLogoWhite} />
        </Link>
      </div>

      <div className="middle-section">
        <input
          value={inputText}
          onChange={updateSearchInput}
          onKeyDown={handleKeyDown}
          className="search-bar"
          type="text"
          placeholder="Search"
        />

        <button className="search-button" onClick={searchProducts}>
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
