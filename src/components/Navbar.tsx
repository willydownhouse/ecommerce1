import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import { useStateValue } from "../state/state";
import CartIcon from "./CartIcon";
import FilterInput from "./FilterInput";
import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  const { state } = useStateValue();
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to={"/"} className="navbar-logo"></Link>
      {location.pathname === "/" ? <FilterInput /> : null}

      <ul className="navbar-links">
        {/* <li>
          <Link className="navbar-link" to={"/"}>
            Shoes
          </Link>
        </li> */}

        <li>
          <Link className="navbar-link" to={"/cart"}>
            <CartIcon />
          </Link>
        </li>
        <li>{state.user ? <Logout /> : <Login />}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
