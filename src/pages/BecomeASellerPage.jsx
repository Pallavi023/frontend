import React from "react";
import Instagram from "../component/Home/Instagram";
import BrandingTag from "../component/Home/BrandingTag";
import sellerImage from "../assets/images/sellerimage.svg";
import PromotinalVedio from "../component/Home/PromotinalVedio";
import { Link } from "react-router-dom";

const BecomeASellerPage = () => {
  return (
    <div className="pt-20">
      <div className="flex gap-20">
        <div className="flex flex-col ml-10 gap-4 h-full item-center justify-center ">
          {/* <div > */}
          <div className="relative ">
            <div className="bg-rose-500 rounded-[100%] w-[100px] h-[100px] opacity-[20%] top-[24px] left-[83px]"></div>
            <Link to={'/seller-registration'}>
            <button className="w-[160px] absolute h-[46px] bg-pink-500 text-white rounded-[8px] shadow-md top-[40px] left-[70px]">
              Join Us
            </button>
            </Link>
          </div>
          <h1 className="font-bold text-5xl top-[140px] left-[133px]">
            Become a Seller <br />
            on Ekaiv
          </h1>
          <p className="">Put your products in front of pan India customers.</p>
          <button className="w-[160px] h-[46px] bg-[#8A58DC] text-white rounded-[8px] ml-8">
            Start selling
          </button>
          {/* </div> */}
        </div>
        <div>
          <div>
            <img height="500px" width="800px" src={sellerImage} alt="Seller" />
          </div>
        </div>
      </div>

      <div class="flex mx-10  my-10">
        <div class="w-1/2 gap-7 p-1  bg-white-100">
          <h2 class="font-bold text-5xl mt-8 ml-8 mb-7 ">Why to choose Ekaiv</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales
            ac felis id interdum.
          </p>
          <a class="text-blue-500">Learn more</a>
        </div>
        <div class="w-1/2  flex flex-col gap-4 p-8 bg-white-100">
          <div class="flex gap-4 items-center">
            <img
              src="path/to/image"
              alt="extra3"
              class="w-16 h-16 object-cover rounded-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
              Etiam sodales ac felis id interdum.
            </p>
          </div>
          <div class="flex gap-4 items-center">
            <img
              src="path/to/image"
              alt="extra3"
              class="w-16 h-16 object-cover rounded-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
              Etiam sodales ac felis id interdum.
            </p>
          </div>
          <div class="flex gap-4 items-center">
            <img
              src="path/to/image"
              alt="extra3"
              class="w-16 h-16 object-cover rounded-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
              Etiam sodales ac felis id interdum.
            </p>
          </div>
          <div class="flex gap-4 items-center">
            <img
              src="path/to/image"
              alt="extra3"
              class="w-16 h-16 object-cover rounded-full"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
              Etiam sodales ac felis id interdum.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center h-400px">
        <h1 class="text-4xl font-bold">How to see?</h1>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button class="w-[160px] h-[46px] bg-[#8A58DC] text-white rounded-[8px] mt-4">
          Get started
        </button>
        <div class="mt-4 h- w-[50%]">
          <PromotinalVedio />
        </div>
      </div>

      <div className="flex gap-4 ml-4 mr-4">
        <div className="flex-1">
          <div className="relative flex flex-col">
            <div className="w-[100px] h-[100px] opacity-20 top-[24px] left-[83px]"></div>
            <h1 className="font-bold text-5xl mt-8 ml-8">
              Start selling today
            </h1>
            <p className="ml-8 mt-8 ">
              Put your products in front of pan India customers.
            </p>
            <button className="w-[160px] h-[46px] bg-[#8A58DC] text-white rounded-[8px] mt-4 ml-8">
              Start selling
            </button>
          </div>
        </div>
        <div>
          <div>
            <img height="500px" width="750px" src={sellerImage} alt="Seller" />
          </div>
        </div>
      </div>

      <BrandingTag />
      <Instagram />
    </div>
  );
};

export default BecomeASellerPage;
