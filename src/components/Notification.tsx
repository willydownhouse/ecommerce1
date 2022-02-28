import React, { useContext } from "react";
import { StateContext } from "./App";

function Notification() {
  const { notification } = useContext(StateContext);

  if (!notification) return null;

  return (
    <div className="alert alert-danger fixed-top" role="alert">
      {notification}
    </div>
  );
}

export default Notification;
