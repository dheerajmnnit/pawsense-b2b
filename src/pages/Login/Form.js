/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Alert from "../../components/Alert";

import EyeOpenIcon from "../../assets/img/icons/eye-open.png";
import EyeCloseIcon from "../../assets/img/icons/eye-close.png";

import { signinAction } from "../../store/common/User/actions";
import { emailRegex } from "../../utils/constants/regex";

const Form = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    rememberMe: "no",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [signinError, setSigninError] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.user) {
      // setIsOpenSuccessModal(true);
      setFields({
        email: "",
        password: "",
        rememberMe: "no",
      });
      setErrors({
        email: "",
        password: "",
        rememberMe: "no",
      });
      setSigninError();
      navigate("/dashboard");
    } else if (user?.signin?.error) {
      if (!user?.signin?.error?.success) {
        setSigninError(
          user?.signin?.error?.error || user?.signin?.error?.message
        );
      }
    }
  }, [user]);

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    switch (fieldName) {
      case "email":
        if (fieldValue) {
          errors[fieldName] = emailRegex.test(fieldValue)
            ? ""
            : "Invalid Email Address!";
        } else {
          errors[fieldName] = "Required!";
        }
        break;

      case "password":
        if (fieldValue) {
          if (!/[a-z]/.test(fieldValue)) {
            errors[fieldName] =
              "Password must contain atleast one small letter!";
          } else if (!/[A-Z]{1}/.test(fieldValue)) {
            errors[fieldName] =
              "Password must contain atleast one capital letter!";
          } else if (!/[0-9]{1}/.test(fieldValue)) {
            errors[fieldName] = "Password must contain atleast one number!";
          } else if (!/[@, *, $, %]{1}/.test(fieldValue)) {
            errors[fieldName] =
              "Password must contain atleast one of special symbol @, *, $, %";
          } else {
            errors[fieldName] = "";
          }
        } else if (!fieldValue) {
          errors[fieldName] = "Required!";
        }
        break;

      default:
        errors[fieldName] = "";
        break;
    }

    fields[fieldName] = fieldValue;

    setFields({ ...fields });
    setErrors(errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ["email", "password"];

    const hasError = requiredFields.some((field) => errors[field]);
    const isValidForm = requiredFields.every((field) => fields[field]);

    if (!hasError && isValidForm) {
      setSigninError();
      dispatch(
        signinAction({
          device_id: "1234-5678-9012",
          ...fields,
        })
      );
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-3 bg-background-3 rounded-3xl p-10"
      onSubmit={handleSubmit}
    >
      {signinError?.message && (
        <Alert type="error" message={signinError?.message} />
      )}

      <Input
        name="email"
        label="Email Address"
        type="text"
        placeholder="Enter your email address"
        fullWidth
        onChange={handleChange}
        value={fields.email}
        error={errors.email}
      />

      <Input
        label="Password"
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        fullWidth
        endAdornment={
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <img
                src={EyeCloseIcon}
                width="32px"
                height="32px"
                alt="Eye Close Icon"
              />
            ) : (
              <img
                src={EyeOpenIcon}
                width="32px"
                height="32px"
                alt="Eye Open Icon"
              />
            )}
          </button>
        }
        onChange={handleChange}
        value={fields.password}
        error={errors.password}
      />

      <div className="flex items-center justify-between w-full mt-3">
        <Checkbox
          className="flex items-center mr-4"
          label="Remember Me"
          name="rememberMe"
          checked={fields.rememberMe === "yes"}
          value={fields.rememberMe === "yes" ? "no" : "yes"}
          onChange={handleChange}
          // value={fields.rememberMe}
          error={errors.rememberMe}
        />

        <Link to="/forgot-password" className="text-red-600">
          Forgot Password
        </Link>
      </div>

      <Button
        label="Sign In"
        type="submit"
        variant="primary"
        className="mt-3"
        onClick={handleSubmit}
        disabled={user?.signin?.loading}
        loading={user?.signin?.loading}
      />

      <p className="text-xs">
        Dont have an account? <Link to="/create-profile">Create Profile!</Link>
      </p>
    </form>
  );
};

export default Form;
