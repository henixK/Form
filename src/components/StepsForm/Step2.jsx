import Step2Button from "../Step2Button";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import ButtonSlider from "../ButtonSlider";
import { useState } from "react";
import FormTitle from "../FormTitle";


export default function Step2({ children }) {
  const [isMonthly, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isMonthly);
  };

  return (
    <section className="w-full">
      <FormTitle
        title={"Select your plan"}
        description={"You have the option of monthly or yearly billing."}
      />
      <div className="flex gap-5 h-full mt-10 ">
        <Step2Button
          handle={handleCheckboxChange}
          icon={iconArcade}
          title={"Arcade"}
          price={isMonthly ? "$90/yr" : "$9/mo"}
          priceYear={"2 months free"}
          checked={isMonthly}
        />
        <Step2Button
          handle={handleCheckboxChange}
          icon={iconAdvanced}
          title={"Advanced"}
          price={isMonthly ? "$120/yr" : "$12/mo"}
          priceYear={"2 months free"}
          checked={isMonthly}
        />
        <Step2Button
          handle={handleCheckboxChange}
          icon={iconPro}
          title={"Pro"}
          price={isMonthly ? "$150/yr" : "$15/mo"}
          priceYear={"2 months free"}
          checked={isMonthly}
        />
      </div>
      <div className="w-full my-8">
        <div className="w-full p-3 rounded-xl flex justify-center gap-8 font-bold bg-slate-100">
          <p>Monthly</p>
          <ButtonSlider checked={isMonthly} handle={handleCheckboxChange} />
          <p>Yearly</p>
        </div>
      </div>
      {children}
    </section>
  );
}
