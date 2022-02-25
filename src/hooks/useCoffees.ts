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
