import React from "react";

import { classNames } from "../../utils/helpers/common";

const Button = ({
    label = "",
    className = "",
    variant = "secondary",
    type = "button",
    fullWidth = false,
    onClick = () => { },
}) => {
    return (
        <button
            className={classNames(
                "border-2 px-20 py-2 rounded-xl",
                variant === "primary"
                    ? "bg-btn-primary border-btn-primary text-white"
                    : variant === "secondary"
                        ? "bg-white border-btn-primary text-btn-primary"
                        : "bg-white border-white ",
                fullWidth ? "w-full" : "",
                className
            )}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
