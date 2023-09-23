import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountDetails from "./AccountDetails";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import DropBox from '../SellerRegistration/DropBox';


const BusinessDetails = ({ onPreviousStep, onNextStep }) => {

  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [value, setValue] = useState('IN');
  const [mobileNumber, setMobileNumber] = useState("");
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  // Function to handle input change and allow only digits
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const onlyDigits = inputValue.replace(/[^0-9]/g, ""); // Remove non-digit characters
    setMobileNumber(onlyDigits);
  };


  const sendOTP = () => {
    // Add code here to send OTP
    // You can show the OTP input fields after sending OTP
    setShowOTP(true);
  };

  const resendOTP = () => {
    // Add code here to resend OTP
  };



  return (
    <>

      <div className='flex md:flex-row items-start justify-evenly gap-10 p-10 sm:flex-col flex-col'>
        {/* left div */}
        <div className="font-bold md:sticky top-10">
          <h1>Business Details</h1>
        </div>
        {isCreateAccountOpen ? (
          <AccountDetails />
        ) : (
          <form action="">
            <div className="flex flex-col gap-7 mb-10 md:w-[500px]">
              <input
                type="text"
                placeholder="Enter Business Name *"
                className="w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="Email Id (Business) *"
                className="flex p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC] w-full"
                required
              />

              <input
                type="text"
                placeholder="Business Address Line1 *"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="Business Address Line2 *"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="Landmark *"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="City *"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="State *"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="Pincode *"
                className="flex w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="PAN Number *"
                className="p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC] w-full"
                required
              />

              <input
                type="text"
                placeholder="GST Number *"
                className="p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC] w-full"

              />

            </div>

            <div className="font-bold grid grid-cols-1 gap-2 mb-4 ml-5">

              <p className="mt-4">Business registration document.</p>
              <div className="info relative text-xl p-2 rounded" onClick={toggleInfo}>
                <HiOutlineInformationCircle />
                {isInfoOpen && (
                  <span className="extra-info absolute flex top-2 left-10 line-height-7 text-sm items-center">
                    Gumasta licence or UDYAM Registration or MSME Registration or any other state based business registration document.
                  </span>
                )}
              </div>
              <DropBox />

              <div className="mt-4">
                <p>Business Address Proof</p>
                <div className="info relative text-xl p-2 rounded" onClick={toggleInfo}>
                  <HiOutlineInformationCircle />
                  {isInfoOpen && (
                    <span className="extra-info absolute top-0 left-10 line-height-7 text-sm">
                      Any document that has your business address for verification. For exapmle Electricity Bill.
                    </span>
                  )}
                </div>
                <div className="m-4">

                  <DropBox />
                </div>
              </div>
            </div>


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

              <Link
                onClick={onNextStep}
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full text-4xl bg-purple-500 group-hover:translate-x-0 ease">
                  <IoIosArrowRoundForward />
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-purple-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
                  Next Section
                </span>
                <span class="relative invisible">Next Section</span>
              </Link>
            </div>
          </form>
        )}

        {/* right part */}
        <div className='flex p-5 md:w-[500px] md:sticky top-32'>
          <img src="https://img.freepik.com/premium-vector/onlin-ebusiness-partnership-two-male-cartoon-characters-businessmen-shaking-hands-making-business-deal-business-management-remotely-flat-vector-illustration_241107-1243.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais" alt="" />
        </div>
      </div>
    </>
  );
}
export default BusinessDetails;
