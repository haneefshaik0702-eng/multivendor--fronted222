import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Multivendor</h1>
      <p className="text-gray-600 mb-6">A demo multivendor frontend connected to your backend.</p>
      <div className="space-x-3">
        <Link to="/products" className="px-6 py-3 bg-indigo-600 text-white rounded">Browse Products</Link>
        <Link to="/auth" className="px-6 py-3 border rounded">Sign in</Link>
      </div>
    </div>
  );
}
