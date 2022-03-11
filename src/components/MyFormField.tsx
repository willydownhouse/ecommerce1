import { Field } from "formik";
import React from "react";

type MyFormFieldProps = {
  label: string;
  value: string | undefined;
  error: string | undefined;
  touched: boolean | undefined;
  name: string;
};

function MyFormField({ label, value, error, touched, name }: MyFormFieldProps) {
  return (
    <>
      <label>{label}</label>
      <Field
        name={name}
        value={value}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      {error && touched ? <div className="text-danger">{error}</div> : null}
    </>
  );
}

export default MyFormField;
