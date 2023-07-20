import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import { Container, Heading } from '@chakra-ui/react';


const Photos2 = () => {
    return (
        <>
        <Container maxW={'container.xl'} p={16}>
            <Heading mt={16}  py={2} w={'fit-content'} borderBottom={'2px solid'} justifySelf={'flex-start'} color={'purple.600'}>VISITOR's GALLERY</Heading>
        </Container>
          <Swiper
            effect={'coverflow'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            
            pagination={{
                clickable: true,
              }}
            modules={[Autoplay,EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='Shri Ram' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt='Shri Ram' />
            </SwiperSlide>
          </Swiper>
        </>
      );
}

export default Photos2
