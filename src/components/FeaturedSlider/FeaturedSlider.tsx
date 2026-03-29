import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// importar css do swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import recordsData from "../../data/records.json";
import { type Record } from "../../types/Record";

export default function FeaturedSlider() {
  // pegamos os 3 primeiros discos para o destaque
  const featuredRecords: Record[] = recordsData.slice(0, 3);

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
        className="featured-swiper w-full" // garante que o swiper ocupe tudo
      >
        {featuredRecords.map((disco) => (
          <SwiperSlide key={disco.id}>
            <div
              className="relative h-[500px] md:h-[650px] w-full flex items-center bg-cover bg-center bg-no-repeat transition-all duration-500"
              style={{ backgroundImage: `url(${disco.cover})` }}
            >
              <div className="absolute inset-0 bg-zinc-950/80 md:bg-gradient-to-r md:from-zinc-950 md:via-zinc-950/80 md:to-transparent"></div>

              <div className="relative z-20 max-w-[1300px] mx-auto w-full px-6 md:px-12 flex flex-col justify-center h-full items-center text-center md:items-start md:text-left">
                <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 md:mb-6">
                  Legendary Album of the Week
                </span>

                <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-zinc-100 mb-2 md:mb-4 max-w-4xl">
                  {disco.title}
                </h2>

                <p className="text-zinc-300 font-medium text-lg md:text-2xl mb-6 md:mb-10">
                  by {disco.artist}
                </p>

                <p className="hidden md:block text-zinc-400 text-sm md:text-base max-w-xl mb-12 leading-relaxed">
                  {disco.description}
                </p>

                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-10 rounded-full w-fit transition-all uppercase text-xs tracking-widest hover:scale-105 cursor-grab shadow-lg shadow-black/30">
                  Explore Tracks
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
