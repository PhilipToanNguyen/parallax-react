import { Parallax } from 'react-parallax';
import Image3 from '../img/onepiece3.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Image3} strength={800}>
        <div className='content'>
            <span className='img-txt'>PRE-TIMESKIP</span>
        
        </div>
        
    </Parallax>
);

export default ImageThree