import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./productsService";

// Get user from localStorage



const initialState = {
    products :  null,
    isError : false,
    isLoading : false,
    isSuccess: false,
    message : "",
}

const blogSlice = createSlice({
    name : "blogs",
    initialState,
    reducers : {
        reset : (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }   
    },
    extraReducers : (builder) => {
        builder
        .addCase(createBlog.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(createBlog.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs = action.payload.allBlogs
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(createBlog.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(editBlog.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(editBlog.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs = action.payload.allBlogs
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(editBlog.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getBlogs.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(getBlogs.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs = action.payload.allBlogs
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(getBlogs.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.blogs = null
        })
        .addCase(deleteThisBlog.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(deleteThisBlog.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs = action.payload.allBlogs
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(deleteThisBlog.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.blogs = null
        })
       
    }
})

export const createBlog = createAsyncThunk('/crtblog' , async(blogData , thunkAPI)=>{

    try {
        const resp=await blogService.createBlog(blogData) 
        return resp;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})

export const editBlog = createAsyncThunk('/editblog' , async(blogData , thunkAPI)=>{

    try {
        const resp=await blogService.editBlog(blogData) 
        return resp;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})

export const getBlogs = createAsyncThunk('/getblogs' , async(thunkAPI)=>{

    try {
        const resp=await blogService.getBlogs()
        return resp
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})

export const deleteThisBlog=createAsyncThunk('/delBlog', async(blogId, thunkAPI)=>{
    try {
        console.log(blogId)
        const resp=await blogService.deleteThisBlog(blogId);
        return resp
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})






export const {reset} = blogSlice.actions
export default blogSlice.reducer
