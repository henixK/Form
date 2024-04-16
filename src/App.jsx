import React, { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";
import Steps from "./components/Steps";
import StepsButton from "./components/StepsButton";
import Button from "./components/Button";
import Step1 from "./components/StepsForm/Step1";
import Step2 from "./components/StepsForm/Step2";
import Step3 from "./components/StepsForm/Step3";

function App() {
  const [currentStep, setCurrentStep] = useState(1); // Initialize current step to 1

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Section>
      <div className="flex w-full flex-col lg:flex-row rounded-2xl bg-white relative p-5">
        <Steps>
          <StepsButton
            nStep={1}
            text={"your info"}
            onClick={() => setCurrentStep(1)}
          />
          <StepsButton
            nStep={2}
            text={"select plan"}
            onClick={() => setCurrentStep(2)}
          />
          <StepsButton
            nStep={3}
            text={"add-ons"}
            onClick={() => setCurrentStep(3)}
          />
          <StepsButton
            nStep={4}
            text={"summary"}
            onClick={() => setCurrentStep(4)}
          />
        </Steps>
        <Form>
          {currentStep === 1 && (
            <Step1>
              <Button title={"Next Step"} click={nextStep} />
            </Step1>
          )}
          {currentStep === 2 && (
            <Step2>
              <Button title={"Next Step"} click={nextStep} />
            </Step2>
          )}
          {currentStep === 3 && (
            <Step3>
              <Button title={"Next Step"} click={nextStep} />
            </Step3>
          )}
          {currentStep > 1 && <Button title={"Go Back"} click={prevStep} />}
        </Form>
      </div>
    </Section>
  );
}

export default App;
