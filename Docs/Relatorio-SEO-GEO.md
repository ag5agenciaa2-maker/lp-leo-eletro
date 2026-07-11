# Relatório de Auditoria SEO/GEO — Leo Eletro

**Data:** 11/07/2026
**Página auditada:** `index.html` (Landing Page — https://www.leoeletro.aghelp.site/)
**Skill:** SEO Specialist (SEO + GEO)

---

## 1. Resumo

A landing page já tinha uma boa base (HTML semântico, `lang="pt-BR"`, WebP, `loading="lazy"`, HTTPS, política de privacidade/LGPD). Faltavam, porém, **os sinais estruturados que mais pesam para o Google Local e para os motores de IA** (ChatGPT, Perplexity, Claude): dados estruturados (Schema.org), canonical, Twitter Cards, geolocalização e os arquivos `robots.txt`/`sitemap.xml`.

Todas essas lacunas foram corrigidas diretamente no código.

---

## 2. O que foi implementado (on-page)

### Technical SEO
| Item | Antes | Depois |
|------|-------|--------|
| **Title tag** | "Leo Eletro — Conserto e Acessórios…" (marca na frente) | **"Conserto de Celular em Bangu RJ \| Leo Eletro — iPhone e Android"** (palavra-chave + localização no início — *front-loading*) |
| **Meta description** | Genérica | Reescrita com keywords (conserto iPhone/Android, garantia, mesmo dia) — 155 caracteres |
| **Canonical** | ❌ Ausente | ✅ `<link rel="canonical">` |
| **Meta robots** | ❌ Ausente | ✅ `index, follow, max-image-preview:large` |
| **theme-color** | ❌ Ausente | ✅ `#0b0b0b` |
| **Geo tags** | ❌ Ausente | ✅ `geo.region`, `geo.placename`, `geo.position`, `ICBM` |
| **robots.txt** | ❌ Ausente | ✅ Criado (libera bots de IA — GPTBot, PerplexityBot, ClaudeBot, Google-Extended) |
| **sitemap.xml** | ❌ Ausente | ✅ Criado (só a home indexável; páginas legais são `noindex`) |

### Social & Semântico
| Item | Status |
|------|--------|
| Open Graph completo (`og:url`, `og:site_name`, `og:locale`, `og:image` absoluta, `og:image:alt`) | ✅ Completado |
| Twitter Cards (`summary_large_image`) | ✅ Adicionado |
| Landmark `<main>` | ✅ Adicionado (envolve o conteúdo entre o `<header>`/hero e o `<footer>`) |

### Dados Estruturados (JSON-LD) — grande ganho para GEO e Rich Snippets
1. **`ElectronicsStore`** (LocalBusiness): NAP completo, `geo` (coordenadas), horário de funcionamento, formas de pagamento, `priceRange`, `sameAs` (Instagram/Facebook), catálogo de serviços e link do Google Maps.
2. **`AggregateRating`**: 4,9 ★ com 158 avaliações (embutido no negócio) → elegível para estrelas nos resultados.
3. **`FAQPage`**: as 5 perguntas/respostas do site → elegível para rich snippet de FAQ e citação por IA.

> ✅ Ambos os blocos JSON-LD foram validados (JSON sintaticamente correto).

### Performance / Core Web Vitals
| Item | Ação |
|------|------|
| **LCP** | Imagem de fundo do hero recebeu `fetchpriority="high"` + `decoding="async"` |
| **INP** | `script.js` passou a carregar com `defer` (cookie-banner.js já tinha) |
| **Fontes** | Já usavam `display=swap` e `preconnect` — mantido |
| **Imagens** | Já em WebP com `loading="lazy"` abaixo da dobra — mantido |

---

## 3. Pontos de atenção (dados a confirmar)

- **Ano de abertura / "+20 anos":** o dossiê aponta divergência (formulário diz 2011; Instagram diz "+20 anos"). Por isso **não** incluí `foundingDate` no Schema, para não afirmar dado incorreto. Se confirmarem o ano, adiciono.
- **CNPJ:** pendente no dossiê — quando disponível, pode entrar no Schema (`identifier`/`legalName`).
- **Domínio:** todo o Schema/canonical/OG usa `https://www.leoeletro.aghelp.site/`. **Se o domínio final de produção for outro, é preciso atualizar** essas URLs (canonical, og:url, og:image, JSON-LD, robots.txt e sitemap.xml).

---

## 4. ✅ Checklist Externo / Off-Page (você precisa fazer manualmente)

Estas tarefas **não podem ser feitas via código** — são ações externas essenciais para ranquear:

- [ ] **Google Meu Negócio (GMB):** verificar/completar o perfil. Garantir que o **NAP** (Nome, Endereço, Telefone) esteja **idêntico** ao do site: *Leo Eletro · Av. Cônego Vasconcelos, 549 - Lj B, Bangu, RJ, 21810-011 · (21) 97010-8814*.
- [ ] **Google Search Console:** cadastrar o site, enviar o `sitemap.xml` (`https://www.leoeletro.aghelp.site/sitemap.xml`) e solicitar indexação.
- [ ] **Google Analytics / Tag Manager:** instalar o código de acompanhamento (não há tag de analytics no site hoje).
- [ ] **Confirmar dados pendentes:** ano de abertura e CNPJ (ver seção 3) para enriquecer o Schema.
- [ ] **Backlinks locais:** cadastrar em diretórios (Apontador, GuiaMais, etc.) e parceiros do bairro, sempre com NAP consistente.
- [ ] **Redes sociais:** garantir que Instagram (@eletro_leo) e Facebook apontem para o site na bio.
- [ ] **PageSpeed Insights:** rodar um teste ao vivo após o deploy para checar tempo de resposta do servidor (fatores server-side que o código não controla).
- [ ] **Hosting/SSL:** garantir que o servidor force **HTTPS** (redirect 301 de http→https e de não-www→www, ou vice-versa, alinhado ao canonical).
- [ ] **Validar Rich Results:** testar a home no [Rich Results Test](https://search.google.com/test/rich-results) do Google para confirmar os snippets de LocalBusiness e FAQ.

---

## 5. Arquivos alterados/criados

- `index.html` — head reescrito (meta, OG, Twitter, geo, 2× JSON-LD), `<main>`, `fetchpriority` no hero, `defer` no script.
- `robots.txt` — **novo**
- `sitemap.xml` — **novo**
- `Docs/Relatorio-SEO-GEO.md` — este relatório

---

> **Resumo:** o on-page está tecnicamente pronto para SEO local e GEO. O próximo passo — e o de maior impacto agora — é o **item off-page**, principalmente **Google Meu Negócio** e **Search Console**.
