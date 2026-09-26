import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroAsset from "@/assets/hero-mockup.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pagina de Vendas para Lowticket" },
      {
        name: "description",
        content:
          "Pagina de Vendas para Lowticket",
      },
      { property: "og:title", content: "Pagina de Vendas para Lowticket" },
      {
        property: "og:description",
        content:
          "Pagina de Vendas para Lowticket",
      },
    ],
  }),
  component: LandingPage,
});

const ASSET = "https://protocolopele7d.lovable.app/__l5e/assets-v1";
const IMG = {
  hero: `${ASSET}/25390896-a15a-44a3-914f-0ede10bfbe78/hero-mockup-new.webp`,
  wpp1: `${ASSET}/dc6d13b6-3101-4394-9588-205e7818450d/whatsapp-print.webp`,
  wpp2: `${ASSET}/4732a711-2d37-4b04-8cfa-099499dbe03b/whatsapp-juliana.webp`,
  wpp3: `${ASSET}/53a7946e-bd71-4c08-993c-726491e3657f/whatsapp-carla.webp`,
  mod1: `${ASSET}/325f438e-3e06-4325-acde-66a11db30890/modulo-01.webp`,
  mod2: `${ASSET}/0bd5f8ec-1102-4408-a396-5c46f3647cdf/modulo-02.webp`,
  mod3: `${ASSET}/a22c18f6-481c-44ec-b431-63e4512128d1/modulo-03.webp`,
  bonus1: `${ASSET}/87e71348-c73a-4a74-8689-6e8368ae73b6/bonus-01.webp`,
  bonus2: `${ASSET}/d7da0b07-3896-441d-9c31-fb167592c2d6/bonus-02.webp`,
  bonus3: `${ASSET}/62b5f1f6-0d15-469c-812a-02b0c22447ce/bonus-03.webp`,
};

const modules = [
  { n: 1, title: "Titulo do modulo 01", desc: "coloque aqui a descrição do que vai ter nesse modulo" },
  { n: 2, title: "Titulo do modulo 02", desc: "coloque aqui a descrição do que vai ter nesse modulo" },
  { n: 3, title: "Titulo do modulo 03", desc: "coloque aqui a descrição do que vai ter nesse modulo" },
  { n: 4, title: "Clareamento das Marcas", desc: "Conheça hábitos e ativos que ajudam na melhora gradual da aparência das manchas deixadas pela acne." },
  { n: 5, title: "Manutenção da Pele", desc: "Aprenda como manter os resultados após os primeiros sete dias e evitar que os problemas retornem." },
];

const moduleCovers = [IMG.mod1, IMG.mod2, IMG.mod3, IMG.mod1, IMG.mod2];

const bonuses = [
  { img: IMG.bonus1, tag: "🎁 Bônus 01 - Incluso na oferta completa", title: "Titulo do bônus 01", desc: "coloque aqui a descrição sobre esse bonus completa", value: "R$ 39,00" },
  { img: IMG.bonus2, tag: "🎁 Bônus 02 - Incluso na oferta completa", title: "Titulo do bônus 02", desc: "coloque aqui a descrição sobre esse bonus completa", value: "R$ 29,00" },
  { img: IMG.bonus3, tag: "🎁 Bônus 03 - Incluso na oferta completa", title: "Titulo do bônus 03", desc: "coloque aqui a descrição sobre esse bonus completa", value: "R$ 29,00" },
];

const faqs = [
  { q: "Sua pergunta 01", a: "resposta da pergunta aqui descrição completa" },
  { q: "Sua pergunta 02", a: "resposta da pergunta aqui descrição completa" },
  { q: "Sua pergunta 03", a: "resposta da pergunta aqui descrição completa" },
  { q: "Sua pergunta 04", a: "resposta da pergunta aqui descrição completa" },
  { q: "Sua pergunta 05", a: "resposta da pergunta aqui descrição completa" },
];

const testimonials = [IMG.wpp1, IMG.wpp2, IMG.wpp3, IMG.wpp1, IMG.wpp2, IMG.wpp3];

function LandingPage() {
  const [showUpsell, setShowUpsell] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">

      <TopBar />


      {/* Hero */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <img src={heroAsset.url} alt="Mockup do produto" className="w-full max-w-[600px] aspect-[3/2] object-contain rounded-[10px]" />
          <h1 className="mt-8 text-2xl md:text-4xl font-bold leading-tight">


            [Diga o que o produto resolve] com o [Nome do Método ou Mecanismo] em apenas{" "}
            <span className="text-primary">[Prazo do Resultado]</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground" style={{ fontSize: "18px", lineHeight: "28px" }}>
            Explique como o método funciona, quais benefícios principais ele entrega e para quem ele é indicado, incluindo uma objeção comum que o produto consegue superar.
          </p>
          <a
            href="#oferta"
            className="cta-fx mt-8 inline-flex items-center justify-center rounded-[10px] bg-primary px-[40px] py-[20px] text-base font-semibold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90"
          >
            ADICIONAR CTA
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted section-pad py-[64px] md:py-[80px] lg:py-[100px] overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl md:text-3xl font-semibold">Veja o que estão dizendo<br />sobre o [Produto/Método]</h2>
          <div
            className="relative mt-10 mx-auto w-full max-w-sm [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] md:[-webkit-mask-image:none] md:[mask-image:none]"
          >
            <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-6">
              {[...testimonials, ...testimonials].map((_, i) => (
                <ImagePlaceholder
                  key={i}
                  label={`Depoimento ${(i % testimonials.length) + 1} 400×600`}
                  className="w-[260px] sm:w-[320px] aspect-[2/3] rounded-[10px] shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl md:text-3xl font-semibold">Tudo o que você receberá<br />assim que confirmar sua compra</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.slice(0, 3).map((m, i) => (
              <ModuleCard key={m.n} module={m} cover={moduleCovers[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="bg-muted section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xl md:text-3xl font-semibold">E você ainda recebe<br />3 bônus exclusivos</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((b) => (
              <div key={b.title} className="rounded-[10px] bg-card p-6 flex flex-col items-start text-left">
                <ImagePlaceholder label={`${b.tag} 320×320`} className="w-full max-w-xs aspect-square mx-auto" />
                <div className="mt-4 text-sm font-semibold text-primary">{b.tag}</div>
                <h3 className="mt-2 text-xl md:text-3xl font-semibold">{b.title}</h3>
                <p className="mt-3 text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>{b.desc}</p>
                <div className="mt-4 text-sm font-semibold">Valor: <span className="line-through decoration-2" style={{ color: "#dc2626", textDecorationColor: "#dc2626" }}>{b.value}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="oferta" className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-xl md:text-3xl font-semibold">Escolha sua oferta</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[10px] border border-border bg-muted p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold">Oferta Simples</h3>
              <p className="mt-4 font-semibold">Você recebe:</p>
              <ul className="mt-2 inline-block divide-y divide-border text-muted-foreground text-left mx-auto">
                <li className="py-2">✓ adicione nome do produto aqui</li>
                <li className="py-2">✓ Acesso Vitalício</li>
              </ul>
              <div className="mt-6">
                <div className="text-sm line-through decoration-2" style={{ textDecorationColor: "#dc2626" }}>De R$ 97,00</div>
                <div className="text-sm font-bold">Hoje por apenas</div>
                <div className="whitespace-nowrap">
                  <span className="text-4xl font-bold text-primary">4x de </span>
                  <span className="text-4xl font-bold text-primary">R$ 4,89</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">ou <span className="font-bold">R$ 19,90</span> à vista no PIX</div>
              </div>
              <button
                type="button"
                onClick={() => setShowUpsell(true)}
                className="mt-6 inline-flex items-center justify-center rounded-[10px] border-2 border-primary px-[40px] py-[20px] text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Oferta Simples
              </button>
            </div>

            <div className="relative">
              <span className="animated-badge absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-[10px] px-6 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                <span className="relative z-10">Mais Vendido</span>
              </span>
              <div className="animated-border rounded-[10px] bg-card p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold">Oferta Completa</h3>
                <p className="mt-4 font-semibold">Você recebe:</p>
                <ul className="mt-2 inline-block divide-y divide-border text-muted-foreground text-left mx-auto">
                  <li className="py-2">✓ adicione nome do produto aqui</li>
                  <li className="py-2">✓ Acesso Vitalício</li>
                  <li className="py-2">✓ titulo do bonus 1 <span className="text-xs line-through" style={{ textDecorationColor: "#dc2626" }}>(R$ 39,00)</span></li>
                  <li className="py-2">✓ titulo do bonus 2 <span className="text-xs line-through" style={{ textDecorationColor: "#dc2626" }}>(R$ 29,00)</span></li>
                  <li className="py-2">✓ titulo do bonus 3 <span className="text-xs line-through" style={{ textDecorationColor: "#dc2626" }}>(R$ 29,00)</span></li>
                </ul>
                <div className="mt-6">
                  <div className="text-sm line-through decoration-2" style={{ textDecorationColor: "#dc2626" }}>De R$ 194,00</div>
                  <div className="text-sm font-bold">Hoje por apenas</div>
                  <div className="whitespace-nowrap">
                    <span className="text-4xl font-bold text-primary">6x de </span>
                    <span className="text-4xl font-bold text-primary">R$ 5,89</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">ou <span className="font-bold">R$ 29,90</span> à vista no PIX</div>
                </div>
                <button
                  type="button"
                  className="cta-fx mt-6 inline-flex items-center justify-center rounded-[10px] bg-primary px-[40px] py-[20px] text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90"
                >
                  Oferta Completa
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-muted section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[10px] bg-primary text-3xl font-bold text-primary-foreground">
            7
          </div>
          <h2 className="mt-6 text-xl md:text-2xl font-semibold">7 Dias de garantia</h2>
          <p className="mt-2 text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>
            Se dentro do prazo de garantia você concluir que o produto não atendeu às suas expectativas, basta solicitar o reembolso. Devolveremos 100% do seu dinheiro, sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl md:text-3xl font-semibold">Perguntas frequentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <Accordion key={f.q} title={f.q}>
                <p className="text-muted-foreground" style={{ fontSize: "16px", lineHeight: "24px" }}>{f.a}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border section-pad py-8 text-center text-xs text-muted-foreground">
        © 2026 Marcelo Black
      </footer>

      {showUpsell && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowUpsell(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[10px] bg-card p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowUpsell(false)}
              aria-label="Fechar"
              className="absolute right-3 top-3 text-xl text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
            <div className="rounded-[10px] bg-primary px-4 py-3 text-primary-foreground">
              <div style={{ fontSize: "20px" }} className="font-semibold">Espere!</div>
              <p style={{ fontSize: "16px" }} className="mt-1">
                Já que você quer o simples,<span className="font-bold"> vou te dar de presente a Oferta Completa com desconto especial,</span> somente esta vez.
              </p>
            </div>
            <h3 className="mt-4 text-xl font-bold">OFERTA ESPECIAL</h3>
            <ul className="mt-3 inline-block divide-y divide-border text-muted-foreground text-left mx-auto text-sm">
              <li className="py-1.5">✓ adicione nome do produto aqui</li>
              <li className="py-1.5">✓ Acesso Vitalício</li>
              <li className="py-1.5">✓ titulo do bonus 1 <span className="text-xs line-through" style={{ textDecorationColor: "#dc2626" }}>(R$ 39,00)</span></li>
              <li className="py-1.5">✓ titulo do bonus 2 <span className="text-xs line-through" style={{ textDecorationColor: "#dc2626" }}>(R$ 29,00)</span></li>
              <li className="py-1.5">✓ titulo do bonus 3 <span className="text-xs line-through" style={{ textDecorationColor: "#dc2626" }}>(R$ 29,00)</span></li>
            </ul>
            <div className="mt-4">
              <div className="text-xs line-through decoration-2" style={{ textDecorationColor: "#dc2626" }}>De R$ 194,00</div>
              <div className="text-xs font-bold">Hoje por apenas</div>
              <div className="whitespace-nowrap">
                <span className="text-3xl font-bold text-primary">6x de R$ 5,89</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">ou <span className="font-bold">R$ 29,90</span> à vista no PIX</div>
            </div>
            <div className="mt-5 flex flex-col items-stretch justify-center gap-4">
              <button
                type="button"
                className="cta-fx inline-flex w-full items-center justify-center rounded-[10px] bg-primary px-[40px] py-[20px] text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90"
              >
                Oferta Especial
              </button>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-[10px] border-2 border-primary px-[40px] py-[20px] text-[11px] font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Oferta Simples
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TopBar() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return (
    <div className="bg-primary section-pad py-4 text-center text-xs font-semibold uppercase tracking-widest text-primary-foreground">
      Válido só hoje dia {day} de {month} de {year}
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[10px] border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="text-xl text-primary">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

function ImagePlaceholder({ label, className }: { label?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label || "Espaço reservado para imagem"}
      className={`bg-muted border-2 border-dashed border-border rounded-[10px] flex items-center justify-center text-xs sm:text-sm text-muted-foreground text-center p-2 ${className || ""}`}
    >
      {label || "Imagem"}
    </div>
  );
}

function ModuleCard({ module: m, cover }: { module: { n: number; title: string; desc: string }; cover: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[10px] bg-card p-6 flex flex-col items-start text-left">
      <ImagePlaceholder label={`Módulo ${m.n} 320×320`} className="w-full max-w-xs aspect-square mx-auto" />
      <div className="mt-4 text-sm font-semibold text-primary">Módulo {String(m.n).padStart(2, "0")}</div>
      <h3 className="mt-2 text-xl md:text-3xl font-semibold">{m.title}</h3>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 flex w-full items-center justify-between gap-4 rounded-[10px] border border-border bg-background section-pad py-2 text-sm font-semibold"
        aria-expanded={open}
      >
        <span>{open ? "Ocultar descrição" : "Clique aqui para ver descrição"}</span>
        <span className="text-lg text-primary">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`grid w-full transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <p className="overflow-hidden text-muted-foreground text-left" style={{ fontSize: "16px", lineHeight: "24px" }}>{m.desc}</p>
      </div>
    </div>
  );
}
