import level from '@/assets/lev.webp';
import t1 from '@/assets/theo.png';
import t2 from '@/assets/tt.png';
import g1 from '@/assets/g1.svg'
import g2 from '@/assets/g4.svg'
import g3 from '@/assets/g5.svg'

export const featuresData = {
    features: [
        {
            title: 'Level Computation',
            description: 'Perform precise leveling calculations with ease.',
            image: g1,
            icon: level,
            alt: 'level computation'
        },
        {
            title: 'Traverse Computation',
            description: 'Accurately compute and adjust traverse data',
            image: g2,
            icon: t1,
            alt: 'traverse computation'
        },
        {
            title: 'Geometry Computation',
            description: 'Compute geometric figures and shapes',
            image: g3,
            icon: t2,
            alt: 'geometry computation'
        }
    ]
}