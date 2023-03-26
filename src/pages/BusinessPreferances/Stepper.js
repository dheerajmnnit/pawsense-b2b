import React from "react";
import { classNames } from "../../utils/helpers/common";

import OneWhite from "../../assets/img/icons/stepper/1-white.png";
// import OneGreen from "../../assets/img/icons/stepper/1-green.png"
import TwoWhite from "../../assets/img/icons/stepper/2-white.png";
import TwoGreen from "../../assets/img/icons/stepper/2-green.png";
import ThreeWhite from "../../assets/img/icons/stepper/3-white.png";
import ThreeGreen from "../../assets/img/icons/stepper/3-green.png";

const Stepper = ({ activeStep = 1 }) => {
  return (
    <div className="flex items-center justify-between">
      <div
        className={classNames(
          "w-20 h-20 flex items-center justify-center border-2 border-primary-1 rounded-full",
          "bg-primary-1"
        )}
      >
        <img className="h-5" src={OneWhite} alt="one-white" />
      </div>
      <div
        className={classNames(
          "w-20 h-20 flex items-center justify-center border border-primary-1 rounded-full"
        )}
      >
        <img
          className="h-5"
          src={activeStep >= 2 ? TwoWhite : TwoGreen}
          alt="two-green"
        />
      </div>
      <div
        className={classNames(
          "w-20 h-20 flex items-center justify-center border border-primary-1 rounded-full"
        )}
      >
        <img
          className="h-5"
          src={activeStep >= 3 ? ThreeWhite : ThreeGreen}
          alt="three-green"
        />
      </div>
    </div>
  );
};

export default Stepper;
