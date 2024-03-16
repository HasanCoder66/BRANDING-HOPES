import './introService.css'
// import { Link } from "react-router-dom";
// import Button from "../ButtonNew/Button";

const IntroServicesCmp = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        {/* <Button text="Discover Branding Hopes" link="/" /> */}
        <div className="mt-[20px] text-center flex flex-col gap-[10px]">
          <h2 className="text-[#14213d] text-5xl font-bold tracking-widest	 serviceTitle">Crafting Success in New </h2>
          <h2 className="text-[#e5e5e5] text-3xl font-bold tracking-widest	 serviceTitle">York's Digital Landscape </h2>
        </div>
        <p className="w-[40vw] mt-5 text-center sm:w-[80vw] serviceTag text-[#14213d]">At Branding Hopes, we offer a comprehensive range of digital marketing services designed to help your business succeed in today's competitive landscape. From increasing brand visibility to driving conversions and everything in between, we have the expertise and resources to deliver results that matter. Explore our services below:  </p>
      </div>
    </div>

  );
};

export default IntroServicesCmp;


{/* <div className="flex justify-center mt-[2rem] flex-col ">
     
        <div className=" px-[80px] flex flex-col item-center text-center  font-['Poppins', sans-serif'] text-[#2c2e48]">
          
            
          
         
            
          </div>
        </div> */}