import { IShoe } from "../interfaces/shoe";
import {
  FETCH_SHOES_SUCCESS,
  IAppAction,
  REMOVE_NOTIFICATION,
  SET_NOTIFICATION,
  START_LOADING,
  STOP_LOADING,
} from "../state/action";

import { v4 as uuid } from "uuid";

export const fetchShoes = (dispatch: React.Dispatch<IAppAction>) => {
  dispatch({ type: START_LOADING });
  fetch("https://nike-products.p.rapidapi.com/shoes/men-shoes", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "nike-products.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_HOTELS_API_KEY as string,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const dataWithId = data.map((el: IShoe) => {
          return { ...el, id: uuid() };
        });

        dispatch({
          type: FETCH_SHOES_SUCCESS,
          payload: dataWithId,
        });
        dispatch({ type: STOP_LOADING });
      } else {
        dispatch({ type: STOP_LOADING });
        dispatch({
          type: SET_NOTIFICATION,
          payload: {
            message: data.message,
            color: "danger",
          },
        });
        setTimeout(
          () =>
            dispatch({
              type: REMOVE_NOTIFICATION,
              payload: null,
            }),
          3000
        );
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_NOTIFICATION,
        payload: {
          message: `${(err as Error).message}`,
          color: "danger",
        },
      });
      setTimeout(
        () =>
          dispatch({
            type: REMOVE_NOTIFICATION,
            payload: null,
          }),
        3000
      );
    });
};
