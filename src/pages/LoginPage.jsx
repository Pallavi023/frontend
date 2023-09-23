// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose } from 'react-icons/ai';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../Redux/features/auth/authSlice';
// import { toast } from 'react-hot-toast';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch=useDispatch();

//   const users=useSelector((state)=>state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [visible, setVisible] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log({email, password});
//     dispatch(login({email, password}));
//   };

//   if(users.user){
//     navigate('/');
//   }

//   const togglePasswordVisibility = () => {
//     setVisible(!visible);
//   };

// const handleClose = () => {
//   navigate('/');
// };

//   const handleForgotPassword = () => {
//     navigate('/signup');
//   };

//   const signup = () => {
//     navigate('/signup');
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("https://i.stack.imgur.com/vhoa0.jpg")` }} >
//       <div className="w-96 bg-white rounded-[10%] p-10 relative">
//         <div className="flex justify-end">
//           {/* close button */}
//           <button className="focus:outline-none ml-auto" onClick={handleClose}>
//             <AiOutlineClose className="h-6 w-6 text-gray-500 hover:text-teal-500" />
//           </button>
//         </div>
//         {/* login heading */}
//         <h1 className="text-center font-bold  text-3xl mb-6">Login</h1>
//         {/* form */}
//         <form onSubmit={handleSubmit}>
//           {/* usern name */}
//           <div className="mb-8 relative">
//             <label
//               className={`absolute left-2 transition-all duration-300 ${email ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                 }`}
//             >
//               Email
//             </label>
//             <input
//               className={`w-full px-2 py-1 border-b-2 border-gray-400 focus:outline-none focus:border-teal-500 transition-all duration-300 ${email ? 'border-teal-500' : ''
//                 }`}
//               type="text"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           {/* password */}
//           <div className="mb-8 relative">
//             <label
//               className={`absolute left-2 transition-all duration-300 ${password ? 'top-[-12px] text-teal-500' : 'top-2 text-gray-500'
//                 }`}
//             >
//               Password
//             </label>
//             <input
//               className={`w-full px-2 py-1 pr-10 border-b-2 border-gray-400 focus:outline-none focus:border-teal-500 transition-all duration-300 ${password ? 'border-teal-500' : ''
//                 }`}
//               type={visible ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* eye open/close */}
//             <span
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               {visible ? (
//                 <AiOutlineEye className="h-6 w-6 text-gray-500 hover:text-teal-500 transition-colors duration-300" />
//               ) : (
//                 <AiOutlineEyeInvisible className="h-6 w-6 text-gray-500 hover:text-teal-500 transition-colors duration-300" />
//               )}
//             </span>
//             {/* span line transition */}
//             <span className="w-0 h-px bg-teal-500 absolute bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left"></span>
//           </div>
// {/* login button */}
//           <div className="flex justify-center">
//             <button className="w-full px-4 py-2 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 focus:outline-none">
//               Log In
//             </button>
//           </div>
//           {/* forgot password */}
//           <div className="text-center mt-5">
//             <p className="text-gray-600 cursor-pointer hover:underline" onClick={handleForgotPassword}>
//               Forgot Password?
//             </p>
//           </div>
//           {/* paragraph */}
//           <div className="text-center mt-5">
//             <span className='text-gray-600'>Don't have any account? </span>
//             {/* signup button */}
//             <span className="text-teal-600 font-semibold cursor-pointer hover:underline" onClick={signup}>
//             signup
//             </span>
//           </div>
//         </form>
//       </div>  
//     </div>

//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose, AiOutlineSwapRight } from 'react-icons/ai';
import { login } from '../Redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';


const LoginForm = () => {
  const dispatch=useDispatch();

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [emailOrPhone, setEmailOrPhone]=useState('');

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    navigate('/');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    if (newPassword.length <= 16) {
      setPassword(newPassword);
    }
  };

  const handleLogin=()=>{
    console.log("hello")
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(emailOrPhone).toLowerCase())){
      console.log("email")
      dispatch(login({email:emailOrPhone, password}));
      return;
    }
    if(emailOrPhone.match(/^\d+$/)){
      console.log("phone")
      dispatch(login({phone:'+91'+emailOrPhone, password}));
    }
  }

  return (
    <div className='h-full w-auto bg-[#f7fafc]' >
      <div className="inset-0 flex items-center justify-center z-50 p-20">
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl w-full">
          {/* <div className="flex justify-end">
             close button 
            <button className="focus:outline-none" onClick={handleClose}>
              <AiOutlineClose className="h-4 w-auto text-[#222] text-opacity-50 hover:text-[#8A58DC]" />
            </button>
          </div> */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/free-vector/group-customers-shopping-online-store-huge-tablet-sale-internet-shop-buyer-with-purchases-cart-flat-illustration_74855-18344.jpg?size=1000&ext=jpg"
                alt="Image"
                className="h-auto w-full mx-auto md:ml-0 md:mr-8 mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-md mt-4 font-lighter text-[#222] text-opacity-50">Welcome back!!!</h2>
              <h2 className="text-3xl font-bold mb-4">Start  Shopping</h2>
              <form className="space-y-4">
                <div className='mt-10'>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email or Phone
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={emailOrPhone}
                    onChange={(e)=>setEmailOrPhone(e.target.value)}
                    className="w-full px-4 py-2 border-none outline-none rounded-md bg-[#FFEDF1]"
                    placeholder="test1@gmail.com"
                  />
                </div>
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
                      onChange={handlePasswordChange}
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
                </div>
                <div className="text-[#222] text-opacity-50 text-sm hover:underline">
                  <Link to="/">Forgot Password?</Link>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative overflow-hidden">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="flex row gap-2 text-white bg-[#8A58DC] font-medium rounded-full text-sm px-5 py-2.5 text-center justify-center mb-2 hover:bg-[#ac7ff4] w-100"
                    >
                      LOGIN <AiOutlineSwapRight className='text-xl justify-center items-center' />
                    </button>
                  </div>
                </div>
                <p className="mt-5 text-center text-[#222] text-opacity-80 text-sm">
                  New to Ekaiv? <Link to="/signup" className="text-[#8A58DC]">Create an account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
