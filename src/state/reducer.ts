import {
  IAppAction,
  STOP_LOADING,
  START_LOADING,
  FETCH_SHOES_SUCCESS,
  FETCH_SHOES_FAILURE,
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SORT_PRICE_ASCENDING,
  SORT_PRICE_DECENDING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartAction,
  REMOVE_ALL_FROM_CART,
  CartActionPayload,
  FILTER_SHOES_LIST,
  SHOES_FROM_LOCAL,
} from "./action";
import { IAppState } from "./state";

import { IShoe } from "../interfaces/shoe";
import { INotification } from "../interfaces/utils";

export const reducer = (state: IAppState, action: IAppAction): IAppState => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case FETCH_SHOES_SUCCESS:
      return { ...state, shoes: action.payload as IShoe[] };
    case FETCH_SHOES_FAILURE:
      return {
        ...state,
        notification: action.payload as INotification,
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload as INotification,
      };

    case REMOVE_NOTIFICATION:
      return { ...state, notification: null };

    case SORT_PRICE_ASCENDING: {
      const shoesCopy = state.shoes;
      shoesCopy.sort(
        (a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1))
      );

      return {
        ...state,
        shoes: shoesCopy,
      };
    }

    case SORT_PRICE_DECENDING: {
      const shoesCopy = state.shoes;
      shoesCopy.sort(
        (a, b) => Number(b.price.slice(1)) - Number(a.price.slice(1))
      );

      return {
        ...state,
        shoes: shoesCopy,
      };
    }
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          (action.payload as CartActionPayload).shoe,
        ] as IShoe[],
      };
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter((item, i) =>
        item.id === (action.payload as CartActionPayload).shoe.id &&
        (action.payload as CartActionPayload).position === i
          ? ""
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: [],
      };

    case FILTER_SHOES_LIST: {
      return {
        ...state,
        shoes: state.shoes.filter((item) =>
          item.title.toLowerCase().includes(action.payload as string)
        ),
      };
    }

    case SHOES_FROM_LOCAL:
      return {
        ...state,
        shoes: JSON.parse(localStorage.getItem("shoes") as string),
      };

    default:
      return state;
  }
};
