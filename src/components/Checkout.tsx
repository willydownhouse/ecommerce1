import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useStateValue } from "../state/state";
import { countCartTotal } from "../utils/countCartsTotal";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import FormAddress from "./FormAddress";
import FormAmount from "./FormAmount";
import FormCheckBox from "./FormCheckBox";
import * as yup from "yup";
import MyFormField from "./MyFormField";

import "../css/Checkout.css";
import { IFormValues } from "../interfaces/utils";

const checkOutSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  address: yup.string().required("Required"),
  country: yup.string().required("Required"),
  region: yup.string().required("Required"),
  ZIP: yup.string().required("Required"),
  city: yup.string().required("Required"),
});

function Checkout() {
  const { state } = useStateValue();

  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [showShipping, setShowShipping] = useState<boolean>(false);
  const initialValues: IFormValues = {
    name: state.user?.name as string,
    email: state.user?.email as string,
    address: "",
    country: "",
    region: "",
    ZIP: "",
    city: "",
    amount: countCartTotal(state.cart),
  };

  if (state.cart.length === 0)
    return <div className="checkout">You have no items in your cart</div>;

  return (
    <div className="checkout">
      <Formik
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          localStorage.removeItem("cart");
          resetForm();
          setCountry("");
          setRegion("");
        }}
        initialValues={initialValues}
        validationSchema={checkOutSchema}
      >
        {({ values, errors, touched, validateForm }) => (
          <Form>
            <h5>Customer Info</h5>
            <div className="row mb-5">
              <div className="col-6">
                <MyFormField
                  name="name"
                  error={errors.name}
                  label="Name"
                  touched={touched.name}
                  value={values.name}
                />
              </div>
              <div className="col-6">
                <MyFormField
                  name="email"
                  error={errors.email}
                  label="Email"
                  touched={touched.email}
                  value={values.email}
                />
              </div>
            </div>

            <h5>Billing Address</h5>

            <FormAddress
              validateForm={validateForm}
              errors={errors}
              touched={touched}
              values={values}
              ZIP={values.ZIP}
              address={values.address}
              city={values.city}
              country={country}
              region={region}
              setCountry={setCountry}
              setRegion={setRegion}
            />

            <FormAmount amount={values.amount} />

            <FormCheckBox
              showShipping={showShipping}
              setShowShipping={setShowShipping}
            />

            {showShipping ? <div>Shipping adress</div> : null}

            <div className="mb-5">
              <button type="submit" className="btn btn-outline-dark btn-sm">
                Submit
              </button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Checkout;
