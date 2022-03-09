import React, { useState } from "react";
import "../css/FilterInput.css";
import { FILTER_SHOES_LIST, SHOES_FROM_LOCAL } from "../state/action";
import { useStateValue } from "../state/state";

function FilterInput() {
  const [value, setValue] = useState<string>("");
  const { dispatch } = useStateValue();
  return (
    <div className="filter-input">
      <input
        onBlur={() => setValue("")}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          dispatch({
            type: SHOES_FROM_LOCAL,
            payload: null,
          });
          dispatch({
            type: FILTER_SHOES_LIST,
            payload: e.target.value,
          });
        }}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}

export default FilterInput;
