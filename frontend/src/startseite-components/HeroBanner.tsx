import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import better from "../assets/startseite-assets/Gemini_Generated_Image_6e9tg76e9tg76e9t.png";

// Import Swiper's CSS files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroBanner = () => {
    return (
        <section className="h-[75vh] w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full h-full"
            >
                <SwiperSlide className="relative">
                    <img
                        src={better}
                        alt="Cybex Banner"
                        className="w-full h-full object-cover object-[50%_50%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                        <div className="col-start-5 col-end-10 row-start-8 text-white">
                            <div>
                                <h1 className="text-4s">Premium Kinderwagen</h1>
                            </div>
                            <div className="border border-red-500 col-start-2 col-end-9 row-start-9 row-end-11">
                                <p className="text-center text-3xl">Sicher & komfortabel unterwegs</p>
                            </div>
                            <div>
                                <button>

                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HeroBanner;
