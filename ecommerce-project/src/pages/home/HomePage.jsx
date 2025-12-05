import axios from "axios";
import "./HomePage.css";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cartItems, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      const urlPath = search ? `api/products?search=${search}` : "api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    fetchProducts();
  }, [search]);

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
