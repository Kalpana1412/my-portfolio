import AboutImg from '../assets/about.jpeg'

export default function About (){
    return <section className='flex flex-col md:flex-row bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800  px-5' id='about'>
        <div className='py-5 md:w-1/3'>
            <img src={AboutImg} />
        </div>
        <div className='pb-5 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center pl-3'>
                <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='text-white'>I am a Web Developer focused on creating clean, responsive, and user-friendly websites. Currently learning modern web technologies like HTML, CSS, JavaScript, and React.</p>    
            </div>
            
        </div>
    </section>
}