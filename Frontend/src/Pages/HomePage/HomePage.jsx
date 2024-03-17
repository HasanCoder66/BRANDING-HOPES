import "./HomePage.css";
import Landing from "../../Components/Hero/Landing";
import BlogPage from "../BlogPage/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import About from "../../Components/About/About";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
const HomePage = () => {
  return (
    <div className="homeContainer flex flex-col items-center">
      <Landing />
      <ServiceSection />
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
