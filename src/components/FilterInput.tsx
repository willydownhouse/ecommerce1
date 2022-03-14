import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/FilterInput.css";
import { FILTER_SHOES_LIST } from "../state/action";
import { useStateValue } from "../state/state";
import { fetchShoesFireStore } from "../utils/fetchShoesFirestore";

function FilterInput() {
  const [value, setValue] = useState<string>("");
  const { dispatch } = useStateValue();
  const location = useLocation();

  if (location.pathname !== "/") return null;

  return (
    <div className="filter-input">
      <div className="filter-input-wrap">
        <input
          onBlur={() => setValue("")}
          value={value}
          onChange={async (e) => {
            setValue(e.target.value);

            await fetchShoesFireStore(dispatch);

            dispatch({
              type: FILTER_SHOES_LIST,
              payload: e.target.value,
            });
          }}
          className="form-control"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default FilterInput;
