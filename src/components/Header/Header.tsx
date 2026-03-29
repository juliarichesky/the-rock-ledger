import { Search, Guitar, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* menu mobile - 480px/sm) */}
        <button className="sm:hidden text-zinc-100 hover:text-red-500  hover:scale-110 transition-all p-1">
          <Menu size={24} />
        </button>

        {/* logo ajuste mobile */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800 group-hover:border-red-600 transition-all">
            <Guitar className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
          </div>
          <h1 className="text-lg md:text-xl font-black uppercase tracking-normal text-zinc-100">
            The Rock <span className="text-red-600">Ledger</span>
          </h1>
        </div>

        {/* navbar - escondida no mobile, aparece a partir do breakpoint (480px) */}
        <nav className="hidden sm:block">
          <ul className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            <li className="hover:text-red-500 cursor-pointer transition-colors">
              Home
            </li>
            <Link to="/genres">
              <li className="hover:text-red-500 cursor-pointer transition-colors">
                Genres
              </li>
            </Link>
            <li className="hover:text-red-500 cursor-pointer transition-colors">
              Contact
            </li>
          </ul>
        </nav>

        {/* busca */}
        <button className="text-zinc-300 hover:text-red-500 hover:scale-110 transition-all p-2">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}
