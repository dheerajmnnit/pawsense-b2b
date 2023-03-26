import React from "react";

const Checkbox = ({
  label = "",
  name = "",
  className = "",
  value = "",
  checked = false,
  onChange = () => {},
}) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="A3-yes"
          name={name}
          value={value}
          checked={checked}
          className="opacity-0 absolute h-8 w-8"
          onChange={onChange}
        />
        <div className="bg-transparent border-2 rounded-md border-text-color-1 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-text-color-1">
          <svg
            className="fill-current hidden w-3 h-3 text-text-color-1 pointer-events-none"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <g
                transform="translate(-9 -11)"
                fill="#1F73F1"
                fill-rule="nonzero"
              >
                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
        <label for="A3-yes" className="select-none text-text-color-1">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
