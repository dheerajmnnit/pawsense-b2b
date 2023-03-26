import React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

const FormStep1 = ({ handlePrev, handleNext }) => {
  return (
    <form className="flex flex-col items-center gap-3">
      <Input label="Name" type="text" placeholder="Enter your Name" fullWidth />
      <Input
        label="Name of your company"
        type="text"
        placeholder="Enter your company name"
        fullWidth
      />

      <Input
        label="Business Email Address"
        type="text"
        placeholder="Enter your email address"
        fullWidth
      />

      <Input
        label="Business Phone Number "
        type="text"
        placeholder="Enter your Phone number"
        fullWidth
        startAdornment={
          <div className="p-2 text-gray-300 pr-4 border-r border-gray-300">
            +1
          </div>
        }
      />

      <Button
        label="Next"
        variant="primary"
        className="mt-3 z-20"
        onClick={handleNext}
      />
    </form>
  );
};

export default FormStep1;
