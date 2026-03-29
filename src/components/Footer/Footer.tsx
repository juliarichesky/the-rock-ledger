import { Disc, Camera, Send, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-10 mt-12">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start text-center md:text-left">
        {/* branding */}
        <div className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-normal text-zinc-100">
            The Rock <span className="text-red-600">Ledger</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-[280px]">
            Your ultimate destination for legendary rock history and records.
          </p>
        </div>

        {/* social links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-zinc-200 text-xs font-bold uppercase tracking-widest">
            Follow the beat
          </h3>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/juliarichesky/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400">
                <Camera
                  size={20}
                  className=" hover:text-red-500 hover:scale-110 transition-all"
                />
              </div>
            </a>
            <a
              href="https://github.com/juliarichesky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400">
                <Code
                  size={20}
                  className=" hover:text-red-500 hover:scale-110 transition-all"
                />
              </div>
            </a>
            <a
              href="https://open.spotify.com/user/juliarichesky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 ">
                <Disc
                  size={20}
                  className=" hover:text-red-500 hover:scale-110 transition-all"
                />
              </div>
            </a>
            <a
              href="mailto:juliavaleriogs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 ">
                <Send
                  size={20}
                  className=" hover:text-red-500 hover:scale-110 transition-all"
                />
              </div>
            </a>
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-zinc-500 text-xs">
            © {currentYear} Julia Richesky
          </p>
          <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
            React + TS + Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
