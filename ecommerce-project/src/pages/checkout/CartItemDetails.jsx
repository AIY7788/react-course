import axios from "axios";
import { formatMoney } from "../../utils/money";

export function CartItemDetails({ item, loadCart }) {
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
            Quantity: <span className="quantity-label">{item.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">Update</span>
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
