import React, { createContext, useEffect, useState } from "react";
import CoffeesList from "./CoffeesList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Checkout from "./Checkout";
import Navbar from "./Navbar";
import Home from "./Home";
import Cannabis, { useCannabis } from "./Cannabis";

interface CannabisContextType {
  cannabis: Cannabis[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

export const CannabisContext = createContext<CannabisContextType>({
  cannabis: [],
  isLoading: false,
  isError: false,
  error: null,
});

const App = () => {
  const { cannabis, isLoading, isError, error } = useCannabis();

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/cannabis">Cannabis</Link>
      <CannabisContext.Provider value={{ cannabis, isError, isLoading, error }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cannabis" element={<Cannabis />} />
        </Routes>
      </CannabisContext.Provider>
    </BrowserRouter>
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
