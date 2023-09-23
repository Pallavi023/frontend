import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import DropBox from '../SellerRegistration/DropBox';
import VendorPolicyPopup from "./VendorPolicy";


const AccountDetails = ({ onPreviousStep }) => {
  const [showPolicyPopup, setShowPolicyPopup] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };


  const handleShowPolicyPopup = () => {
    setShowPolicyPopup(true);
  };

  const handleClosePolicyPopup = () => {
    setShowPolicyPopup(false);
  };

  const handleAgreePolicy = () => {
    // Add your form submission logic here
    handleClosePolicyPopup();
  };
  return (
    <>

<div className="flex flex-col md:flex-row items-start justify-evenly gap-10 p-10 sm:flex-col">
        <div className="font-bold md:sticky top-10">
          <h1>Account Details</h1>
        </div>
        {/* left div */}
        <form action="">

          <div className="flex flex-col gap-7 mb-10 md:w-[500px]">
           
          <input
              type="text"
              placeholder="Account Holder Name"
              className="w-full h-12 border rounded-xl p-2 focus:outline-none focus:border-[#8A58DC] "
            />
            <input
              type="text"
              placeholder="Account Number"
              className="w-full h-12 border rounded-xl p-2 focus:outline-none focus:border-[#8A58DC]"
            />
            <input
              type="text"
              placeholder="IFSC Code"
              className="w-full h-12 border rounded-xl p-2 focus:outline-none focus:border-[#8A58DC]"
            />
            
            <input
                type="text"
                placeholder="Branch"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
              />
              <input
                type="text"
                placeholder="CIF Number"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
              />
              <input
                type="text"
                placeholder="City"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
              />
              <input
                type="text"
                placeholder="State"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
              />
<div className="flex flex-col gap-2 items-center md:flex-row md:items-center">
      <p className="font-bold">Other Business Documents</p>
      <div className="flex relative text-xl whitespace-nowrap" onClick={toggleInfo}>
        <HiOutlineInformationCircle />
        {isInfoOpen && (
          <span className="flex absolute w-full whitespace-nowrap left-6 items-center top-0 text-sm md:block">
            Please upload front page of Passbook.
          </span>
        )}
      </div>
            </div>
            <DropBox />

            <div className="flex flex-row gap-5 p-5">

              <Link
                onClick={onPreviousStep}
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center text-4xl justify-center w-full h-full text-white duration-300 translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <IoIosArrowRoundBack />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                  Previous
                </span>
                <span className="relative invisible">Previous</span>
              </Link>




              {/* Step 2: Show the policy pop-up on "Submit" click */}
              <button
                onClick={handleShowPolicyPopup}
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center text-4xl justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <IoIosArrowRoundForward />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                  Submit
                </span>
                <span className="relative invisible">Submit</span>
              </button>
              {/* {showPolicyPopup && ( */}
                <VendorPolicyPopup onClose={handleClosePolicyPopup} onAgree={handleAgreePolicy} />
              {/* )} */}
            </div>
          </div>
        </form>


        {/* right part */}
        <div className='flex p-5 md:w-[500px] md:sticky top-32'>
          <img src="https://img.freepik.com/premium-vector/onlin-ebusiness-partnership-two-male-cartoon-characters-businessmen-shaking-hands-making-business-deal-business-management-remotely-flat-vector-illustration_241107-1243.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais" alt="" />
        </div>
      </div>

    </>
  );
};

export default AccountDetails;