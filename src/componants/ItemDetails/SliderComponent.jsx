import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination  } from 'swiper/modules';

const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

export default function SliderComponent({images}) {


  return (
    <div>
      <Swiper
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
         breakpoints={{
            0: {
            slidesPerView: 1,
            },
            640: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 3,
            },
        }}
        spaceBetween={16}
        speed={1000}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        autoplay={{ delay: 3000 , disableOnInteraction: false }}
        className="mySwiper"
      >
        {[...images , ...images].map((image , index) => <SwiperSlide key={index}>
            <img src={image} className='w-100' style={{objectFit:'cover' , height:'500px'}} loading='lazy' alt="" />
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}