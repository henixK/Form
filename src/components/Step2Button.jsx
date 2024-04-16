import React from "react";

export default function Step2Button({
  icon,
  title,
  price,
  priceYear,
  checked,
}) {
  return (
    <div className="border w-1/3 h-[200px] rounded-xl relative">
      <div className="mt-5 px-3">
        <img src={icon} alt="" />
      </div>
      <div className="absolute px-3 bottom-5">
        <h3 className="font-bold text-marine-blue text-lg">{title}</h3>
        <p>{price}</p>
        <p
          className={`text-marine-blue text-sm ${
            checked ? "block" : "hidden"
          }`}
        >
          {priceYear}
        </p>
      </div>
    </div>
  );
}
