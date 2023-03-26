/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Modal from "../../components/Modal";
import CheckYourMailModal from "./CheckYourMailModal";
import Alert from "../../components/Alert";

import { useForm, Controller } from "react-hook-form";
import { getErrorMessage, validateEmail } from "../../utils/helpers/common";

import { signupAction } from "../../store/common/User/actions";

const Form = () => {
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      country_code: "+91",
    },
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onSubmit = (data) => {
    setSignupError();
    dispatch(
      signupAction({
        role: "Owner",
        device_id: "1234-5678-9012",
        ...data,
      })
    );
  };

  useEffect(() => {
    if (user?.user) {
      navigate("/dashboard");
    } else if (user?.signup?.data) {
      setIsOpenSuccessModal(true);
      reset();
      setSignupError();
    } else if (user?.signup?.error) {
      if (!user?.signup?.error?.success) {
        setSignupError(user?.signup?.error?.error);
      }
    }
  }, [user]);

  return (
    <>
      <form
        className="flex flex-col items-center gap-3 bg-background-3 rounded-3xl p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {signupError?.message && (
          <Alert type="error" message={signupError?.message} />
        )}
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="Name"
              type="text"
              placeholder="Enter your Name"
              fullWidth
              error={getErrorMessage(errors?.name, "Name")}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{ required: true, validate: validateEmail }}
          render={({ field }) => (
            <Input
              label="Email Address"
              type="text"
              placeholder="Enter your email address"
              fullWidth
              error={
                getErrorMessage(errors?.email, "Email Address") ||
                (errors?.email?.type === "validate"
                  ? "Invalid Email Address"
                  : "")
              }
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              fullWidth
              error={getErrorMessage(errors?.password, "Password")}
              {...field}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{ required: true, maxLength: 10, minLength: 10 }}
          render={({ field }) => (
            <Input
              label="Phone Number"
              type="text"
              placeholder="Enter your Phone Number"
              fullWidth
              error={
                getErrorMessage(errors?.phone, "Phone Number") ||
                (errors?.phone?.type === "minLength" ||
                errors?.phone?.type === "maxLength"
                  ? "Invalid Phone Number"
                  : "")
              }
              {...field}
              startAdornment={
                <Controller
                  name="country_code"
                  control={control}
                  // rules={{ required: true, maxLength: 10, minLength: 10 }}
                  render={({ field }) => (
                    <select
                      className="text-gray-dark border-r border-gray-300"
                      {...field}
                    >
                      <option>+91</option>
                      <option>+01</option>
                    </select>
                  )}
                />
              }
            />
          )}
        />

        <Button
          label="Sign Up!"
          variant="primary"
          type="submit"
          className="mt-3"
          loading={user?.loading}
          disabled={user?.loading}
        />

        <p className="text-xs">
          Already have an account with Pawsense? <Link to="/login">Login</Link>
        </p>
      </form>

      <Modal isOpen={isOpenSuccessModal} showCloseBtn={false}>
        <CheckYourMailModal handleClose={() => setIsOpenSuccessModal(false)} />
      </Modal>
    </>
  );
};

export default Form;
