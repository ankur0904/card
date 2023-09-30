import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate("");

  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                href="#"
                className=" btn btn-secondary"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <Link
                to="/faq"
                className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default NavBar;
