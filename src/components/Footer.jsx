import React from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/imgs/favred.png";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex md:justify-between justify-center items-center md:flex-row flex-col gap-7">
        <div>
          <NavLink to="/" className="">
            <img src={Logo} alt="" className="w-40" />
          </NavLink>
        </div>
        <div>
          <h3 className="subhead-text text-center ">Links</h3>
          <div className="flex gap-7 font-medium  md:text-5xl text-3xl ">
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
          </div>
        </div>
      </div>

      <div className="flex md:justify-between justify-center items-center md:flex-row flex-col gap-7 pt-24 ">
        <div>
          copyright ©️ <Link to="/">Favoured Arts</Link>
        </div>

        <div>
          Made with ❣️ by <Link to="/">Favour Shaw</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
