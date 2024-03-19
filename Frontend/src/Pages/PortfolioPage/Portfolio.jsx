import React from 'react'
import PortCard from '../../Components/PortfolioCard/PortCard'
import cardData from '../../Components/PortfolioCard/cardDataPort'
const Portfolio = () => {
  return (
    <div className='flex flex-wrap justify-evenly min-h-[100vh] py-[90px] landingContainer'>
      {cardData.map((data) => (
        <PortCard data={data} />
      ))}
    </div>
  )
}

export default Portfolio