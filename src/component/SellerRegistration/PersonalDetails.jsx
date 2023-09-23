import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountDetails from "./AccountDetails";
import { IoIosArrowRoundForward } from "react-icons/io";

const PersonalDetails = ({ onNextStep, savedMobileNumber }) => {


  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [value, setValue] = useState("IN");
  const [alternateMobileNumber, setAlternateMobileNumber] = useState("");
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSendOTPButtonDisabled, setIsSendOTPButtonDisabled] = useState(true);
  const [mobileNumber, setMobileNumber] = useState(savedMobileNumber || "");
  const [fieldsEmpty, setFieldsEmpty] = useState(false);



  const handleAlternateMobileInputChange = (e) => {
    const inputValue = e.target.value;
    const onlyDigits = inputValue.replace(/[^0-9]/g, ""); // Remove non-digit characters
    setAlternateMobileNumber(onlyDigits);
    setIsSendOTPButtonDisabled(onlyDigits.length === 0);
    checkFormValidity();
  };


  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  // Function to handle input change and allow only digits
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const onlyDigits = inputValue.replace(/[^0-9]/g, ""); // Remove non-digit characters
    setMobileNumber(onlyDigits);
    checkFormValidity();
  };



  const checkFormValidity = () => {
    if (
      mobileNumber.trim() !== "" &&
      alternateMobileNumber.trim() !== "" &&
      otpValue.trim() !== ""
    ) {
      setIsFormValid(true);
      setFieldsEmpty(false); // Reset the fieldsEmpty state when the form is valid
    } else {
      setIsFormValid(false);
    }
  };
  
  const sendOTP = () => {
    // Add code here to send OTP
    // You can show the OTP input fields after sending OTP
    setShowOTP(true);
  };

  const resendOTP = () => {
    // Add code here to resend OTP
  };

  const handleNextClick = () => {
    if (
      mobileNumber.trim() !== "" &&
      alternateMobileNumber.trim() !== "" &&
      otpValue.trim() !== ""
    ) {
      onNextStep(); // Proceed to the next page when all required fields are filled
    } else {
      setFieldsEmpty(true); // Set the fieldsEmpty state to display a message
    }
  };

  return (
    <>

      <div className='flex md:flex-row items-start justify-evenly gap-10 p-10 sm:flex-col flex-col'>
        {/* left div */}
        <div className="font-bold md:sticky top-10">
          <h1>Personal Details</h1>
        </div>
        {isCreateAccountOpen ? (
          <AccountDetails />
        ) : (
          <form action="">
            <div className="flex flex-col gap-7 mb-10 md:w-[500px]">
              <input
                type="text"
                placeholder="Enter Your Name *"
                className="w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC]"
                required
              />

              <input
                type="text"
                placeholder="Enter Mobile Number *"
                value={mobileNumber}
                maxLength={10}
                onChange={handleInputChange}
                className={`w-full p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC] ${mobileNumber === savedMobileNumber ? 'bg-gray-300 cursor-not-allowed' : ''
                  }`}
                required
              />


              {/* Your Phone Number input field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Alternate Mobile Number *"
                  value={alternateMobileNumber}
                  maxLength={10}
                  onChange={handleAlternateMobileInputChange}
                  className="w-full p-2 h-12 border rounded-xl pr-[90px] focus:outline-none focus:border-[#8A58DC]"
                  required
                />
                {/* Send OTP button */}
                <button
                  className={`absolute top-0 p-2 h-12 bg-none text-blue-500 right-2 ${isSendOTPButtonDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : " text-purple-500"
                    }`}
                  onClick={sendOTP}
                  disabled={isSendOTPButtonDisabled}
                >
                  Send OTP
                </button>

              </div>

              {/* Your OTP-related elements should go here */}
              {showOTP && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={otpValue}
                    maxLength={6}
                    onChange={(e) => setOtpValue(e.target.value)}
                    placeholder="Enter OTP *"
                    className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                    required
                  />
                </div>
              )}
              {showOTP && (
                <p
                  onClick={resendOTP}
                  className="text-start text-[#222] text-opacity-60 text-sm ml-2"
                >
                  Didn't receive the OTP?{" "}
                  <Link to="/" className="text-[#8A58DC]">
                    Resend OTP
                  </Link>
                </p>
              )}

              <input
                type="email"
                placeholder="Email Id *"
                className="flex p-2 h-12 border rounded-xl focus:outline-none focus:border-[#8A58DC] w-full"
                required
              />
              {fieldsEmpty && (
                <p className="flex text-red-500 ml-2">
                  Please fill in all the required fields.
                </p>
              )}
            </div>
            <div class="flex justify-start p-5">
              {/* "Next Section" button is always displayed */}
              <Link
                onClick={handleNextClick}
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
export default PersonalDetails;

