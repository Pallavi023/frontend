import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io';
import Ratings from './Ratings';
import { Rating, Typography } from '@mui/material';

const ProductCard = ({ data }) => {
console.log(data)
  const [isWishlist, setIsWishlist] = useState(false);
  const [ratings, setRatings]=useState(0);

  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(data);
  const d = data.name;
  console.log(d);
  const product_name = d.replace(/\s+/g, "-");


  

  return (
    <div className="w-[250px] p-2 flex flex-col gap-1 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full p-3 hover:scale-110">
        <img
          src={`${data.image_Url[0].url}`}
          alt=""
          className="w-full h-[170px] object-contain"
        ></img>
      </div>
      <div className="w-full flex flex-row gap-4 pl-2">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex flex-row gap-1 items-baseline">
            <div className="text-base font-semibold text-[#343246]">$123</div>
            <div className="text-[#9CA3AF] text-xs font-thin">
              <strike>$1234</strike>
            </div>
          </div>
          <div className="flex gap-0 ">
            <Rating
              name="simple-controlled"
              value={ratings}
              onChange={(event, newRating) => {
                setRatings(newRating);
              }}
            />
          </div>
          <div className="font-semibold text-base text-[#343246] text-justify">
            {data.name.length > 30 ? data.name.slice(0, 40) + "..." : data.name}
          </div>
        </div>
        <div className="w-[20%] h-full justify-between flex flex-col gap-3">
          {isWishlist ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer  text-red-500"
              title="Remove from wishlist"
              onClick={() => setIsWishlist(!isWishlist)}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer  text-red-500"
              title="Add to wishlist"
              onClick={() => setIsWishlist(!isWishlist)}
            />
          )}
          <IoMdCart
            size={25}
            className="cursor-pointer text-purple-500 hover:text-pink-500"
            // onClick={() => addToCartHandler(data._id)}
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard