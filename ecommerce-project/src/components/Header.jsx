import "./Header.css";
import { NavLink, Link } from "react-router";
import logoWite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png";

function Header({ cartItems }) {
  let cartQuantity = 0;

  cartItems.forEach((item) => {
    cartQuantity += item.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src={logoWite} />
          <img className="mobile-logo" src={mobileLogoWhite} />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
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
