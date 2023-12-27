import { Parallax } from 'react-parallax';
import Image2 from '../img/appetizer.png'

const ImageTwo = () => (
    
    <Parallax className='image' bgImage={Image2} strength={600}>
        <div className='content'>
            <span className='img-txt'>Appetizer</span>
        
        </div>
        
    </Parallax>
);

export default ImageTwo