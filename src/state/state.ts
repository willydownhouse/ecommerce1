import React, { createContext, useContext } from "react";
import { IProduct } from "../components/Products";

export interface IAppState {
  products: IProduct[];
  cart: IProduct[];
  isLoading: boolean;
  notification: INotification | null;
}

interface INotification {
  message: string;
  color: "danger" | "success";
}

interface BaseAction {
  type: string;
}

interface ProductsAction extends BaseAction {
  payload: IProduct[];
}

interface NotificationAction extends BaseAction {
  payload: INotification | null;
}

interface AddToCardAction extends BaseAction {
  payload: IProduct;
}

export type AppAction = ProductsAction | NotificationAction | AddToCardAction;

export const initialState: IAppState = {
  products: [],
  cart: [],
  isLoading: false,
  notification: null,
};

const StateContext = createContext<{
  state: IAppState;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => 1 });

export const StateProvider = StateContext.Provider;

export const useStateValue = () => useContext(StateContext);

export const reducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case "PRODUCTS_FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload as unknown as IProduct[],
      };
    case "PRODUCTS_FETCH_FAIL":
      return {
        ...state,
        notification: action.payload as INotification,
      };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notification: null,
      };
    case "SET_NOTIFICATION":
      return {
        ...state,
        notification: action.payload as INotification,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload] as IProduct[],
      };
    default:
      return state;
  }
};
