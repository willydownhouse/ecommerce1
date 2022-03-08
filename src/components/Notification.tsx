import React from "react";

type NotificationProps = {
  message: string;
  color: string;
};

function Notification({ message, color }: NotificationProps) {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {message}
    </div>
  );
}

export default Notification;
