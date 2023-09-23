// import { React, useEffect, useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { HiOutlineChevronDown } from 'react-icons/hi';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { signup } from "../Redux/features/auth/authSlice";
// import { toast } from "react-hot-toast";


// function ContinueSignup() {
//   const navigate = useNavigate();
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   // const [isConfirmPasswordVisible, setIsConfirmPassword] = useState("false");
//   const [isPasswordVisible, setIsPassword] = useState("false");
//   const [isFocused, setIsFocused] = useState(false);
//   // const [visible, setVisible] = useState(false);
//   const [avatar, setAvatar] = useState(null);
//   const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dispatch=useDispatch();
//   const {user, message} = useSelector((state)=>state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fullname=firstname+" "+lastname;
//     const cpassword=confirmpassword
//     console.log({fullname, email, password, cpassword, phone:selectedCountryCode+phoneNumber});
//     dispatch(signup({fullname, email, password, cpassword, phone:selectedCountryCode+phoneNumber}));
//   };
//   const selectCountryCode = (code) => {
//     setSelectedCountryCode(code);
//     setIsDropdownOpen(false);
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   const togglePasswordVisibility = () => {
//     setIsPassword(!isPasswordVisible);
//   };

//   const handleClose = () => {
//     navigate('/');
//   };
//   const handleback = () => {
//     navigate('/sign-up');
//   };
//   const handlePhoneNumberChange = (e) => {
//     const re = /^[0-9\b]+$/;
//       if (e.target.value === '' || re.test(e.target.value)) {
//         setPhoneNumber(e.target.value)
//       }
//   };

//   if(user!=null){
//     console.log('signup succesffull');
//     navigate('/');
//   }


//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("https://i.stack.imgur.com/vhoa0.jpg")`}}>
//         <div className="relative bg-white p-8 rounded-[5%] shadow-md " style={{
//           height: '460px',
//           width: '500px',
//         }}>
//           <div className="flex justify-end">
//             {/* close button */}
//             <button className="flex absolute top-0 right-0 mt-5 mr-7 focus:outline-none" onClick={handleClose}>
//               <AiOutlineClose className="h-6 w-6 text-gray-500 hover:text-teal-500" />
//             </button>
//           </div>
//           {/* /Continue sign-up heading */}
//           <h1 className="text-3xl text-center font-bold mb-6">Continue sign up</h1>
//           {/* form */}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-8 relative">
//               <div className="flex mb-4">
//                 {/* First Name */}
//                 <label
//                   className={`absolute left-2 transition-all duration-300 ${firstname ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                     }`}
//                 >
//                   First Name
//                 </label>
//                 <input
//                   className={`mr-10 w-60 px-2 py-1 border-b-2 border-gray-400 focus:outline-none ${firstname ? 'focus:border-teal-500 border-teal-500' : ''
//                     }transition-border duration-300`}
//                   type="text"
//                   required
//                   value={firstname}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 {/* Last Name */}
//                 <label
//                   className={`absolute left-[245px] transition-all duration-300 ${lastname ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                     }`}
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   className={`mr-12 w-60 px-2 py-1 border-b-2 border-gray-400 focus:outline-none  focus:border-teal-500 transition-all duration-300 ${lastname ? 'border-teal-500' : ''
//                     }`}
//                   type="text"
//                   required
//                   value={lastname}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               {/* email */}
//               <div className="mb-4 relative">
//                 <label
//                   className={`absolute left-2 transition-all duration-300 ${email ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                     }`}
//                 >
//                   E-mail
//                 </label>
//                 <input
//                   className={`w-full px-2 py-1 border-b-2 border-gray-400 focus:outline-none focus:border-teal-500 transition-all duration-300 ${email ? 'border-teal-500' : ''
//                     }`}
//                   type="text"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div style={{display:'flex', gap:"2px"}}>
//                 {/* {Phone-number} */}
//               <div className=" flex items-center z-10">
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
//               <div className="mb-4 relative w-full">
//                 <label
//                   className={`absolute left-2 transition-all duration-300 ${phoneNumber ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                     }`}
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   className={`w-full px-2 py-1 border-b-2 border-gray-400 focus:outline-none focus:border-teal-500 transition-all duration-300 ${email ? 'border-teal-500' : ''
//                     }`}
//                   type="text"
//                   required
//                   value={phoneNumber}
//                   onChange={handlePhoneNumberChange}
//                 />
//               </div>
//               </div>
//               {/* password */}
//               <div className="mb-4 relative">
//                 <label
//                   className={`absolute left-2 transition-all duration-300 ${password ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                     }`}
//                 >
//                   Password
//                 </label>
//                 <input
//                   className={`w-full px-2 py-1 pr-[60px] border-b-2 border-gray-400 focus:outline-none focus:border-teal-500 transition-all duration-300 ${password ? 'border-teal-500' : ''
//                     }`}
//                   type={isPasswordVisible ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute top-1 right-2 px-1 text-teal-500 cursor-pointer"
//                 >
//                   {isPasswordVisible ? 'Hide' : 'Show'}
//                 </button>
//               </div>


//               {/* Confirm Password */}
//               <div className="mb-4 relative">
//                 <label
//                   className={`absolute left-2 transition-all duration-300 ${confirmpassword ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                     }`}
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   className={`w-full px-2 py-1 border-b-2 border-gray-400 focus:outline-none focus:border-teal-500 transition-all duration-300 ${confirmpassword ? 'border-teal-500' : ''
//                     }`}
//                   type='password'
//                   value={confirmpassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />

//               </div>
//             </div>

//             {/* terms and condition peragraph */}

//             <div className="text-sm text-center text-gray-500 py-2">
//               By selecting Agree and Continue below, I agree to Business
//               <br />
//               <a href="#" className="text-teal-500 font-semibold hover:underline">Terms & Conditions</a> and{' '}
//               <a href="#" className="text-teal-500 font-semibold hover:underline">Privacy Policy</a>
//             </div>
//             {/* Agree and Continue Button */}
//             <div className="flex justify-center mb-6 p-5">
//               <input
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-500 text-white font-bold  rounded-full cursor-pointer transition-colors hover:bg-teal-600 focus:outline-none"
//                 value="Agree and Continue"
//               />
//             </div>
//           </form>

//         </div>
//       </div>

//     </>
//   )
// }

// export default ContinueSignup
// -------------------------------------------------


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose, AiOutlineSwapRight } from 'react-icons/ai';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const LoginForm = () => {

  const navigate = useNavigate();
  const [value, setValue] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [formComplete, setFormComplete] = useState(false);


  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };
  const handleClose = () => {
    navigate('/');
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

  useEffect(() => {
    const isFormComplete = (
      value !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      passwordStrength.strong &&
      password === confirmPassword
    );

    setFormComplete(isFormComplete);
  }, [value, password, confirmPassword, passwordStrength.strong]);

  return (
    <>
      <div className='h-full w-auto bg-[#f7fafc]'>
        <div className="inset-0 flex items-center justify-center z-50 p-20">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl w-full">
            <div className="flex justify-end">
              {/* close button */}
              <button className="focus:outline-none" onClick={handleClose}>
                <AiOutlineClose className="h-4 w-auto text-[#222] text-opacity-50 hover:text-[#8A58DC]" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src="https://img.freepik.com/free-vector/social-media-stalking-invasion-online-privacy-cyberstalking-following-geotagging-guy-with-binoculars-looking-girls-social-profile-vector-isolated-concept-metaphor-illustration_335657-1283.jpg?w=740&t=st=1692788801~exp=1692789401~hmac=ebf0c382438f9ae7a61417872bcc6b859cce6e288d67579a756f98aaf6974de4"
                  alt="Image"
                  className="h-auto w-full mx-auto md:ml-0 md:mr-8 mb-4 md:mb-0"
                />
              </div>
              <div className="md:w-1/2">
                {/* <h2 className="text-md mt-4 font-lighter text-[#222] text-opacity-50">Welcome back!!!</h2> */}
                <h2 className="text-3xl font-bold mb-4">Continue Signup</h2>
                <form className="space-y-4">
                  <div className='mt-10'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='grid'>
                        <label htmlFor="FirstName" className="flex text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          className="w-full px-4 py-2 border-none outline-none rounded-md bg-[#FFEDF1] mb-4"
                          placeholder="First Name"
                        />
                      </div>

                      <div className='grid'>
                        <label htmlFor="FirstName" className="flex text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          className="w-full px-4 py-2 border-none outline-none rounded-md bg-[#FFEDF1] mb-4"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>



                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border-none outline-none rounded-md bg-[#FFEDF1] mb-4"
                      placeholder="test1@gmail.com"
                    />


                    <label htmlFor="phonenumber" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <PhoneInput
                      defaultCountry='IN'
                      value={value}
                      onChange={setValue}
                      placeholder='Phone Number'
                      className='mb-4'
                    />
                  </div>

                  {/* Password field */}
                  <div>
                    <label htmlFor="password" className="block text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        className={`w-full px-4 py-2 pr-10 border-none outline-none rounded-md bg-[#FFEDF1] ${password ? '' : ''
                          }`}
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
                  <div>
                    <label htmlFor="password" className="block text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-2 border-none outline-none rounded-md bg-[#FFEDF1]"
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


                  <p className="mt-5 text-center text-[#222] text-opacity-80 text-sm">
                    By selecting Agree and Continue below, I agree too Business<br /> <Link to="/signup" className="text-[#8A58DC]">Terms & Condition</Link> and <Link to="/signup" className="text-[#8A58DC]">Privacy Policy</Link>
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden">
                      <button
                        type="button"
                        className={`flex row gap-2 text-white bg-[#8A58DC] font-medium rounded-full text-sm px-5 py-2.5 text-center justify-center mb-2 hover:bg-[#ac7ff4] w-100 ${!formComplete ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        disabled={!formComplete}
                      >
                        Agree and Continue<AiOutlineSwapRight className="text-xl justify-center items-center" />
                      </button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
