import React, { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import Item from "./Item";

import useProducts from "../hooks/useProducts";
import { AppAction, useStateValue } from "../state/state";

export interface IProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const Products = () => {
  const { state, dispatch } = useStateValue();

  console.log("PRODUCTS RENDERS");

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  const renderProducts = () => {
    return state.products.map((product, i) => {
      return (
        <Item
          key={i}
          btnTitle="Add cart"
          onClick={handleClick}
          position={i}
          product={product}
        />
      );
    });
  };

  const handleClick = (product: IProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    dispatch({
      type: "SET_NOTIFICATION",
      payload: {
        message: `Succesfully added ${product.title} to shopping cart`,
        color: "success",
      },
    });
    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_NOTIFICATION",
          payload: null,
        }),
      3000
    );
  };

  return (
    <div>
      <h3 className="header">Products</h3>
      <ul className="list-group">{renderProducts()}</ul>
    </div>
  );
};

export default Products;

const fetchProducts = (dispatch: React.Dispatch<AppAction>) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "PRODUCTS_FETCH_SUCCESS",
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "PRODUCTS_FETCH_FAIL",
        payload: {
          message: `${(err as Error).message}`,
          color: "danger",
        },
      });
      setTimeout(
        () =>
          dispatch({
            type: "REMOVE_NOTIFICATION",
            payload: null,
          }),
        3000
      );
    });
};
