import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RecordCard from "./components/RecordCard/RecordCard";
import recordsData from "./data/records.json";
import { type Record } from "./types/Record";

export default function App() {
  const records: Record[] = recordsData;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      <Header />

      {/* centralizado breakpoint 1300px */}
      <main className="flex-grow max-w-[1300px] mx-auto w-full px-6 py-10 md:py-16">
        {/* cabeçalho dos discos */}
        <section className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-3 leading-tight">
            Legendary <span className="text-red-600">Records</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed">
            A curated selection of the most influential albums in rock history.
            Explore the tracks, the artists, and the legacy.
          </p>
        </section>

        {/* grid responsiva: mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {records.map((disco) => (
            <RecordCard key={disco.id} record={disco} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
