import React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Multiselect from "multiselect-react-dropdown";
import Switch from "react-switch";

const FormStep2 = ({ handlePrev, handleNext }) => {
  const onSelect = (selectedList, selectedItem) => {};
  const onRemove = (selectedList, selectedItem) => {};
  const handleSwitchChange = (checked) => {};
  return (
    <form className="flex flex-col items-center gap-3">
      <Input
        label="Number of Employees"
        className="w-40"
        // label="Address Line -1"
        type="text"
        // placeholder="Enter address"
        // fullWidth
        // required
        startAdornment={
          <button className="w-10 h-10 flex items-center justify-center border-r-2 border-gray-300">
            -
          </button>
        }
        endAdornment={
          <button className="w-10 h-10 flex items-center justify-center border-l-2 border-gray-300">
            +
          </button>
        }
      />

      <div className="w-full">
        <div className="text-base text-text-color-1 mb-2">Services offered</div>
        <Multiselect
          className="w-full"
          options={[
            { name: "option1", id: "1" },
            { name: "option2", id: "2" },
          ]} // Options to display in the dropdown
          selectedValues={1} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          style={{
            multiselectContainer: {
              // To change css for multiselect (Width,height,etc..)
              // ....
              width: "100%",
            },
            searchBox: {
              // To change search box element look
              // border: "none",
              border: "1px solid #efefef",
              // "font-size": "14px",
              // "min-height": "50px",
              background: "white",
            },
            inputField: {
              // To change input field position or margin
              margin: "5px",
            },
            chips: {
              // To change css chips(Selected options)
              background: "green",
            },
            optionContainer: {
              // To change css for option container
              border: "2px solid #567B83",
            },
            option: {
              // To change css for dropdown options
              color: "#567B83",
              background: "white",
              borderBottom: "1px solid #567B83",
            },
            groupHeading: {
              // To chanage group heading style
              // ....
            },
          }}
        />
      </div>

      <div className="w-full">
        <div className="text-base text-text-color-1 mb-2">
          Notification Settings
        </div>
        <div className="flex items-center gap-4">
        <Switch onChange={handleSwitchChange} checked={true} /><span>On</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 mt-16 z-20">
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
