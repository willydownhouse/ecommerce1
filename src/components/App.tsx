import React from "react";
import CoffeesList from "./CoffeesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./Checkout";
import Navbar from "./Navbar";

export interface User {
  id: string;
  name: string;
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<CoffeesList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

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
