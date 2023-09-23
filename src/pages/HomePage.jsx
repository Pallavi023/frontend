import React from 'react'

import Hero from "../component/Home/Hero"
import Categories from "../component/Home/Categories"
import PopularProducts from "../component/Home/PopularProducts"
import FeaturedProduct from "../component/Home/FeaturedProduct"

import BrandingTag from '../component/Home/BrandingTag'
import Instagram from '../component/Home/Instagram'

const HomePage = () => {
  return (
    <div className='w-[100%]'>
    <Hero/>
    <Categories/>
    <PopularProducts/>
    <FeaturedProduct/>
    <BrandingTag/>
    <Instagram/>
    </div>

  )
}

export default HomePage
