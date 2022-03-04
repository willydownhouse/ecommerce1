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
import Sidemenu from "./Sidemenu";
import Hamburger from "./Hamburger";
import Spinner from "./Spinner";

//import Notification from "./Notification";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("menu open:");
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <BrowserRouter>
        <Sidemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Spinner />} />
        </Routes>
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
