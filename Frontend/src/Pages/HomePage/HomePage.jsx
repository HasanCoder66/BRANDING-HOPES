import "./HomePage.css";
import Landing from "../../Components/Hero/Landing";
import BlogPage from "../BlogPage/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import About from "../../Components/About/About";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
// import PortCard from "../../Components/PortfolioCard/PortCard";
const HomePage = () => {
  return (
    <div className="homeContainer flex flex-col items-center">
      <Landing />
      <ServiceSection />
      <div className="">
        <About />
      </div>
      {/* <PricingCmp /> */}
      {/* <div className="content flex items-center justify-evenly lg:flex-row md:flex-col sm:flex-col"> */}
      {/* <CardPackages type="startup" color="bg-white" />
        <CardPackages type="standard" color="bg-white" />
        <CardPackages type="premium" color="bg-white" /> */}
      {/* </div> */}
      {/* <PortCard /> */}
      <BlogPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
