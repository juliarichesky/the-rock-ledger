import { SearchX, ArrowLeft, Disc } from "lucide-react";
import { Link } from "react-router-dom";

interface EmptyStateProps {
  title?: string;
  message?: string;
  showButton?: boolean;
}

export default function NotFound({
  title = "Page Not Found",
  message = "Looks like the page you're looking for doesn't exist. Don't worry, it happens to the best of us!",
  showButton = true,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center animate-in fade-in zoom-in duration-700 min-h-[80vh]">
      {/* icon */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/30 transition-all duration-700" />
        <div className="relative bg-zinc-900 p-8 rounded-full border border-zinc-800 shadow-2xl">
          <SearchX className="w-12 h-12 text-zinc-700 group-hover:text-red-500 transition-colors duration-500" />
        </div>
        {/* disco flutuando */}
        <Disc className="absolute -top-2 -right-2 text-red-600 w-6 h-6 animate-bounce" />
      </div>

      <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-zinc-100 mb-4">
        {title.split(" ").map((word, i) =>
          i === 0 ? (
            word
          ) : (
            <span key={i} className="text-red-600">
              {" "}
              {word}
            </span>
          ),
        )}
      </h2>

      <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-[0.1em] font-bold max-w-sm leading-relaxed mb-10">
        {message}
      </p>

      {/* botao */}
      {showButton && (
        <Link
          to="/"
          className="flex items-center gap-3 text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest bg-red-600   shadow-xl shadow-white/5 group transition hover:scale-105"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
      )}
    </div>
  );
}
