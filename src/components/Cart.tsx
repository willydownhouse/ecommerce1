import React from "react";
import { REMOVE_ALL_FROM_CART } from "../state/action";
import { useStateValue } from "../state/state";
import CartList from "./CartList";
import "../css/Cart.css";

function Cart() {
  const { state, dispatch } = useStateValue();
  return (
    <div className="cart">
      <CartList />
      {state.cart.length === 0 ? null : (
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() =>
            dispatch({ type: REMOVE_ALL_FROM_CART, payload: null })
          }
        >
          Clear cart
        </button>
      )}
    </div>
  );
}

export default Cart;
