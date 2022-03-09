import React from "react";
import { IShoe } from "../interfaces/shoe";

type TotalAmountProps = {
  cart: IShoe[];
};

function TotalAmount({ cart }: TotalAmountProps) {
  return (
    <h5>
      Total: $
      {cart
        .map((item) => Number(item.price.slice(1)))
        .reduce((acc, val) => acc + val)}
    </h5>
  );
}

export default TotalAmount;
