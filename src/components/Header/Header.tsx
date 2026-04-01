import { useState, useRef, useEffect } from "react";
import {
  Search,
  Guitar,
  Menu,
  X,
  Disc,
  Home,
  Music2,
  Mail,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import recordsData from "../../data/records.json";

export default function Header() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // novo estado (menu lateral)
  const [searchTerm, setSearchTerm] = useState("");

  // calculo das sugestões
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

  // click outside e bloqueio de scroll
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setSearchTerm("");
      }
    };

    // travar o scroll com suavidade (sem o pulo lateral)
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // compensa o sumiço da barra
    } else {
      // devolve o scroll e o padding original
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // limpeza de segurança para garantir que o scroll volte ao desmontar
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  const handleSelect = (id: number) => {
    setSearchTerm("");
    setIsSearchOpen(false);
    navigate(`/record/${id}`);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-zinc-950 border-r border-zinc-900 z-[70] transition-transform duration-500 ease-in-out shadow-2xl ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <span className="text-red-600 font-black uppercase tracking-tighter text-xl">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-500 hover:text-white cursor-pointer"
            >
              <X size={24} className="hover:scale-110 transition" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-zinc-400 hover:text-red-500 font-bold uppercase tracking-widest text-sm transition-colors group"
            >
              <Home
                size={20}
                className="group-hover:scale-110 transition-transform"
              />{" "}
              Home
            </Link>

            <Link
              to="/genres"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-zinc-400 hover:text-red-500 font-bold uppercase tracking-widest text-sm transition-colors group"
            >
              <Music2
                size={20}
                className="group-hover:scale-110 transition-transform"
              />{" "}
              Genres
            </Link>

            <Link
              to="/all-records"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-zinc-400 hover:text-red-500 font-bold uppercase tracking-widest text-sm transition-colors group"
            >
              <Disc
                size={20}
                className="group-hover:scale-110 transition-transform"
              />{" "}
              Albums
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-zinc-400 hover:text-red-500 font-bold uppercase tracking-widest text-sm transition-colors group"
            >
              <Mail
                size={20}
                className="group-hover:scale-110 transition-transform"
              />{" "}
              Contact
            </Link>
          </nav>
        </div>
      </aside>

      <header className="bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
        <div
          className="max-w-[1300px] mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative"
          ref={searchRef}
        >
          {!isSearchOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="sm:hidden text-zinc-100 hover:text-red-500 hover:scale-110 transition-all p-1"
            >
              <Menu size={24} className="cursor-pointer" />
            </button>
          )}

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

          {!isSearchOpen && (
            <nav className="hidden sm:block">
              <ul className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                <Link to="/">
                  <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                    Home
                  </li>
                </Link>
                <Link to="/all-records">
                  <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                    Albums
                  </li>
                </Link>
                <Link to="/genres">
                  <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                    Genres
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-red-500 cursor-pointer transition-colors list-none">
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
          )}

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
                className={`bg-zinc-900 border border-zinc-800 rounded-full py-2 px-4 text-sm text-zinc-100 focus:outline-none focus:border-red-600 transition-all duration-500 ease-in-out ${
                  isSearchOpen
                    ? "w-full opacity-100 pr-10"
                    : "w-0 opacity-0 pointer-events-none p-0 border-none"
                }`}
              />

              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen) setSearchTerm("");
                }}
                className={`absolute transition-all duration-500 p-2 ${isSearchOpen ? "right-2 text-red-500 rotate-90" : "right-0 text-zinc-300 hover:text-red-500 hover:scale-110"}`}
              >
                {isSearchOpen ? (
                  <X size={20} className="cursor-pointer" />
                ) : (
                  <Search size={20} className="cursor-pointer" />
                )}
              </button>

              {/* sugestoes */}
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
    </>
  );
}
