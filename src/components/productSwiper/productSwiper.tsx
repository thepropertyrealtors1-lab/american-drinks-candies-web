import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";

export default function ProductSwiper({ products }) {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="
          absolute left-5 top-1/2 -translate-y-1/2 z-20
          bg-black text-orange-500
          w-12 h-12 flex items-center justify-center
          text-2xl font-bold rounded-full
          hover:bg-orange-500 hover:text-black
          transition-all
        "
      >
        &lt;
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="
          absolute right-5 top-1/2 -translate-y-1/2 z-20
          bg-black text-orange-500
          w-12 h-12 flex items-center justify-center
          text-2xl font-bold rounded-full
          hover:bg-orange-500 hover:text-black
          transition-all
        "
      >
        &gt;
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={5}
        loop
        className="w-full px-16"
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group relative flex flex-col items-center cursor-pointer">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-52 object-contain transition-transform duration-300"
              />

              <div
                className="
                  absolute -bottom-12
                  opacity-0
                  group-hover:bottom-0
                  group-hover:opacity-100
                  transition-all duration-300
                  text-orange-500 
                  uppercase font-extrabold tracking-widest
                  text-lg md:text-xl
                "
              >
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
