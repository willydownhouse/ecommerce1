import React, { useContext, useEffect, useReducer, useRef } from "react";
import useProducts from "../hooks/useProducts";
import ErrorNotif from "./Notification";
import Spinner from "./Spinner";
import Item from "./Item";
import { initialState, StateContext } from "./App";
import { reducer } from "../reducer";
import Home from "./Home";

export interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const Products = () => {
  const {
    products,
    setProducts,
    isLoading,
    setIsLoading,
    setNotification,
    setCart,
    cart,
  } = useContext(StateContext);

  const ref = useRef(0);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setNotification(`${(err as Error).message}`);
        setTimeout(() => setNotification(null), 3000);
        setIsLoading(false);
      });
  }, []);

  const renderProducts = () => {
    return products.map((product: Product) => (
      <Item
        key={product.id}
        product={product}
        btnTitle="Add card"
        onClick={addToShoppingCard}
      />
    ));
  };

  const addToShoppingCard = (product: Product) => {
    setCart([...cart, product]);
    setNotification(`Succesfully added ${product.title} to shopping card`);
    setTimeout(() => setNotification(null), 3000);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h3 className="header">Products</h3>

      <ul className="list-group">{renderProducts()}</ul>
    </div>
  );
};

export default Products;
