import * as yup from "yup";

export const checkOutSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  address: yup.string().required("Required"),
  country: yup.string().required("Required"),
  region: yup.string().required("Required"),
  ZIP: yup.string().required("Required"),
  city: yup.string().required("Required"),
  shippingAddress: yup.string(),
  shippingCountry: yup.string(),
  shippingRegion: yup.string(),
  shippingZIP: yup.string(),
  shippingCity: yup.string(),
  credit_card: yup
    .string()
    .min(15, "Card number at least 15 characters")
    .max(30, "Card number at most 30 characters")
    .required("Required"),
  expiration: yup
    .string()
    .max(5, "Please give a month and a year")
    .required("Required"),
  CVC: yup.string().length(3).required("Required"),
});
