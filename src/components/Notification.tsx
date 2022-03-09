import React from "react";

type NotificationProps = {
  message: string;
  color: string;
};

function Notification({ message, color }: NotificationProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
      }}
      className={`alert alert-${color}`}
      role="alert"
    >
      {message}
    </div>
  );
}

export default Notification;
