import { Parallax } from 'react-parallax';
import Image1 from '../img/onepiece1.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Image1} strength={800}>
        <div className='content'>
            <span className='img-txt'>One piece</span>
        
        </div>
        
    </Parallax>
);

export default ImageOne