import React, { useState } from "react";
import EARBUDSimage from '../assets/images/EARBUDSimage.jpg'

export default function CartCard({ cartData, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  // Calculate the total price for the item
  const totalItemPrice = cartData.price * quantity;

  // Function to handle quantity increase
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrease
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="border m-4 p-4 flex flex-col sm:flex-row shadow-md">
        <div className="flex gap-4 items-center justify-center sm:justify-start">
          <img
            src={EARBUDSimage}
            alt="extra3"
            className="w-24 h-16 object-cover rounded-full"
          />
        </div>
<<<<<<< HEAD
        <div className="flex flex-col sm:flex-row sm:items-center justify-evenly">
=======
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
>>>>>>> 5ca3efa4986f108a04031ca9e7892d14ab630987
          <div>
            <h2 className="text-sm sm:text-base md:text-lg">
              {cartData.name}
            </h2>
            <p className="text-sm sm:text-base md:text-lg">{cartData.size}</p>
            <p className="text-sm sm:text-base md:text-lg">{cartData.seller}</p>
            <div className="flex gap-5 mt-2">
              <button
<<<<<<< HEAD
                className="border rounded-md font-bold pt-1 pb-1 text-[#FA3434] p-1 text-sm sm:text-base md:text-[15px]"
=======
                className="border rounded-md border-pink-500 pt-1 pb-1 text-pink-500 p-1 text-sm sm:text-base md:text-[15px]"
>>>>>>> 5ca3efa4986f108a04031ca9e7892d14ab630987
                onClick={onRemove}
              >
                Remove
              </button>
              <button
<<<<<<< HEAD
                className="border font-bold  rounded-md text-[#0D6EFD] p-1"
=======
                className="border border-[#8A58DC]  rounded-md text-[#8A58DC] pt-1 pb-1"
>>>>>>> 5ca3efa4986f108a04031ca9e7892d14ab630987
              >
                Save for later
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-col sm:items-center gap-2">
            <p className="text-sm sm:text-base md:text-lg">
              $ {totalItemPrice.toFixed(2)}
            </p>
            <div className="flex items-center">
              <button
                className="flex bg-gray-200 py-1 px-3 rounded-lg text-violet-800 text-sm sm:text-base md:text-lg"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span className="flex py-3 px-2 rounded-lg text-md sm:text-lg md:text-xl">
                {quantity}
              </span>
              <button
                className="flex bg-gray-200 py-1 px-3 rounded-lg text-violet-800 text-sm sm:text-base md:text-lg"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}