import { Box, Button } from "@mui/material";
import React from "react";
import OrderCards from "./OrderCards";

const YourOrders = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "90%",
            // gap: "30px",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#6A57D9",
              color: "#ffffff",
              borderRadius: "29px",
              "&:hover": {
                backgroundColor: "#6A57D9 !important",
              },
              "&:active": {
                backgroundColor: "#6A57D9 !important",
              },
            }}
          >
            Delivered
          </Button>

          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#ffffff",
              color: "#222222",
              borderRadius: "29px",
              "&:hover": {
                backgroundColor: "#ffffff !important",
              },
              "&:active": {
                backgroundColor: "#ffffff !important",
              },
            }}
          >
            Processing
          </Button>
        </Box>
        <Box>
          <OrderCards />
        </Box>
      </Box>
    </>
  );
};

export default YourOrders;