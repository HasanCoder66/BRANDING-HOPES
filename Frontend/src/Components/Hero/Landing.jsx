// import { Link } from 'react-router-dom'
import "./landing.css";
import Button from "../ButtonNew/Button";

const Landing = () => {
  return (
    // id='landing'
    <div className='bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710503547/branding%20hopes/WhatsApp_Image_2024-03-15_at_16.38.38_afbfff7c_gf9sfy.jpg")] bg-cover bg-center min-h-[100vh]'>
      <div className="wrapper p-[80px]  flex lg:flex-row flex-col-reverse item-center justify-between text-center uppercase font-['Poppins', sans-serif'] mt-[26px]">
        <div className="left flex-1 flex flex-col items-center justify-center gap-[30px]">
          <p className="text-[1.3rem] font-normal text-[#e5e5e5]">Empower Your Presence with Branding Hopes</p>
          <div className="landingTitle text-8xl font-bold text-white">
            <span className="text-[#fca311]">Turning Your Hopes </span>Into
            Brands
          </div>
          <p className="text-[1.3rem] font-normal text-[#e5e5e5]">
            Where Imagination Meets
            Innovation in Web Development, Design, SEO, and Digital Mastery
          </p>
          <div className="btns flex justify-center gap-[20px]">
            <Button text="Get Started" link="/" />
            <Button text="Our Services" link="/services" />
          </div>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <div className="imgContainer w-[600px]">
            <img src="/Innovation-amico.svg" alt="" className="w-[100%] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
