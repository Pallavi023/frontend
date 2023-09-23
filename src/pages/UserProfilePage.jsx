import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import UserProfileMenuCard from "../component/UserProfile/UserProfileMenuCard";
import { useTheme } from "@mui/system";
import { useState } from "react";
import YourOrders from "../component/UserProfile/YourOrders";
import YourAddresses from "../component/UserProfile/YourAddresses";
import LoginAndSecurity from "../component/UserProfile/LoginAndSecurity";
import Logout from "../component/UserProfile/Logout";
import { useSelector } from "react-redux";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MenuOptions = [
  {
    img: "LocalMallIcon",
    title: "Your Orders",
    discription: "Track, return, or buy things again.",
  },
  {
    img: "LocationOnIcon",
    title: "Your Address",
    discription: "Edit addresses for orders and gifts.",
  },
  {
    img: "PaymentIcon",
    title: "Payment Options",
    discription: "Edit or add payment methods.",
  },
  {
    img: "LockPersonIcon",
    title: "Login & Security",
    discription: "Edit login, name & mobile number.",
  },
  {
    img: "SupportAgentIcon",
    title: "Contact Us",
    discription: "Connect with us for any help.",
  },
  {
    img: "LogoutIcon",
    title: "Logout",
    discription: " ",
  },
];

const UserProfilePage = () => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState("Your Orders");
  const users=useSelector((state)=>state.auth);
  const closeLogoutMenu=()=>{
    setOpenMenu("Your Orders")
  }

  return (
    <>
    <Box sx={{ flexGrow: 1, padding: "50px", width:"100%" }}>
      <Grid container spacing={2} sx={{width:'100%'}}>
        <Grid item xs={12}>
          <Item >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                padding: "10px 30px 0 30px",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  alignItems: { sm: "flex-start", xs: "center" },
                  justifyContent: { sm: "unset", xs: "center" },
                  wordBreak: "break-all",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "50%",
                    backgroundImage: `url(${"https://picsum.photos/200"})`,
                    backgroundSize: "cover",
                  }}
                ></Box>
                <Box
                  sx={{
                    lineHeight: "26.63px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#3C3C3C", fontWeight: "500" }}
                  >
                    {users.user.fullname}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ color: "#3C3C3C", fontWeight: "400" }}
                  >
                    <LocalPhoneOutlinedIcon
                      sx={{ color: "#8A58DC" }}
                      fontSize="small"
                    />{" "}
                    {users.user.phone}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ color: "#3C3C3C", fontWeight: "400" }}
                  >
                    <EmailOutlinedIcon
                      sx={{ color: "#F16080" }}
                      fontSize="small"
                    />{" "}
                    {users.user.email}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  lineHeight: "26.63px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { sm: "flex-start", xs: "center" },
                  justifyContent: { sm: "flex-start", xs: "center" },
                  maxWidth: "400px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#3C3C3C", fontWeight: "500" }}
                >
                  Personal Details
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: "#3C3C3C",
                    fontWeight: "400",
                    textAlign: { sm: "start", xs: "center" },
                  }}
                >
                  Address: Scheme No. 54, Vijay Nagar, Indore Madhya Pradesh
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
       
        <Grid item xs={12}>
          <Item sx={{width:'100%'}}>
            <Box
              sx={{
                width:"100%",
                display: "flex",
                flexDirection:{md:"row", sm:"column", xs:"column"},
                // alignItems: "center",
                //   border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                bgcolor: "background.paper",
                color: "text.secondary",
                "& svg": {
                  m: 1.5,
                },
                "& hr": {
                  mx: 2.5,
                },
                padding: "30px",
                gap: "40px",
                // flexWrap: "wrap",
                justifyContent: {md:"left", sm:"center", xs:"center"},
                // flex:"2"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "50px",
                  flexDirection: {md:"column", sm:"row", xs:"row"},
                  flexWrap:"wrap"
                }}
              >
                {MenuOptions.map((menuItems, index) => {
                  return (
                    <>
                      <Box
                        onClick={() => {
                          setOpenMenu(menuItems.title);
                        }}
                        sx={{display:"flex", justifyContent:"center", width:"100%", flexWrap:"wrap"}}
                      >
                        <UserProfileMenuCard {...menuItems} />
                      </Box>
                    </>
                  );
                })}
              </Box>
              <Divider
                orientation={
                  useMediaQuery(theme.breakpoints.down("md"))
                    ? "horizontal"
                    : "vertical"
                }
                flexItem
              />
              <Box sx={{width:"100%"}}>
                {openMenu==="Your Orders" && <YourOrders/>}
                {openMenu==="Your Address" && <YourAddresses/>}
                {openMenu==="Login & Security" && <LoginAndSecurity/>}
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
    {openMenu==="Logout" && <Logout closeLogoutMenu={closeLogoutMenu}/>}
    </>
  );
};

export default UserProfilePage;