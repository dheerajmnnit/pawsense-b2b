import React from "react";

import { classNames } from "../../utils/helpers/common";

const InputTime = ({
  label = "",
  required = false,
  onChange = () => {},
  value = "",
  placeholder = "",
  error = "",
  disabled = false,
  fullWidth = false,
  startAdornment = null,
  endAdornment = null,
  hoursChangesHander = () => {},
  minutesChangesHander = () => {},
  hours,
  minutes,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start",
        fullWidth ? "w-full" : ""
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
        <input
          className="p-2 w-10 text-center"
          name="hours"
          onChange={minutesChangesHander}
          value={hours}
        />
        <span>:</span>
        <input
          className="p-2 w-10 text-center"
          name="minutes"
          onChange={hoursChangesHander}
          value={minutes}
        />
        <select
          className="text-gray-dark border-l-2 px-2"
          // {...field}
        >
          <option>AM</option>
          <option>PM</option>
        </select>
        {/* {startAdornment && <div className="px-2 py-1">{startAdornment}</div>}
        <input
          name={name}
          className={classNames("placeholder:text-text-color-2 w-full p-3")}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        {endAdornment && <div className="px-2 py-1">{endAdornment}</div>} */}
      </div>
      {error && <span className="mt-1 text-red-600 text-xs">{error}</span>}
    </div>
  );
};

export default InputTime;
