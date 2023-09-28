import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const activeStyles = {
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className={`btn ${({ isActive }) =>
                  isActive ? "btn-secondary" : ""} hover:bg-gray-200`}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/faq"
                className={`btn ${({ isActive }) =>
                  isActive ? "btn-secondary" : ""} hover:bg-gray-200`}
              >
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={`btn ${({ isActive }) =>
                  isActive ? "btn-secondary" : ""} hover:bg-gray-200`}
              >
                About
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default NavBar;
