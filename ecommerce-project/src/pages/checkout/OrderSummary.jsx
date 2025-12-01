import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cartItems, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cartItems.map((item) => {
          return (
            <div key={item.id} className="cart-item-container">
              <DeliveryDate item={item} deliveryOptions={deliveryOptions} />

              <div className="cart-item-details-grid">
                <CartItemDetails item={item} />

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  item={item}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
