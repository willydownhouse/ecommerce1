import { Field } from "formik";
import React from "react";

type MyFormFieldProps = {
  label: string;
  value: string | undefined;
  error: string | undefined;
  touched: boolean | undefined;
  name: string;
  placeholder?: string;
};

function MyFormField({
  label,
  value,
  error,
  touched,
  name,
  placeholder,
}: MyFormFieldProps) {
  return (
    <>
      <label>{label}</label>
      <Field
        name={name}
        value={value}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
      />
      {error && touched ? <div className="text-danger">{error}</div> : null}
    </>
  );
}

export default MyFormField;
