import axios from 'axios'

const API_URL = ''






const login = async(userData) => {
    const response = await axios.post(`${API_URL}/api/auth/signin/` , userData)
    if(response.data){
     localStorage.setItem('user' ,  JSON.stringify(response.data.user));
    }
    return response.data
}


 


const logout = async () =>{ 
    const response = await axios.post(`${API_URL}/api/auth/signout`);
    if(response.status===200){
        localStorage.clear();
    }
    return response.data;
}

const signup=async(userData)=>{
    console.log(userData)
    const response = await axios.post(`${API_URL}/api/auth/signup/` , userData)
    if(response.data){
     localStorage.setItem('user' , JSON.stringify(response.data.user));
    }
    return response.data
}

const authService = {
    login,
    logout,
    signup
}

export default authService