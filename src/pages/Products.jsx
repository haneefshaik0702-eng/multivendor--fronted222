import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
      });
    return () => { mounted = false; };
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!products) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => <ProductCard key={p._id || p.id} product={p} />)}
      </div>
    </div>
  );
}
