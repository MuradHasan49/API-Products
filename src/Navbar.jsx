import React from "react";
import Logo1 from "../../assets/BannerImg/logo1.png";
import Button from "../Global/Button";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#1C1E53]">
        <nav className="container mx-auto flex justify-between items-center  py-8">
          <div className="">
            <img src={Logo1} alt="logo" />
          </div>
          <div className="flex gap-12 items-center text-[#BBBBCB]">
            <div className="flex gap-8 items-center text-[#BBBBCB]">
              <ul className=" hover:text-white">
              <Link to="/">  <li>Home</li></Link>
              </ul>
              <ul className=" hover:text-white">
              <Link to="/about">  <li>About us</li></Link>
              </ul>
              <ul className=" hover:text-white">
              <Link to="/login">  <li>Features</li></Link>
              </ul>
              <ul className=" hover:text-white">
              <Link to="/">  <li>Pricing</li></Link>
              </ul>
              <ul className=" hover:text-white">
               <Link to="/"> <li>FAQ</li></Link>
              </ul>
              <ul className=" hover:text-white">
              <Link to="/">  <li>Blog</li></Link>
              </ul>
            </div>
            <Button>Contact us</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
