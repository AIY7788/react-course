import axios from "axios";
import "./HomePage.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cartItems, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cartItems={cartItems} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
