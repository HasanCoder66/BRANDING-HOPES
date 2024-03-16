import React from 'react'
import PortCard from '../PortfolioCard/PortCard'
import cardDataPort from "../../Components/PortfolioCard/cardDataPort";
import IntroServicesCmp from '../IntroServicesCmp/IntroServices';
import Button from '../ButtonNew/Button';

const ServiceSection = () => {
    return (
        <>
            <div className="serviceIntro bg-[url('https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710503572/branding%20hopes/WhatsApp_Image_2024-03-15_at_16.38.38_aed84874_ewt4lt.jpg')] bg-cover bg-center min-h-[100vh] w-[100%] py-[20px] flex flex-col gap-[30px]">
                <IntroServicesCmp />
                <div className="flex justify-evenly flex-wrap items-center">
                    {cardDataPort.map((data) => (
                        <PortCard data={data} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button text="See More" link="/services" />
                </div>
            </div>
        </>
    )
}

export default ServiceSection