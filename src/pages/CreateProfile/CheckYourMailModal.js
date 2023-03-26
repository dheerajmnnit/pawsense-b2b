import React from "react";

import Button from "../../components/Button";

import CheckYourMailImage from "../../assets/img/check-your-mail.png";
import { useNavigate } from "react-router";

const CheckYourMailModal = ({ handleClose }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary rounded-lg px-14 py-6 flex flex-col items-center gap-2">
      <div className="text-primary-1 text-5xl">Check your email!</div>
      <div className="text-gray-dark text-xl">Verify and proceed to login</div>
      <img src={CheckYourMailImage} alt="Check Your Mail" />
      <Button
        label="Proceed to Login"
        variant="primary"
        className="mt-3"
        onClick={() => {
          handleClose();
          navigate("/login");
        }}
      />
    </div>
  );
};

export default CheckYourMailModal;
