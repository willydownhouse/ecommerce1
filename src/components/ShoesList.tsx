import React from "react";
import { useStateValue } from "../state/state";
import ShoeItem from "./ShoeItem";
import "../css/ShoesList.css";

function ShoesList() {
  const { state } = useStateValue();

  const renderShoes = () => {
    return state.shoes.map((shoe) => <ShoeItem key={shoe.id} shoe={shoe} />);
  };
  return <div className="shoeslist-grid">{renderShoes()}</div>;
}

export default ShoesList;
