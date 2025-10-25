import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Multivendor - Demo
      </div>
    </footer>
  );
}
