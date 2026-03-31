import { useState } from "react";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

export default function Newsletter() {
  // estado para o email e para o erro
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@") || email.length < 5) {
      setError("Enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      Swal.fire({
        title: "WELCOME TO THE HORDE!",
        text: "You're now on the list for the ultimate rock updates.",
        icon: "success",
        background: "#09090b",
        color: "#f4f4f5",
        confirmButtonColor: "#dc2626",
        confirmButtonText: "ROCK ON!",
        buttonsStyling: true,
        customClass: {
          popup: "border border-zinc-800 rounded-3xl shadow-2xl",
          title: "font-black uppercase tracking-tighter text-2xl",
          htmlContainer: "font-medium text-zinc-400",
        },
      });

      setEmail(""); // reseta o campo após o sucesso
    }
  };

  return (
    <section className="w-full bg-zinc-950 mt-10 pt-20 pb-0 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 backdrop-blur-sm">
        <div className="max-w-md text-center md:text-left">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Stay in the Loop
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Join the <span className="text-red-600">Horde</span>
          </h2>
          <p className="text-zinc-400 font-medium">
            Receive the latest reviews, wine releases, and rock rarities
            directly to your email. No spam, just pure rock 'n' roll.
          </p>
        </div>

        <form
          className="w-full max-w-md flex flex-col gap-2"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={`flex-1 bg-zinc-800 border ${error ? "border-red-600" : "border-zinc-700"} text-white px-6 py-4 rounded-full focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-500`}
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-900/20 group cursor-pointer w-full sm:w-auto hover:scale-102 active:scale-95 h-fit"
            >
              Subscribe
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          {error && (
            <span className="text-[10px] text-red-500 uppercase font-black tracking-widest mt-1 ml-6">
              {error}
            </span>
          )}
        </form>
      </div>
    </section>
  );
}
