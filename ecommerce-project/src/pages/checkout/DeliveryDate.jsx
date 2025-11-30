import dayjs from "dayjs";

export function DeliveryDate({ item, deliveryOptions }) {
  const selectedDeliveryOption = deliveryOptions.find(
    (option) => option.id === item.deliveryOptionId
  );

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
