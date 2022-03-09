import React from "react";
import { IShoe } from "../interfaces/shoe";
import {
  ADD_TO_CART,
  REMOVE_NOTIFICATION,
  SET_NOTIFICATION,
} from "../state/action";
import { useStateValue } from "../state/state";

type ShoeItemProps = {
  shoe: IShoe;
};

function ShoeItem({ shoe }: ShoeItemProps) {
  const { dispatch } = useStateValue();

  const handleClick = (shoe: IShoe) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        shoe,
      },
    });
    dispatch({
      type: SET_NOTIFICATION,
      payload: {
        message: `Succesfully added ${shoe.title} to shopping cart`,
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
    <div className="card border-0">
      <a href={shoe.url} target="_blank" rel="noreferrer">
        <img className="card-img-top" src={shoe.img} />
      </a>

      <div className="card-body">
        <h5
          style={{
            color: "#111",
          }}
          className="card-title h5"
        >
          {shoe.title}
        </h5>
        <p className="text-muted">{shoe.source}</p>
        <h5
          style={{
            color: "#111",
          }}
          className="mt-3 text-muted"
        >
          {shoe.price}
        </h5>
        <div className="mt-3">
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => handleClick(shoe)}
          >
            Add card
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoeItem;
