import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(#e9e9e9, #e7e7e7)",
      }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container-fluid">
        <div className="d-flex">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
