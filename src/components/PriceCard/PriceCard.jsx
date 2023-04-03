import React from "react";
import Features from "../Feature/Features";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4">
      <h2 className="text-center">
        <span className="text-purple-700 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl font-bold text-white">/month</span>
      </h2>
      <h5 className="text-2xl my-6 font-bold text-center">{price.name}</h5>
      <p className="font-bold text-white underline">Features</p>
      {price.features.map((feature, idx) => (
        <Features key={idx} feature={feature}></Features>
      ))}
      <button className="w-full hover:bg-green-700 bg-green-500 py-2 rounded-md text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
