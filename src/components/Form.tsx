import React, { useState } from "react";
import { Formik, Form as FormikForm, Field as FormikField } from "formik";
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Image,
  Input,
  Message,
  Modal,
} from "semantic-ui-react";
import { IHotel } from "./App";

type FormProps = {
  setHotels: (value: IHotel[]) => void;
};

const initialValues = {
  city: "",
  currency: "",
};

type FormError = {
  city?: string;
  currency?: string;
};

function MyForm({ setHotels }: FormProps) {
  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
        fetchHotels(values.city, values.currency, setHotels);
      }}
      initialValues={initialValues}
      validate={(values) => {
        const errors: FormError = {};

        if (!values.city) {
          errors.city = "Required";
        }
        if (!values.currency) {
          errors.currency = "Required";
        }

        return errors;
      }}
    >
      {({ values, errors, handleChange }) => (
        <FormikForm>
          <Form.Field
            style={{ width: "100%" }}
            control={Input}
            name="city"
            type={"text"}
            value={values.city}
            onChange={handleChange}
          />
          {errors.city ? <Message error>{errors.city}</Message> : null}
          <Divider hidden></Divider>
          <Form.Field
            style={{ width: "100%" }}
            control={Input}
            name="currency"
            type={"text"}
            onChange={handleChange}
            value={values.currency}
          />

          {errors.currency ? <Message error>{errors.currency}</Message> : null}
          <Divider hidden></Divider>
          <Form.Button type="submit">Submit</Form.Button>
        </FormikForm>
      )}
    </Formik>
  );
}

export default MyForm;

const fetchHotels = (
  location: string,
  currency: string,
  setHotels: (value: any) => void
) => {
  fetch(
    "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?" +
      new URLSearchParams({
        query: `${location}`,
        locale: "en_US",
        currency: `${currency}`,
      }),
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_HOTELS_API_KEY as string,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setHotels(data.suggestions[0].entities);
    })
    .catch((err) => console.log(err));
};
