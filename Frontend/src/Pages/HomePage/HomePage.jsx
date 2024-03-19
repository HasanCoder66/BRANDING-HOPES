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
      <div className="">
        <About />
      </div>
      <BlogPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
