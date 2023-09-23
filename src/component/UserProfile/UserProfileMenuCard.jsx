import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';

const UserProfileMenuCard = (props) => {
    const scalingFactor=1.1
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          width:{md:"300px", sm:"300px", xs:"100%"},
          padding: "10px",
          cursor:"pointer",
          transition: `all .2s ease-in-out`,
          alignItems:"center",
          '&:hover':{
            transform: `scale(${scalingFactor})`,
            transition: `all .2s ease-in-out`
          },
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Box sx={{ height: "auto", width: "50px", backgroundSize: "cover" }}>
          {/* <img src={require(`../../assets/images/userProfile/${props.img}`)} /> */}
          
          {(props.img==='LocalMallIcon'?<LocalMallIcon sx={{color:"#db2777", fontSize:"2rem"}}/>:<></>)}
          {(props.img==='LockPersonIcon'?<LockPersonIcon sx={{color:"#db2777", fontSize:"2rem"}}/>:<></>)}
          {(props.img==='SupportAgentIcon'?<SupportAgentIcon sx={{color:"#db2777", fontSize:"2rem"}}/>:<></>)}
          {(props.img==='LogoutIcon'?<LogoutIcon sx={{color:"#db2777", fontSize:"2rem"}}/>:<></>)}
          { (props.img==='LocationOnIcon'?<LocationOnIcon sx={{color:"#db2777", fontSize:"2rem"}}/>:<></>)}
          {(props.img==='PaymentIcon'?<PaymentIcon sx={{color:"#db2777", fontSize:"2rem"}}/>:<></>)}
        </Box>
        <Box sx={{height:"100%", textAlign:"left"}}>
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="p">{props.discription}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserProfileMenuCard;