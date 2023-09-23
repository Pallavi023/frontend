import React from 'react'
import Image1 from "../assets/logo/AboutUsLogoEkaive.svg";
import Image2 from "../assets/images/EARBUDSimage.jpg";

import Image4 from "../assets/images/image4.svg";
import PromotinalVedio from "../component/Home/PromotinalVedio";
import BrandingTag from "../component/Home/BrandingTag";
import Instagram from "../component/Home/Instagram";



const AboutUs = () => {
  return (
    <div>
      <div className='w-100vw h-100vh max-w-full'>
      <div> </div>
      
      <div className='flex flex-col gap-y-5 mt-16 '>
        <h3 className='text-blue-800 flex justify-center items-center gap-y-5'>All You Need is to Trust</h3>
        <h1 className='text-gray-900 justify-center items-center flex text-[40px]'>Introducing The Ekaiv</h1>
        <p className='text-gray-400 justify-center items-center flex text-[14px]  '>A successful marketing plan relies heavily on the pulling-power of advertising copy.<br/>
          Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince <br/>
          consumers to take action.</p>
        <div className='flex justify-center items-center cursor-pointer'>
          More about us
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img width={800} height={800}
        src={Image1}/>
      </div>

      <div className='flex flex-col justify-center items-center mt-20 gap-y-5 '>
        <h3 className='text-blue-800 flex justify-center items-center'>Made for Webflow</h3>
        <h1 className='text-gray-900 justify-center items-center flex text-[40px]'>
        Simple & Colorful Ecommerce<br/>
        Template for Your Business</h1>
       <div className='flex  gap-x-28'>
          <div className='flex flex-col '>
          <p className='text-gray-900 text-[40px]'>Beautifully Designed</p>
          <div></div>
          <img className="w-[265px] h-[225px]" src={Image2}/>
          
          
        <button className='bg-[#8A58DC] rounded-md text-white w-48 ml-8 h-10 flex items-center justify-center gap-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-600'>
          
          Start Shopping
        </button>


        </div>

        <div >
          <p className='text-gray-400 justify-center items-center flex text-[14px] gap-y-10 mt-20'>A successful marketing plan relies<br/>
            heavily on the pulling-power of<br/>
            advertising copy. Writing result-<br/>
            oriented ad copy is difficult, as it<br/>
            must appeal to, entice, and<br/>
            convince consumers to take action.<br/>
            There is no magic formula to write<br/>
            perfect ad copy</p>
        </div>

        <div>
          <img className='w-[300px] h-[320px] rounded-2xl'
          src="https://images.pexels.com/photos/6238100/pexels-photo-6238100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
  </div>
        

      <div className='flex mt-28 gap-x-60 justify-center items-center gap-y-5'>
        <img src={Image4}/>
        <div className=''>
          <h3 className="text-gray-900 text-[40px]" >100% Responsive</h3>
          <div></div>
          <p className='text-gray-400  text-[14px] gap-y-10 mt-5'>A successful marketing plan relies heavily on the pulling-power of<br/>
            advertising copy. Writing result-oriented ad copy is difficult, as it must<br/>
            appeal to, entice, and convince consumers to take action. There is no<br/>
            magic formula to write perfect ad copy</p>
            <div>
              <p></p>
              <div></div>
            </div>
        </div>
      </div>

      <div>
      <PromotinalVedio />
      </div>

      <div>
        <BrandingTag />
      </div>

      <div>
        <Instagram/>
      </div>

 

     

      

  </div>
</div>
  )
}

export default AboutUs
