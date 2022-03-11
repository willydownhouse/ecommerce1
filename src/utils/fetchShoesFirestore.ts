import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import { IShoe } from "../interfaces/shoe";
import { FETCH_SHOES_SUCCESS, IAppAction } from "../state/action";

export const fetchShoesFireStore = async (
  dispatch: React.Dispatch<IAppAction>
) => {
  const res = await getDocs(collection(db, "shoes"));

  const shoesData = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  dispatch({
    type: FETCH_SHOES_SUCCESS,
    payload: shoesData as IShoe[],
  });
};
