import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const ProductCard = ({ data }) => {

  const [isWishlist, setIsWishlist] = useState(false);

  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(data);
  const d = data.name;
  console.log(d);
  const product_name = d.replace(/\s+/g, "-");

  const toggleWishlist = () => {
    setIsWishlist(prevState => !prevState);
  };

  return (
    <>

      {/* product card */}
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer hover:scale-105 transition-transform duration-300">
        {/* product image */}

        <div className="flex flex-col items-center justify-between bg-white"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={`${data.image_Url[0].url}`}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>

        {/* horizontal line */}
        <hr className="flex mt-10 mb-2" />

        {/* vendor name */}
        {/* <div className="py-2 flex items-center justify-between"> */}
        {/* <Link to="/shop/preview/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link> */}


        {/* Prize */}
        <div class=" justify-content flex">
          <Link to="/product">
            <div className="flex">
              <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                ₹855
              </h5>
              <h4 className="font-[300] text-[16px] text-[gray] pl-2 pt-3 mt-[-5px] line-through">
                {data.originalPrice ? data.originalPrice + " ₹" : null}
                ₹3999
              </h4>
            </div>
            {/* Ratings */}
            <div className="flex">
              <Ratings rating={data?.ratings} />
            </div>
            {/* product name */}
            <h4 className="pb-3 font-[500]">
              {data.name.length > 30 ? data.name.slice(0, 40) + "..." : data.name}
            </h4>

            {/* sold out tag */}
            {/* <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} sold
            </span> */}
          </Link>

          {/*icons */}
          <div class="justify-content grid">
            {/* wishlist-icon */}
            <div class="relative top-2 w-10 h-10 bg-white rounded-lg border border-gray-300 overflow-hidden shadow-md">
            <button
              className="flex items-center bg-green-100 rounded-lg border border-gray-300 overflow-hidden shadow-md"
              onClick={toggleWishlist}
            >
              {isWishlist ? <AiFillHeart  
              size={22} 
              className="cursor-pointer absolute top-2 right-2 text-red-500"
              title="Remove from wishlist" /> : 
              <AiOutlineHeart  
              size={22}
              className="cursor-pointer absolute top-2 right-2 text-red-500" 
              title="Add to wishlist"/>}
            </button>
            </div>
            
            {/* cart icon */}
            <div class="relative top-8 right-2 w-10 h-10 ml-2 bg-white rounded-[50px] border border-gray-300 overflow-hidden shadow-md">
              <IoMdCart
                size={25}
                className="cursor-pointer absolute right-2 top-[6px] text-purple-500 hover:text-pink-500"
                // onClick={() => addToCartHandler(data._id)}
                title="Add to cart"
              />
              {/* {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null} */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;