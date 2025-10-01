import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import better from "../assets/startseite-assets/Gemini_Generated_Image_6e9tg76e9tg76e9t.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroBanner = () => {
    return (
        <section className="h-[75vh] w-full relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full h-full relative"
            >
                {/* SLIDE 1 */}
                <SwiperSlide className="relative">
                    <img
                        src={better}
                        alt="Cybex Banner"
                        className="w-full h-full object-cover object-[50%_50%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                        <div className="col-start-2 col-span-10 lg:col-span-6 row-start-8 row-span-6 flex flex-col items-center text-white text-center">
                            <h2 className="text-sm font-bold uppercase tracking-widest">
                                Premium Kinderwagen
                            </h2>
                            <p className="text-3xl lg:text-6xl font-semibold mt-4">
                                Sicher & komfortabel unterwegs
                            </p>
                            <button className="mt-8 bg-white text-black font-bold py-3 px-4 hover:bg-gray-200 transition-colors">
                                Jetzt entdecken
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 2 */}
                <SwiperSlide className="relative">
                    <img
                        src={better}
                        alt="Cybex Banner"
                        className="w-full h-full object-cover object-[50%_50%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                        <div className="col-start-2 col-span-10 lg:col-span-6 row-start-8 row-span-6 flex flex-col items-center text-white text-center">
                            <h2 className="text-sm font-bold uppercase tracking-widest">
                                Premium Kinderwagen
                            </h2>
                            <p className="text-3xl lg:text-6xl font-semibold mt-4">
                                Sicher & komfortabel unterwegs
                            </p>
                            <button className="mt-8 bg-white text-black font-bold py-3 px-4 hover:bg-gray-200 transition-colors">
                                Jetzt entdecken
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Progressbar muss im Swiper-Container liegen */}
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    );
};

export default HeroBanner;
