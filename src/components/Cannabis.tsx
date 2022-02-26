import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CannabisContext } from "./App";
import axios from "axios";

interface Cannabis {
  brand: string;
  id: string;
}

function Cannabis() {
  const { cannabis, isLoading } = useContext(CannabisContext);

  console.log("cannbis component");

  const renderWeed = () => {
    return cannabis.map((weed) => {
      return <h4 key={weed.id}>{weed.brand}</h4>;
    });
  };
  if (isLoading) return <div>Loading...</div>;
  return <div>{renderWeed()}</div>;
}

export default Cannabis;

export const useCannabis = () => {
  const [cannabis, setCannabis] = useState<Cannabis[]>([]);

  const { data, isError, isLoading, error } = useQuery(
    "weed",
    () =>
      axios.get(
        "https://random-data-api.com/api/cannabis/random_cannabis?size=5"
      ),
    {
      onSuccess: () => console.log("success"),
      onError: () => console.log("Error in fetch"),
    }
    // fetch(
    //   "https://random-data-api.com/api/cannabis/random_cannabis?size=5"
    // ).then((res) => res.json())
  );

  useEffect(() => {
    console.log(data);
    if (!data) return;

    setCannabis(data.data);
  }, [data]);

  return {
    cannabis,
    isLoading,
    isError,
    error,
  };
};
