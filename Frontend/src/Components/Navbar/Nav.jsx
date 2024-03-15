import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import DropdownMenu from "../../Components/Dropdown/Dropdown";

const Nav = ({ openNav }) => {
  return (
    <>
      <div className="w-[100%] fixed z-[10000] flex items-center  h-[11vh] bg-[#14213d] shadow-md">
        <div className="w-[100%] flex items-center justify-between h-[100%] px-[50px]">
          <Link to="/">
            <div className=" w-20 cursor-pointer">
              <img
                src="https://res.cloudinary.com/dz25g2syh/image/upload/v1707806557/BrandingHopes/Icon-01_f4tz1r.png "
                alt="Branding-Hopes "
                className="object-cover"
              />
            </div>
          </Link>
          <div className="flex gap-[50px] ">
            <Link to="/">
              <div className="nav-link">Home</div>
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
            {/* <Link >
              <div className="nav-link">Services</div>
            </Link> */}
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
