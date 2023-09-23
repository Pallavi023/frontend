import { Button, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImageSlider = () => {


  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://www.jssor.com/premium/sales/img/dreamstime_m_90430524-sales-bw-color.jpg",
    "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://nativainteriors.com/wp-content/uploads/2021/08/2-1080x584.png",
    "https://hips.hearstapps.com/hmg-prod/images/mh-12-29-clothing-brands-1672328738.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    "https://wallpaperaccess.com/full/6424678.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 1 seconds

    return () => clearTimeout(timer);
  }, [currentImage, images.length]);

  return (
    <>
      <div className="w-full h-[70vh] bg-white  rounded-lg opacity-80 relative cursor-pointer">
        {/* //////////////////Image Slider//////////////////////////////////// */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 rounded-full mx-1 ${index === currentImage ? "bg-[#8A58DC]" : "bg-gray-300"
                }`}
            ></span>
          ))}
        </div>

        {/* Mid Box */}
        <div className="w-full h-full absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center">
        <div className="bg-slate-100/70  p-5 pt-10 pb-10  rounded-lg  flex justify-center items-center flex-col">
          <h6 className=" text-[#880081]  md:text-lg sm:text-sm max-sm:text-xs font-semibold">Hello welcome to EKAIV</h6>
          <div  className="text-[#111]  md:text-xl sm:text-lg max-sm:text-sm font-bold">Right place to affordable  & creative products</div>
          <Link to="/search-page"><Button variant="contained" sx={{backgroundColor:"#880081", marginTop:"10px", '&:hover':{backgroundColor:"#ffffff", color:"#F16080", outline:"1px solid #F16080"}}}>Shop Now</Button></Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default ImageSlider









{/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-6 rounded-lg h-72 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5  font-bold">

        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl flex justify-center items-center mt-10 text-[#880081]">
          Hello Welcome To the EKAIV
        </h1>

        <p className="text-base md:text-lg ld:text-xl xl:text-2xl 2xl:text-3xl flex justify-center font-medium items-center text-center mt-7 ">Right place to affordable  & creative products</p>


        <div className="flex justify-center items-center mt-7 center-element">
          <Link to="/search">
          <a href="#_" className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"> */}
            {/* <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span> */}
            {/* <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span> */}
            {/* <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span> */}
            {/* <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-[#8A58DC]"></span>
            <span class="relative">Shop Now</span> */}
          {/* </a>
          </Link>
        </div>


      </div> */}