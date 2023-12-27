import { Parallax } from 'react-parallax';
import Image4 from '../img/desserts.png'

const ImageFour = () => (
    <Parallax className='image' bgImage={Image4} strength={600} blur={0}>
        <div className='content'>
            <span className='img-txt'>Desserts</span>
        
        </div>
        
    </Parallax>
);

export default ImageFour