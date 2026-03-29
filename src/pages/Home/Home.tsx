import { Link } from 'react-router-dom';
import RecordCard from '../../components/RecordCard/RecordCard';
import recordsData from '../../data/records.json';
import { type Record } from '../../types/Record';

export default function Home() {
  // Pegamos todos os discos do JSON
  const records: Record[] = recordsData;

  return (
    <div className="max-w-[1300px] mx-auto w-full px-6 py-10 md:py-16">
      
      {/* Cabeçalho da Seção */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-3 leading-tight">
          Legendary <span className="text-red-600">Records</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed">
          A curated selection of the most influential albums in rock history. 
          Explore the tracks, the artists, and the legacy.
        </p>
      </section>

      {/* Grid com apenas os 4 primeiros discos (.slice) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {records.slice(0, 4).map((disco) => (
          <RecordCard key={disco.id} record={disco} />
        ))}
      </div>

      {/* Botão que leva para a página de todos os discos */}
      <div className="flex justify-center mt-16">
        <Link 
          to="/all-records" 
          className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 hover:text-red-600 px-10 py-4 rounded-full font-bold uppercase text-xs tracking-[0.3em] transition-all shadow-2xl active:scale-95"
        >
          See All Discos
        </Link>
      </div>
      
    </div>
  );
}