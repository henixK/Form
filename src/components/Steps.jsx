import Button from "./Button";
import StepsButton from "./StepsButton";

export default function Steps({ }) {
  return (
    <div className="w-full bg-mobileSide lg:bg-desktopSide bg-cover bg-center flex flex-row justify-center py-10 gap-5 lg:justify-start lg:flex-col lg:p-5 lg:rounded-2xl lg:w-1/2 h-[300px] lg:h-full">
      <StepsButton
        nStep={1}
        text={"your info"}
      />
      <StepsButton
        nStep={2}
        text={"select plan"}
      />
      <StepsButton
        nStep={3}
        text={"add-ons"}
      />
      <StepsButton
        nStep={4}
        text={"summary"}
      />
    </div>
  );
}
