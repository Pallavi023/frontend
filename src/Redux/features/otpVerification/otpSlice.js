import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import otpService from "./otpService";

// Get user from localStorage

const initialState = {
    isNumberVerfied: false,
    isError : false,
    isLoading : false,
    isSuccess: false,
    message : "",
}

const otpSlice = createSlice({
    name : "otpAuth",
    initialState,
    reducers : {
        reset : (state) => {
            state.isNumberVerfied=false
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        resetMessageOtp : (state) => {
            state.message = ""
        }   
    },
    extraReducers : (builder) => {
        builder
        .addCase(sendNumberOtp.pending , (state)=>{
            state.isNumberVerfied=false
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(sendNumberOtp.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload.message
            state.isError = false
            state.isNumberVerfied = action.payload.isNumberVerified
        })
        .addCase(sendNumberOtp.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.isNumberVerfied = false
        })
        .addCase(verifyNumberOtp.pending , (state)=>{
            state.isNumberVerfied = false
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })
        .addCase(verifyNumberOtp.fulfilled , (state, action)=>{
            state.isNumberVerfied = action.payload.isNumberVerified
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message=action.payload.message
        })
        .addCase(verifyNumberOtp.rejected , (state, action)=>{
            state.isNumberVerfied = action.payload.isNumberVerified
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message=action.payload.message
        })
        
       
    }
})

export const sendNumberOtp = createAsyncThunk('/send-number-otp' , async(userData , thunkAPI)=>{

    try {
        console.log(userData)
        const resp= await otpService.sendNumberOtp(userData) 
        // console.log(resp);
        return resp;

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log(message)
        return thunkAPI.rejectWithValue(message) 
    }

})

export const verifyNumberOtp = createAsyncThunk('/verify-number-otp' , async(userData , thunkAPI)=>{

    try {
        const resp=await otpService.verifyNumberOtp(userData)
        return resp
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})







export const {reset, resetMessageOtp} = otpSlice.actions
export default otpSlice.reducer
