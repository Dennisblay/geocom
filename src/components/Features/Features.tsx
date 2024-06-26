import level from '@/assets/lev.webp';
import t1 from '@/assets/theo.png';
import t2 from '@/assets/tt.png';
import g1 from '@/assets/g1.svg'
import g2 from '@/assets/g4.svg'
import g3 from '@/assets/g5.svg'

const Features = () => {
    return (
        <div className="px-8 bg-background grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div
                className="relative p-9 hover:bg-secondary  border-[0.1rem] border-primary flex flex-col justify-center items-center  rounded-lg bg-border">
                <img src={g1} className='w-24' alt=""/>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <img src={level} className='w-8' alt=""/>
                </div>
                <div>
                    <p className='text-secondary-foreground'>
                        Traverse Adjustment
                    </p>
                </div>
            </div>
            <div
                className="relative p-9  hover:bg-secondary border-[0.1rem] border-primary flex flex-col justify-center items-center  rounded-lg bg-border">
                <img src={g2} className='w-24' alt=""/>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <img src={t1} className='w-8' alt=""/>
                </div>
                <div>
                    <p className='text-secondary-foreground'>
                        Level Computation
                    </p>
                </div>
            </div>
            <div
                className="relative p-9 hover:bg-secondary border-[0.1rem] border-primary flex flex-col justify-center items-center  rounded-lg bg-border">
                <img src={g3} className='w-24' alt=""/>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <img src={t2} className='w-8' alt=""/>
                </div>
                <div>
                    <p className='text-secondary-foreground'>
                        Geometry Computation
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;