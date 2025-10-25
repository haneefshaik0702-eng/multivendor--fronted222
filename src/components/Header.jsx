import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600">Multivendor</Link>
        <nav className="space-x-4">
          <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-indigo-600">Cart</Link>
          <Link to="/auth" className="text-gray-700 hover:text-indigo-600">Login</Link>
        </nav>
      </div>
    </header>
  );
}
