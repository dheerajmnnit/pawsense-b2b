import React from "react";

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Link from "../../components/Link";
import FileUpload from "../../components/Input/FileUpload";
import TextArea from "../../components/Input/TextArea";

const FormStep3 = ({ handlePrev, onSuccess }) => {
  return (
    <form className="mt-10 flex flex-col items-center gap-5">
    <TextArea
      label="Description of your Business"
      type="text"
      // placeholder="Enter your company name"
      fullWidth
    />
      <div className="flex items-center justify-between gap-3 mt-3 z-20">
        <Button
          label="Privious"
          variant="secondary"
          className="bg-transparent"
          onClick={handlePrev}
        />

        <Button label="Finish" variant="primary" onClick={onSuccess} />
      </div>
    </form>
  );
};

export default FormStep3;
