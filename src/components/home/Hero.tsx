import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Building2, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { Calculadoras } from "@/components/home/Calculadoras";
import { artigosItems } from "@/components/layout/Header";

const satelites = [
  { key: "imoveis", label: "Imóveis", icon: Building2, style: { left: "50%", top: "0%" } },
  { key: "planejamento", label: "Planejamentos", icon: Calculator, style: { left: "0%", top: "50%" } },
];

export function Hero() {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((i) => (i + 1) % satelites.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <section className="relative overflow-hidden">
      {/* Background image */}
      <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            min-height: max(884px, 100dvh);\n        }\n    "
    }}
  />
  {/* Hero Section - Remains Dark as per Initial Request/Visual Flow */}
  <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-background-dark">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-8 z-10">

        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
          Oriente{" "}
          <span className="text-primary">seu futuro.</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
          Se torne um orientado e navegue pelo mundo do das finanças com
          guias especializados ao seu lado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-xs">person</span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-secondary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-xs">person</span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-primary/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-xs">person</span>
            </div>
          </div>
          <span>Uma abordagem para todos os públicos</span>
        </div>
      </div>
      <div className="relative aspect-square w-full max-w-md mx-auto">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />

        {/* Grupo giratório: linhas + satélites em losango, deslizando no sentido anti-horário */}
        <div className="absolute inset-[8%] animate-spin-ccw">
          {/* Linhas de conexão em neon, formando o losango e os raios até o centro */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" style={{ filter: "drop-shadow(0 0 2px rgba(29,175,102,0.6))" }}>
            <g stroke="#1daf66" strokeOpacity="0.55" strokeWidth="0.6" strokeDasharray="1.5 3" fill="none" strokeLinecap="round">
              <line x1="50" y1="50" x2="50" y2="0" />
              <line x1="50" y1="50" x2="0" y2="50" />
            </g>
            <g fill="#1daf66">
              <circle cx="50" cy="50" r="1.3" />
              <circle cx="50" cy="25" r="1.1" />
              <circle cx="25" cy="50" r="1.1" />
            </g>
          </svg>

          {/* Satélites, nos vértices do losango */}
          {satelites.map((s, i) => {
            const Icon = s.icon;
            const isHighlighted = i === highlightIndex;
            return (
              <div
                key={s.key}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={s.style}
              >
                {/* Contra-rotação: mantém o losango, o ícone e o texto sempre eretos */}
                <div className="flex animate-spin-cw flex-col items-center gap-2">
                  <div
                    className={`flex h-14 w-14 rotate-45 items-center justify-center rounded-xl border-2 bg-background-dark transition-all duration-700 ${
                      isHighlighted
                        ? "border-secondary shadow-[0_0_18px_rgba(245,158,11,0.6)]"
                        : "border-primary shadow-[0_0_18px_rgba(29,175,102,0.55)]"
                    }`}
                  >
                    <div className={`-rotate-45 transition-colors duration-700 ${isHighlighted ? "text-secondary" : "text-primary"}`}>
                      <Icon size={22} />
                    </div>
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold text-white/80">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centro: Seus Primeiros (fixo) */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 md:h-44 md:w-44 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-2xl border-2 border-primary bg-background-dark shadow-[0_0_35px_rgba(29,175,102,0.6)]">
          <span
            style={{ transform: "rotate(-45deg) translateY(-15%)" }}
            className="text-center text-[1.125rem] md:text-[1.6875rem] font-black uppercase leading-tight tracking-wide text-white"
          >
            Comece
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* Artigos Section - Lightened (Light Background) */}
  <section
    className="py-20 bg-background-light text-surface-dark"
    id="artigos"
  >
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

      </div>
    </div>
  </section>
  <div className="border-t border-slate-200" />
  <Calculadoras />
</>

    </section>;
}