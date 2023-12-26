import { Parallax } from 'react-parallax';
import Image2 from '../img/onepiece2.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Image2} strength={800}>
        <div className='content'>
            <span className='img-txt'>alabasta</span>
        
        </div>
        
    </Parallax>
);

export default ImageTwo