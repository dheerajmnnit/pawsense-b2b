import React, { useState } from "react";

import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import InputTime from "../../components/InputTime";
import { classNames } from "../../utils/helpers/common";

const FormStep1 = ({ handlePrev, handleNext }) => {
  const [workingDays, setWorkingDays] = useState([]);

  const handleDaySelection = (day) => {
    if (workingDays.includes(day)) {
      const newWorkingDays = workingDays.filter(
        (workingDay) => workingDay !== day
      );
      setWorkingDays([...newWorkingDays]);
    } else {
      setWorkingDays([...workingDays, day]);
    }
  };
  return (
    <form className="flex flex-col items-start gap-3 py-10">
      <Dropdown label="Time Zone" options={[{ label: "EST", value: "est" }]} />

      <div>
        <label className="block text-base text-text-color-1 my-4 w-full">
          Working Days
        </label>
        <div className="flex items-center gap-4">
          {["M", "Tu", "W", "Th", "F", "Sa", "Su"].map((day) => (
            <div
              className={classNames(
                "w-10 h-10 flex items-center text-sm overflow-hidden border rounded-md p-3",
                workingDays?.includes(day)
                  ? "bg-primary-1 text-black"
                  : "bg-white text-text-color-2 border-border-1"
              )}
              onClick={() => handleDaySelection(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <label className="block text-base text-text-color-1 my-4 w-full">
          Working Hours
        </label>
        <div className="flex items-center justify-between w-full">
          <InputTime />
          <span>To</span>
          <InputTime />
        </div>
      </div>

      

      <div className="w-full">
        <label className="block text-base text-text-color-1 my-4 w-full">
          Break Timings
        </label>
        <div className="flex items-center justify-between w-full">
          <InputTime />
          <span>To</span>
          <InputTime />
        </div>
      </div>

      <Button
        label="Next"
        variant="primary"
        className="mt-3 z-20"
        onClick={handleNext}
        type="submit"
      />
    </form>
  );
};

export default FormStep1;
