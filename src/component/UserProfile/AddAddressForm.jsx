import { Box, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import './AddAddressForm.css'
import InputBox from '../InputBox'


const inputFields = [
  {
    id: "country",
    label: "Country/Region",
    name: "country",
    autofocus: true,
    autocomplete: "country",
    defaultValue: "India",
  },
  {
    id: "fullname",
    label: "Full Name",
    name: "fullname",
    autocomplete: "fullname",
    placeholder: "Full Name",
  },
  {
    id: "mobile",
    label: "Mobile Number",
    name: "mobile",
    autocomplete: "mobile",
    placeholder : 'Mobile Number',

  },
  {
    id: "pincode",
    label: "Pin Code",
    name: "pincode",
    autocomplete: "pincode",
    placeholder:'Pincode',

  },
  {
    id: "flats",
    label: "Flat, House No., Building, Company, Apartment",
    name: "flats",
    autocomplete: "flats",
    placeholder:'Flat/House Number, Building, Company, Apartment',
  },
  {
    id: "area",
    label: "Area, Street, Sector, Vilage",
    name: "area",
    autocomplete: "area",
    placeholder:'Area, Street, Sector, Village',
  },
  {
    id: "landmark",
    label: "Landmark",
    name: "landmark",
    autocomplete: "landmark",
    placeholder:'Landmark',
  },
  {
    id: "town",
    label: "Town/City",
    name: "town",
    autocomplete: "town",
    placeholder:'Town/City',
  },

]
const AddAddressForm = ({ setIsAddress, openAddAddressForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAddress(true);
    openAddAddressForm(false);
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box>
      <Typography
        sx={{
          fontSize: '29px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',
          lineHeight: '25px',
          color: "#404040"
        }}>Add a Delivery Address</Typography>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
        {
          inputFields.map((element, index) => {
            return <InputBox {...element} key={index} />
          })
        }
        <div>
           
        <label className='block text-gray-700 text-sm font-bold text-left mb-2'>
   State
  </label>
 <select
    name='state'
    //  value={formData.state}
    //    onChange={handleInputChange}
    className='border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
    >
     <option value='Select State' disabled>
       Select State
     </option>
     <option value='State 1'>Madhya Pradesh</option>
  <option value='State 2'>Maharashtra</option>
    {/* Add more states here */}
  </select>
  </div>


        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3, mb: 2,
            color: "#ffffff",
            borderRadius: "6px",
            borderColor: "#8A58DC",
            backgroundColor: "#8A58DC",
            marginTop: "15px",
            height: '36px',
            "&:hover": {
              borderColor: "#8A58DC !important",
              backgroundColor: "#8A58DC !important"
            },
            "&:active": {
              borderColor: "#8A58DC !important",
              backgroundColor: "#8A58DC !important"
            },
          }}

        >
          Add Address
        </Button> 
      </Box>
    </Box>
  )
}

export default AddAddressForm


