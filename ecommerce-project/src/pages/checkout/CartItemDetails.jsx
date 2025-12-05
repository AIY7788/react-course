import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({ item, loadCart }) {
  const [showTextbox, setShowTextbox] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleUpdateQuantity = async () => {
    if (showTextbox) {
      await axios.put(`api/cart-items/${item.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();

      setShowTextbox(false);
    } else setShowTextbox(true);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await axios.put(`api/cart-items/${item.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();

      setShowTextbox(false);
    } else if (e.key === "Escape") {
      setQuantity(item.quantity);
      setShowTextbox(false);
    }
  };

  const handleDeleteItem = async () => {
    await axios.delete(`api/cart-items/${item.productId}`);
    await loadCart();
  };

  return (
    <>
      <img className="product-image" src={item.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{item.product.name}</div>
        <div className="product-price">
          {formatMoney(item.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            <input
              value={quantity}
              onKeyDown={handleKeyDown}
              onChange={updateQuantity}
              className="update-quatity-input"
              type="text"
              style={{ display: showTextbox ? "inline-block" : "none" }}
            />{" "}
            <span
              className="quantity-label"
              style={{ display: showTextbox ? "none" : "inline-block" }}
            >
              {item.quantity}
            </span>
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={handleUpdateQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={handleDeleteItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
