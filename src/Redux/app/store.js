import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import productsReducer from '../features/products/productsSlice';
import otpAuthReducer from '../features/otpVerification/otpSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    products: productsReducer,
    otpAuth: otpAuthReducer,
  },
});
