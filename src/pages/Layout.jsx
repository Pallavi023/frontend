import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Home/Footer'
import Navbar from "../component/Home/Navbar"
import SearchBar from '../component/Home/SearchBar'

const Layout = () => {
  return (
    <>
    <SearchBar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout