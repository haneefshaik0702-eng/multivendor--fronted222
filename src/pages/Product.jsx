import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/api";
import Loader from "../components/Loader";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let mounted = true;
    getProduct(id)
      .then((data) => {
        if (!mounted) return;
        setProduct(data);
      })
      .catch((e) => {
        console.error(e);
        setErr("Failed to load product");
      });
    return () => { mounted = false; };
  }, [id]);

  if (err) return <div className="text-red-500">{err}</div>;
  if (!product) return <Loader />;

  return (
    <div className="bg-white p-6 rounded-md shadow">
      <div className="md:flex gap-6">
        <div className="md:w-1/2">
          <img src={product.image || "https://via.placeholder.com/500"} alt={product.name} className="w-full h-auto object-contain" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <strong className="text-2xl text-indigo-600">${product.price?.toFixed(2)}</strong>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
