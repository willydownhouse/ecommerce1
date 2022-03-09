import React from "react";
import { useStateValue } from "../state/state";
import CartItem from "./CartItem";
import "../css/Cart.css";
import TotalAmount from "./TotalAmount";

function CartList() {
  const { state } = useStateValue();

  const renderCartItems = () => {
    return state.cart.map((item, i) => {
      return (
        <CartItem
          key={item.id + Math.random() * 100}
          shoe={item}
          position={i}
        />
      );
    });
  };
  return (
    <div className="cart-list">
      <h4 className="mb-5">Your shopping cart</h4>
      {state.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group">{renderCartItems()}</ul>
          <TotalAmount cart={state.cart} />
        </>
      )}
    </div>
  );
}

export default CartList;
