import React, { useContext, useEffect, useReducer, useRef } from "react";
import { useStateValue } from "../state/state";

import Item from "./Item";
import { IProduct } from "./Products";

const Cart = () => {
  console.log("CART RENDERS");

  const { state } = useStateValue();
  const handleClick = () => {
    console.log("remove");
  };
  const renderCard = () => {
    return state.cart.map((product, i) => {
      return (
        <Item
          btnTitle="Remove"
          onClick={handleClick}
          position={i}
          product={product}
          key={i}
        />
      );
    });
  };
  return (
    <div>
      <h3>Shopping cart</h3>
      <ul className="list-group">{renderCard()}</ul>
    </div>
  );
};

export default Cart;
