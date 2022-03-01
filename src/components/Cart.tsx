import React, { useContext, useEffect, useReducer, useRef } from "react";
import { StateContext } from "./App";
import Item from "./Item";
import { Product } from "./Products";

const Cart = () => {
  const { cart, setCart } = useContext(StateContext);

  useEffect(() => {
    console.log("cart:");
    console.log(cart);
  }, [cart]);

  const removeFromShoppingCard = (product: Product, position?: number) => {
    const updatedCart = cart.filter((item, i) =>
      item.id === product.id && position === i ? "" : item
    );

    setCart(updatedCart);
  };

  const renderCart = () => {
    return cart.map((product: Product, i: number) => (
      <Item
        position={i}
        key={product.id}
        product={product}
        btnTitle="Remove item"
        onClick={removeFromShoppingCard}
      />
    ));
  };
  return (
    <div>
      <h3>Shopping cart</h3>
      <ul className="list-group">{renderCart()}</ul>
    </div>
  );
};

export default Cart;
