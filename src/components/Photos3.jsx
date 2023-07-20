import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import { Container, Heading, Text } from '@chakra-ui/react';


const Photos3 = () => {
    return (
        <>
        <Container maxW={'container.xl'} p={16}>
            <Heading mt={16}  py={2} w={'fit-content'} borderBottom={'2px solid'} justifySelf={'flex-start'} color={'purple.600'}>INAUGURATION OF TEMPLE</Heading>
            <Text py={2} mt={4} style={{fontSize: '1.2rem'}}>Inauguration of temple was done on 24th May 2023. The Pooja for Pranpratishtha started from 18th May 2023 to 24th May 2023</Text>
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

export default Photos3
