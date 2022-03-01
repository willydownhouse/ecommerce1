import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import Cart from "./Cart";
import Products, { Product } from "./Products";
import AppAction from "../interfaces/actions";
import Notification from "./Notification";
import { reducer } from "../reducer";

export interface AppState {
  products: Product[];
  cart: Product[];
  notification: string | null;
  isLoading: boolean;
}

export const initialState = {
  products: [],
  cart: [],
  notification: null,
  isLoading: false,
};

interface StateContextType {
  products: Product[];
  setProducts: (value: Product[]) => void;
  cart: Product[];
  setCart: (value: Product[]) => void;
  notification: string | null;
  setNotification: (value: string | null) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const StateContext = createContext<StateContextType>({
  products: [],
  setProducts: () => [],
  cart: [],
  setCart: () => [],
  notification: null,
  setNotification: () => "",
  isLoading: false,
  setIsLoading: () => false,
});

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("APP RENDERS");
  });

  return (
    <div className="container">
      <BrowserRouter>
        <StateContext.Provider
          value={{
            products,
            setProducts,
            notification,
            setNotification,
            cart,
            setCart,
            isLoading,
            setIsLoading,
          }}
        >
          {notification ? (
            <Notification notification={notification} color="danger" />
          ) : null}
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </StateContext.Provider>
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
