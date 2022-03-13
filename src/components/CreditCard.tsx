import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { IFormValues } from "../interfaces/utils";
import MyFormField from "./MyFormField";

type CreditCardProps = {
  values: IFormValues;
  errors: FormikErrors<IFormValues>;
  touched: FormikTouched<IFormValues>;
};

function CreditCard({ values, errors, touched }: CreditCardProps) {
  return (
    <>
      <div className="col-8">
        <MyFormField
          label="Credit card"
          name="credit_card"
          value={values.credit_card}
          error={errors.credit_card}
          touched={touched.credit_card}
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div className="col-8">
        <div className="row mt-3">
          <div className="col-4">
            <MyFormField
              label="Expiration"
              name="expiration"
              value={values.expiration}
              error={errors.expiration}
              touched={touched.expiration}
              placeholder="MM/YY"
            />
          </div>
          <div className="col-4">
            <MyFormField
              label="CVC"
              name="CVC"
              value={values.CVC}
              error={errors.CVC}
              touched={touched.CVC}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreditCard;
