import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-center items-center text-3xl font-bold pt-10 gap-10 bg-linear-to-br from-gray-50 to-gray-100">
      <NavLink
        className={(e) => (e.isActive ? "text-3xl text-red-400" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-3xl text-red-400" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-3xl text-red-400" : "")}
        to="/recipe"
      >
        Recipe
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-3xl text-red-400" : "")}
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? "text-3xl text-red-400" : "")}
        to="/fav"
      >
        Favourite
      </NavLink>
    </div>
  );
};

export default Navbar;
