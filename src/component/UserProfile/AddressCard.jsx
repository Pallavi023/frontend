import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const AddressCard = (props) => {
  const scalingFactor=1.1
  console.log(props)
  return (
    <>
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"20px"}}>
    {
      props.addresses.map((element)=>{
        return <Box
        sx={{
          display: "flex",
          gap: "10px",
          width: 'max-content',
          padding: "10px 30px 10px 30px",
          borderRadius:"12px",
          cursor:"pointer",
          transition: `all .2s ease-in-out`,
          alignItems:"center",
          justifyContent:"center",
          lineHeight:"30px",
          '&:hover':{
            transform: `scale(${scalingFactor})`,
            transition: `all .2s ease-in-out`
          },
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Box sx={{height:"100%"}}>
          {
            console.log(element)
          }
          <Typography variant="h5">{element.fullname}</Typography>
          <Typography variant="p">{element.address}</Typography>
          <Typography variant="p">{element.mobile}</Typography>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:"2px", marginTop:"5px" }}>
          <Button variant='text' sx={{color:"#8A58DC"}}>Edit</Button>
          <div style={{border:"1px solid #ccc", width:"0", height:"20px"}}/>
          <Button sx={{color:"#8A58DC"}}>Remove</Button>
          </Box>

          </Box>
        </Box>
      </Box>
      })
    }
    </Box>
    </>
  )
}

export default AddressCard