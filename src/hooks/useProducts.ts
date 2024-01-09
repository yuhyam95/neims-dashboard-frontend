

import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import productService, { Product } from "../services/product-service";

const useProducts = (queryParams = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = productService.getAll<Product>(queryParams);
    request
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { products, error, isLoading, setProducts, setError };
}

export default useProducts;
