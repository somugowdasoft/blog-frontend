import React from "react";

const AlertMessage = ({ type, message }) => {
  const color = type === "success" ? "green" : "red";
  return (
    <div className={`bg-${color}-100 text-${color}-700 px-4 py-2 rounded mb-4`}>
      {message}
    </div>
  );
};

export default AlertMessage;
