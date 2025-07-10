import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-stories.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const videoStyle = {
    width: '250px',
    height: '350px',
    objectFit: 'cover', // ensures the video fills the container properly
    borderRadius: '10px'
};


const Stories = () => {
    return (
        <>
            <div className='spacer pb-2'>
                <h1 style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)" }} className=' text-center heading-size mb-0'>Community Stories</h1>
                <p className=' sub-heading-size text-center' style={{ fontFamily: 'var(--secondary-font)', color: "var(--icon-color)", opacity: "0.6" }}>Trust- lovely guests</p>
            </div>
            <Swiper
                slidesPerView={4}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                    
                breakpoints={{
                0: {
                    slidesPerView: 1
                },
                480:
                {
                    slidesPerView: 2
                },
                768:
                {
                    slidesPerView: 3
                },
                1024:
                {
                    slidesPerView: 4
                }
            }}
            

            >
            {[
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749748532/cbd0ab8e5b4122d5f709ebd9f62b1244_qstirq.mp4",
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749749084/ae9b2fae8fb5a06e713af7bbf6ac87d3_bmyunx.mp4",
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749800475/9614d2fb22d82cc5b69374d7575d2aa9_cbl7eg.mp4",
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749749301/e226e6eeb8688459c41a3e93d156e7ca_ruoa4s.mp4",
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749799822/46944e65ce9c64e887a9156f7b61bbb0_720w_iquodk.mp4",
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749800200/eabe856dad6fb4e854624395dfe2b27a_720w_1_n0f4zr.mp4",
                "https://res.cloudinary.com/dtfn7ppzg/video/upload/v1749800693/5645c5d48fa22b7b37f8bf0a31ccc534_o8cwbf.mp4"
            ].map((src, index) => (
                <SwiperSlide key={index}>
                    <video
                        src={src}
                        style={videoStyle}
                        autoPlay
                        loop
                        muted
                        playsInline

                    />
                </SwiperSlide>
            ))}
        </Swiper >
        </>
    )
}

export default Stories