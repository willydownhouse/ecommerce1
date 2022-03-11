import { IShoe } from "../interfaces/shoe";
import { IUser } from "../interfaces/user";
import { INotification } from "../interfaces/utils";

interface BaseAction {
  type: string;
}

interface FetchShoesAction extends BaseAction {
  payload: IShoe[];
}

interface NotificationAction extends BaseAction {
  payload: INotification | null;
}

interface LoadingAction {
  type: "START_LOADING" | "STOP_LOADING";
}

interface SortAction {
  type: "SORT_PRICE_ASCENDING" | "SORT_PRICE_DECENDING";
}

export type CartActionPayload = {
  shoe: IShoe;
  position?: number;
};

export interface CartAction extends BaseAction {
  payload: CartActionPayload | null;
}

interface FilterAction extends BaseAction {
  payload: string;
}

interface AuthenticationAction extends BaseAction {
  payload: IUser | null;
}

export type IAppAction =
  | FetchShoesAction
  | NotificationAction
  | LoadingAction
  | SortAction
  | CartAction
  | FilterAction
  | AuthenticationAction;

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const FETCH_SHOES_FAILURE = "FETCH_SHOES_FAILURE";
export const FETCH_SHOES_SUCCESS = "FETCH_SHOES_SUCCESS";

export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export const SORT_PRICE_ASCENDING = "SORT_PRICE_ASCENDING";
export const SORT_PRICE_DECENDING = "SORT_PRICE_DECENDING";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const FILTER_SHOES_LIST = "FILTER_SHOES_LIST";
export const SET_CART_FROM_LOCAL = "SHOES_FROM_LOCAL";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
