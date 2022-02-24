import React from "react";

import useUsers from "../hooks/useUsers";

const App = () => {
  const { users, error, isLoading } = useUsers();

  if (error) return <div>error</div>;

  if (isLoading) return <div>Loading...</div>;

  console.log(users);
  return <div>App</div>;
};

export default App;
