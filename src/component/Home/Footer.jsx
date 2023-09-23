import React, { useEffect } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import {Link} from 'react-router-dom'

const Footer = () => {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const links = document.querySelectorAll(".footer-link");
    links.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });

    return () => {
      // Remove event listeners when the component unmounts
      links.forEach((link) => {
        link.removeEventListener("click", scrollToTop);
      });
    };
  }, []); 


  return (
    <div className=" text-black" style={{background: 'rgb(255,107,103)',
    background: `linear-gradient(90deg, rgba(255,107,103,0.7) 14%, rgba(231,88,146,0.7) 24%, rgba(208,69,188,0.7) 42%, rgba(149,84,217,0.7) 65%, rgba(102,104,231,0.7) 84%, rgba(27,136,254,0.7) 100%)`}}>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-10 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px] text-black">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          <div className=" flex flex-col">
            <Link
              to="/about-us"
              className="text-gray-700 hover:text-gray-900 duration-300 text-sm cursor-pointer leading-6 footer-link"
            >
              About us
            </Link>
            <Link
              to="/carrer-page"
              className="text-gray-700 hover:text-gray-900 duration-300 text-sm cursor-pointer leading-6 footer-link"
            >
              Careers
            </Link>
            <Link

              to="/our-blog"

              className="text-gray-700 hover:text-gray-900 duration-300 text-sm cursor-pointer leading-6 footer-link"
            >
              Our Blog
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 duration-300 text-sm cursor-pointer leading-6 footer-link"
            >
              Reviews
            </Link>
           
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          <div
            className=" flex flex-col "
          >
            <Link to='' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Accessories</Link>
            <Link to='' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Mens Wear</Link>
            <Link to='' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Kids Wear</Link>
            <Link to='' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Womens Wear</Link>
            <Link to='' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Home Decor</Link>
            <Link to='' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Packed Food</Link>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          <div
            className=" flex flex-col "
          >
            <Link to='/faq' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">FAQ</Link>
            <Link to='/terms-and-condition' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Terms & Condition</Link>
            <Link to='/contact-us' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Contact us</Link>
            
            <Link to='/live-chat' className="text-gray-700 hover:text-gray-900 duration-300
                   text-sm cursor-pointer leading-6 footer-link">Live Chats</Link>
          </div>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-700 text-sm pb-8"
      >
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;