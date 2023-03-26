import React, { useState } from "react";

import Stepper from "./Stepper";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

import PlantLeft from "../../assets/img/business-preferances/plant-left.png";
import PlantRight from "../../assets/img/business-preferances/plant-right.png";
import Turttle from "../../assets/img/business-preferances/turttle.png";
import Rabbit from "../../assets/img/business-preferances/rabbit.png";
import WomanStanding from "../../assets/img/business-preferances/woman-standing.png";
import ManStanding from "../../assets/img/business-preferances/man-standing.png";

const FormWrapper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative bg-background-3 opacity-100 rounded-3xl p-10">
      <Stepper activeStep={activeStep} />
      {activeStep === 1 ? (
        <FormStep1
          handlePrev={() => setActiveStep(1)}
          handleNext={() => setActiveStep(2)}
        />
      ) : activeStep === 2 ? (
        <FormStep2
          handlePrev={() => setActiveStep(1)}
          handleNext={() => setActiveStep(3)}
        />
      ) : activeStep === 3 ? (
        <FormStep3
          handlePrev={() => setActiveStep(2)}
          onSuccess={() => {
            setActiveStep(1);
            setShowModal(true);
          }}
        />
      ) : null}
      <img className="z-0 absolute bottom-0 -left-44" src={PlantLeft} alt="" />
      <img
        className="z-0 absolute bottom-0 -right-44"
        src={PlantRight}
        alt=""
      />
      <img className="w-60 z-10 absolute -bottom-20 -left-32" src={Turttle} alt="" />
      <img className="w-60 z-10 absolute -bottom-20 -right-40" src={Rabbit} alt="" />
      <img
        className="z-0 absolute -bottom-24 -right-[500px]"
        src={WomanStanding}
        alt=""
      />
      <img
        className="z-0 absolute -bottom-4 -left-[360px]"
        src={ManStanding}
        alt=""
      />
    </div>
  );
};

export default FormWrapper;
