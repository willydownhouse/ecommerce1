import React, { createContext, useEffect, useState } from "react";
import CoffeesList from "./CoffeesList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Checkout from "./Checkout";
import Navbar from "./Navbar";
import Products, { Product } from "./Products";
import Cart from "./Cart";
import Home from "./Home";

interface CartContextType {
  cart: Product[];
  setCart: (value: Product[]) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => "",
});

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const thereIsShoppingCartInLocalStorage =
      localStorage.getItem("shoppingCart");

    if (thereIsShoppingCartInLocalStorage) {
      const storage = JSON.parse(thereIsShoppingCartInLocalStorage);

      setCart(storage);
    }
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <CartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

//{
/* <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<CoffeesList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter> */
//}

//import { addDoc, collection, doc, setDoc } from "firebase/firestore";
//import { db } from "../firebase";

// const docData = {
//   uid: "77281193-b054-4b2f-a5a1-f8cc2b6965a5",
//   blend_name: "Green Symphony",
//   origin: "Bugisu, Uganda",
//   variety: "SL34",
//   notes: "deep, silky, mandarin, mango, cacao nibs",
//   intensifier: "quick",
// };

// const addDocument = async () => {
//   const res = await addDoc(collection(db, "coffees"), docData);
//   console.log(res.converter?.fromFirestore);
// };
