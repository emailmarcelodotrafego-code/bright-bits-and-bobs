# Design System — Página de Vendas Lowticket

Documentação visual e técnica do design system atual do projeto. Todos os tokens, componentes e padrões estão centralizados em `src/styles.css` e aplicados em `src/routes/index.tsx`.

---

## 1. Filosofia

- **Estética:** minimalista, limpa, com tons de cinza e branco.
- **Foco:** conversão — CTAs fortes, hierarquia clara, prova social em destaque.
- **Responsividade:** mobile-first, largura útil fixa de `360px` no mobile e `1280px` no desktop.
- **Acessibilidade:** contraste adequado, semântica HTML, estados de foco visíveis.

---

## 2. Paleta de Cores

Cores definidas via CSS custom properties em `oklch` no arquivo `src/styles.css`.

### Tokens semânticos

| Token | Valor (light) | Uso |
|-------|---------------|-----|
| `--background` | `oklch(1 0 0)` | Fundo geral da página (branco) |
| `--foreground` | `oklch(0.22 0 0)` | Texto principal |
| `--primary` | `oklch(0.30 0 0)` | Botões, topbar, destaques |
| `--primary-foreground` | `oklch(0.99 0 0)` | Texto sobre fundo primary |
| `--muted` | `oklch(0.94 0 0)` | Fundo de seções alternadas |
| `--muted-foreground` | `oklch(0.45 0 0)` | Parágrafos secundários, legendas |
| `--card` | `oklch(0.82 0 0)` | Fundo dos cards |
| `--card-foreground` | `oklch(0.22 0 0)` | Texto dentro dos cards |
| `--border` | `oklch(0.85 0 0)` | Bordas, divisores, contornos |
| `--destructive` | `oklch(0.6 0.22 25)` | Estados de erro/destrutivo |

### Cores utilitárias extras

| Cor | Hex | Uso |
|-----|-----|-----|
| Vermelho de risco | `#dc2626` | Preços tachados (`textDecorationColor`) |

---

## 3. Tipografia

### Escala de tamanhos (base 8pt)

| Elemento | Mobile | Desktop | Peso | Uso |
|----------|--------|---------|------|-----|
| `h1` | `24px` | `36px` | `bold` | Título principal da hero |
| `h2` / `h3` | `20px` | `30px` | `semibold` | Títulos de seção e cards |
| Parágrafo hero | `18px` | `18px` | `normal` | Subtítulo da hero |
| Parágrafo padrão | `16px` | `16px` | `normal` | Descrições, FAQ, bônus |
| Preço principal | `36px` | `36px` | `bold` | Valor das ofertas |
| Preço riscado | `12px–14px` | `12px–14px` | `normal` | Valores originais |
| Topbar / Badge | `12px` | `12px` | `bold` | Faixa do topo, "Mais Vendido" |
| CTA | `14px` | `14px` | `semibold` | Texto dos botões |

### Regras de escrita

- **Sentence case:** apenas a primeira letra da frase em maiúscula.
- **Títulos de seção:** sempre em 2 linhas balanceadas (exceto preço e FAQ).
- **CTAs:** texto em maiúsculas (`uppercase`).
- **Tracking:** `tracking-wider` em CTAs e `tracking-widest` na topbar.

---

## 4. Espaçamento

### Largura útil do conteúdo

Utilitário `.section-pad` definido em `src/styles.css`:

```css
.section-pad {
  padding-inline: max(20px, calc((100% - 360px) / 2));
}
@media (min-width: 768px) {
  .section-pad {
    padding-inline: max(20px, calc((100% - 1280px) / 2));
  }
}
```

| Dispositivo | Largura útil |
|-------------|--------------|
| Mobile | `360px` |
| Desktop | `1280px` |

### Espaçamento vertical entre seções

| Dispositivo | Valor |
|-------------|-------|
| Mobile | `64px` |
| Tablet (`md`) | `80px` |
| Desktop (`lg`) | `100px` |

Classe aplicada em todas as seções:

```tsx
<section className="section-pad py-[64px] md:py-[80px] lg:py-[100px]">
```

### Grid gaps

| Contexto | Gap |
|----------|-----|
| Grid de cards (módulos/bônus) | `32px` (`gap-8`) |
| Grid de ofertas | `24px` (`gap-6`) |
| Lista FAQ | `12px` (`space-y-3`) |

### Botões

Regra de padding interno: **altura × 2 = largura**.

```tsx
px-[40px] py-[20px]
```

---

## 5. Bordas e Cantos

**Raio padrão em todos os elementos:** `10px`

Aplicado em:
- Botões
- Cards
- Accordions
- Badges
- Modal
- Placeholders de imagem

Classe Tailwind:

```tsx
rounded-[10px]
```

---

## 6. Componentes

### 6.1. Botão CTA Principal

Botão com efeitos de pulse, shine e grow no hover.

```tsx
<a
  href="#oferta"
  className="cta-fx mt-8 inline-flex items-center justify-center rounded-[10px] bg-primary px-[40px] py-[20px] text-base font-semibold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90"
>
  ADICIONAR CTA
</a>
```

**Classe CSS `.cta-fx`:**

```css
@keyframes cta-pulse {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklab, var(--color-primary) 60%, transparent); }
  50% { box-shadow: 0 0 0 12px color-mix(in oklab, var(--color-primary) 0%, transparent); }
}

@keyframes cta-shine {
  0% { transform: translateX(-150%) skewX(-20deg); }
  100% { transform: translateX(250%) skewX(-20deg); }
}

.cta-fx {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: cta-pulse 2.2s ease-in-out infinite;
}
.cta-fx:hover {
  transform: scale(1.06);
}
.cta-fx::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
  animation: cta-shine 2.8s ease-in-out infinite;
  pointer-events: none;
}
```

---

### 6.2. Botão Outline

Usado na oferta simples e no modal de downsell.

```tsx
<button
  type="button"
  className="mt-6 inline-flex items-center justify-center rounded-[10px] border-2 border-primary px-[40px] py-[20px] text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-primary-foreground"
>
  Oferta Simples
</button>
```

---

### 6.3. Card de Oferta Simples

- Fundo: `bg-muted`
- Borda: `border border-border`
- Conteúdo centralizado
- Sem sombra ou efeito hover

```tsx
<div className="rounded-[10px] border border-border bg-muted p-8 flex flex-col items-center text-center">
  <h3 className="text-2xl font-bold">Oferta Simples</h3>
  {/* conteúdo */}
</div>
```

---

### 6.4. Card de Oferta Completa

Com borda degradê animada e badge "Mais Vendido".

```tsx
<div className="relative">
  <span className="animated-badge absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-[10px] px-6 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground">
    <span className="relative z-10">Mais Vendido</span>
  </span>
  <div className="animated-border rounded-[10px] bg-card p-8 flex flex-col items-center text-center">
    <h3 className="text-2xl font-bold">Oferta Completa</h3>
    {/* conteúdo */}
  </div>
</div>
```

**Classe `.animated-border`:**

```css
.animated-border {
  position: relative;
  z-index: 0;
  overflow: hidden;
}
.animated-border::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -150%;
  background: conic-gradient(
    from 0deg,
    var(--color-primary),
    color-mix(in oklab, var(--color-primary) 40%, transparent),
    var(--color-primary),
    color-mix(in oklab, var(--color-primary) 70%, white),
    var(--color-primary)
  );
  animation: border-spin 6s linear infinite;
}
.animated-border::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 2px;
  background: var(--color-card);
  border-radius: inherit;
}
```

---

### 6.5. Accordion

Usado nos módulos (sanfona) e na FAQ.

```tsx
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
```

---

### 6.6. TopBar

Faixa no topo com data dinâmica em português.

```tsx
function TopBar() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return (
    <div className="bg-primary section-pad py-4 text-center text-xs font-semibold uppercase tracking-widest text-primary-foreground">
      Válido só hoje dia {day} de {month} de {year}
    </div>
  );
}
```

---

### 6.7. Placeholder de Imagem

Componente para marcar espaços de imagem com dimensões.

```tsx
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
```

---

### 6.8. Modal de Upsell

Modal acionado ao clicar na oferta simples.

```tsx
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
        <div className="font-semibold" style={{ fontSize: "20px" }}>Espere!</div>
        <p className="mt-1" style={{ fontSize: "16px" }}>
          Já que você quer o simples,
          <span className="font-bold"> vou te dar de presente a Oferta Completa com desconto especial,</span>
          {" "}somente esta vez.
        </p>
      </div>

      <h3 className="mt-4 text-xl font-bold">OFERTA ESPECIAL</h3>
      {/* lista de itens e preços */}

      <div className="mt-5 flex flex-col items-stretch justify-center gap-4">
        <button className="cta-fx ...">Oferta Especial</button>
        <button className="border-2 border-primary ...">Oferta Simples</button>
      </div>
    </div>
  </div>
)}
```

---

## 7. Animações

| Animação | Duração | Uso |
|----------|---------|-----|
| `marquee` | `30s` linear infinito | Carrossel de depoimentos |
| `border-spin` | `6s` linear infinito | Borda degradê do card completo |
| `gradient-slide` | `4s` linear infinito | Badge "Mais Vendido" |
| `cta-pulse` | `2.2s` ease-in-out infinito | Sombra pulsante nos CTAs |
| `cta-shine` | `2.8s` ease-in-out infinito | Brilho deslizante nos CTAs |

---

## 8. Layout e Grid

### Container centralizado

```tsx
<div className="mx-auto max-w-5xl">  {/* hero, ofertas */}
<div className="mx-auto max-w-6xl">  {/* módulos, bônus, depoimentos */}
<div className="mx-auto max-w-3xl">  {/* garantia, FAQ */}
```

### Grid responsivo

```tsx
// 3 cards no desktop, 1 no mobile
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

// 2 cards no desktop, 1 no mobile
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```

---

## 9. Padrões de Conteúdo

### Títulos

- Sempre em sentence case.
- Forçar 2 linhas com `<br />`, evitando palavras solitárias.
- Exceções: "Escolha sua oferta" e "Perguntas frequentes" ficam em 1 linha.

### Preços

- Valores originais tachados em vermelho: `#dc2626`.
- Parcelamento em destaque: `text-4xl font-bold text-primary`.
- PIX à vista em negrito abaixo.

### Listas de oferta

```tsx
<ul className="mt-2 inline-block divide-y divide-border text-muted-foreground text-left mx-auto">
  <li className="py-2">✓ adicione nome do produto aqui</li>
  <li className="py-2">✓ Acesso Vitalício</li>
</ul>
```

---

## 10. Checklist de Aplicação

Ao criar novas seções ou componentes, verifique:

- [ ] Usou `section-pad` para respeitar a largura útil?
- [ ] Aplicou `py-[64px] md:py-[80px] lg:py-[100px]` no espaçamento vertical?
- [ ] Todos os cantos arredondados estão com `rounded-[10px]`?
- [ ] Cores usam tokens semânticos (`bg-primary`, `text-muted-foreground`) e não hex hardcoded?
- [ ] Botões principais usam a classe `cta-fx`?
- [ ] Textos estão em sentence case e títulos em 2 linhas quando aplicável?
- [ ] Imagens têm `aspect-ratio`, `alt` e dimensões declaradas?
- [ ] O componente funciona em mobile primeiro e depois em desktop?

---

## 11. Arquivos de Referência

- `src/styles.css` — tokens, animações e utilitários globais.
- `src/routes/index.tsx` — implementação completa da landing page.
- `components.json` — configuração do shadcn/ui.
