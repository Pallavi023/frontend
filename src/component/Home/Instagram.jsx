import React from 'react'
import { Link } from 'react-router-dom'

const instagramData = [
  {
    id: 1,
    title: "octopous",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-photo/play-dough-background-with-octopus_23-2149700404.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais",
  },
  {
    id: 2,
    title: "cat",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-photo/view-adorable-3d-cats_23-2150473760.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais",
  },
  {
    id: 3,
    title: "fish",
    subTitle: "",
    image_Url: "https://img.freepik.com/premium-photo/play-dough-background-with-fish_23-2149700399.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais",
  },
  {
    id: 4,
    title: "girl",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-photo/close-up-photo-hight-colorful-chalks-tower_171337-10458.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais",
  },
  {
    id: 5,
    title: "doctor",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-photo/set-toy-medical-equipment_114579-44483.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais",
  },
  {
    id: 6,
    title: "car",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/premium-photo/wooden-coloured-cars-carrier-truck-trailer-toy-white-background-3d-rendering_476612-11976.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais",
  },

]

const Instagram = () => {
  return (
    <div>
      <div className={`sm:block py-10 mb-12 cursor-pointer rounded-xl`}>
        <div className='w-full p-6'><hr className="border-gray-300" /></div>

        <h1 className="text-center font-thin text-base sm:text-lg lg:text-xl text-[#343246]">
          We're on INSTAGRAM!
        </h1>

        <span className="flex justify-center">
          <a href="" className="text-center text-base sm:text-lg lg:text-xl text-[#343246]">{"@instagram_handle"}</a>
        </span>
      </div>
      <div className="overflow-x-hidden">
        <div className="flex justify-center px-4 mb-5 flex-wrap gap-4">
          {instagramData.map((item) => (
            <div key={item.id} className="mx-2 hover:scale-105">
              <img src={item.image_Url} className="rounded-lg w-[200px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center p-5">
        <Link
          to="#_"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
            See More Photos
          </span>
          <span className="relative invisible">See More Photos</span>
        </Link>
      </div>
    </div>
  )
}

export default Instagram
