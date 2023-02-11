import React from "react";

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Link from "../../components/Link";

import EyeIcon from "../../assets/img/icons/eye.png";

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
                type="password"
                placeholder="Enter your password"
                fullWidth
                endAdornment={<img src={EyeIcon} alt="Eye Icon" />}
            />

            <div className="flex items-center justify-between w-full mt-3">
                <Checkbox
                    className="flex items-center"
                    label="Remember Me"
                    checked={false}
                    value={"YES"}
                    onChange={(event) => console.log(event.target.value)}
                />

                <Link to="/forgot-password" className="text-red-600">
                    Forgot Password
                </Link>
            </div>

            <Button label="Sign In" variant="primary" className="mt-3" />

            <p className="text-xs">
                Dont have an account? <Link to="/create-profile">Create Profile!</Link>
            </p>
        </form>
    );
};

export default Form;
