import { Link } from "react-router-dom";
import RecordCard from "../../components/RecordCard/RecordCard";
import recordsData from "../../data/records.json";
import { type Record } from "../../types/Record";
import FeaturedSlider from "../../components/FeaturedSlider/FeaturedSlider";

export default function Home() {
  const records: Record[] = recordsData;

  return (
    <>
      <FeaturedSlider />
      <div className="max-w-[1300px] mx-auto w-full px-6 py-10 md:py-16">
        <section className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-3 leading-tight">
            Legendary <span className="text-red-600">Records</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed">
            A curated selection of the most influential albums in rock history.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {records.slice(0, 4).map((disco) => (
            <RecordCard key={disco.id} record={disco} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/all-records"
            className="bg-zinc-900 border border-zinc-800 hover:border-red-600 px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 shadow-lg shadow-gray-800/20"
          >
            See All Albums
          </Link>
        </div>
      </div>
    </>
  );
}
