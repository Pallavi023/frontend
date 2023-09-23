import axios from 'axios'
const API_URL = ''

const createBlog = async (blogData) =>{ 
    const response = await axios.post(`${API_URL}/api/blogs/crtblog`, blogData, {headers:{
        'Content-Type': 'multipart/form-data',
    }});
    return response.data;
}

const editBlog = async (blogData) =>{ 
    const response = await axios.put(`${API_URL}/api/blogs/editblog`, blogData, {headers:{
        'Content-Type': 'multipart/form-data',
    }});
    return response.data;
}
const deleteThisBlog=async(blogId)=>{
    const response = await axios.post(`${API_URL}/api/blogs/delBlog/${blogId}`);
    return response.data
}
const getBlogs=async()=>{
    const response = await axios.get(`${API_URL}/api/blogs/getblogs`);
    return response.data
}

const blogService = {
    createBlog,
    getBlogs,
    editBlog,
    deleteThisBlog
}

export default blogService
