import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import DropdownMenu from "../../Components/Dropdown/Dropdown";

const Nav = ({ openNav }) => {
  return (
    <>
      {/* bg-[#14213d] */}
      <div className="navContainer w-[100%] fixed z-[10000] flex items-center  h-[11vh] bg-transparent shadow-md">
        <div className="w-[100%] flex items-center justify-between h-[100%] mx-[50px]">
          <Link to="/">
            <div className=" cursor-pointer w-[100%]">
              <img
                // src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710850875/branding%20hopes/Icon_PNG-02_ypgqyn.png "
                 src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710929421/branding%20hopes/Logo_PNG_u07vul.png"
                className="w-[220px] h-[80px] object-contain "
              />
              {/* BrandingHopes */}
            </div>
          </Link>
          <div className="flex gap-[50px] ">
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
            <Link to='/services'>
              <div className="nav-link">Services</div>
            </Link>
            <div className="nav-link">
              <DropdownMenu />
            </div>
            <Link to="/about">
              <div className="nav-link">About</div>
            </Link>
            <Link to='/portfolio'>
              <div className="nav-link">Portfolio</div>
            </Link>
            <Link to="/blog">
              <div className="nav-link">Blog</div>
            </Link>
           
            <Link to="/Contact">
              <div className="nav-link">Contact</div>
            </Link>
          </div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem]  text-[#fca311] cursor-pointer " />
        </div>
      </div>
    </>
  );
};

export default Nav;
