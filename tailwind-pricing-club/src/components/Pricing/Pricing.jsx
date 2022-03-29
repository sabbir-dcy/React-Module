import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "free",
      price: 0,
      benefits: [
        "lifetime free",
        "unlimited deals",
        "local deals",
        "crazy deals",
      ],
    },
    { id: 2, name: "regular", price: 9.99 ,
    benefits: [
      "all time free",
      "lifetime free",
      "unlimited deals",
      "local deals",
      "crazy deals",
    ],},
    { id: 3, name: "premium", price: 19.99 ,
    benefits: [
      'all free',
      "lifetime free",
      "unlimited deals",
      "local deals",
      "crazy deals",
    ],},
  ];
  return (
    <div>
      <div className="bg-zinc-700 text-white p-4 mi-8">
        <h1 className="text-5xl font-serif">Best Deals of the year</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          repellat obcaecati non nisi alias dignissimos qui debitis, provident
          officiis saepe?
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {pricingOptions.map((option) => (
            <PricingOption key={option.id} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
