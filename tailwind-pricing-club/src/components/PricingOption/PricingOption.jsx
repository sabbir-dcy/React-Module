import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-zinc-800 p-4 text-white rounded flex flex-col justify-between">
      <h2>{name}</h2>
      <h2 className="text-3xl">
        ${price}
        <span className="text-sm">/mo</span>
      </h2>
      <div className="">
        <div>
          <h3 className="text-xl text-left">benefits</h3>
          {benefits.map((benefit) => (
            <Benefit benefit={benefit} />
          ))}
        </div>
      </div>
      <button className="bg-green-500 p-3 justify-self-end mt-2 rounded font-bold">
        Buy Now <ArrowCircleRightIcon className="w-5 h-5 inline-block" />
      </button>
    </div>
  );
};

export default PricingOption;
