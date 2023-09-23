import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CataloguePage from "./pages/CataloguePage";
import SpecificProductsPage from "./pages/SpecificProductsPage";
import AssistancePage from "./pages/AssistancePage";
import AboutUs from "./pages/AboutUs";
import FaqPage from "./pages/FaqPage";
import PolicyPage from "./pages/PolicyPage";
import SearchPage from "./pages/SearchPage";
import Vendor from './pages/Vendor';
import SellerRegistration from './pages/SellerRegistration';
import BecomeASellerPage from "./pages/BecomeASellerPage";
import UserProfilePage from "./pages/UserProfilePage";
import Wishlist from './component/Wishlist/Wishlist';
import Help from "./pages/Help";
import Singup from './pages/SignupPage';
import ContinueSignup from './pages/ContinueSignup';
import toast, { Toaster } from 'react-hot-toast';

import LoginPage from './pages/LoginPage';
import { resetMessageOtp } from './Redux/features/otpVerification/otpSlice';

import { resetMessage } from './Redux/features/auth/authSlice';
import CartPage from './pages/Cart';

import ContactUs from './pages/ContactUs';
import SellerProfile from './pages/SellerProfile';


import CarrerPage from './pages/CarrerPage';
import OurBlog from './pages/OurBlog';
import TermsAndCondition from './pages/TermsAndConditons';

import { Add } from '@mui/icons-material';
import CheckoutPage from './pages/CheckoutPage';
import LiveChat from './pages/LiveChat';

import VendorMenuBar from './component/VendorProfile/Dashboard/VendorMenuBar';





function App() {
  const { message, isError, isSuccess, isNumberVerfied } = useSelector((state) => state.otpAuth);
  const users = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(resetMessageOtp());
    }
    if (isSuccess && message) {
      toast.success(message);
      dispatch(resetMessageOtp());
    }
    if (users.isError && users.message) {
      toast.error(users.message);
      dispatch(resetMessage());
    }
    if (users.isSuccess && users.message) {
      toast.success(users.message);
      dispatch(resetMessage());
    }
  }, [message, users.message, users.isError, users.isSuccess, isError, isSuccess])


  // const dispatch=useDispatch();
  // useEffect(() => {
  //   if(isError && message){ toast.error(message)};
  //   if(isSuccess && message){toast.success(message)};
  //   if(users.isError && users.message) {toast.error(users.message)}
  //   if(users.isSuccess && users.message) {toast.success(users.message)}
  //   // dispatch(blogReset());
  // }, [isError, isSuccess, message, users.isError, users.isSuccess, users.message]);

  return (

    <div >

      <Routes>

        <Route path='/vendor-profile' element={<Vendor />}></Route>
     

        <Route path="/" element={<Layout />}>

          <Route path='/seller-profile' element={<SellerProfile />}></Route>
          <Route index element={<HomePage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/SpecificProductsPage" element={<SpecificProductsPage />} />
          <Route path="/assistance" element={<AssistancePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/live-chat' element={<LiveChat />} />
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/carrerPage' element={<CarrerPage />}></Route>


          <Route path='/carrer-page' element={<CarrerPage />}></Route>
          <Route path='/our-blog' element={<OurBlog />}></Route>
          <Route path='/terms-and-condition' element={<TermsAndCondition />}></Route>

          <Route path='/cart-page' element={<CartPage />}></Route>
          <Route path='/search' element={<SearchPage />} />

          <Route path='/seller-registration' element={<SellerRegistration />} />


          <Route path="/become-seller" element={<BecomeASellerPage />} />
          <Route path="/user-profile" element={users.user !== null ? <UserProfilePage /> : <Navigate to='/' replace={true} />} />

          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/help' element={<Help />} />
          <Route path='/continue-signup' element={<ContinueSignup />} />

          <Route path='/signup' element={users.user === null ? <Singup /> : <Navigate to='/' replace={true} />} />
          <Route path='/signin' element={users.user === null ? <LoginPage /> : <Navigate to='/' replace={true} />} />
          {/* <Route path='/continue-signup' element={<ContinueSignup/>}/> */}
        </Route>
      </Routes>
      <Toaster position='top-center' />
    </div>
  );
}

export default App;
