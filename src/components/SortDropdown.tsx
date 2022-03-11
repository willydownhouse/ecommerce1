import React from "react";
import { useLocation } from "react-router-dom";
import {
  IAppAction,
  SORT_PRICE_ASCENDING,
  SORT_PRICE_DECENDING,
} from "../state/action";
import { useStateValue } from "../state/state";
import { fetchShoesFireStore } from "../utils/fetchShoesFirestore";

function SortDropdown() {
  const location = useLocation();
  const { dispatch } = useStateValue();

  if (location.pathname !== "/") return null;
  return (
    <div
      style={{
        width: "150px",
      }}
    >
      <select
        onChange={(e) => handleChange(e, dispatch)}
        className="form-select form-select-sm mt-2"
      >
        <option value="original">Sort by</option>
        <option value="cheapest">Cheapest</option>
        <option value="expensive">Most expensive</option>
      </select>
    </div>
  );
}

export default SortDropdown;

const handleChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  dispatch: React.Dispatch<IAppAction>
) => {
  {
    if (e.target.value === "cheapest") {
      return dispatch({
        type: SORT_PRICE_ASCENDING,
      });
    }
    if (e.target.value === "expensive") {
      return dispatch({
        type: SORT_PRICE_DECENDING,
      });
    }
    return fetchShoesFireStore(dispatch);
  }
};
