import React from 'react'
import homeImg1 from '../images/homeImg1.jpeg'
import homeImg2 from '../images/homeImg2.jpeg'
import homeImg3 from '../images/homeImg3.webp'
import { Carousel,Container } from 'react-bootstrap'

const Slider = () => {
    const settings = { dots: true, infinite: true, speed: 1000, slidesToShow: 1, slidesToScroll: 1, autoplay: true, };
    const homeSlider = [
      "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517073/homeImg2_ugreel.jpg"
        , "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517506/homeImg1_pepfyc.jpg",
         "https://res.cloudinary.com/dtfn7ppzg/image/upload/v1750517584/homeImg3_ixk6s3.webp"];
    return (
        <div>
            <Container fluid >
                <Carousel>
                    {homeSlider.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img src={item} alt={`slide-s${index}`} className='w-100 h-100 rounded-4 mt-3'/>
                        </Carousel.Item>
                    ))}
                </Carousel>

            </Container>
        </div>
    )
}

export default Slider
