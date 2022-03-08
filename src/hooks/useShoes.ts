import { useEffect, useState } from "react";

import { IShoe } from "../interfaces/shoe";
import { v4 as uuid } from "uuid";

const useShoes = () => {
  const [shoes, setShoes] = useState<IShoe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://nike-products.p.rapidapi.com/shoes/men-shoes", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "nike-products.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_HOTELS_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const dataWithId = data.map((el: IShoe) => {
            return { ...el, id: uuid() };
          });

          setShoes(dataWithId);
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    shoes,
    error,
    loading,
  };
};

export default useShoes;
