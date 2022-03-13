import { ICheckout } from "../interfaces/checkout";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addCheckoutToFireStore = async (checkout: ICheckout) => {
  try {
    await addDoc(collection(db, "checkout"), checkout);
  } catch (err) {
    console.log(err);
  }
};
