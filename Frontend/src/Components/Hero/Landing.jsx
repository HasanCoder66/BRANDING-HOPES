// import { Link } from 'react-router-dom'
import "./landing.css";
import Button from "../ButtonNew/Button";

const Landing = () => {
  return (
    // id='landing'
    <div className="">
      <div className=' bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710503547/branding%20hopes/WhatsApp_Image_2024-03-15_at_16.38.38_afbfff7c_gf9sfy.jpg")] bg-cover bg-center  pt-[80px] pb-[40px]  '>
        <div className="wrapper min-h-[90vh] p-[80px]  flex flex-col item-center justify-around text-center uppercase font-['Poppins', sans-serif'] ">
          <div className="landingTitle text-8xl font-bold text-white">
            <span className="text-[#fca311]">Turning Your Hopes </span>Into
            Brands
          </div>
          <p className="my-[50px] text-[1.3rem] font-normal text-[#e5e5e5]">
            Empower Your Presence with Branding Hopes - Where Imagination Meets
            Innovation in Web Development, Design, SEO, and Digital Mastery
          </p>
          <div className="btns flex justify-center gap-[20px]">
            <Button text="Get Started" link="/" />
            <Button text="Our Services" link="/services" />
          </div>
        </div>
      </div>
      {" "}
    </div>
  );
};

export default Landing;
