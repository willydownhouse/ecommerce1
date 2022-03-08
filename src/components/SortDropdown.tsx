import React from "react";
import { useLocation } from "react-router-dom";
import { SORT_PRICE_ASCENDING, SORT_PRICE_DECENDING } from "../state/action";
import { useStateValue } from "../state/state";

function SortDropdown() {
  const location = useLocation();
  const { dispatch } = useStateValue();

  if (location.pathname !== "/") return null;
  return (
    <div
      style={{
        width: "150px",
        marginBottom: "30px",
      }}
    >
      <select
        onChange={(e) => {
          e.target.value === "cheapest"
            ? dispatch({
                type: SORT_PRICE_ASCENDING,
              })
            : dispatch({
                type: SORT_PRICE_DECENDING,
              });
        }}
        className="form-select form-select-sm mt-2"
      >
        <option>Sort by</option>
        <option value="cheapest">Cheapest</option>
        <option value="expensive">Most expensive</option>
      </select>
    </div>
  );
}

export default SortDropdown;
