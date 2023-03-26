import React from "react";
import { classNames } from "../../utils/helpers/common";

const Alert = ({
  type = "info",
  message = "",
  showCloseBtn = true,
  handleClose = () => {},
}) => {
  return (
    <div
      className={classNames(
        "border py-2 px-3 rounded-lg w-full flex items-start justify-between gap-3",
        type === "info"
          ? "border-gray-dark"
          : type === "success"
          ? "border-btn-primary text-btn-primary"
          : type === "error"
          ? "border-red-500 text-red-600"
          : ""
      )}
    >
      <p>{message}</p>
      {showCloseBtn && <button onClick={handleClose}>x</button>}
    </div>
  );
};

export default Alert;
