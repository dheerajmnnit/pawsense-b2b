import React from "react";

import InlineLoader from "../Loader/InlineLoader";

import { classNames } from "../../utils/helpers/common";

const Button = ({
  label = "",
  className = "",
  variant = "secondary",
  type = "button",
  fullWidth = false,
  onClick = () => {},
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        "border-2 px-20 py-2 rounded-xl disabled:cursor-not-allowed",
        variant === "primary"
          ? "bg-btn-primary border-btn-primary text-white disabled:bg-white disabled:border-gray-500 disabled:text-gray-500"
          : variant === "secondary"
          ? "bg-white border-btn-primary text-btn-primary"
          : "bg-white border-white ",
        fullWidth ? "w-full" : "",
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}{" "}
      {loading && (
        <InlineLoader width={"20px"} height={"20px"} color="#aeaeae" />
      )}
    </button>
  );
};

export default Button;
