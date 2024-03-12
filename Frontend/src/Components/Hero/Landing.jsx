// import { Link } from 'react-router-dom'
import './landing.css'
import Button from '../ButtonNew/Button'

const Landing = () => {
    return (
        // id='landing'
        <div className='bg-[#e5e5e5] pt-[80px] pb-[40px]' >
            <div className="wrapper min-h-[90vh] p-[80px]  flex flex-col item-center justify-around text-center uppercase font-['Poppins', sans-serif'] text-[#05386b]">
                <div className='landingTitle text-8xl font-bold'><span className='text-[#fca311]'>Turning Your Hopes  </span>Into Brands</div>
                <p className='my-[50px] text-[1.3rem] font-normal text-[#000000]'>Empower Your Presence with Branding Hopes - Where Imagination Meets Innovation in Web Development, Design, SEO, and Digital Mastery</p>
                <div className="btns flex justify-center gap-[20px]">
                    <Button text="Get Started" link="/" />
                    <Button text="Our services" link="/services" />
                </div>
            </div>
        </div>
    )

}

export default Landing