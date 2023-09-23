import React, { useState } from 'react';
import { IoIosSearch, IoMdHeart, IoMdCart, IoMdPerson } from "react-icons/io";
import { Search } from 'react-feather';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo.png";
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";


const SearchBar = () => {
  const notificationCount = 1; 
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users=useSelector((state)=>state.auth);
  const handleLogin = () => {
    // Implement your login logic here, set isLoggedIn to true after successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here, set isLoggedIn to false after successful logout
    setIsLoggedIn(false);
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/search?q=${searchTerm}`);
      const data = response.data;

      console.log('Search results from backend:', data); // Add this line to console log the data
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <div className="w-full flex flex-row justify-between md:p-3 sm:p-3 md:pl-6 md:pr-6 sm:pl:3 sm:pr-3 max-sm:p-3">
      {/* <div className=" flex-1 flex items-center justify-center"> */}
      {/* {LOGO} */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="md:w-[90px] md:h-[40px] sm:w-[90px] sm:h-[40px] max-sm:w-[90px] max-sm:h-[40px]"/>
      </Link>


      {/* {searchBar} */}
      {/* <form className="flex items-center justify-start md:w-[-webkit-fill-available] px-4 md:px-8 sm:md:w-[350px] xs:md:w-[300px]" onSubmit={handleSearchSubmit}>
  <div className="flex justify-center items-center border w-[100%] rounded-md border-none">
    <div className="flex items-center justify-center p-2 bg-[#F7FAFC] rounded-l-md border border-r-0 border-[#F16080]">
      <Search className="h-6 w-5 text-gray-400" />
    </div>
    <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        className="md:flex px-4 py-2 w-[-webkit-fill-available] bg-[#F7FAFC] rounded-l-none rounded-r-1 border border-l-0 border-[#F16080] outline-none"
      />
      <button
        type="submit"
        onClick={handleSearchSubmit}
        className="px-4 py-2 w-[max-content] border border-[#F16080] bg-[#F16080] text-white rounded-r-md hover:bg-[#8A58DC] hover:border-[#8A58DC] cursor-pointer"
      >
        Search
      </button>
  </div>
</form> */}


{/* <div class="bg-gray-400 h-screen w-screen flex justify-center items-center"> */}
    <form  className="max-w-[580px] w-full px-4">
        <div className="relative flex justify-center items-center">
          <SearchIcon sx={{color:"#9CA3AF", position:"absolute", left:"5px",}} fontSize='small'/>
            <input type="text" name="q" className="w-full  h-10 shadow p-4  bg-[#ffffff]  rounded-r-none rounded-l-md border border-l-1 pl-[30px]  border-[#F16080] outline-none" placeholder="search"/>
            <button type="submit" className='w-[max-content] py-2 bg-[#F16080] cursor-pointer rounded-r-sm rounded-tr-md rounded-br-md  border border-r-1 border-l-0 rounded-tl-0 rounded-bl-0 pr-2 text-white pl-2 outline-none'>
              Search
                
        </button>
        </div>
    </form>
{/* </div> */}

        
        {/* </div> */}


{/* {icons} */}
      <div className=" flex row items-center justify-end md:gap-3 sm:gap-2 max-sm:gap-1 relative  w-[fit-content]">

      {(users.user!==null) ? (
        // Show the Person logo and a logout button if the user is logged in
        <>
          <Link to={'/user-profile'}>
          <IoMdPerson
            className="text-[#8A58DC] hover:text-[#F16080] cursor-pointer"
            size={27}
            onClick={handleLogout}
          />
          </Link>
          
        </>
      ) : (
        // Show the Login button if the user is not logged in
        <Link to={'/signin'} style={{cursor:"pointer"}} className='hover:bg-[#F16080] cursor-pointer text-gray-100 rounded-lg bg-[#8A58DC]  font-semibold'>
        <button
          className="text-gray-100 bg-[#8A58DC] p-1 pl-3 pr-3 rounded-md font-light hover:bg-[#F16080] cursor-pointer"
        >
          Login
        </button>
        </Link>
      )}
      
        {/* Add icons for wishlist, cart, and profile */}
       
        {/* <IoMdPerson className="text-purple-500 hover:text-pink-500 cursor-pointer" size={27} /> */}
        <Link to="/wishlist">
        <div className="relative inline-block">
        <IoMdHeart className="text-[#8A58DC] hover:text-[#F16080] cursor-pointer" size={27} />
        <span className="absolute top-0 right-0  w-4 h-4 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
                {notificationCount} {/* Use notificationCount here */}
        </span>
        </div>
        
        </Link>

        <Link to="/cart-page">
        <div className="relative inline-block">
        <IoMdCart className="text-[#8A58DC] hover:text-[#F16080] cursor-pointer" size={27} />
        <span className="absolute top-0 right-0  w-4 h-4 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
                {notificationCount} {/* Use notificationCount here */}
        </span>

        </div>
 </Link>
     

   </div>
   </div>
  )
}

export default SearchBar;
