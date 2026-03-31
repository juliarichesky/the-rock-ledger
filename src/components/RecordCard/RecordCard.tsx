import { type Record } from "../../types/Record";
import { Disc, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface RecordCardProps {
  record: Record;
}

export default function RecordCard({ record }: RecordCardProps) {
  return (
    <Link to={`/record/${record.id}`}>
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all group shadow-lg">
        {/* capa album zoom */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={record.cover}
            alt={record.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
  // SVG de um disco de vinil minimalista nas cores Zinc-900 e Zinc-800
  e.currentTarget.src =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%2318181b'%3E%3Ccircle cx='50' cy='50' r='48' stroke='%2327272a' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%2327272a'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%233f3f46'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%2327272a' stroke-width='0.5' stroke-dasharray='5 5'/%3E%3C/svg%3E";
}}
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
    </Link>
  );
}
