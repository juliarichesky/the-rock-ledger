import { type Record } from "../../types/Record";
import { Disc, Calendar, Tag } from "lucide-react";

interface RecordCardProps {
  record: Record;
}

export default function RecordCard({ record }: RecordCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all group shadow-lg">
      {/* capa album zoom */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={record.cover}
          alt={record.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-red-600 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Disc className="animate-spin-slow" />
          </button>
        </div>
      </div>

      {/* infos */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-zinc-100 truncate group-hover:text-red-500 transition-colors">
            {record.title}
          </h3>
          <p className="text-zinc-400 font-medium">{record.artist}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs text-zinc-500 uppercase font-bold tracking-widest">
          <div className="flex items-center gap-2">
            <Tag size={14} className="text-red-600" />
            {record.genre}
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {record.year}
          </div>
        </div>
      </div>
    </div>
  );
}
