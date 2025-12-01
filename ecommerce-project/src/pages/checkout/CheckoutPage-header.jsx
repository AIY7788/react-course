import "./CheckoutPage-header.css";
import { Link } from "react-router";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";

function CheckoutPageHeader({ cartItems }) {
  let cartQuantity = 0;

  cartItems.forEach((item) => {
    cartQuantity += item.quantity;
  });

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={logo} />
            <img className="mobile-logo" src={mobileLogo} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {cartQuantity > 1
              ? `${cartQuantity} items`
              : `${cartQuantity} item`}
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPageHeader;
