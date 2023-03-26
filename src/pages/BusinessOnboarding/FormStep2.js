import React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";

const FormStep2 = ({ handlePrev, handleNext }) => {
  return (
    <form className="flex flex-col items-center gap-3">
      <Dropdown
        label="Country"
        options={[
          {
            label: "Select a Country",
            value: "",
          },
          {
            label: "India",
            value: "INDIA",
          },
          {
            label: "America",
            value: "USA",
          },
        ]}
        fullWidth
        required
      />

      <Dropdown
        label="Province"
        options={[
          {
            label: "Select a province",
            value: "",
          },
          {
            label: "India",
            value: "INDIA",
          },
          {
            label: "America",
            value: "USA",
          },
        ]}
        fullWidth
        required
      />

      <Dropdown
        label="City"
        options={[
          {
            label: "Select your city",
            value: "",
          },
          {
            label: "India",
            value: "INDIA",
          },
          {
            label: "America",
            value: "USA",
          },
        ]}
        fullWidth
        required
      />

      <Input
        label="Address Line -1"
        type="text"
        placeholder="Enter address"
        fullWidth
        required
      />

      <Input
        label="Address Line -2"
        type="text"
        placeholder="Enter address"
        fullWidth
      />

      <Input
        label="Zip Code"
        type="text"
        placeholder="Enter your ZIP code"
        fullWidth
      />

      <div className="flex items-center justify-between gap-3 mt-3 z-20">
        <Button
          label="Privious"
          variant="secondary"
          className="bg-transparent"
          onClick={handlePrev}
        />

        <Button label="Next" variant="primary" onClick={handleNext} />
      </div>
    </form>
  );
};

export default FormStep2;
