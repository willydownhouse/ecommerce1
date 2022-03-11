import { Field, FormikErrors, FormikTouched, validateYupSchema } from "formik";
import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { IFormValues } from "../interfaces/utils";
import MyFormField from "./MyFormField";

type FormAddressProps = {
  validateForm: (values: IFormValues) => Promise<FormikErrors<IFormValues>>;
  touched: FormikTouched<IFormValues>;
  errors: FormikErrors<IFormValues>;
  values: IFormValues;
  address: string;
  city: string;
  country: string;
  setCountry: (val: string) => void;
  region: string;
  setRegion: (val: string) => void;
  ZIP: string;
};

function FormAddress({
  validateForm,
  errors,
  touched,
  address,
  country,
  setCountry,
  city,
  region,
  setRegion,
  ZIP,
  values,
}: FormAddressProps) {
  return (
    <>
      <div className="row mb-3">
        <div className="col-8">
          <MyFormField
            name="address"
            label="Address"
            error={errors.address}
            touched={touched.address}
            value={address}
          />
        </div>
        <div className="col-4">
          <label>Country</label>

          <CountryDropdown
            value={country}
            onChange={(val) => {
              values.country = val;
              values.region = "";
              setCountry(val);
              setRegion("");
              validateForm(values).then((res) => console.log(res));
            }}
            classes={`form-select ${errors.country ? "is-invalid" : ""}`}
          />
          {errors.country && touched.country ? (
            <div className="text-danger">{errors.country}</div>
          ) : null}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <MyFormField
            name="city"
            label="City"
            error={errors.city}
            touched={touched.city}
            value={city}
          />
        </div>
        <div className="col-4">
          <label>Region</label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => {
              values.region = val;
              setRegion(val);
              validateForm(values).then((res) => console.log(res));
            }}
            classes={`form-select ${errors.region ? "is-invalid" : ""}`}
          />
          {errors.region && touched.region ? (
            <div className="text-danger">{errors.region}</div>
          ) : null}
        </div>
        <div className="col-4">
          <MyFormField
            name="ZIP"
            label="ZIP"
            error={errors.ZIP}
            touched={touched.ZIP}
            value={ZIP}
          />
        </div>
      </div>
    </>
  );
}

export default FormAddress;
