import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function ProductPrice() {


    const [amount, setAmount] = useState(1);

    return (
        <>
            <div className='flex flex-col gap-2 w-full h-max-[400px] p-4 border border-[#F16080] rounded-sm mb-4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
                </div>
                <hr className='my-2 border-gray-300' />

                <div className="flex sm:flex-row flex-row items-center mb-4">
                    <h2 className='flex font-bold text-xl mr-2'>MRP : </h2>

                    <h5 className="font-bold text-[16px] text-[#333] font-Roboto">
                        {/* {data.originalPrice === 0
                  ? data.originalPrice
                : data.discountPrice} */}


                        ₹855
                    </h5>
                    <h4 className="font-[300] text-[12px] text-[gray] pl-2 pt-3 mt-[-5px] line-through">
                        {/* {data.originalPrice ? data.originalPrice + " ₹" : null} */}
                        ₹3999
                    </h4>
                </div>
                <div className='flex md:flex-row sm:flex-col flex-col mb-4'>
                    <h2 className='flex font-bold text-xl mr-2 mt-4'>Quantity : </h2>

                    <div className='flex md:flex-row flex-row items-center mb-4 lg:text-3xl md:text-xl sm:text-md text-md'>
                        <button className='flex bg-gray-200 py-2 px-5 rounded-lg text-violet-800' onClick={() => setAmount((prev) => prev > 0 ? prev - 1 : 0)}>-</button>
                        <span className='flex py-4 px-6 rounded-lg md:text-xl sm:text-md text-md'>{amount}</span>
                        <button className='flex bg-gray-200 py-2 px-4 rounded-lg text-violet-800' onClick={() => setAmount((prev) => prev + 1)}>+</button>


                    </div>
                </div>

                <div className='flex lg:flex-row gap-2 md:flex-col flex-col items-center'>
                    
                        <Link to="/cart-page" className='w-full'>
                        <button className='bg-[#F16080] hover:opacity-80 sm:w-full w-full text-white font-semibold py-3 rounded-full h-full'>Add to Cart</button>
                        </Link>    
                        <Link to="/checkout" className='w-full'>
                        <button className='bg-[#9D5BB7] hover:opacity-80 sm:w-full w-full text-white font-semibold py-3 rounded-full h-full '>Buy it now</button>
                        </Link>
                        
                    
                    </div>
            </div>
        </>
    )
}
