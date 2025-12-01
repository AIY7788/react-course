import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("api/cart-items?expand=product");
    setCartItems(response.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<HomePage cartItems={cartItems} loadCart={loadCart} />}
      />
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
      <Route path="orders" element={<OrdersPage cartItems={cartItems} />} />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cartItems={cartItems} />}
      />
      <Route path="*" element={<NotFoundPage cartItems={cartItems} />} />
    </Routes>
  );
}

export default App;
