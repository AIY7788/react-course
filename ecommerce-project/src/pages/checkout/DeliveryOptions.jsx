import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, item, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((option) => {
        let priceText = "FREE Shipping";

        if (option.priceCents > 0) {
          priceText = `${formatMoney(option.priceCents)} - Shipping`;
        }

        const handleSelectOption = async () => {
          await axios.put(`api/cart-items/${item.productId}`, {
            deliveryOptionId: option.id,
          });
          await loadCart();
        };

        return (
          <div
            key={option.id}
            className="delivery-option"
            onClick={handleSelectOption}
          >
            <input
              type="radio"
              checked={item.deliveryOptionId === option.id}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${item.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(option.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">{priceText}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
