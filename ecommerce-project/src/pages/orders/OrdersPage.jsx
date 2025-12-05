import exios from "axios";
import { useEffect, useState, Fragment } from "react";
import "./OrdersPage.css";
import Header from "../../components/Header";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cartItems, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await exios.get("api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <Header cartItems={cartItems} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
