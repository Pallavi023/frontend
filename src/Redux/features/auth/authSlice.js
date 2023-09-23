import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage

const saveUser = JSON.parse( localStorage.getItem('user'))

const initialState = {
    user : saveUser ? saveUser : null,
    isError : false,
    isLoading : false,
    isSuccess: false,
    message : "",
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        reset2 : (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        },
        resetMessage : (state) => {
            state.message = ""
        } 
    },
    extraReducers : (builder) => {
        builder
        .addCase(login.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(login.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload.user
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(login.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled , (state, action)=>{
            state.user = null
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message=action.payload.message
        })
        .addCase(signup.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(signup.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload.user
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(signup.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
       
    }
})

export const signup = createAsyncThunk('/signup' , async(userData , thunkAPI)=>{

    try {
        return await authService.signup(userData) 
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})

export const login = createAsyncThunk('/signin' , async(userData , thunkAPI)=>{

    try {
        const resp=await authService.login(userData)
        return resp
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})




export const logout = createAsyncThunk("/signout" , async(thunkAPI)=>{
   
   try {
    return await authService.logout()
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message) 
}
})


export const {reset, resetMessage} = authSlice.actions
export default authSlice.reducer
