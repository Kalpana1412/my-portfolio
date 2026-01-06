import GirlImg from '../assets/girl.jpeg'
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi,<br/> I'm Kalpana
                <p className='text-2xl'>I'm a Web Developer</p>
            </h1>
            <div className='flex py-10'>
                <a href='https://www.instagram.com/x.__kalpana__.x14'className='pr-5 hover:text-white'><AiOutlineInstagram size={30}/></a>
                <a href='https://www.linkedin.com/in/kalpanagangadharan/'className='pr-5 hover:text-white'><AiOutlineLinkedin size={30}/></a>
            </div>
        </div>
        
        <img className='md:w-1/5' src={GirlImg} />
        
    </section>
}


  