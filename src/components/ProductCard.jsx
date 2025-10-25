import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-md p-4 bg-white shadow-sm">
      <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
        <img src={product.image || "https://via.placeholder.com/220"} alt={product.name} className="max-h-44 object-contain" />
      </div>
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description?.slice(0, 80)}...</p>
      <div className="mt-3 flex items-center justify-between">
        <strong className="text-indigo-600">${product.price?.toFixed(2) || "0.00"}</strong>
        <Link to={`/product/${product._id || product.id}`} className="text-sm text-white bg-indigo-600 px-3 py-1 rounded">View</Link>
      </div>
    </div>
  );
}
