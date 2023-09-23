import React from 'react';
import logo from '../../../assets/logo/Logo.png';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { BiStoreAlt } from 'react-icons/bi';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

const VendorMenuBar = ({ activeTab, handleTabClick }) => {
  const renderTabContent = (tabKey, label, icon) => {
    const isActive = activeTab === tabKey;
    console.log(isActive);
    
    return (
      <div
        className={`flex flex-col justify-center items-center h-24 border-b-2 border-gray-300 hover:text-white hover:bg-gradient-to-r ${
          isActive ? 'from-[rgb(241,96,128)] to-[#5156E9]' : 'from-[#F16080] to-[#5156E9]'
        }`}
        onClick={() => handleTabClick(tabKey)}
      >
        {icon}
        <div className="flex flex-row">
          {label}
          <IoIosArrowForward className="pt-1 m-1" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="w-48 h-screen bg-white">
      <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-auto sm:w-auto sm:h-30 ml-2 p-3" />
        </Link>
        
        <div className="cursor-pointer">
          {renderTabContent('dashboard', 'Dashboard', <HomeIcon />)}
          {renderTabContent('store', 'Your Store', <BiStoreAlt className="justify-center items-center" />)}
          {renderTabContent('product', 'Manage Product', <ShoppingCartIcon className="justify-center items-center" />)}
          {renderTabContent('account', 'Account Setting', <ManageAccountsSharpIcon />)}
          {renderTabContent('report', 'Report', <AutoStoriesIcon />)}
          {renderTabContent('help', 'Need Help?', <SupportAgentIcon />)}
        </div>
      </div>
    </div>
  );
};

export default VendorMenuBar;