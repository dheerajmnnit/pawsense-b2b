import React from "react";
import { Link } from "react-router-dom";

import { classNames } from "../../utils/helpers/common";

const LinkCustom = ({ children, to = "/", className }) => {
    return (
        <Link className={classNames("text-btn-primary", className)} to={to}>
            {children}
        </Link>
    );
};

export default LinkCustom;
