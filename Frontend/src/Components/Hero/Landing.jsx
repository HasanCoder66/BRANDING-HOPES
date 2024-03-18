// import { Link } from 'react-router-dom'
import "./landing.css";
import Button from "../ButtonNew/Button";
import { motion } from "framer-motion"


const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const imgVariant = {
  initial: {
    x: 500,
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

const Landing = () => {
  return (
    // id='landing'
    // bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710503547/branding%20hopes/WhatsApp_Image_2024-03-15_at_16.38.38_afbfff7c_gf9sfy.jpg")] bg-cover bg-center
    <div className='landingContainer bg-[url("/bg-4.png")] bg-cover bg-center  overflow-x-hidden'>
      <div className="wrapper px-[80px] py-[20px] flex xl:flex-row flex-col item-center justify-between text-center uppercase font-['Poppins', sans-serif'] mt-[90px]">
        <motion.div variants={container} initial="hidden" animate="visible" className="left flex-1 flex flex-col items-center justify-center gap-[30px]">
          <motion.p variants={item} className="subText text-[1.3rem] font-normal text-[#e5e5e5]">Empower Your Presence with Branding Hopes</motion.p>
          <motion.div variants={item} className="landingTitle text-8xl font-bold text-white">
            <span className="text-[#fca311]">Turning Your Hopes<br /> </span>Into
            Brands
          </motion.div>
          <motion.p variants={item} className="subText text-[1.3rem] font-normal text-[#e5e5e5]">
            Where Imagination Meets
            Innovation in Web Development, Design, SEO, and Digital Mastery
          </motion.p>
          <motion.div variants={item} className="btns flex justify-center gap-[20px]">
            <Button text="Get Started" link="/" />
            <Button text="Our Services" link="/services" />
          </motion.div>
        </motion.div>
        <div className="right flex-1 flex items-center justify-center">
          <motion.div variants={imgVariant} initial="initial" animate="animate" className="imgContainer w-[600px]">
            <motion.img src="/Innovation-amico.svg" alt="" className="w-[100%] object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
