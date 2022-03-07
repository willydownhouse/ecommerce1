import React, { useEffect, useState } from "react";

import {
  Button,
  Container,
  Form,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";
import MyForm from "./Form";
import Suggestions from "./Suggestions";

//import Notification from "./Notification";

export interface IHotel {
  name: string;
  destinationId: string;
}

const App = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  return (
    <Container>
      <Header as={"h2"}>Hotels</Header>
      <MyForm setHotels={setHotels} />
      <Suggestions hotels={hotels} />
    </Container>
  );
};

export default App;

//{
/* <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<CoffeesList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter> */
//}

//import { addDoc, collection, doc, setDoc } from "firebase/firestore";
//import { db } from "../firebase";

// const docData = {
//   uid: "77281193-b054-4b2f-a5a1-f8cc2b6965a5",
//   blend_name: "Green Symphony",
//   origin: "Bugisu, Uganda",
//   variety: "SL34",
//   notes: "deep, silky, mandarin, mango, cacao nibs",
//   intensifier: "quick",
// };

// const addDocument = async () => {
//   const res = await addDoc(collection(db, "coffees"), docData);
//   console.log(res.converter?.fromFirestore);
// };
