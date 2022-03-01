import React, { useContext } from "react";
import { StateContext } from "./App";

type NotificationProps = {
  notification: string;
  color: string;
};

function Notification({ notification, color }: NotificationProps) {
  //const { notification } = useContext(StateContext);

  //if (!notification) return null;

  return (
    <div className={`alert alert-${color} fixed-top`} role="alert">
      {notification}
    </div>
  );
}

export default Notification;
