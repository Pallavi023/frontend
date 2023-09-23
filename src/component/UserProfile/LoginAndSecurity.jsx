import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./AddAddressForm.css";
import InputBox from "../InputBox";

const inputFields = [
  {
    id: "personal-info",
    label: "Personal Information",
    name: "personal-info",
    autofocus: true,
    autocomplete: "personal-info",
  },
  {
    id: "email",
    label: "Email Address",
    name: "email",
    autocomplete: "email",
  },
  {
    id: "mobile",
    label: "Mobile Number",
    name: "mobile",
    autocomplete: "mobile",
  },
  {
    id: "change-password",
    label: "Change Password",
    name: "change-password",
    autocomplete: "change-password",
    type: "password",
  },
];
const LoginAndSecurity = () => {

  const [isEdit, setEdit]=useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        {inputFields.map((element, index) => {
          return (
            <>
              <Box sx={{ position: "relative" }}>
                <InputBox {...element} key={index} />
              </Box>
            </>
          );
        })}
        <Box sx={{ position: "relative", display:"flex", justifyContent:"left", flexDirection:"column", marginTop:"30px" }}>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ textAlign: "left", color:"#343246" }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{display:"flex", justifyContent:"left", marginLeft:"-5px"}}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              sx={{color:"#343246"}}
            />
            <FormControlLabel value="male" control={<Radio />} label="Male"  sx={{color:"#343246"}}/>
            <FormControlLabel value="other" control={<Radio />} label="Other" sx={{color:"#343246"}}/>
          </RadioGroup>
        </Box>
        {!isEdit?(<Box sx={{width:"100%", display:"flex"}}>
          <Button
            variant="contained"
            size="small"
            onClick={()=>setEdit(true)}
            sx={{
              backgroundColor: "#8A58DC",
              color: "#ffffff",
              borderRadius: "3px",
              "&:hover": {
                backgroundColor: "#F16080 !important",
              },
              "&:active": {
                backgroundColor: "#8A58DC !important",
              },
            }}
          >
            Edit
          </Button>
        </Box>):
          (
            <Box sx={{width:"100%", display:"flex"}}>
              <Button
            variant="contained"
            size="small"
            onClick={()=>setEdit(false)}
            sx={{
              backgroundColor: "#8A58DC",
              color: "#ffffff",
              borderRadius: "3px",
              "&:hover": {
                backgroundColor: "#F16080 !important",
              },
              "&:active": {
                backgroundColor: "#8A58DC !important",
              },
            }}
          >
            Save
          </Button>
          </Box>)}
      </Box>
    </Box>
  );
};

export default LoginAndSecurity;
