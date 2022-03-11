import { Field } from "formik";
import React from "react";

type FormAmountProps = {
  amount: number;
};

function FormAmount({ amount }: FormAmountProps) {
  return (
    <div className="row mb-5">
      <div className="col-3">
        <label>Total</label>
        <Field
          name="amount"
          type="number"
          value={amount}
          className="form-control"
          disabled
        />
      </div>
    </div>
  );
}

export default FormAmount;
