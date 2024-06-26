import b1 from '../../assets/blob_1.svg'
import theo from "../../assets/theodolite.png";


const Hero = () => {
    return (
        <div className='flex flex-row justify-between px-36 bg-background'>
            <div className='flex flex-col justify-center items-center space-y-6'>
                <h1 className='text-4xl text-foreground font-bold'>Welcome to GeoCom</h1>
                <p className='text-lg text-foreground'>Home of Geospatial computations</p>
                <button className='bg-primary text-white px-4 py-2 rounded-md'>Get Started</button>

            </div>
            <div className='relative'>
                <img src={b1} className='h-[30rem]' alt=""/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={theo} className='relative w-[10rem] h-[10rem]' alt=""/>
                </div>


            </div>
        </div>
    );
};

export default Hero;