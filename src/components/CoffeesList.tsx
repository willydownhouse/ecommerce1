import React from "react";

import useCoffees from "../hooks/useCoffees";

const CoffeesList = () => {
  const { coffees } = useCoffees();

  console.log(coffees);

  const renderCoffees = () => {
    return coffees.map((coffee) => (
      <div key={coffee.uid}>
        <h3>{coffee.blend_name}</h3>
        <p>{coffee.origin}</p>
      </div>
    ));
  };

  if (coffees.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {renderCoffees()}

      <button>Login</button>
    </div>
  );
};

export default CoffeesList;
