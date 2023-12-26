import { Parallax } from 'react-parallax';
import Image3 from '../img/maincourse.png'

const ImageThree = () => (
    <Parallax className='image' bgImage={Image3} strength={800}>
        <div className='content'>
            <span className='img-txt'>main courses</span>
        
        </div>
        
    </Parallax>
);

export default ImageThree