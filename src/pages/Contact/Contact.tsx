import { useState } from "react";
import { ChevronRight, Mail, Code, Disc, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Contact() {
  // estados para campos do formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // estados para mensagens de erro individuais
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // funçao de validaçao
  const validate = () => {
    const tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    // validaçao de email simples com @
    if (!formData.email.includes("@") || formData.email.length < 5) {
      tempErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      tempErrors.message = "Tell us a bit more (minimum 10 characters).";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // função de envio (submit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // exibe o alerta customizado dark e red
      Swal.fire({
        title: "MESSAGE SENT!",
        text: "We'll get back to you faster than a guitar solo!",
        icon: "success",
        background: "#09090b", // zinc-950
        color: "#f4f4f5", // zinc-100
        confirmButtonColor: "#dc2626", // red-600
        confirmButtonText: "OK!",
        buttonsStyling: true,
        customClass: {
          popup: "border border-zinc-800 rounded-3xl shadow-2xl",
          title: "font-black uppercase tracking-tighter text-2xl",
          htmlContainer: "font-medium text-zinc-400",
        },
      });

      // reseta o formulário apos sucesso
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto w-full px-6 py-8 md:py-12 animate-in fade-in duration-700">
      <nav className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 mb-10 border-b border-zinc-900 pb-6 pt-4">
        <Link to="/" className="hover:text-red-600 transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-zinc-800" />
        <span className="text-red-600">Contact</span>
      </nav>

      <header className="mb-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100 leading-none">
          Get in <span className="text-red-600">Touch</span>
        </h1>
        <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest font-bold mt-4">
          Whether you want to talk about rare vinyls or collaborate on a
          project, my door is always open.
        </p>
      </header>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* form+map */}
        <div className="flex flex-col gap-16 order-2 lg:order-1">
          {/* form */}
          <section>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="How should I call you?"
                  className={`bg-zinc-900 border ${errors.name ? "border-red-600" : "border-zinc-800"} rounded-xl p-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-red-600 transition-all w-full shadow-inner`}
                />
                {errors.name && (
                  <span className="text-[10px] text-red-500  uppercase mt-1">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className={`bg-zinc-900 border ${errors.email ? "border-red-600" : "border-zinc-800"} rounded-xl p-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-red-600 transition-all w-full shadow-inner`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500  uppercase mt-1">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="What's on your mind?"
                  className={`bg-zinc-900 border ${errors.message ? "border-red-600" : "border-zinc-800"} rounded-xl p-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-red-600 transition-all resize-none w-full shadow-inner`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 uppercase mt-1">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-red-900/20 group cursor-pointer w-full hover:scale-102"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </section>

          {/* map */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex flex-col gap-2 mb-6 border-l-2 border-red-600 pl-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-red-600">
                Our HQ
              </label>
              <h2 className="text-2xl font-black uppercase text-zinc-100">
                Visit the <span className="text-zinc-500">Backstage</span>
              </h2>
            </div>

            <div className="w-full h-[300px] md:h-[350px] rounded-3xl overflow-hidden border border-zinc-800 grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197503007621!2d-46.6586616!3d-23.5613497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da12814f%3A0xc68297b6a1251c91!2sAv.%20Paulista%2C%201100%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-[10px] text-zinc-300 uppercase tracking-widest font-bold mt-4">
              Av. Paulista, 1100 - Bela Vista, São Paulo - SP, 01310-100
            </p>
          </section>
        </div>

        {/* coluna direita */}
        <section className="order-1 lg:order-2 flex flex-col gap-8 lg:sticky lg:top-24">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm shadow-xl">
            <h3 className="text-zinc-100 font-black uppercase text-xl mb-8">
              Direct Channels
            </h3>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:juliavaleriogs@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-800 p-3 rounded-xl group-hover:bg-red-600 transition-all">
                  <Mail className="text-zinc-100" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                    Email
                  </p>
                  <p className="text-zinc-100 font-bold group-hover:text-red-500 transition-colors">
                    juliavaleriogs@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/juliarichesky"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-800 p-3 rounded-xl group-hover:bg-red-600 transition-all">
                  <Code className="text-zinc-100" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                    Github
                  </p>

                  <p className="text-zinc-100 font-bold group-hover:text-red-500 transition-colors">
                    /juliarichesky
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/juliarichesky/"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-800 p-3 rounded-xl group-hover:bg-red-600 transition-all">
                  <Disc className="text-zinc-100" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                    Linkedin
                  </p>
                  <p className="text-zinc-100 font-bold group-hover:text-red-500 transition-colors">
                    /juliarichesky
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="border-l-2 border-red-600 pl-6 py-2">
            <p className="text-zinc-400 italic text-sm leading-relaxed">
              Missing a classic or a hidden gem? Send us your suggestions and
              help complete the ledger.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
