import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/favred.png";
import LogoW from "../assets/imgs/favred-white.png";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 92) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={
        color
          ? " header-container sticky-head"
          : "header-container absolute-head"
      }
    >
      <div className="header">
        <NavLink
          to="/"
          className="w-40  rounded-lg  items-center justify-center flex font-bold shadow-md"
        >
          <img src={color ? Logo : LogoW} alt="" />
        </NavLink>
        <nav
          className={`flex text-lg gap-7 font-medium  ${
            color ? " text-primary" : "text-white"
          }`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Contact
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Gallery
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
