import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import better from "../assets/startseite-assets/mobile.png";

const HeroBanner = () => {
    return (
        <section className="h-[70vh] w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={false}
                className="w-full"
            >
                <SwiperSlide>
                    <img
                        src={better}
                        alt="Cybex Banner"
                        className="w-full h-full object-cover"
                    ></img>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroBanner;
