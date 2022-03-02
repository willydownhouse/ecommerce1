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
import Products, { IProduct } from "./Products";
import AppAction from "../interfaces/actions";
import Notification from "./Notification";
import { initialState, reducer, StateProvider } from "../state/state";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("APP RENDERS");
  console.log(state.notification);

  return (
    <div className="container">
      <BrowserRouter>
        {state.notification ? (
          <Notification
            message={state.notification.message}
            color={state.notification.color}
          />
        ) : null}

        <Navbar />
        <StateProvider value={{ state, dispatch }}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </StateProvider>
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
