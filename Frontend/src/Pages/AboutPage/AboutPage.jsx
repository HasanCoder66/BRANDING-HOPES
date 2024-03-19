import Button from "../../Components/ButtonNew/Button";


const AboutPage = () => {
  return (
    <div className="min-h-[100vh] landingContainer py-[90px] flex flex-col justify-center items-center gap-[20px]">
      <div className="w-[100vw] ">
        <img
          src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710794777/branding%20hopes/WhatsApp_Image_2024-03-18_at_18.29.33_053fad3d_xj2bv3.jpg"
          alt="image"
          className="h-[50vh] w-[100%] object-cover	"
        />
      </div>
      <div className="md:7/12 lg:w-6/12 flex flex-col items-center gap-[2rem]" >
        <h2 className="text-[3.5rem] tracking-widest	 text-[#fca311] text-center font-bold">
          About Branding Hopes
        </h2>
        <p className="text text-white text-center">
          At Branding Hopes, we are more than just a digital marketing
          agency – we are your partners in success. With a passion for
          creativity and a drive for results, we are dedicated to
          helping businesses like yours thrive in the digital age.
        </p>
        <div className=''>
          <Button text='Learn More' />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
