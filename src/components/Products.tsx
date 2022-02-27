import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CartContext } from "./App";
import ProductItem from "./ProductItem";
export interface Product {
  id: string;
  manufacturer: string;
  model: string;
}

const Products = () => {
  const { cart, setCart } = useContext(CartContext);
  const { products, isLoading, isError, error } = useProducts();

  useEffect(() => {
    console.log("Products mounts");
    return () => console.log("Products component UNMOUNTS");
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>There was error fetching products...</div>;

  const handleClick = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  };

  const renderProducts = () => {
    return products.map((product, i) => {
      return (
        <ProductItem
          theme="primary"
          key={product.id}
          product={product}
          onClick={handleClick}
          btnTitle="Add cart"
          position={i}
        />
      );
    });
  };
  return (
    <>
      <h3 className="header">Products</h3>
      <ul className="list-group">{renderProducts()}</ul>
      <p className="mb-5">{`There is ${cart.length} product${
        cart.length < 2 ? "" : "s"
      } in the shopping cart`}</p>
      {cart.length > 0 ? (
        <button
          onClick={() => {
            setCart([]);
            localStorage.removeItem("shoppingCart");
          }}
          className="btn btn-danger"
        >
          Clear shoppingcart
        </button>
      ) : null}
    </>
  );
};

export default Products;

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading, isError, error } = useQuery("products", () =>
    fetch("https://random-data-api.com/api/device/random_device?size=5").then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    if (!data) return;

    setProducts(data);
  }, [data]);

  return {
    products,
    isLoading,
    isError,
    error,
  };
};
