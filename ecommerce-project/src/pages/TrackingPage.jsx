import Header from "../components/Header";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./TrackingPage.css";
import { Link, useParams } from "react-router";

export function TrackingPage({ cartItems }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    };
    fetchOrderDetails();
  }, [orderId]);

  if (!order) return null;

  const orderProduct = order.products.find(
    (product) => product.productId === productId
  );

  const totalDeliveryTimeMs =
    orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const elapsedTimeMs = dayjs().valueOf() - order.orderTimeMs;
  const progressPercentage = Math.min(
    (elapsedTimeMs / totalDeliveryTimeMs) * 100,
    100
  );

  const isPreparing = progressPercentage < 33;
  const isShipped = progressPercentage >= 33 && progressPercentage < 100;
  const isDelivered = progressPercentage >= 100;

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />

      <Header cartItems={cartItems} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {progressPercentage >= 100 ? "Delivered on" : "Arriving on"}{" "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing && "current-status"}`}
            >
              Preparing
            </div>
            <div className={`progress-label ${isShipped && "current-status"}`}>
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered && "current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
