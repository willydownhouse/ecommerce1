import React, { useContext, useEffect } from "react";
import { CartContext } from "./App";
import ProductItem from "./ProductItem";
import { Product } from "./Products";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    console.log("CART:");
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    return () => console.log("Cart component UNMOUNTS");
  }, []);

  const handleDelete = (product: Product, position: number | undefined) => {
    const updatedCart = cart.filter((prod, i) =>
      prod.id === product.id && i === position ? "" : prod
    );

    setCart(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  };

  const renderCart = () => {
    return cart.map((product, i) => {
      return (
        <ProductItem
          theme="danger"
          key={product.id + Math.random() * 100}
          product={product}
          onClick={handleDelete}
          btnTitle="Remove Item"
          position={i}
        />
      );
    });
  };
  return (
    <>
      <h3 className="header">Cart</h3>
      <ul className="list-group">{renderCart()}</ul>
    </>
  );
};

export default Cart;
