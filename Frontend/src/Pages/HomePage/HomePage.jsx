import "./HomePage.css";
import Landing from "../../Components/Hero/Landing";
import IntroServicesCmp from "../../Components/IntroServicesCmp/IntroServices";
import Button from "../../Components/ButtonNew/Button";
import BlogPage from "../BlogPage/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import About from "../../Components/About/About";

const HomePage = () => {
  return (
    <div>
      <Landing />
      {/* <Services /> */}
      <div className="flex flex-col item-center justify-center w-[100%]">
        <div className="serviceIntro">
          <IntroServicesCmp />
          {/* <ServicesContentHead /> */}
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
      <About />
      {/* <PricingCmp /> */}
      <div className="content flex items-center justify-evenly lg:flex-row md:flex-col sm:flex-col">
        {/* <CardPackages type="startup" color="bg-white" />
        <CardPackages type="standard" color="bg-white" />
        <CardPackages type="premium" color="bg-white" /> */}
      </div>
      <BlogPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
