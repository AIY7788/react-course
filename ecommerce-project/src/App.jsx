import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("api/cart-items?expand=product").then((response) => {
      setCartItems(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cartItems={cartItems} />} />
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
      <Route path="orders" element={<OrdersPage cartItems={cartItems} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
