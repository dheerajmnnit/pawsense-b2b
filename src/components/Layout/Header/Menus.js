import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <ul className="flex items-center justify-end gap-5">
            <li className="text-[30px]">
                <Link to="/login">Login</Link>
            </li>
            <li className="text-[30px]">
                <Link to="/about-us">About Us</Link>
            </li>
        </ul>
    );
};

export default Menus;
