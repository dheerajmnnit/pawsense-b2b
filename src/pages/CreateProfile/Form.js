import React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";

const Form = () => {
    return (
        <form className="flex flex-col items-center gap-3 bg-background-3 rounded-3xl p-10">
            <Input label="Name" type="text" placeholder="Enter your Name" fullWidth />
            <Input
                label="Email Address"
                type="text"
                placeholder="Enter your email address"
                fullWidth
            />
            <Input
                label="Password"
                type="text"
                placeholder="Enter your password"
                fullWidth
            />
            <Input
                label="Phone Number"
                type="text"
                placeholder="Enter your Phone Number"
                fullWidth
            />

            <Button label="Sign Up!" variant="primary" className="mt-3" />

            <p className="text-xs">
                Already have an account with Pawsense? <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default Form;
