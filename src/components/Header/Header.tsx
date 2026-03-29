import { useState, useRef, useEffect } from "react";
import { Search, Guitar, Menu, X, Disc } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import recordsData from "../../data/records.json";
import { type Record } from "../../types/Record";

export default function Header() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // states para controlar a abertura do campo de busca e o termo digitado
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // calculo das sugestoes de busca baseado no searchTerm. se o termo tiver mais de 1 caractere, filtra os discos por título ou artista. o slice(0, 5) limita a 5 sugestões para não ficar gigante.
  // o react calcula isso automaticamente toda vez que o searchTerm mudar
  const suggestions =
    searchTerm.trim().length > 1
      ? recordsData
          .filter(
            (disco) =>
              disco.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              disco.artist.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .slice(0, 5)
      : [];

  // useeffect q lida com um sistema externo (o documento/DOM)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: number) => {
    setSearchTerm("");
    setIsSearchOpen(false);
    navigate(`/record/${id}`);
  };

  return (
    <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div
        className="max-w-[1300px] mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative"
        ref={searchRef}
      >
        {/* menu mobile */}
        {!isSearchOpen && (
          <button className="sm:hidden text-zinc-100 hover:text-red-500 hover:scale-110 transition-all p-1">
            <Menu size={24} className="cursor-pointer" />
          </button>
        )}

        {/* logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 group cursor-pointer ${isSearchOpen ? "hidden sm:flex" : "flex"}`}
        >
          <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800 group-hover:border-red-600 transition-all">
            <Guitar className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
          </div>
          <h1 className="text-lg md:text-xl font-black uppercase tracking-normal text-zinc-100">
            The Rock <span className="text-red-600">Ledger</span>
          </h1>
        </Link>

        {/* navbar */}
        {!isSearchOpen && (
          <nav className="hidden sm:block">
            <ul className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              <Link to="/">
                <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                  Home
                </li>
              </Link>
              <Link to="/genres">
                <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                  Genres
                </li>
              </Link>
              <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                Contact
              </li>
            </ul>
          </nav>
        )}

        {/* area de busca */}
        <div
          className={`flex items-center justify-end transition-all duration-500 ease-in-out ${isSearchOpen ? "flex-1 ml-4" : "w-10"}`}
        >
          <div className="relative w-full flex items-center justify-end">
            <input
              autoFocus={isSearchOpen}
              type="text"
              placeholder="Search album or artist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              // MÁGICA AQUI: O input expande de w-0 para w-full e muda a opacidade
              className={`bg-zinc-900 border border-zinc-800 rounded-full py-2 px-4 text-sm text-zinc-100 focus:outline-none focus:border-red-600 transition-all duration-500 ease-in-out ${
                isSearchOpen
                  ? "w-full opacity-100 pr-10"
                  : "w-0 opacity-0 pointer-events-none p-0 border-none"
              }`}
            />

            {/* lupa vira x */}
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchTerm("");
              }}
              className={`absolute transition-all duration-500 p-2 ${
                isSearchOpen
                  ? "right-2 text-red-500 rotate-90"
                  : "right-0 text-zinc-300 hover:text-red-500 hover:scale-110"
              }`}
            >
              {isSearchOpen ? (
                <X size={20} className="cursor-pointer" />
              ) : (
                <Search size={20} className="cursor-pointer" />
              )}
            </button>

            {/* sugestoes/autocomplete */}
            {suggestions.length > 0 && isSearchOpen && (
              <ul className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-300">
                {suggestions.map((disco) => (
                  <li
                    key={disco.id}
                    onClick={() => handleSelect(disco.id)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 cursor-pointer transition-colors border-b border-zinc-800/50 last:border-0"
                  >
                    <Disc
                      size={16}
                      className="text-red-600 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-zinc-100">
                        {disco.title}
                      </span>
                      <span className="text-[10px] text-zinc-500 uppercase">
                        {disco.artist}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
