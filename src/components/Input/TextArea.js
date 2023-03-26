import React from "react";

import { classNames } from "../../utils/helpers/common";

const Input = ({
  label = "",
  className = "",
  name = "input",
  type = "text",
  required = false,
  onChange = () => {},
  value = "",
  placeholder = "",
  error = "",
  disabled = false,
  fullWidth = false,
  startAdornment = null,
  endAdornment = null,
  rows = 4,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start",
        fullWidth ? "w-full" : "",
        className
      )}
    >
      {label && (
        <label
          className={classNames(
            "text-base text-text-color-1 mb-2",
            error ? "text-red-600" : ""
          )}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div
        className={classNames(
          "w-full flex items-center text-sm bg-white  overflow-hidden border rounded-md",
          error ? "border-red-600" : "border-border-1"
        )}
      >
        {startAdornment && <div className="px-2 py-1">{startAdornment}</div>}
        <textarea
          name={name}
          className={classNames("placeholder:text-text-color-2 w-full p-3")}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          rows={rows}
        />
        {endAdornment && <div className="px-2 py-1">{endAdornment}</div>}
      </div>
      {error && <span className="mt-1 text-red-600 text-xs">{error}</span>}
    </div>
  );
};

export default Input;
