import RecordCard from '../../components/RecordCard/RecordCard';
import recordsData from '../../data/records.json';
import { type Record } from '../../types/Record';

export default function AllRecords() {
  const records: Record[] = recordsData;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      <main className="flex-grow max-w-[1300px] mx-auto w-full px-6 py-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10">
          All <span className="text-red-600">Discos</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {records.map((disco) => (
            <RecordCard key={disco.id} record={disco} />
          ))}
        </div>
      </main>
    </div>
  );
}