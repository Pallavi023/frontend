import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function OrderCards() {

  return (
    <Card sx={{ display: 'flex', marginTop:"20px" ,justifyContent:"space-between", width:"100%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , textAlign:"start", lineHeight: '1.5px'}}>
          <Typography component="div" variant="p" sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            lineHeight: '25px'
          }}>
            Order No. 1947034
          </Typography>
          <Typography component="div" variant="p" sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            color:"#222222",
            lineHeight: '25px'
          }}>
            <span style={{fontWeight: '400', color:"#9B9B9B"}}>Tracking number:</span> IW3475453455
          </Typography>
          <Typography component="div" variant="p" sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            color:"#222222",
            lineHeight: '25px'
          }}>
            <span style={{fontWeight: '400', color:"#9B9B9B"}}>Quantity:</span> 3
          </Typography>
          <Button
             variant="outlined"
            size="small"
            sx={{
              color: "#6A57D9",
              borderRadius: "29px",
              borderColor:"#6A57D9",
              marginTop:"5px",
              height: '36px',
              width: '150.023px',
              "&:hover": {
                borderColor: "#6A57D9 !important",
              },
              "&:active": {
                borderColor: "#6A57D9 !important",
              },
            }}
          >
            Details
          </Button>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' , textAlign:"end", lineHeight: '1.5px'}}>
          <Typography component="div" variant="p" sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            lineHeight: '25px'
          }}>
            05-12-2003
          </Typography>
          <Typography component="div" variant="p" sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            color:"#222222",
            lineHeight: '25px'
          }}>
            <span style={{fontWeight: '400', color:"#9B9B9B"}}>Total amout:</span> $112
          </Typography>
          <Typography component="div" variant="p" sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            color:"#2AA952",
            lineHeight: '25px'
          }}>
            Delivered
          </Typography>
        </CardContent>
      </Box>
      </Card>
  );
}