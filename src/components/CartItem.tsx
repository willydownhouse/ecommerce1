import React from "react";
import { IShoe } from "../interfaces/shoe";
import "../css/Cart.css";
import { useStateValue } from "../state/state";
import {
  REMOVE_FROM_CART,
  REMOVE_NOTIFICATION,
  SET_NOTIFICATION,
} from "../state/action";

type CartItemProps = {
  shoe: IShoe;
  position: number;
};

function CartItem({ shoe, position }: CartItemProps) {
  const { dispatch } = useStateValue();

  const handleClick = (shoe: IShoe) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        shoe,
        position,
      },
    });
    dispatch({
      type: SET_NOTIFICATION,
      payload: {
        message: `You removed ${shoe.title} from your cart`,
        color: "success",
      },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_NOTIFICATION,
          payload: null,
        }),
      3000
    );
  };
  return (
    <div className="list-group-item mb-3 cart-item-grid">
      <div className="cart-item cart-item-first">
        <h5>{shoe.title}</h5>
      </div>
      <div className="cart-item">
        <h5>{shoe.price}</h5>
      </div>
      <div className="cart-item">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => handleClick(shoe)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
