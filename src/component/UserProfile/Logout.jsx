import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../Redux/features/auth/authSlice';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';



const Logout = (props) => {
  const dispatch=useDispatch();
  const users=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(logout());
  }

  useEffect(() => {
    if(users.message==='Signed out successfully.'){
      navigate('/');
      dispatch(reset())
    }
  }, [users.message])
  
  return (
    <Box sx={{width:"100%",height:'100vh',top:0, left:0, position:'fixed', backgroundColor:'#05033191', display:'flex', justifyContent:'center', alignItems:"center"}}>
        <Box sx={{ display:"flex", width:'100%', height:'100%', alignItems:"center", justifyContent:"center"}}>
            <Box sx={{padding:'40px', borderRadius:"15px",position:'relative', backgroundColor:"#ffffff",display:"flex",flexDirection:"column", gap:"10px", alignItems:"center", justifyContent:"center"}}>
            <CloseIcon onClick={props.closeLogoutMenu} sx={{position:"absolute", cursor:'pointer', right:'10px', top:'10px', color:"#222"}} fontSize="large"/>
            <Typography variant='h4' color={'#222'}>
                Do you wanna logout?
            </Typography>
            <Button variant='contained' 
            onClick={handleLogout}
            sx={{backgroundColor:'#8A58DC', width:"fit-content", '&:hover':{
                backgroundColor:"#F16080"
            }}}>Yes</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Logout