import React, { useEffect, useReducer } from "react";

import { reducer } from "../state/reducer";
import { initialState, StateProvider } from "../state/state";
import { fetchShoes } from "../utils/fetchShoes";
import Notification from "./Notification";
import ShoesList from "./ShoesList";
import Spinner from "./Spinner";

import "../css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import SortDropdown from "./SortDropdown";
import Footer from "./Footer";
import Checkout from "./Checkout";
import NoAccess from "./NoAccess";

import { fetchShoesFireStore } from "../utils/fetchShoesFirestore";
import { SET_CART_FROM_LOCAL } from "../state/action";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, notification } = state;
  console.log("STATE:");
  console.log(state);

  useEffect(() => {
    const cartFromLocal = JSON.parse(localStorage.getItem("cart") as string);

    console.log(cartFromLocal);
    fetchShoesFireStore(dispatch);

    if (!cartFromLocal) return;

    dispatch({
      type: SET_CART_FROM_LOCAL,
      payload: cartFromLocal,
    });
  }, []);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          {notification ? (
            <Notification
              message={notification.message as string}
              color={notification.color}
            />
          ) : null}

          <StateProvider value={{ state, dispatch }}>
            <Navbar />
            <SortDropdown />
            {isLoading ? <Spinner /> : null}

            <Routes>
              <Route path="/" element={<ShoesList />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={state.user ? <Checkout /> : <NoAccess />}
              />
            </Routes>
          </StateProvider>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default App;
