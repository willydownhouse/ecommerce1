import { IShoe } from "../interfaces/shoe";
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

export type IAppAction =
  | FetchShoesAction
  | NotificationAction
  | LoadingAction
  | SortAction;

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const FETCH_SHOES_FAILURE = "FETCH_SHOES_FAILURE";
export const FETCH_SHOES_SUCCESS = "FETCH_SHOES_SUCCESS";

export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export const SORT_PRICE_ASCENDING = "SORT_PRICE_ASCENDING";
export const SORT_PRICE_DECENDING = "SORT_PRICE_DECENDING";
