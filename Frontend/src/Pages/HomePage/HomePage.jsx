import "./HomePage.css";
import Landing from "../../Components/Hero/Landing";
import IntroServicesCmp from "../../Components/IntroServicesCmp/IntroServices";
import Button from "../../Components/ButtonNew/Button";
import BlogPage from "../BlogPage/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import About from "../../Components/About/About";
import PortCard from "../../Components/PortfolioCard/PortCard";
import cardDataPort from "../../Components/PortfolioCard/cardDataPort";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Landing />
      {/* <Services /> */}
      <div className="flex flex-col item-center justify-center w-[100%]">
        <div className="serviceIntro  bg-[url('https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710503572/branding%20hopes/WhatsApp_Image_2024-03-15_at_16.38.38_aed84874_ewt4lt.jpg')] bg-cover bg-center] ">
          <IntroServicesCmp />
         <div className="flex justify-evenly mt-[2rem] flex-wrap items-center">
         {cardDataPort.map((data) => (
            <PortCard data={data} />
          ))}
         </div>
         
        </div>
        <div className="serviceCard flex w-[100%] justify-around mb-[50px] flex-wrap">
          {/* <ServiceCard /> */}
          {/* <ServiceCardCmp data={serviceData[0]} />
          <ServiceCardCmp data={serviceData[1]} />
          <ServiceCardCmp data={serviceData[2]} /> */}
        </div>
        <div className="flex justify-center">
          <Button text="See More" link="/services" />
        </div>
      </div>
      <div className="bg-[url('https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710503588/branding%20hopes/WhatsApp_Image_2024-03-15_at_16.38.38_2a8b5d60_ufzy1c.jpg')] bg-cover bg-center">
        <About />
      </div>
      {/* <PricingCmp /> */}
      {/* <div className="content flex items-center justify-evenly lg:flex-row md:flex-col sm:flex-col"> */}
        {/* <CardPackages type="startup" color="bg-white" />
        <CardPackages type="standard" color="bg-white" />
        <CardPackages type="premium" color="bg-white" /> */}
      {/* </div> */}
      <ContactPage />
      {/* <BlogPage /> */}
    </div>
  );
};

export default HomePage;
