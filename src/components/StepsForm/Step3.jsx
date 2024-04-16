import Step3Button from "../Step3Button";
import FormTitle from "../FormTitle";

export default function Step3({ children }) {
  return (
    <section>
      <FormTitle
        title={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      />
      <div className="flex flex-col gap-5 mt-10">
        <Step3Button
          title={"Online Service"}
          description={"Access to multiplayer games"}
          price={"+1/mo"}
        />
        <Step3Button
          title={"Larger storage"}
          description={"Extra 1TB of cloud save"}
          price={"+2/mo"}
        />
        <Step3Button
          title={"Online Service"}
          description={"Custom theme on your profile"}
          price={"+2/mo"}
        />
      </div>
      {children}
    </section>
  );
}
