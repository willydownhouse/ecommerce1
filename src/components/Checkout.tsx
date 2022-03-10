import React from "react";
import {
  CardElement,
  ShippingAddressElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

function Checkout() {
  return (
    <div
      style={{
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        <div></div>
        <CardElement />
        <button className="btn btn-outline-dark btn-sm">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
