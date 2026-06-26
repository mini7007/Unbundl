import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const productData = await fetchProducts();
        if (isMounted) {
          setProducts(productData);
          setStatus(productData.length ? "success" : "empty");
        }
      } catch (apiError) {
        if (isMounted) {
          setError(apiError.message);
          setStatus("error");
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, status, error };
}
