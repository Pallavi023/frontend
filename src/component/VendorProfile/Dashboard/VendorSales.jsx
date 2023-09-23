import React, { useState } from 'react';
import Card from '@mui/material/Card';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { BiSort , BiRupee} from 'react-icons/bi';

export default function VendorSales() {
  const [cost, setCost] = useState(0);

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  return (
    <div className=''>
      <h1 className="mt-3 mb-3 ml-6">Sales</h1>
      <div className="flex flex-col md:flex-row gap-5 p-5 ">
        <Card
          variant="outlined"
          orientation="horizontal"
          className="w-full md:w-1/3 rounded-xl"
          sx={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
            borderRadius: '1rem', // Rounded corners
            '&:hover': {
              boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
              borderColor: 'neutral.outlinedHoverBorder',
            },
          }}
        >
          <div>
            <ManageAccountsIcon className='m-2' />
            <div className="flex justify-center items-center flex-col mb-4">
              <div className="p-4">
                <p className="text-2xl flex justify-center items-center font-bold text-[#737587]"> {cost}</p>
              </div>
              <p className="font-bold text-2xl">Product Sold</p>
            </div>
          </div>
        </Card>

        <Card
          variant="outlined"
          orientation="horizontal"
          className="w-full md:w-1/3 rounded-xl"
          sx={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
            borderRadius: '1rem', // Rounded corners
            '&:hover': {
              boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
              borderColor: 'neutral.outlinedHoverBorder',
            },
          }}
        >

          <div>
            <BiSort className="text-2xl m-2" />
            <div className="flex justify-center items-center flex-col">
              <div className="p-4">
                <p className="text-2xl flex justify-center items-center font-bold text-[#737587]"> {cost}</p>
              </div>
              <p className="font-bold text-2xl">Total Orders</p>
            </div>
          </div>
        </Card>
        <Card
          variant="outlined"
          orientation="horizontal"
          className="w-full md:w-1/3 rounded-xl"
          sx={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
            borderRadius: '1rem', // Rounded corners
            '&:hover': {
              boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
              borderColor: 'neutral.outlinedHoverBorder',
            },
          }}
        >
          <div>
            <PersonOutlineRoundedIcon className='m-2' />
            <div className="flex justify-center items-center flex-col">
              <div className="p-4">
                <p className="text-2xl flex justify-center items-center font-bold text-[#737587]">Price: <BiRupee/> {cost}</p>
              </div>
              <p className="font-bold text-2xl">Total Earnings</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
