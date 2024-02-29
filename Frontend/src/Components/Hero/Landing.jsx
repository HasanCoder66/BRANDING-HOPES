import { Link } from 'react-router-dom'
import './landing.css'
import Button from '../ButtonNew/Button'

const Landing = () => {
    return (
        <div className='bg-[#5cdb95] pt-[40px] ' id='landing '>
            <div className="wrapper min-h-[90vh] p-[80px]  flex flex-col item-center justify-around text-center uppercase font-['Poppins', sans-serif'] text-[#05386b]">
                <div className='landingTitle text-8xl font-bold'><span className='text-[#edf5e1]'>Turning Your Hopes  </span>Into Brands</div>
                <p className='my-[50px] text-[1.3rem] font-normal subText'>Empower Your Presence with Branding Hopes - Where Imagination Meets Innovation in Web Development, Design, SEO, and Digital Mastery</p>
                <div className="btns flex justify-center gap-[20px]">
                    <Button text="Get Started" link="/" />
                    <Button text="Our services" link="/services" />
                </div>
            </div>
        </div>
    )

}

export default Landing