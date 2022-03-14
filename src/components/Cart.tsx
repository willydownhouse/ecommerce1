import React from "react";
import { REMOVE_ALL_FROM_CART } from "../state/action";
import { useStateValue } from "../state/state";
import CartList from "./CartList";
import "../css/Cart.css";
import AppButton from "./AppButton";
import { Link } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useStateValue();

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    dispatch({ type: REMOVE_ALL_FROM_CART, payload: null });
  };
  return (
    <div className="cart">
      <CartList />
      {state.cart.length === 0 ? null : (
        <div className="cart-button-wrap">
          <div>
            <AppButton
              btnText="Clear cart"
              onClick={handleClearCart}
              color="dark"
            />
          </div>
          <div>
            <Link className="btn btn-outline-danger btn-sm" to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
