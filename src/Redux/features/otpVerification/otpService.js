import axios from 'axios'

const API_URL = ''






const sendNumberOtp = async(userData) => {
    const response = await axios.post(`${API_URL}/api/otp-verfication/send-number-otp` , userData)
    console.log(response.data);
    return response.data
}


 


const verifyNumberOtp = async (userData) =>{
    console.log(userData)
    const response = await axios.post(`${API_URL}/api/otp-verfication/verify-number-otp`,userData);
    console.log(response.data)
    return response.data;
}

// const signup=async(userData)=>{
//     const response = await axios.post(`${API_URL}/api/auth/signup/` , userData)
//     if(response.data){
//      localStorage.setItem('user' , response.data.user);
//     }
//     return response.data
// }

const otpService = {
    sendNumberOtp,
    verifyNumberOtp,
}

export default otpService