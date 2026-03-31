import { useParams, Link } from "react-router-dom";
import { ChevronRight, Play, Disc, Calendar, Tag, Info } from "lucide-react";
import recordsData from "../../data/records.json";
import { type Record } from "../../types/Record";
import NotFound from "../../components/NotFound/NotFound";

export default function RecordDetails() {
  const { id } = useParams();
  const record: Record | undefined = recordsData.find(
    (r) => r.id === Number(id),
  );

  if (!record) {
    return (
      <NotFound
        title="Album Not Found"
        message="This vinyl seems to have been smashed or lost in the backstage. Try searching for another classic!"
      />
    );
  }

  return (
    <div className="max-w-[1300px] mx-auto w-full px-6 py-8 md:py-16 animate-in fade-in duration-700">
      {/* breadcumbs */}
      <nav className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 mb-10 border-b border-zinc-900 pb-6">
        <Link to="/" className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-zinc-800" />
        <Link
          to="/all-records"
          className="hover:text-red-600 transition-colors"
        >
          Collection
        </Link>
        <ChevronRight size={14} className="text-zinc-800" />
        <span className="text-red-600 truncate">{record.title}</span>
      </nav>

      {/* estrutura principal com flexbox */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
        {/* foto fixa */}
        {/* flex-shrink-0 para a coluna não ser esmagada */}
        <div className="w-full lg:w-[450px] flex-shrink-0 lg:sticky lg:top-24">
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-black border border-zinc-800 aspect-square bg-zinc-900">
            <img
              src={record.cover}
              alt={record.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="mt-3 flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <Calendar size={14} className="text-red-600" />
              {record.year}
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <Tag size={14} className="text-red-600" />
              {record.genre}
            </div>
          </div>
        </div>

        {/* 📝 coluna direita livre pra crescer */}
        <div className="flex-1 w-full space-y-12">
          <header>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 text-zinc-100">
              {record.title}
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-zinc-400">
              by <span className="text-zinc-100">{record.artist}</span>
            </p>
          </header>

          <section className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50">
            <h3 className="flex items-center gap-2 text-zinc-100 font-bold mb-4 uppercase tracking-[0.2em] text-xs">
              <Info size={16} className="text-red-600" />
              About this record
            </h3>
            <p className="text-zinc-400 leading-relaxed text-lg italic">
              "{record.description}"
            </p>
          </section>

          {/* 🎸 Spotify Player Section */}
          {record.spotifyId && (
            <section className="animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <h3 className="text-zinc-100 font-bold mb-6 uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                <Play size={16} className="text-red-600" fill="currentColor" />
                Listen on Spotify
              </h3>
              <iframe
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/album/${record.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="border border-zinc-800 shadow-2xl"
              ></iframe>
            </section>
          )}

          {/* <section>
            <div className="flex items-center justify-between mb-8 border-b border-zinc-900 pb-4">
              <h3 className="text-xl font-bold uppercase tracking-[0.1em] flex items-center gap-3">
                <Disc
                  size={20}
                  className="text-red-600 animate-spin"
                  style={{ animationDuration: "4s" }}
                />
                Tracklist
              </h3>
              <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                {record.tracks.length} Songs
              </span>
            </div>

            <div className="grid gap-1">
              {record.tracks.map((track, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-zinc-900/60 transition-all border-b border-zinc-900/30 last:border-0"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-zinc-800 group-hover:text-red-600 transition-colors text-sm">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-zinc-300 group-hover:text-white font-medium transition-colors text-base md:text-lg">
                      {track}
                    </span>
                  </div>

                  <button className="opacity-0 group-hover:opacity-100 transition-all text-red-600 hover:scale-125 p-2 bg-zinc-950 rounded-full border border-zinc-800">
                    <Play size={14} fill="currentColor" />
                  </button>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}
