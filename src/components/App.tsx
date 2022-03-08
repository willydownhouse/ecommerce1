import React, { useEffect, useReducer, useState } from "react";

import { reducer } from "../state/reducer";
import { initialState, StateProvider } from "../state/state";
import { fetchShoes } from "../utils/fetchShoes";
import Notification from "./Notification";
import ShoesList from "./ShoesList";
import Spinner from "./Spinner";

import "../css/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import SortDropdown from "./SortDropdown";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, notification } = state;
  console.log("STATE:");
  console.log(state);

  useEffect(() => {
    fetchShoes(dispatch);
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        {notification ? (
          <Notification
            message={notification.message as string}
            color={notification.color}
          />
        ) : null}

        <StateProvider value={{ state, dispatch }}>
          <SortDropdown />
          {isLoading ? <Spinner /> : null}

          <Routes>
            <Route path="/" element={<ShoesList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </StateProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
