import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Categories = () => {
  const navigate = useNavigate();

  const categoriesData = [
    {
      id: 1,
      title: "Women",
      subTitle: "",
      image_Url: "https://i.pinimg.com/originals/81/e0/f1/81e0f144ff9323dd2355ee0ee42a80db.jpg",
    },
    {
      id: 2,
      title: "Kids",
      subTitle: "",
      image_Url: "https://img.freepik.com/free-vector/people-waiting-line-near-atm-machine_1308-101950.jpg?size=626&ext=jpg&ga=GA1.2.584503204.1684751112&semt=ais",
    },
    {
      id: 3,
      title: "Mens",
      subTitle: "",
      image_Url: "https://img.freepik.com/free-vector/men-accessories-illustration-background_1284-20853.jpg?w=360",
    },
    {
      id: 4,
      title: "Accessories",
      subTitle: "",
      image_Url: "https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148088924.jpg",
    },
    {
      id: 5,
      title: "Home Decor",
      subTitle: "",
      image_Url: "https://img.freepik.com/free-vector/flat-design-autumn-home-decorated-with-leaves_23-2149106350.jpg?size=626&ext=jpg&ga=GA1.2.584503204.1684751112&semt=ais",
    },
    {
      id: 6,
      title: "Packed Food",
      subTitle: "",
      image_Url:
        "https://img.freepik.com/free-photo/top-view-crisps-chips-along-with-crackers-brown-wooden-desk-snack-photo-crisp-cracker_140725-22494.jpg?w=1060&t=st=1691402954~exp=1691403554~hmac=f9f1f7a314c564cdb203e3569ebefb6983b0dd175432d4289cb07fa31cdd2336",
    },
  ];


  return (
    <>
      <div className='w-full p-5'>

      <div className='w-full flex justify-center text-[27px] font-[600]  text-[#343246] '>Categories</div>
      <div className='w-full p-6'><hr className=" border-gray-300" /></div>

        {/* <div className='flex wrap'></div> */}

        <div className="w-full h-[max-content] p-7">
          
        <div className="flex justify-evenly gap-7 flex-wrap">
            {categoriesData &&
              categoriesData.map((i) => {
                const handleSubmit = (i) => {
                  navigate(`/products?category=${i.title}`);
                };
                return(
                  <div
                    className="flex flex-col items-center justify-center rounded-lg w-[400px] sm:w-[350px] h-[150px]" 
                    id="categories"
                    style={{
                      backgroundImage: `url(${i.image_Url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center', 
                    }}
                  >
          
                    <div
                      className="text-purple-800 w-full gap-4 h-full flex flex-col  items-center justify-center cursor-pointer  backdrop-blur-sm rounded-lg "
                      key={i.id}
                      onClick={() => handleSubmit(i)}
                    >
                      <h5 className={`text-lg sm:text-xl font-bold  text-[#222]`} >{i.title}</h5>
                      <div className="text-center">
                        {/* <Link to="/products" className="flex justify-center"> */}
                          <a href="#_" class="relative px-5 py-2 font-medium text-white group">
                            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span class="relative">Shop Now</span>
                          </a>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>

        </div>

      </div>

    </>
  )
}

export default Categories
