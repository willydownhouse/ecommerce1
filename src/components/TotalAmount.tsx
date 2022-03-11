import React from "react";
import { IShoe } from "../interfaces/shoe";
import { countCartTotal } from "../utils/countCartsTotal";

type TotalAmountProps = {
  cart: IShoe[];
};

function TotalAmount({ cart }: TotalAmountProps) {
  return <h5>Total: ${countCartTotal(cart)}</h5>;
}

export default TotalAmount;
