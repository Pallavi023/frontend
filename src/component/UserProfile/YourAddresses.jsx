import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from './AddressCard';
import AddAddressForm from './AddAddressForm';

const YourAddresses = () => {
    const [isAddress, setIsAddress]=useState(false);
    const [openAddressForm, openAddAddressForm]=useState(false);
    const [addresses, setAddresses]=useState([{
      fullname:"Vibha Mishra",
      address:"94-C, vijay nagar, indore (M.p.)",
      mobile:"4452674848",

    },
    {
      fullname:"Vibha Mishra",
      address:"94-C, vijay nagar, indore (M.p.)",
      mobile:"4452674848",

    }])
  return (
    <>
    <Box sx={{width:"100%", padding:"5px"}}>
        {!isAddress && !openAddressForm? (
        <Box sx={{width:"100%",display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", gap:"5px"}}>
            <img src={`${require('../../assets/images/userProfile/robot-address-error.png')}`} width='30%' height='30%'/>
            <Typography
            sx={{
                fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            lineHeight: '25px',
            color:"#4C4C4C"
            }}>No Address found in your account!</Typography>
            <Typography
            sx={{
                fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            lineHeight: '25px',
            color:"#767575"
            }}>Add a Delivery Address</Typography>

        </Box>
        ):
        (!openAddressForm&&<AddressCard addresses={addresses}/>)}
        {openAddressForm?<AddAddressForm setIsAddress={setIsAddress} openAddAddressForm={openAddAddressForm}/>:
        (<Button
             variant="contained"
            size="small"
            onClick={()=>{openAddAddressForm(true)}}
            sx={{
              color: "#ffffff",
              borderRadius: "6px",
              borderColor:"#8A58DC",
              backgroundColor:"#8A58DC",
              marginTop:"30px",
              height: '36px',
              width: '150.023px',
              "&:hover": {
                borderColor: "#8A58DC !important",
                backgroundColor:"#8A58DC !important"
              },
              "&:active": {
                borderColor: "#8A58DC !important",
                backgroundColor:"#8A58DC !important"
              },
            }}
          >
            Add Address
          </Button>)}

    </Box>
    </>
  )
}

export default YourAddresses