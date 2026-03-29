import { ChevronRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import RecordCard from "../../components/RecordCard/RecordCard";
import recordsData from "../../data/records.json";
import { type Record } from "../../types/Record"; // importacao para ter certeza que o tipo de record vai estar correto

export default function AllRecords() {
  // hook para ler e alterar os parametros da URL (ex: ?genre=Rock)
  const [searchParams, setSearchParams] = useSearchParams();

  // definicao de gênero atual lendo direto da URL. se não houver nada, o padrão é "all"
  const selectedGenre = searchParams.get("genre") || "All";

  // funcão para mudar o genero atualizando a URL (isso dispara a re-renderização automaticamente)
  const handleGenreChange = (genre: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (genre === "All") {
      newParams.delete("genre"); // limpa a URL se o usuário clicar em "all"
    } else {
      newParams.set("genre", genre); // define o gênero selecionado na URL
    }
    setSearchParams(newParams);
  };

  // criar a lista de generos dinamicamente a partir do JSON
  const genres = ["All", ...new Set(recordsData.map((disco) => disco.genre))];

  // filtrar os discos baseando-se na variavel selectedGenre (que vem da URL)
  const filteredRecords =
    selectedGenre === "All"
      ? recordsData
      : recordsData.filter((disco) => disco.genre === selectedGenre);

  return (
    <div className="max-w-[1300px] mx-auto w-full px-6 py-8 md:py-12 animate-in fade-in duration-700">
      {/* breacrumbs */}
      <nav className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 mb-10 border-b border-zinc-900 pb-6 pt-4">
        <Link
          to="/"
          className="hover:text-red-600 transition-colors text-zinc-500"
        >
          Home
        </Link>
        <ChevronRight size={14} className="text-zinc-800" />
        <span className="text-red-600">Collection</span>
      </nav>

      {/* header e filtros */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        {/* titulo e contador */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100 leading-none">
            All <span className="text-red-600">Discos</span>
          </h2>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-3">
            Showing {filteredRecords.length} albums from {selectedGenre}
          </p>
        </div>

        {/* botoes filtro dinamico */}
        <div className="flex flex-wrap gap-2 md:max-w-[60%] justify-start md:justify-end">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreChange(genre)} // agora chama a funçao que atualiza a URL
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                selectedGenre === genre
                  ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/40 scale-105"
                  : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* discos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredRecords.map((disco) => (
          <RecordCard key={disco.id} record={disco} />
        ))}
      </div>

      {/* lista vazia */}
      {filteredRecords.length === 0 && (
        <div className="py-20 text-center text-zinc-600 uppercase text-xs tracking-widest font-bold">
          Nenhum disco encontrado nesta categoria.
        </div>
      )}
    </div>
  );
}
