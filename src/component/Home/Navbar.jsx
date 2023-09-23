import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [openMenu, setOpenMenu] = useState(false);
  const [openAllCategories, setOpenAllCategories] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCategoriesClose = () => {
    setAnchorEl(null);
  };

  const [anchor, setAnchor] = React.useState(null);
  const open2 = Boolean(anchor);
  const handleSupportClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleSupportClose = () => {
    setAnchor(null);
  };

  const openMenuItems = () => {
    setOpenMenu(!openMenu);
  }

  let Links = [
    { name: "Home", link: "/" },
    { name: "Catalogue", link: "/catalogue" },
    { name: "Products", link: "/search-page" },
    { name: "Assistance", link: "/assistance" },
  ];

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          padding: "10px 5px",
          fontSize: { lg: "1.1rem", md: "1rem", sm: "1rem" },
          color: "#ffffff",
        }}
        className={`flex items-center ${(screenSize.width <= 900) ? 'justify-end' : 'justify-start'} bg-gradient-to-r from-[#F16080] to-[#5156E9]`}
      >
        {(screenSize.width <= 900) ? (!openMenu && <MenuIcon fontSize="large" onClick={openMenuItems} style={{ cursor: "pointer", transitionDelay: "2s", position: "absolute", left: "10px" }} />) : <></>}
        <Box className={`flex flex-row gap-5 items-center w-[100%] justify-start`}
          style={{ display: (screenSize.width <= 900) ? 'none' : 'flex' }}>
          <Box
            className={`font-light cursor-pointer pl-2`}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleCategoriesClick}
          >
            <MenuIcon /> All Categories
          </Box>
          <div className="flex flex-1 items-center justify-center gap-[1rem]">
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleCategoriesClose}
              TransitionComponent={Fade}
              sx={{ '&': { marginTop: "12px" }, borderRadius: '0 0 1px 1px !important' }}
            >
              <MenuItem onClick={handleCategoriesClose}>Accessories</MenuItem>
              <MenuItem onClick={handleCategoriesClose}>Mens Wear</MenuItem>
              <MenuItem onClick={handleCategoriesClose}>Kids Wear</MenuItem>
              <MenuItem onClick={handleCategoriesClose}>Womens Wear</MenuItem>
              <MenuItem onClick={handleCategoriesClose}>Home Decor</MenuItem>
              <MenuItem onClick={handleCategoriesClose}>Packed Food</MenuItem>
              <MenuItem onClick={handleCategoriesClose}>Others</MenuItem>
            </Menu>
            {
              Links.map((navItem) => {
                return <Link to={navItem.link}>
                  <Box className={`font-light transition-colors duration-400 delay-75 hover:text-[#222]`}>{navItem.name}</Box>
                </Link>
              })
            }
            <Box
              className={`font-light cursor-pointer`}
              id="support-button"
              aria-controls={open2 ? "support-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleSupportClick}
            >
              Support
              {open2 ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
            </Box>
            <Menu
              id="support-menu"
              MenuListProps={{
                "aria-labelledby": "support-button",
              }}
              anchorEl={anchor}
              open={open2}
              onClose={handleSupportClose}
              TransitionComponent={Fade}
              sx={{ '&': { marginTop: "12px" }, borderRadius: '0 0 1px 1px !important', }}
            >
              <MenuItem onClick={handleSupportClose}>
                <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Faq's
                </Link>
              </MenuItem>
              <MenuItem onClick={handleSupportClose}>
                <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Contact Us
                </Link>
              </MenuItem>
              <MenuItem onClick={handleSupportClose}>
                <Link to="/live-chat" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Live Chat
                </Link>
              </MenuItem>

            </Menu>
            <Link to="/become-seller">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#880081",
                  boxShadow: "none",
                  borderRadius: "5px",
                  textTransform: "capitalize",
                  padding: "4px 10px 4px 10px",
                  "&:hover": {
                    color: "#F16080",
                    backgroundColor: "white",
                  },
                }}
              >
                Become a Seller <ChevronRightIcon />
              </Button>
            </Link>
          </div>
        </Box>



        <Box className="flex flex-row  items-center" >
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-transparent text-[#ffff] font-light  px-2  hover:bg-white-600 focus:outline-none cursor-pointer"
          >
            <option value="en" className="text-[#222]">
              English
            </option>
            <option value="hi" className="text-[#222]">
              हिन्दी
            </option>
          </select>
        </Box>
      </Box>


      {/* SideNavigation */}

      {(screenSize.width <= 900) ?
        <div className={`w-[250px] fixed h-full top-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] z-50  bg-[#fdfdfd] transform transition-transform duration-300 ease-in-out ${openMenu ? 'translate-x-0' : '-translate-x-[400px]'}`}>
          <div className={`w-full h-full flex flex-col relative justify-start items-center pt-20`}>
            <CloseIcon onClick={openMenuItems} sx={{ position: "absolute", cursor: 'pointer', right: '20px', top: '20px', color: "#222" }} fontSize="large" />
            <ul className="text-[#222] flex flex-col gap-5 font-light text-lg">
              <li onClick={() => setOpenAllCategories(!openAllCategories)}>All Categories {openAllCategories ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</li>
              <div className={`${openAllCategories ? 'flex flex-col gap-3 justify-center items-center' : 'hidden'}`}>
                <ul className="flex flex-col gap-3 pl-5 ">
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222] ">Accessories</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Mens Wear</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Kids Wear</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Womens Wear</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Home Decor</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Packed Food</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Others</li>
                </ul>
              </div>
              {Links.map((e) => {
                return <Link to={e.link}><li className="transition-colors duration-400 delay-75 hover:text-[#222]">{e.name}</li></Link>
              })}
              <li onClick={() => setOpenSupport(!openSupport)}>Support {openSupport ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</li>
              <div className={`${openSupport ? 'flex flex-col gap-3 justify-center items-center' : 'hidden'}`}>
                <ul className="flex flex-col gap-3 pl-5 ">
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222] ">Faq's</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Contact Us</li>
                  <li className=" cursor-pointer transition-colors duration-400 delay-75 hover:text-[#222]">Live Chat</li>

                </ul>
              </div>
            </ul>
          </div>
        </div>
        : <></>}
    </>
  );
};

export default Navbar;
