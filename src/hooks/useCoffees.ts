import { SetStateAction, useEffect, useState } from "react";
import { ICoffee } from "../interfaces/coffee";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useCoffees = () => {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);
  const coffeeCollectionRef = collection(db, "coffees");

  useEffect(() => {
    getDocs(coffeeCollectionRef).then((res) => {
      const data = res.docs.map((doc) => ({ ...doc.data() }));

      setCoffees(data as SetStateAction<ICoffee[]>);
    });
  }, []);

  return {
    coffees,
  };
};

export default useCoffees;

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
