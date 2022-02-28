import { AppState } from "../components/App";
import { Product } from "../components/Products";
import AppAction from "../interfaces/actions";

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload as Product[] };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "REMOVE_LOADING":
      return { ...state, isLoading: false };
    case "SET_NOTIF":
      return { ...state, notification: action.payload as string };
    case "REMOVE_NOTIF":
      return { ...state, notification: null };
    default:
      return state;
  }
};
