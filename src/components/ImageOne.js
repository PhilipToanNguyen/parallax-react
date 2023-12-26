import { Parallax } from 'react-parallax';
import Image1 from '../img/resturant.png'

const ImageOne = () => (
    <Parallax className='image' bgImage={Image1} strength={800}>
        <div className='content'>
            <span className='img-txt'>Restaurant chic et délicieux Plips</span>
        
        </div>
        
    </Parallax>
);

export default ImageOne