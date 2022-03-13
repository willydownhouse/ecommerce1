import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { IFormValues } from "../interfaces/utils";
import MyFormField from "./MyFormField";

type FormAddressProps = {
  isBillingAddress: boolean;
  validateForm: (values: IFormValues) => Promise<FormikErrors<IFormValues>>;
  touched?: FormikTouched<IFormValues>;
  errors?: FormikErrors<IFormValues>;
  values: IFormValues;
  address: string;
  city: string;
  country: string;
  setCountry: (val: string) => void;
  region: string;
  setRegion: (val: string) => void;
  ZIP: string;
  inputNameAddress: string;
  inputNameCity: string;
  inputNameZIP: string;
  inputLabelAddress: string;
  inputLabelCity: string;
  inputLabelZIP: string;
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
  inputNameAddress,
  inputNameCity,
  inputNameZIP,
  inputLabelAddress,
  inputLabelCity,
  inputLabelZIP,
  isBillingAddress,
}: FormAddressProps) {
  return (
    <>
      <div className="row mb-3">
        <div className="col-8">
          <MyFormField
            name={inputNameAddress}
            value={address}
            label={inputLabelAddress}
            error={isBillingAddress ? errors?.address : errors?.shippingAddress}
            touched={
              isBillingAddress ? touched?.address : touched?.shippingAddress
            }
          />
        </div>
        <div className="col-4">
          <label>Country</label>

          <CountryDropdown
            value={country}
            onChange={(val) => {
              if (isBillingAddress) {
                values.country = val;
                values.region = "";
              } else {
                values.shippingCountry = val;
                values.shippingRegion = "";
              }

              setCountry(val);
              setRegion("");
              validateForm(values).then((res) => console.log(res));
            }}
            classes={`form-select ${
              (errors as FormikErrors<IFormValues>).country && isBillingAddress
                ? "is-invalid"
                : ""
            }`}
          />
          {(errors as FormikErrors<IFormValues>).country &&
          (touched as FormikTouched<IFormValues>).country &&
          isBillingAddress ? (
            <div className="text-danger">
              {(errors as FormikErrors<IFormValues>).country}
            </div>
          ) : null}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <MyFormField
            name={inputNameCity}
            label={inputLabelCity}
            error={isBillingAddress ? errors?.city : errors?.shippingCity}
            touched={isBillingAddress ? touched?.city : touched?.shippingCity}
            value={city}
          />
        </div>
        <div className="col-4">
          <label>Region</label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => {
              isBillingAddress
                ? (values.region = val)
                : (values.shippingRegion = val);

              setRegion(val);
              validateForm(values).then((res) => console.log(res));
            }}
            classes={`form-select ${
              (errors as FormikErrors<IFormValues>).region && isBillingAddress
                ? "is-invalid"
                : ""
            }`}
          />
          {(errors as FormikErrors<IFormValues>).region &&
          (touched as FormikTouched<IFormValues>).region &&
          isBillingAddress ? (
            <div className="text-danger">
              {(errors as FormikErrors<IFormValues>).region}
            </div>
          ) : null}
        </div>
        <div className="col-4">
          <MyFormField
            name={inputNameZIP}
            label={inputLabelZIP}
            error={isBillingAddress ? errors?.ZIP : errors?.shippingZIP}
            touched={isBillingAddress ? touched?.ZIP : touched?.shippingZIP}
            value={ZIP}
          />
        </div>
      </div>
    </>
  );
}

export default FormAddress;
