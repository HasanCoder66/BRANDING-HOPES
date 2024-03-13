import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
// import Topbar from "../Topbar/Topbar";
import DropdownMenu from "../../Components/Dropdown/Dropdown";

const Nav = ({ openNav }) => {
  return (
    <>
      {/* <Topbar /> */}
      <div className="w-[100%] fixed z-[10000]  h-[11vh] bg-[#14213d] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <Link to="/">
            <div className=" w-20 cursor-pointer  ">
              <img
                src="https://res.cloudinary.com/dz25g2syh/image/upload/v1707806557/BrandingHopes/Icon-01_f4tz1r.png "
                alt="Branding-Hopes "
                className="object-cover"
              />
            </div>
          </Link>

          <Link to="/">
            <div className="nav-link">Home</div>
          </Link>
          <div className="nav-link">
            <DropdownMenu />
          </div>
          <Link to="/about">
            <div className="nav-link">About</div>
          </Link>
          <Link to="/blog">
            <div className="nav-link">Blog</div>
          </Link>
          <Link >
            <div className="nav-link">Services</div>
          </Link>
          <Link to='/portfolio'>
            <div className="nav-link">Portfolio</div>
          </Link>
          <Link to="/Contact">
            <div className="nav-link">Contact</div>
          </Link>
          <Link to="/GetConsultancy">
            <div className="nav-link">Toll Free</div>
          </Link>
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem]  text-[#fca311] cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
