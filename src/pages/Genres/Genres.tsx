import { Link } from "react-router-dom";
import { ChevronRight, Music2 } from "lucide-react";
import recordsData from "../../data/records.json";

export default function Genres() {
  // generos unicos
  const genres = [...new Set(recordsData.map((disco) => disco.genre))];

  return (
    <div className="max-w-[1300px] mx-auto w-full px-6 py-12 animate-in fade-in duration-700">
      {/* breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 mb-10 border-b border-zinc-900 pb-6 pt-4">
        <Link to="/" className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-zinc-800" />
        <span className="text-red-600">Genres</span>
      </nav>

      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100 leading-none mb-13">
        Explore by <span className="text-red-600">Style</span>
      </h1>

      {/* generos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {genres.map((genre) => (
          <Link
            key={genre}
            to={`/all-records?genre=${genre}`} // genero via URL (query params)
            className="group relative h-48 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-red-600 transition-all flex items-center justify-center"
          >
            {/* Background Decorativo */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Music2
                size={120}
                className="absolute -bottom-4 -right-4 rotate-12"
              />
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:scale-110 transition-transform">
                {genre}
              </h3>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-2 group-hover:text-red-500">
                View Collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
