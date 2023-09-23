import React from "react";
import PromotionalVideo from "../../Home/PromotinalVedio";

const Help = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <h1 className="text-4xl font-bold text-center">How to?</h1>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
     
      <div className="w-full ">
        <PromotionalVideo />
      </div>
      <div className="w-full mt-2">
        <button
          className="bg-[#8A58DC] mr-auto p-5 text-md text-white rounded-full border-none font-semibold"
        >
          Need more help? Chat with us.
        </button>
      </div>
    </div>
  </div>
  );
}

export default Help;
