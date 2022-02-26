import React, { useContext } from "react";
import { CannabisContext } from "./App";

function Home() {
  const can = useContext(CannabisContext);

  const { cannabis, isLoading } = can;

  console.log(can);

  if (isLoading) return <div>Loading...</div>;

  return <div>{`Now you have ${cannabis.length} amount of weed`}</div>;
}

export default Home;
