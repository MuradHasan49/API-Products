import React from "react";
import { Link } from "react-router-dom";

const FooterCopy = () => {
  return (
    <>
      <div className="container py-8">
        <div className="flex flex-col md:flex md:flex-row justify-between items-center">
          <div className="">
            <ul className="flex gap-4 md:gap-8 text-[16px] leading-7 text-[#282938]">
              <li className=" hover:text-black active:text-black  cursor-pointer cursor-pointer transition-colors duration-300">
                <Link to="/"> Home</Link>
              </li>
              <li className=" hover:text-black active:text-black  cursor-pointer cursor-pointer transition-colors duration-300">
                <Link to="/AboutUs"> About us</Link>
              </li>
              <li className=" hover:text-black active:text-black  cursor-pointer cursor-pointer transition-colors duration-300">
                <Link to="#"> Features</Link>
              </li>
              <li className=" hover:text-black active:text-black  cursor-pointer cursor-pointer transition-colors duration-300">
                <Link to="/Pricing"> Pricing</Link>
              </li>
              <li className=" hover:text-black active:text-black  cursor-pointer cursor-pointer transition-colors duration-300">
                <Link to="/FAQ">FAQ</Link>
              </li>
              <li className=" hover:text-black active:text-black  cursor-pointer cursor-pointer transition-colors duration-300">
                <Link to="/Blog"> Blog</Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 md:mt-0">
            &copy; Copyright 2025, Finsweet.com
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCopy;
