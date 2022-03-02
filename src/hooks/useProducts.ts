import { useContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";

const useProducts = () => {
  //const { setProducts } = useContext(StateContext);

  const { data, isLoading, isError, error } = useQuery("products", () =>
    fetch("https://fakestoreapi.com/procts").then((res) => res.json())
  );

  useEffect(() => {
    if (!data) return;
  }, [data]);

  return {
    isError,
    isLoading,
    error,
  };
};

export default useProducts;
