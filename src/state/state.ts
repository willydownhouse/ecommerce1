import React, { createContext, useContext } from "react";
import { IShoe } from "../interfaces/shoe";
import { IUser } from "../interfaces/user";
import { INotification } from "../interfaces/utils";
import { IAppAction } from "./action";

export interface IAppState {
  shoes: IShoe[];
  notification: INotification | null;
  user: IUser | null;
  cart: IShoe[];
  isLoading: boolean;
}

export const initialState: IAppState = {
  shoes: [],
  notification: null,
  user: null,
  cart: [],
  isLoading: false,
};

interface IStateContext {
  state: IAppState;
  dispatch: React.Dispatch<IAppAction>;
}

const StateContext = createContext<IStateContext>({
  state: initialState,
  dispatch: () => 1,
});

export const StateProvider = StateContext.Provider;

export const useStateValue = () => useContext(StateContext);
