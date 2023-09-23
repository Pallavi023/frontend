// import { React, useEffect, useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { HiOutlineChevronDown } from 'react-icons/hi';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
// // import styles from "../../styles/styles";
// import { Link, useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
// // import { RxAvatar } from "react-icons/rx";
// import axios from "axios";
// import { sendNumberOtp, verifyNumberOtp } from "../Redux/features/otpVerification/otpSlice";
// import { useDispatch, useSelector } from "react-redux";
// // import { server } from "../../server";
// // import { toast } from "react-toastify";

// const Singup = () => {
//   const navigate = useNavigate();
//   const {message, isError, isSuccess, isNumberVerfied}=useSelector((state)=>state.otpAuth);
//   console.log(isNumberVerfied)
//   const dispatch=useDispatch();
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [avatar, setAvatar] = useState(null);

//   const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const [getOtpInput, setOtpInput]=useState('');
//   const [showOtpInput, setShowOtpInput]=useState(false)


//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const re = /^[0-9\b]+$/;
//       if (e.target.value === '' || re.test(e.target.value)) {
//         setPhoneNumber(e.target.value)
//       }
//   };

//   const handleClose = () => {
//     navigate('/');
//   };



//   const selectCountryCode = (code) => {
//     setSelectedCountryCode(code);
//     setIsDropdownOpen(false);
//   };

//   const handleOtpChange=(e)=>{
//     setOtpInput(e.target.value);
//   }


//   // const handleFileInputChange = (e) => {
//   //   // const reader = new FileReader();

//   //   // reader.onload = () => {
//   //   //   if (reader.readyState === 2) {
//   //   //     setAvatar(reader.result);
//   //   //   }
//   //   // };

//   //   // reader.readAsDataURL(e.target.files[0]);
//   // };


//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     console.log("hello  "+selectedCountryCode+phoneNumber);
//     dispatch(sendNumberOtp({ phone:selectedCountryCode+phoneNumber}));
//     // await axios.post('/api/otp-verfication/send-number-otp', {
//     //   phone:selectedCountryCode+phoneNumber
//     // }).then((resp)=>{
//     //   toast.success(resp.data.message)
//     //   console.log(resp);
//     //   navigate('/continue-signup')
//     //   // console.log(resp.data.message)
//     //   setShowOtpInput(true);
//     // }).catch((error)=>{
//     //   const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//     //   console.log(message);
//     //   // if(message==='User Already Verfied'){
//     //   //   navigate('/continue-signup');
//     //   // }
//     //   toast.error(message)

//     // })

//   };
//   const handleVerifyOtp=async(e)=>{
//     e.preventDefault();
//     console.log(getOtpInput);
//     dispatch(verifyNumberOtp({phone:selectedCountryCode+phoneNumber, otp:getOtpInput}));
//   }


//   // if(isSuccess && !isNumberVerfied){
//   //   setShowOtpInput(true);
//   // }


//   if(isNumberVerfied){
//     console.log("hiiiiiiiiiii")
//     navigate('/continue-signup')
//   }

//   // if(message=='user verified'){
//   //   navigate('/continue-signup')
//   // }

//   return (
//     <>
//     {/* {isNumberVerfied&&(console.log(isNumberVerfied) && navigate('/continue-signup'))} */}
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("https://i.stack.imgur.com/vhoa0.jpg")` }}>

//       <div className="relative container max-w-sm bg-white p-12 rounded-[10%]">
//         <div className="flex justify-end">
//         {/* close button */}
//           <button className="flex absolute top-0 right-0 mt-5 mr-7 focus:outline-none" onClick={handleClose}>
//             <AiOutlineClose className="h-6 w-6 text-gray-500 hover:text-teal-500" />
//           </button>
//         </div>

//         {/* /sign-up heading */}
//         <h1 className="text-3xl text-center font-bold mb-6">Sign up</h1>
//         <form onSubmit={(isSuccess && !isNumberVerfied)? ( console.log("hello"), handleVerifyOtp) : handleSendOtp}>
//         {/* form */}
//           <div className="mb-8 relative">
//             <div className="relative border-b-2 border-gray-400 sm:border-b-2">
//               {/* input phone number */}
//               <input
//                 id="phone-input"
//                 type="tel"
//                 required
//                 className={`ml-[70px] w-180 px-5 py-0 h-10 text-base outline-none bg-transparent transition-colors duration-300 ${isFocused ? 'border-teal-500' : ''
//                   }`}
//                 value={phoneNumber}
//                 onChange={handlePhoneNumberChange}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//               <span
//                 className={`absolute bottom-0 top-10 left-0 w-50 h-0.5 bg-teal-500 transition-all duration-300 ${isFocused ? 'w-full' : ''
//                   }`}
//               ></span>
//               {/* label phone number */}

//               <label
//                 htmlFor="phone-input"
//                 className={`absolute top-2 left-[90px] text-gray-500 transition-all duration-300 ${phoneNumber ? '-translate-y-5 text-teal-500' : 'top-2 text-gray-500'
//                   }`}
//               >
//                 Phone number
//               </label>
//             </div>
//           </div>

//           {(isSuccess && !isNumberVerfied)&&<div className="mb-8 relative">
//             <div className="relative border-b-2 border-gray-400 sm:border-b-2">
//               {/* input phone number */}
//               <input
//                 id="otp-input"
//                 required
//                 className={`ml-[1px] w-180 px-1 py-0 h-10 text-base outline-none bg-transparent transition-colors duration-300 ${isFocused ? 'border-teal-500' : ''
//                   }`}
//                 value={getOtpInput}
//                 onChange={handleOtpChange}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               />
//               <span
//                 className={`absolute bottom-0 left-0 w-50 h-0.5 bg-teal-500 transition-all duration-300 ${isFocused ? 'w-full' : ''
//                   }`}
//               ></span>
//               {/* label phone number */}

//               <label
//                 htmlFor="phone-input"
//                 className={`absolute top-2 left-[1px] text-gray-500 transition-all duration-300 ${phoneNumber ? '-translate-y-5 text-teal-500' : 'top-2 text-gray-500'
//                   }`}
//               >
//                 OTP
//               </label>
//             </div>
//           </div>}
//           {/* country code & flag drop down */}
//           <div className="absolute top-[110px] left-[31px] pl-3 flex items-center z-10">
//             <div className="relative">
//               <button
//                 type="button"
//                 className="flex items-center justify-between w-20 bg-transparent px-2 py-2"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               >
//                 <span className="mr-2">{selectedCountryCode}</span>
//                 {selectedCountryCode === '+1' && (
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png"
//                     alt="Country flag"
//                     className="w-4 h-3"
//                   />
//                 )}
//                 {selectedCountryCode === '+91' && (
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
//                     alt="Country flag"
//                     className="w-4 h-3"
//                   />
//                 )}
//                 {selectedCountryCode === '+44' && (
//                   <img
//                     src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
//                     alt="Country flag"
//                     className="w-4 h-3"
//                   />
//                 )}
//                 {selectedCountryCode === '+86' && (
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png"
//                     alt="Country flag"
//                     className="w-4 h-3"
//                   />
//                 )}
//                 {selectedCountryCode === '+61' && (
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png"
//                     alt="Country flag"
//                     className="w-4 h-3"
//                   />
//                 )}
//                 <HiOutlineChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute bg-white mt-2 border border-gray-300 rounded-lg shadow-md w-20">
//                   <ul className="py-1">
//                     <li
//                       className="flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => selectCountryCode('+1')}
//                     >
//                       <span className="mr-2">+1</span>
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png"
//                         alt="Country flag"
//                         className="w-4 h-3"
//                       />
//                     </li>
//                     <li
//                       className="flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => selectCountryCode('+91')}
//                     >
//                       <span className="mr-2">+91</span>
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
//                         alt="Country flag"
//                         className="w-4 h-3"
//                       />
//                     </li>
//                     <li
//                       className="flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => selectCountryCode('+44')}
//                     >
//                       <span className="mr-2">+44</span>
//                       <img
//                         src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
//                         alt="Country flag"
//                         className="w-4 h-3"
//                       />
//                     </li>
//                     <li
//                       className="flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => selectCountryCode('+86')}
//                     >
//                       <span className="mr-2">+86</span>
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png"
//                         alt="Country flag"
//                         className="w-4 h-3"
//                       />
//                     </li>
//                     <li
//                       className="flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => selectCountryCode('+61')}
//                     >
//                       <span className="mr-2">+61</span>
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png"
//                         alt="Country flag"
//                         className="w-4 h-3"
//                       />
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//           {/*continue button  */}

//           {/* <Link to="/continuesignup"> */}
//           <div className="flex justify-center mb-6">
//             <input
//               type="submit"
//               className="w-full px-4 py-2 bg-teal-500 text-white font-bold  rounded-full cursor-pointer transition-colors hover:bg-teal-600 focus:outline-none"
//               value="Continue"
//             />
//           </div>
//           {/* </Link> */}
//             {/* w-full px-4 py-2 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 focus:outline-none */}

//         </form>

//         {/* horizontal line with OR text */}
//         <div className="flex items-center my-2">
//           <hr className="flex-grow border-t border-gray-300" />
//           <span className="mx-2 text-gray-500">OR</span>
//           <hr className="flex-grow border-t border-gray-300" />
//         </div>



//         {/* continue with google/facebook button */}

//         <div className="mb-4">
//           <input
//             type="submit"
//             className="relative mt-5 flex items-center justify-center w-full h-12 bg-teal-200 text-black font-bold text-base rounded-full cursor-pointer transition-colors hover:bg-teal-600"
//             value="Continue with Google"
//           />
//           <span className="absolute left-3">
//             <FaGoogle className="w-5 h-5 text-white" />
//           </span>
//         </div>

//         <div>
//           <input
//             type="submit"
//             className="relative flex items-center justify-center w-full h-12 bg-teal-200 text-black font-bold text-base rounded-full cursor-pointer transition-colors hover:bg-teal-600"
//             value="Continue with Facebook"
//           />
//           <span className="absolute left-3">
//             <FaFacebook className="w-5 h-5 text-white" />
//           </span>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Singup;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import { sendNumberOtp, verifyNumberOtp } from '../Redux/features/otpVerification/otpSlice';
import { Button, InputAdornment, TextField } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible,  AiOutlineSwapRight } from 'react-icons/ai';
import { signup } from '../Redux/features/auth/authSlice';

const Singup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [value, setValue] = useState('IN');
  const [fullname, setFullName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [showOtpInput, setShowOtpInput]=useState(false);
  const {isNumberVerfied} =useSelector((state)=>state.otpAuth)
  const handleClose = () => {
    navigate('/');
  };

  const getOtp=async ()=>{
    console.log('+91'+phone)
    const number='+91'+phone
    dispatch(sendNumberOtp({phone:number}))
    setShowOtpInput(true);
  }
  const verifyOtp=(e)=>{
    e.preventDefault();
    const number='+91'+phone
    console.log(number)
    dispatch(verifyNumberOtp({phone:number,otp:otpValue}));
    setShowOtpInput(false);
  }
  const setPhoneNumber=(e)=>{
    const number=e.target.value
    if(number.length>10){
      return;
    }else{
      setPhone(number);
    }
  }
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSymbols = /[-+_!@#$%^&*.,?]/.test(password);
  const hasMinimumLength = password.length >= 8;

  const passwordStrength = {
    weak: hasMinimumLength,
    moderate: hasMinimumLength && (hasLowerCase || hasUpperCase || hasDigits || hasSymbols),
    strong: hasMinimumLength && hasLowerCase && hasUpperCase && hasDigits && hasSymbols,
  };

  const strengthColors = {
    weak: 'bg-red-300',
    moderate: 'bg-yellow-300',
    strong: 'bg-green-300',
  };
  

  const handleSignup=()=>{
    console.log(fullname, phone, email, password, confirmPassword)
    dispatch(signup({fullname, phone:'+91'+phone, email, password, cpassword:confirmPassword}));
  }
  return (
    <div className='h-full w-full bg-[#f7fafc]'>
      <div className="flex items-center justify-center flex-col w-full p-5 pb-10 max-sm:p-0">

        <div className="bg-white rounded-2xl p-8 shadow-lg  md:w-[90%] sm:w-[100%]">
          {/* <div className="flex justify-end">
            {/* close button 
            <button className="focus:outline-none" onClick={handleClose}>
              <AiOutlineClose className="h-4 w-auto text-[#222] text-opacity-50 hover:text-[#8A58DC]" />
            </button>
          </div> */}
          <h2 className="block lg:hidden text-md mt-4 text-center font-lighter text-[#222] text-opacity-50">New to Ekaiv!!</h2>
              <h2 className="block lg:hidden text-3xl font-bold mb-8 text-center">Sign  Up</h2>
          <div className="flex flex-col md:flex-col lg:flex-row ">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img
                src="https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories-vector-isolated-concept-metaphor-illustration_335657-2764.jpg?w=2000"
                alt="Image"
                className="h-[300px] w-auto mx-auto lg:ml-0 lg:mr-8 mb-4 md:mb-0 lg:h-auto lg:w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="hidden lg:block text-md mt-4 text-center font-lighter text-[#222] text-opacity-50">New to Ekaiv!!</h2>
              <h2 className="hidden lg:block text-3xl font-bold mb-8 text-center">Sign  Up</h2>
              <form className="w-full flex justify-center">
                <div className='flex flex-col justify-center md:w-[70%] sm:w-[100%] gap-4'>
                <div >
                <input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder='First and Last Name'
                      className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                    />
                </div>
                <div className='flex w-full relative items-center'>
                <input
                      type="text"
                      value={phone}
                      onChange={setPhoneNumber}
                      placeholder='Phone Number'
                      className="w-full  pl-11 h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                    /><div className='absolute left-3'>+91</div>
                  {/* <PhoneInput
                    defaultCountry='IN'
                    value={value}
                    onChange={setValue}
                    placeholder='Phone Number'
                    className="h-12 flex-1 md:max-w-[77%] sm:max-w-[50%] px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                  /> */}
                  {!showOtpInput && <Button variant='text' size='small' onClick={getOtp}>Verify</Button>}
                </div>
                {showOtpInput && !isNumberVerfied &&
                <div className='flex w-full relative items-center'>
                <input
                  type="text"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  placeholder='Otp'
                  className="w-full pl-11 h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                />
                <Button variant='text' size='small' onClick={verifyOtp} sx={{cursor:'pointer'}}>Send</Button>
              </div>
             }
                <div >
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email (Optional)'
                      className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                    />
                  </div>
                  <div >
                    {/* <label htmlFor="password" className="block text-gray-700 mb-2">
                      Password
                    </label> */}
                    <div className="relative">
                      <input
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"

                        type={visible ? 'text' : 'password'}
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        maxLength={16}
                      />

                      {/* eye open/close */}
                      <span
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {visible ? (
                          <AiOutlineEye className="h-6 w-6 text-gray-500 hover:text-[#8A58DC] transition-colors duration-300" />
                        ) : (
                          <AiOutlineEyeInvisible className="h-6 w-6 text-gray-500 hover:text-[#8A58DC] transition-colors duration-300" />
                        )}
                      </span>

                    </div>
                    <label className="block text-sm text-black opacity-50 mt-2">
                      Must be at least 8 characters.
                    </label>
                    {/* Password strength indicator */}
                    {password && (
                      <div className="mt-2">
                        <div className="flex">
                          <div className={`w-1/3 h-1 ${passwordStrength.weak ? strengthColors.weak : ''} transition-colors duration-300`}></div>
                          <div className={`w-1/3 h-1 ${passwordStrength.moderate ? strengthColors.moderate : ''} transition-colors duration-300`}></div>
                          <div className={`w-1/3 h-1 ${passwordStrength.strong ? strengthColors.strong : ''} transition-colors duration-300`}></div>
                        </div>

                        <div className="grid justify-between mt-1 text-xs">
                          <div className="text-gray-500">
                            <span className={`mr-2 ${hasMinimumLength ? 'text-green-500' : 'text-red-500'}`}>{hasMinimumLength ? '✓' : '✗'}</span> 8-16 characters
                          </div>
                          <div className="text-gray-500">
                            <span className={`mr-2 ${hasLowerCase ? 'text-green-500' : 'text-red-500'}`}>{hasLowerCase ? '✓' : '✗'}</span> At least 1 lowercase letter
                          </div>
                          <div className="text-gray-500">
                            <span className={`mr-2 ${hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>{hasUpperCase ? '✓' : '✗'}</span> At least 1 uppercase letter
                          </div>
                          <div className="text-gray-500">
                            <span className={`mr-2 ${hasDigits ? 'text-green-500' : 'text-red-500'}`}>{hasDigits ? '✓' : '✗'}</span> At least 1 digit
                          </div>
                          <div className="text-gray-500">
                            <span className={`mr-2 ${hasSymbols ? 'text-green-500' : 'text-red-500'}`}>{hasSymbols ? '✓' : '✗'}</span> Contains special symbol -+_!@#$%^&*.,?
                          </div>
                        </div>



                      </div>
                    )}
                  </div>
                  {/* confirm password */}
                  <div  >
                    {/* <label htmlFor="password" className="block text-gray-700 mb-2">
                      Confirm Password
                    </label> */}
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8A58DC]"
                      placeholder="********"
                      maxLength={16}
                      minLength={8}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {/* Warning message */}
                    {confirmPassword && password !== confirmPassword && (
                      <label className="block text-sm text-red-500 mt-1">
                        Passwords do not match.
                      </label>
                    )}
                    {confirmPassword && password === confirmPassword && (
                      <label className="block text-sm text-green-500 mt-1">
                        Passwords match.
                      </label>
                    )}
                  </div>

                <div >
                  <button
                    type="button"
                    onClick={handleSignup}
                    className="relative mt-5 flex items-center justify-center w-full h-12 text-white bg-[#9D5BB7] font-bold text-base rounded-full cursor-pointer transition-colors hover:bg-[#ac7ff4] whitespace-normal"
                  >
                    Continue
                  </button>
                </div>


                {/* horizontal line with OR text */}
                <div className="flex items-center my-2">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="mx-2 text-gray-500">OR</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>



                {/* continue with google/facebook button */}

                <div className="mb-4">
                  <button
                    type="button"
                    className="relative flex items-center justify-center w-full h-12 text-white bg-[#9D5BB7] font-bold text-base rounded-full cursor-pointer transition-colors hover:bg-[#ac7ff4] whitespace-normal"
                  >
                    <span className="mr-2">
                      <FaGoogle className="w-5 h-5 text-white" />
                    </span>
                    Continue with Google
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="relative flex items-center justify-center w-full h-12 text-white bg-[#9D5BB7] font-bold text-base rounded-full cursor-pointer transition-colors hover:bg-[#ac7ff4] whitespace-normal"
                  >
                    <span className="mr-2">
                      <FaFacebook className="w-5 h-5 text-white" />
                    </span>
                    Continue with Facebook
                  </button>
                </div>
                <p className=" mt-4 text-center text-[#222] text-opacity-80 text-sm">
                  Already a user? <Link to="/signin" className="text-[#8A58DC]">Login</Link>
                </p>



                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
