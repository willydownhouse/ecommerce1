import { useContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { initialState, StateContext } from "../components/App";
import { reducer } from "../reducer";

const useProducts = () => {
  const { setProducts } = useContext(StateContext);

  const { data, isLoading, isError, error } = useQuery("products", () =>
    fetch("https://fakestoreapi.com/procts").then((res) => res.json())
  );

  useEffect(() => {
    if (!data) return;

    setProducts(data);
  }, [data]);

  return {
    isError,
    isLoading,
    error,
  };
};

export default useProducts;
