import websiteimg1 from '../assets/website1.jpg';
import websiteimg2 from '../assets/website2.jpg';
import websiteimg3 from '../assets/website3.jpg';

export default function Projects() {
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="full">
            <div className="flex flex-col px-10 py-5 ">
                <h1 className="text-4xl border-b-4 mb-4 w-[120px] font-bold'">Project</h1>
                <p>These are my projects. I have built these using MERN Stack</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={websiteimg2}/> 
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>This is the Ecommerce website built using MERN Stack</p>             
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={websiteimg3}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>This website is built using MERN Stack</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
}