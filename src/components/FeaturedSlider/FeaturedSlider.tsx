import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import recordsData from "../../data/records.json";

export default function FeaturedSlider() {
  const featuredRecords = useMemo(() => {
    return [...recordsData].sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);

  return (
    <section className="w-full bg-zinc-950 border-b border-zinc-900 overflow-hidden relative z-10">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="featured-swiper w-full"
      >
        {featuredRecords.map((disco) => (
          <SwiperSlide key={disco.id}>
            <div className="relative h-[500px] md:h-[650px] w-full bg-zinc-950 overflow-hidden flex items-center">
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-3xl opacity-10 pointer-events-none"
                style={{ backgroundImage: `url(${disco.cover})` }}
              ></div>
              <div className="absolute right-0 top-0 w-full md:w-[60%] lg:w-[50%] max-w-[900px] h-full z-10 image-mask">
                <img
                  src={disco.cover}
                  alt=""
                  className="w-full h-full object-cover object-center md:object-right"
                />

                <div className="absolute inset-0 bg-zinc-950/20 md:bg-zinc-950/10"></div>
              </div>

              <div className="hidden md:block absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-transparent z-20 pointer-events-none"></div>

              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent md:hidden z-20 pointer-events-none"></div>

              <div className="relative z-30 max-w-[1300px] mx-auto w-full px-6 md:px-12 flex flex-col justify-end md:justify-center h-full pb-16 md:pb-0 items-center text-center md:items-start md:text-left">
                <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4 text-slide">
                  From the Archives
                </span>

                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-4 drop-shadow-2xl">
                  {disco.title}
                </h2>

                <p className="text-zinc-300 font-medium text-lg md:text-2xl mb-8 opacity-90">
                  by <span className="text-white">{disco.artist}</span>
                </p>

                <p className="hidden md:block text-zinc-400 text-sm md:text-base max-w-lg mb-10 leading-relaxed drop-shadow-md line-clamp-3">
                  {disco.description}
                </p>

                <Link
                  to={`/record/${disco.id}`}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full w-fit transition-all uppercase text-xs tracking-widest hover:scale-105 shadow-xl shadow-red-950/40"
                >
                  Explore Tracks
                </Link>
              </div>

              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-40 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
