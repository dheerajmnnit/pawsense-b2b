import React from "react";
import { classNames } from "../../utils/helpers/common";

const Dropdown = ({
  id = "dropdown",
  label = "",
  name = "",
  value = "",
  onChange = () => {},
  options = [],
  error = "",
  required = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start",
        fullWidth ? "w-full" : ""
      )}
    >
      <label for={id} className="block text-base text-text-color-1 mb-2 w-full">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <select
        id={id}
        name={name}
        className={classNames(
          "w-full flex items-center text-sm bg-white text-text-color-2 overflow-hidden border rounded-md p-3",
          error ? "border-red-600" : "border-border-1"
        )}
        value={value}
        onChange={onChange}
      >
        {options?.map((option) => (
          <option value={option?.value || option}>
            {option?.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
