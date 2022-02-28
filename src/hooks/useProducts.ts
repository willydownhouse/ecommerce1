import { useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { initialState } from "../components/App";
import { reducer } from "../reducer";

const useProducts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading, isError, error } = useQuery("products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

  useEffect(() => {
    if (!data) return;

    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  }, [data]);

  return {
    products: state.products,
    isLoading,
    isError,
    error,
  };
};

export default useProducts;
