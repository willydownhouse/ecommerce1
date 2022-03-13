import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useStateValue } from "../state/state";
import { countCartTotal } from "../utils/countCartsTotal";

import FormAddress from "./FormAddress";
import FormAmount from "./FormAmount";
import FormCheckBox from "./FormCheckBox";
import MyFormField from "./MyFormField";
import { checkOutSchema } from "../utils/checkoutSchema";
import CreditCard from "./CreditCard";

import "../css/Checkout.css";
import { IFormValues } from "../interfaces/utils";
import {
  CHECKOUT,
  REMOVE_ALL_FROM_CART,
  REMOVE_NOTIFICATION,
  SET_NOTIFICATION,
} from "../state/action";

function Checkout() {
  const { state, dispatch } = useStateValue();
  const navigate = useNavigate();

  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [shippingCountry, setShippingCountry] = useState<string>("");
  const [shippingRegion, setShippingRegion] = useState<string>("");
  const [showShipping, setShowShipping] = useState<boolean>(false);

  const initialValues: IFormValues = {
    name: state.user?.name as string,
    email: state.user?.email as string,
    address: "",
    country: "",
    region: "",
    ZIP: "",
    city: "",
    shippingAddress: "",
    shippingCountry: "",
    shippingRegion: "",
    shippingZIP: "",
    shippingCity: "",
    amount: countCartTotal(state.cart),
    credit_card: "",
    expiration: "",
    CVC: "",
  };

  if (state.cart.length === 0)
    return <div className="checkout">You have no items in your cart</div>;

  return (
    <div className="checkout">
      <Formik
        onSubmit={(values, { resetForm }) => {
          dispatch({
            type: CHECKOUT,
            payload: { ...values, products: state.cart },
          });

          resetForm();
          setCountry("");
          setRegion("");
          setShippingRegion("");
          setShippingCountry("");

          dispatch({
            type: SET_NOTIFICATION,
            payload: {
              message: "Thank you for your purchase.",
              color: "success",
            },
          });

          dispatch({
            type: REMOVE_ALL_FROM_CART,
            payload: null,
          });

          setTimeout(() => {
            dispatch({
              type: REMOVE_NOTIFICATION,
              payload: null,
            });
            navigate("/");
          }, 3000);
        }}
        initialValues={initialValues}
        validationSchema={checkOutSchema}
      >
        {({ values, errors, touched, validateForm }) => (
          <Form>
            <h5 className="mb-3">Customer Info</h5>
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

            <h5 className="mb-3">Billing Address</h5>

            <FormAddress
              isBillingAddress={true}
              inputNameAddress="address"
              inputNameCity="city"
              inputNameZIP="ZIP"
              inputLabelAddress="Street"
              inputLabelCity="City"
              inputLabelZIP="ZIP"
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

            {showShipping ? (
              <>
                <h5 className="mb-3">Shipping Address</h5>
                <FormAddress
                  isBillingAddress={false}
                  inputLabelAddress="Street"
                  inputLabelCity="City"
                  inputLabelZIP="ZIP"
                  errors={errors}
                  touched={touched}
                  inputNameAddress="shippingAddress"
                  inputNameCity="shippingCity"
                  inputNameZIP="shippingZIP"
                  validateForm={validateForm}
                  values={values}
                  ZIP={values.shippingZIP}
                  address={values.shippingAddress}
                  city={values.shippingCity}
                  country={shippingCountry}
                  region={shippingRegion}
                  setCountry={setShippingCountry}
                  setRegion={setShippingRegion}
                />
              </>
            ) : null}

            <h5 className="mb-3 mt-5">Payment Details</h5>

            <div className="row mb-5">
              <CreditCard values={values} errors={errors} touched={touched} />
            </div>

            <div className="mb-5">
              <button type="submit" className="btn btn-outline-dark btn-sm">
                Submit
              </button>
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Checkout;
