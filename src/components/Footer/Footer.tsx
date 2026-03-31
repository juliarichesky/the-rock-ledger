import { Disc, Camera, Send, Code, Guitar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 mt-20">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* branding / sobre */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800 group-hover:border-red-600 transition-all">
                <Guitar className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-xl font-black uppercase text-zinc-100">
                The Rock <span className="text-red-600">Ledger</span>
              </h2>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Your ultimate destination for legendary rock history, rare vinyls,
              and the soul of rock n' roll. Built for the loud and the bold.
            </p>
          </div>

          {/* nav */}
          <div className="space-y-6">
            <h3 className="text-zinc-100 text-xs font-black uppercase tracking-[0.2em]">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "Albums", "Genres", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Albums"
                          ? "/all-records" // se for albums, vai para all-records
                          : `/${item.toLowerCase()}`
                    }
                    className="text-zinc-500 hover:text-red-500 text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-red-600"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div className="space-y-6">
            <h3 className="text-zinc-100 text-xs font-black uppercase tracking-[0.2em]">
              Follow the Beat
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: <Camera size={18} />,
                  href: "https://instagram.com/juliarichesky",
                },
                {
                  icon: <Code size={18} />,
                  href: "https://github.com/juliarichesky",
                },
                {
                  icon: <Disc size={18} />,
                  href: "https://open.spotify.com/user/v20qwwcwycvzf1cy3ekdles28?si=11dc004b7c0c4030",
                },
                {
                  icon: <Send size={18} />,
                  href: "mailto:juliavaleriogs@gmail.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-red-500 hover:border-red-600  transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-zinc-100 text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left">
              Join the Ledger
            </h3>

            <Link
              to="/contact"
              className="relative block w-full group transition-all duration-500"
            >
              {/* ingresso */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col shadow-2xl group-hover:border-red-600/50 transition-all">
                {/* invite */}
                <div className="p-5 border-b border-dashed border-zinc-800 relative bg-zinc-900/50">
                  <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-zinc-950 rounded-full border border-zinc-800"></div>
                  <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-zinc-950 rounded-full border border-zinc-800"></div>

                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[7px] font-black border border-red-600 text-red-600 px-1.5 py-0.5 rounded uppercase tracking-[0.2em]">
                      Backstage Pass
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600">
                      REQ-2026
                    </span>
                  </div>

                  {/* text */}
                  <h4 className="text-zinc-100 font-black uppercase text-xl leading-none tracking-tighter mb-1 group-hover:text-red-500 transition-colors">
                    Suggest <br /> a Record
                  </h4>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                    Talk to Julia Richesky
                  </p>
                </div>

                {/* down */}
                <div className="bg-zinc-950 p-4 flex items-center justify-between group-hover:bg-zinc-900 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest">
                      Inquiry Type
                    </span>
                    <span className="text-[10px] text-zinc-300 font-black uppercase tracking-tighter italic">
                      GENERAL_MESSAGE
                    </span>
                  </div>

                  {/* send message */}
                  <div className="flex flex-col items-end">
                    <span className="text-[7px] text-zinc-700 font-bold uppercase">
                      Send Now
                    </span>
                    <div className="flex gap-1 h-4 items-center">
                      <div className="w-[1px] h-4 bg-red-900 group-hover:bg-red-600 transition-colors"></div>
                      <div className="w-[3px] h-2 bg-zinc-800 group-hover:bg-red-600 transition-colors"></div>
                      <div className="w-[1px] h-4 bg-red-900 group-hover:bg-red-600 transition-colors"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </Link>
          </div>
        </div>

        {/* sub-footer */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} The Rock Ledger • All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-zinc-700 font-bold tracking-widest uppercase">
              Designed with <span className="text-red-900 text-xs">♥</span> by
              Julia Richesky
            </span>
            <div className="h-4 w-px bg-zinc-800 hidden md:block"></div>
            <span className="text-[10px] text-zinc-700 font-bold tracking-widest uppercase">
              React + TypeScript + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
