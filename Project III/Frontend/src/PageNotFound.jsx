import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-10 shadow-xl text-center w-full max-w-xl">

        <h1 className="text-7xl font-extrabold text-white mb-4">404</h1>

        <p className="text-gray-300 text-lg mb-6">
          Oops! The page you are looking for doesn’t exist.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="not found"
          className="w-40 h-40 mx-auto mb-6 opacity-80"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            ← Go Back
          </button>

          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Home
          </Link>
        </div>

      </div>
    </div>
  );
}
