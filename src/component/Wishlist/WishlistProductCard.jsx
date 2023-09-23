import React from 'react'
import { GoShare } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import Ratings from '../ProductCard/Ratings';
import { Link } from 'react-router-dom';

const WishlistProductCard = ({data}) => {
    return (
        <>

            <div className="flex justify-center items-center pt-5 pb-5 bg-[#f7fafc]">
                <div className="flex w-3/5 h-52 bg-white border rounded-2xl shadow-md">

                    {/* Product Image */}
                    <div className="w-1/4">
                        <img
                            src={data.image_Url[0].url}
                            alt="Product"
                            className="w-full h-full p-5 rounded-l-md object-cover"
                        />
                    </div>

                    {/* Product Details */}

                    <div className="flex flex-col p-4 w-3/4">
                        <h2 className="text-lg font-semibold">{data.name}</h2>
                        <h2 className="text-[#880081] font-bold">{data.shop.name}</h2>
                        <div className="flex items-center space-x-2 mt-2">
                            <Ratings />
                        </div>
                        <div className="text-gray-600 mt-2 flex">
                            <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
                                ₹{data.discount_price}
                            </h5>
                            <h4 className="font-[300] text-[16px] text-[gray] pl-2 pt-3 mt-[-5px] line-through">
                                ₹{data.price}
                            </h4>
                        </div>

                    </div>


                    <div className="flex flex-col relative pt-10 space-y-2 right-10 w-1/6">
                        <Link to="/checkout">
                        <button className="p-2 bg-[#8A58DC] text-white w-full hover:bg-opacity-80 rounded-md text-sm">Buy Now</button>
                        </Link>
                        <Link to="/cart-page">
                        <button className="p-2 w-full bg-[#8A58DC] text-white hover:bg-opacity-80 rounded-md text-sm">Add to Cart</button>
                        </Link>
                        <div className="flex gap-5 justify-between">
                            <button className="w-12 h-12 p-2 bg-purple-200 hover:bg-opacity-80 text-black rounded-lg text-xl flex items-center justify-center shadow-md">
                                <GoShare />
                            </button>
                            <button className="w-12 h-12 p-2 bg-purple-200 text-black hover:bg-opacity-80 rounded-lg text-xl flex items-center justify-center shadow-md">
                                <RiDeleteBinLine />
                            </button>
                        </div>
                    </div>




                </div>
            </div>



        </>
    );
};

export default WishlistProductCard;
