import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    console.log("NAVBAR RENDERS");
  });
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
