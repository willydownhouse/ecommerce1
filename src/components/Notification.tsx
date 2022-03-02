import React from "react";

type NotificationProps = {
  message: string;
  color: string;
};

function Notification({ message, color }: NotificationProps) {
  console.log("notification renders");

  return (
    <div className={`alert alert-${color} fixed-top`} role="alert">
      {message}
    </div>
  );
}

export default Notification;
