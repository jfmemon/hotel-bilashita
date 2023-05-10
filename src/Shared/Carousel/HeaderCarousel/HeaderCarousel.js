import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import room1 from '../../../Assets/images/room-1.jpg';
import room2 from '../../../Assets/images/room-2.jpg';
import room3 from '../../../Assets/images/room-3.jpg';


const HeaderCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item align="center">
                    <img
                        width={900} 
                        height={400}
                        src={room1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item align="center">
                    <img
                        width={900} 
                        height={400}
                        src={room2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item align="center">
                    <img
                        width={900} 
                        height={400} 
                        src={room3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderCarousel;