import { createFileRoute } from "@tanstack/react-router";
import ebookMockup from "@/assets/ebook-mockup.png";
import phoneMockup from "@/assets/phone-mockup.png";
import authorImg from "@/assets/author.jpg";
import {
  Check, Clock, ShieldCheck, Star, Zap, Heart, Smartphone, Gift,
  Flame, Award, Users, ChevronDown, Sparkles, Timer, TrendingDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "30 Dias Caminhando — Perca gordura sem academia" },
      { name: "description", content: "Guia prático para queimar gordura caminhando 30 minutos por dia. Sem academia, sem dieta maluca. Comece hoje por R$16,90." },
      { property: "og:title", content: "30 Dias Caminhando — Perca gordura sem academia" },
      { property: "og:description", content: "Guia prático para queimar gordura caminhando 30 minutos por dia. Sem academia, sem dieta maluca. Comece hoje por R$16,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap" },
    ],
  }),
  component: SalesPage,
});

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href="#oferta"
      className={`btn-cta btn-cta-hover animate-pulse-glow ${large ? "text-lg px-8 py-5 w-full sm:w-auto" : "text-base"}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-black text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function SalesPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">

      {/* Urgency bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-semibold sm:text-sm">
          <Flame className="h-4 w-4 shrink-0 text-gold" />
          <span>OFERTA POR TEMPO LIMITADO — 78% OFF hoje</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative px-4 pt-10 pb-16 sm:pt-16 sm:pb-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <Heart className="h-3.5 w-3.5" /> +12.847 mulheres transformadas
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Perca gordura em <span className="text-primary">30 dias</span> caminhando <em className="not-italic italic">apenas 30 min</em> por dia
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              Sem academia. Sem dieta maluca. Sem gastar fortunas. Um plano simples que cabe na sua rotina — mesmo que você não tenha tempo, disposição ou experiência.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <CTAButton large>QUERO COMEÇAR AGORA →</CTAButton>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground md:justify-start">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia 7 dias</span>
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-gold text-gold" /> 4.9/5 (2.341 avaliações)</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Acesso imediato</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={ebookMockup}
              alt="Ebook 30 Dias Caminhando"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 2. PARA QUEM É */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Feito para você"
            title="Este guia é para você que…"
            subtitle="Se você se identifica com pelo menos 2 pontos abaixo, este método foi feito sob medida para o seu momento."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: "Tem rotina corrida", text: "Trabalha, cuida da casa, dos filhos e sente que não sobra tempo pra você." },
              { icon: TrendingDown, title: "Quer perder peso", text: "Já tentou dietas restritivas, remédios e nada funcionou de forma duradoura." },
              { icon: Heart, title: "Odeia academia", text: "Não se sente confortável em academias ou não tem dinheiro pra pagar mensalidade." },
              { icon: Zap, title: "Precisa de energia", text: "Acorda cansada, sem disposição e quer voltar a se sentir viva." },
              { icon: Users, title: "Quer método simples", text: "Cansou de planilhas complicadas e treinos que exigem equipamentos caros." },
              { icon: Award, title: "Quer resultado real", text: "Busca uma transformação sustentável que caiba na sua realidade." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. O QUE VOCÊ RECEBE */}
      <section className="bg-cream px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Conteúdo completo"
            title="O que você vai receber"
            subtitle="Um método passo a passo, dividido em 4 semanas, para você emagrecer caminhando — mesmo começando do zero."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { title: "Plano de 30 dias detalhado", text: "Dia a dia, com tempo de caminhada, intensidade e progressão gradual segura." },
              { title: "Guia de queima de gordura", text: "Como caminhar do jeito certo para acelerar o metabolismo e queimar mais gordura." },
              { title: "Cardápio flexível", text: "Alimentação simples, sem restrição extrema, com opções acessíveis no supermercado." },
              { title: "Ficha de acompanhamento", text: "Acompanhe medidas, peso e disposição semana a semana para ver o progresso." },
              { title: "Alongamentos essenciais", text: "Rotina rápida para evitar dores e proteger suas articulações." },
              { title: "Motivação diária", text: "Frases, gatilhos e estratégias mentais para não desistir na primeira semana." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton>QUERO TER ACESSO AGORA</CTAButton>
          </div>
        </div>
      </section>

      {/* 4. NO CELULAR */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
            <img src={phoneMockup} alt="Guia no celular" width={1024} height={1024} loading="lazy" className="mx-auto w-full max-w-sm" />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              <Smartphone className="h-3.5 w-3.5" /> 100% Digital
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">Leve com você para <span className="text-primary">onde quiser</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Acesse pelo celular, tablet ou computador. Consulte durante a caminhada, no ônibus ou no intervalo do trabalho. Sem app pra baixar, sem complicação.
            </p>
            <ul className="mt-6 space-y-3 text-left">
              {["Acesso vitalício ao material", "Funciona offline depois de baixado", "Atualizações gratuitas para sempre"].map((t, i) => (
                <li key={i} className="flex items-center gap-3"><Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={3} /> <span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. BÔNUS */}
      <section className="bg-foreground px-4 py-16 text-background sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <Gift className="h-3.5 w-3.5" /> Bônus exclusivos
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">3 bônus para acelerar seus resultados</h2>
            <p className="mt-4 text-lg opacity-80">Ao adquirir hoje, você leva ainda 3 materiais extras — de graça.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { tag: "Bônus #1", title: "Receitas Detox Fit", value: "R$ 47", text: "30 receitas rápidas e saborosas para desinchar e acelerar a queima de gordura." },
              { tag: "Bônus #2", title: "Playlist Motivacional", value: "R$ 27", text: "Playlist selecionada para você caminhar no ritmo certo e sem preguiça." },
              { tag: "Bônus #3", title: "Checklist Anti-Compulsão", value: "R$ 37", text: "Estratégias para vencer a vontade de doce e evitar recaídas na dieta." },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl border border-gold/30 bg-background/5 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-foreground">{b.tag}</span>
                  <span className="text-xs line-through opacity-60">{b.value}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-sm opacity-80">{b.text}</p>
                <div className="mt-4 text-sm font-bold text-gold">GRÁTIS hoje</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton>GARANTIR MEUS BÔNUS</CTAButton>
          </div>
        </div>
      </section>

      {/* 6. OFERTA */}
      <section id="oferta" className="px-4 py-16 sm:py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Escolha seu plano"
            title="Comece sua transformação hoje"
            subtitle="Dois planos pensados pra você. Escolha o que faz mais sentido pro seu momento."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Plano Simples */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl font-bold">Plano Essencial</h3>
              <p className="mt-2 text-sm text-muted-foreground">Para começar do jeito certo</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through">R$ 67</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-6xl font-black">16</span>
                <span className="text-2xl font-bold">,90</span>
              </div>
              <p className="text-xs text-muted-foreground">à vista • pagamento único</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Guia 30 Dias Caminhando completo",
                  "Plano diário passo a passo",
                  "Ficha de acompanhamento",
                  "Alongamentos essenciais",
                  "Acesso vitalício",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} /> {t}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-8 block w-full rounded-full border-2 border-primary py-4 text-center font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">
                QUERO O ESSENCIAL
              </a>
            </div>

            {/* Plano Premium */}
            <div className="relative rounded-3xl border-2 border-primary bg-card p-8 shadow-[var(--shadow-premium)] md:-mt-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-gradient-to-r from-primary to-primary-glow px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                  ⭐ MAIS ESCOLHIDO
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary">Plano Premium</h3>
              <p className="mt-2 text-sm text-muted-foreground">Transformação completa + bônus</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through">R$ 167</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">78% OFF</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-6xl font-black text-primary">36</span>
                <span className="text-2xl font-bold">,90</span>
              </div>
              <p className="text-xs text-muted-foreground">à vista • pagamento único</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Tudo do Plano Essencial",
                  "Cardápio flexível de 30 dias",
                  "Guia de queima de gordura",
                  "🎁 Bônus: Receitas Detox Fit",
                  "🎁 Bônus: Playlist Motivacional",
                  "🎁 Bônus: Checklist Anti-Compulsão",
                  "Suporte prioritário via WhatsApp",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} /> <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-cta btn-cta-hover mt-8 w-full">
                QUERO O PREMIUM →
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Compra 100% segura
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-destructive/10 p-4 text-center text-sm font-semibold text-destructive">
            <Timer className="h-5 w-5 shrink-0" />
            <span>Oferta por tempo limitado. O preço volta para R$ 167 em breve.</span>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Prova social"
            title="Mulheres reais. Resultados reais."
            subtitle="Veja o que quem já começou está falando sobre o método."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Ana P.", city: "São Paulo/SP", loss: "6 kg em 30 dias", text: "Eu não acreditava que só caminhando ia funcionar. Perdi 6kg no primeiro mês e voltei a caber nas minhas calças antigas! O plano é simples de seguir mesmo trabalhando o dia todo." },
              { name: "Juliana M.", city: "Belo Horizonte/MG", loss: "4 kg + medidas", text: "Comecei desanimada, achando que era mais uma dieta furada. Em 3 semanas eu já tinha perdido 4kg e principalmente muita medida na barriga. Vale cada centavo!" },
              { name: "Carla R.", city: "Curitiba/PR", loss: "8 kg em 2 meses", text: "Sou mãe de 2, trabalho fora e ainda assim consegui fazer o plano. As caminhadas viraram meu momento do dia. Perdi 8kg e ganhei muito mais energia!" },
            ].map((d, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{d.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-bold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.city}</div>
                  <div className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    -{d.loss}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUEM SOU EU */}
      <section className="bg-cream px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr]">
          <div className="mx-auto">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" />
              <img src={authorImg} alt="Criadora do método" width={1024} height={1024} loading="lazy"
                className="h-56 w-56 rounded-full border-4 border-background object-cover shadow-[var(--shadow-elegant)] sm:h-64 sm:w-64" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Award className="h-3.5 w-3.5" /> Quem sou eu
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Olá, eu sou a Marina Costa</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Sou educadora física, especialista em emagrecimento feminino e criadora do método <strong className="text-foreground">30 Dias Caminhando</strong>. Nos últimos 8 anos, já ajudei mais de <strong className="text-foreground">12.000 mulheres</strong> a emagrecer sem passar fome, sem academia e sem sofrimento.
            </p>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Depois de me tornar mãe e ver o quão difícil era conciliar rotina, filhos e cuidados com o corpo, criei um método simples e realista — porque emagrecer não precisa ser complicado.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold">CREF 123456-G</span>
              <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold">+12.000 alunas</span>
              <span className="rounded-full bg-background px-4 py-2 text-xs font-semibold">8 anos de experiência</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GARANTIA */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-primary/20 bg-card p-8 text-center shadow-[var(--shadow-elegant)] sm:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <ShieldCheck className="h-14 w-14 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="mt-6 text-3xl font-black sm:text-4xl">Garantia incondicional de 7 dias</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Experimente o método por 7 dias sem risco algum. Se por qualquer motivo você achar que não é pra você, basta enviar um e-mail e devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem burocracia, sem perguntas.
          </p>
          <p className="mt-4 text-sm font-semibold text-primary">O risco é todo nosso. Você só tem a ganhar.</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-cream px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-12 space-y-4">
            {[
              { q: "Funciona mesmo para quem está totalmente fora de forma?", a: "Sim! O plano começa gradualmente, com 15 a 20 minutos de caminhada leve, e evolui semana a semana no seu ritmo. É perfeito para quem está começando do zero." },
              { q: "Como recebo o material depois da compra?", a: "Imediatamente após a confirmação do pagamento, você recebe o acesso por e-mail com login e senha para acessar o material em qualquer dispositivo." },
              { q: "E se eu não gostar? Consigo o reembolso?", a: "Sim. Você tem 7 dias de garantia total. Basta enviar um e-mail e devolvemos 100% do valor, sem perguntas, sem burocracia." },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-5 open:shadow-[var(--shadow-soft)]">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-foreground">
                  <span>{f.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. RESUMO FINAL */}
      <section className="px-4 py-16 sm:py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-primary bg-card p-8 shadow-[var(--shadow-premium)] sm:p-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-destructive">
              <Flame className="h-3.5 w-3.5" /> Última chance
            </span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">Recapitulando: o que você leva hoje</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">Um método completo, testado e aprovado por milhares de mulheres.</p>
          </div>

          <ul className="mt-8 space-y-3">
            {[
              { t: "Guia 30 Dias Caminhando completo", v: "R$ 97" },
              { t: "Cardápio flexível de 30 dias", v: "R$ 47" },
              { t: "Guia de queima de gordura", v: "R$ 37" },
              { t: "Ficha de acompanhamento + alongamentos", v: "R$ 27" },
              { t: "🎁 Bônus: Receitas Detox Fit", v: "R$ 47" },
              { t: "🎁 Bônus: Playlist Motivacional", v: "R$ 27" },
              { t: "🎁 Bônus: Checklist Anti-Compulsão", v: "R$ 37" },
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between gap-4 border-b border-border pb-3">
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} /> {item.t}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground line-through">{item.v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-accent p-6 text-center">
            <div className="text-sm text-muted-foreground">Valor total: <span className="line-through">R$ 319</span></div>
            <div className="mt-2 text-sm font-semibold text-foreground">Hoje, por apenas:</div>
            <div className="mt-1 flex items-baseline justify-center gap-1">
              <span className="text-2xl font-bold">R$</span>
              <span className="text-6xl font-black text-primary">36</span>
              <span className="text-2xl font-bold">,90</span>
            </div>
            <div className="text-xs text-muted-foreground">pagamento único • acesso vitalício</div>
          </div>

          <div className="mt-8 text-center">
            <CTAButton large>SIM! QUERO COMEÇAR AGORA</CTAButton>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia 7 dias</span>
              <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-primary" /> Acesso imediato</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-gold text-gold" /> Compra segura</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground px-4 py-10 text-background">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>30 Dias Caminhando</div>
          <p className="mt-3 text-xs opacity-70">
            @2026 Marina Costa • 30 Dias Caminhando. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-[11px] opacity-50 max-w-2xl mx-auto">
            Os resultados podem variar de pessoa para pessoa. Este produto não substitui acompanhamento médico. Consulte sempre um profissional antes de iniciar qualquer programa de atividade física.
          </p>
        </div>
      </footer>
    </main>
  );
}
