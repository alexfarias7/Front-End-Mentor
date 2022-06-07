import { products } from "../../data/productsItems";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";

const Thumbnail = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        observer={true}
        observeParents={true}
        navigation={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="swiper-zoom-container swiper-zoom-target"
              data-swiper-zoom="5"
            >
              <img
                src={product.product}
                alt={`product ${product.id}`}
                className="imgpproduct"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        observer={true}
        observeParents={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Thumbnail;
