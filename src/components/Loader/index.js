import React from "react";
import "./style.css";

import Loader from "./InlineLoader";

const LoaderWrapper = () => {
    return (
        <div className="loader-container">
            <div className="loader-background"></div>
            <Loader />
        </div>
    );
};

export default LoaderWrapper;
