# Guia de Informações e Identidade Visual — Temakeria.com Sumaré

Este documento reúne todas as informações institucionais, operacionais, diretrizes visuais, decisões de projeto e a estrutura da **Temakeria.com Sumaré - O melhor sushi** para apoiar o desenvolvimento da Landing Page.

> **Status:** planejamento aprovado, site em produção (`index.html`, `css/style.css`, `js/main.js`). Itens marcados com ⏳ aguardam o cliente (ver seção 9).

---

## 📍 1. Informações Gerais e Contato

* **Nome Fantasia:** Temakeria.com Sumaré - O melhor sushi
* **Endereço:** Rua Vécio José Alves, Nº 28 — Parque Franceschini, Sumaré - SP, CEP 13170-000
* **Telefone / WhatsApp:** [+55 (19) 98224-5121](https://wa.me/5519982245121)
* **Telefone fixo:** (19) 3828-4466 (consta no material de divulgação do rodízio)
* **Cardápio Digital / Pedidos:** [https://pedido.anota.ai/loja/temakeriacomsumare](https://pedido.anota.ai/loja/temakeriacomsumare)
* **Instagram:** [@temakeria.comsumare](https://www.instagram.com/temakeria.comsumare?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==)
* **Facebook:** [Temakeria.com Sumaré](https://www.facebook.com/temakeria.comsumare/)
* **Link Google Meu Negócio:** [https://share.google/HmILzBsNvcNlbK5im](https://share.google/HmILzBsNvcNlbK5im)
* **Domínio / hospedagem:** ainda não existem. Usar caminhos relativos; canonical, `og:url` e sitemap entram quando houver domínio.

---

## 🕙 2. Horários e Atendimento

* **Funcionamento:** **todos os dias**
* **Almoço:** 11:00 às 15:00
* **Jantar:** 18:00 às 23:00
* **Modalidades:** Consumo no Local (atendimento por ordem de chegada), Delivery e Retirada no Balcão.
* **Não há Drive Thru** (apesar de aparecer em material antigo de divulgação). Nunca mencionar no site.

---

## 🍣 3. Destaques do Cardápio & Diferenciais

1. **Rodízio Completo:** Opções no almoço e no jantar com variedade de sushis, sashimis, temakis, pratos quentes e sobremesas.
2. **Especialidade da Casa — Sushi Burguer:** Combinação inovadora da gastronomia artesanal com a culinária japonesa.
3. **Temaki Salmão Crocante:** Temaki especial coberto com crosta/farofa crocante de nachos (Doritos).
4. **Combinados & Sashimis Frescos:** Seleção de lâminas de salmão e peças exclusivas para rodízio e delivery.

### Itens do Rodízio (do material oficial; a lista original continua em outra página, "e muito mais")
* **Destaques do card "O que tem no nosso rodízio?":** Camarão, Shimeji, Temaki, Sushi, Teppan de Salmão, Sashimi, Açaí, Sobremesa.
* **Lista numerada:** Combinado Rodízio, Empanado Sil, Harumaki de Legumes, Açaí, Carpaccio Flambado, Harumaki de Queijo, Cone de Chocolate com Morango, Carpaccio, Ferinha (enrolado de salmão com shimeji e cream cheese), Teppan de Salmão, Yakisoba, Hot Roll, Lula na Manteiga, Goiabinha, Ceviche de Tilápia, Ceviche do Chefe, Sunomono, Ceviche, Bananinha (banana com Nutella), Temaki Crocante – Nachos, Shimeji, Harumaki de Chocolate, Lula Dorê, Camarão Empanado, Tiras de Frango ao Molho Teriyaki, Sorvete de Creme.
* No site, a lista é agrupada em **Frios**, **Quentes** e **Doces**, com o aviso "itens sujeitos à disponibilidade do dia".

### Regras de conteúdo
* **Nenhum preço no site** (nem do rodízio, nem de itens). Quem quiser valores é direcionado ao WhatsApp ou ao cardápio do Anota Aí.
* **Depoimentos:** por enquanto são **fictícios** (marcados com comentário no HTML). ⏳ Substituir por avaliações reais do Google **antes de publicar**.
* Não há foto do **Sushi Burguer** nem do **Temaki Salmão Crocante**. Os cards deles usam ilustração em traço (SVG) sobre cor sólida, nunca a foto de outro prato.
* O site não tem carrinho nem pedido próprio: todo pedido sai para o Anota Aí ou para o WhatsApp.

---

## 🎨 4. Paleta de Cores e Identidade Visual

### Cores definidas (Dark Mode)

| Aplicação | Nome da Cor | Hexadecimal | Finalidade |
| :--- | :--- | :--- | :--- |
| **Fundo Principal** | Preto Carvão | `#0D0D0D` | Elegância, tom moderno, alto contraste para fotos de alimentos. |
| **Superfície (cards, seções alternadas)** | Grafite | `#1A1A1A` | Separar camadas sobre o fundo principal. |
| **Destaque / CTAs** | Vermelho Carmim | `#E50914` | Botões de ação ("Pedir Agora"), badges e estímulo ao apetite. |
| **Secundária / Detalhes** | Salmão Fresco | `#FF7A59` | Detalhes, hover de botões, ícones, textos pequenos de destaque. |
| **Texto Principal** | Branco Puro | `#FFFFFF` | Títulos e textos de alta prioridade sobre fundo escuro. |
| **Texto Secundário** | Off-White / Cinza | `#E0E0E0` | Descrições, endereço e informações secundárias. |

### Regras de uso de cor
* O vermelho `#E50914` tem contraste de apenas ~4:1 sobre o fundo escuro. Usar **só como preenchimento** (botões com texto branco em negrito, faixas, discos, badges) e em textos grandes. **Nunca em texto pequeno.**
* Para texto pequeno ou ícones coloridos, usar o salmão `#FF7A59` (contraste ~7,5:1).
* Tons derivados (brilhos, bordas, hover) saem de `color-mix()` ou de transparências das cores acima.
* Todas as cores ficam como variáveis CSS em `:root`.

### Tipografia
* **Títulos (Headings):** *Montserrat* (caixa alta, peso 800–900).
* **Corpo de Texto:** *Inter* (peso 400/500/600).
* **Acento pincel:** *Permanent Marker*, só em 1 palavra por título (ex.: "melhor"). Ecoa o lettering do logo e dos posts de divulgação.
* **Detalhe decorativo:** ideogramas japoneses (寿司, 手巻き, 鮮, 和, 速) em *Noto Serif JP*, carregada só com esses caracteres (`text=` do Google Fonts). Uso puramente decorativo (`aria-hidden`).

### Logo
* Usar a versão transparente `img/logo-temakeria-semfundo.png`, otimizada em `img/opt/logo-160.webp` (header) e `logo-400.webp` (footer).

---

## 🧭 5. Conceito de Design — "O Sol Vermelho"

O logo é um **disco vermelho com lettering de pincel**. Esse disco é o fio condutor do site, como um sol nascente sobre fundo escuro, com clima de izakaya à noite.

* **Motivo recorrente:** disco vermelho com brilho atrás do hero, máscara circular na foto do prato, anel de texto girando, disco crescendo no CTA final.
* **Hero:** a foto `sushi3` (prato redondo visto de cima) recortada em círculo sobre o disco vermelho, girando levemente com o scroll.
* **Clima:** fundo quase preto, fotos quentes (madeira e salmão), vermelho apenas como acento, grão de filme sutil por cima de tudo.
* **Movimento:** entrada orquestrada no carregamento, revelações no scroll, vitrine horizontal, marquee. Tudo desligado com `prefers-reduced-motion`.

---

## 🚀 6. Estrutura da Landing Page (seção a seção)

1. **Header (fixo):** transparente no topo, vira vidro fosco ao rolar. Logo, links (Especialidades, Rodízio, Galeria, Localização) e CTA de WhatsApp. No mobile: menu em tela cheia e **barra fixa inferior** ("Pedir online" e "WhatsApp").
2. **Hero:** "O **melhor** sushi de Sumaré", subtítulo, botões `[Fazer Pedido Online]` (Anota Aí) e `[Ver Cardápio]` (âncora para o rodízio). Selo dinâmico "Aberto agora · fecha às 23h". Disco vermelho, prato girando, anel de texto e cards flutuantes.
3. **Marquee:** duas faixas cruzadas com "Rodízio • Sushi Burguer • Temaki Crocante • Delivery • Retirada".
4. **Especialidades (vitrine):** Rodízio Completo (foto), Sushi Burguer (ilustração), Temaki Salmão Crocante (ilustração), Combinados & Sashimis (foto) e card final para o cardápio completo. Desktop: scroll horizontal fixado. Mobile: carrossel com scroll-snap.
5. **Rodízio por dentro:** "O que tem no nosso **rodízio?**". Colagem de fotos + abas Frios / Quentes / Doces com a lista oficial. Horários e CTA "Consultar valores no WhatsApp".
6. **Por que nos escolher?** 3 pilares editoriais com ideogramas: peixe fresco (鮮), ambiente aconchegante (和), agilidade (速).
7. **Galeria:** grid assimétrico (bento) com 7 fotos, lightbox (`<dialog>`) e tile do Instagram.
8. **Depoimentos:** 3 cards (⏳ fictícios por enquanto) + link para as avaliações no Google.
9. **Como pedir:** Delivery (Anota Aí), Retirada no balcão (WhatsApp), No local (ordem de chegada).
10. **Localização e Horários:** status ao vivo, tabela de horários com o período atual destacado, endereço, telefones, mapa escuro, botões "Como chegar" e "Ver no Google".
11. **CTA final:** "Bateu a **fome?**" com disco vermelho crescendo no scroll.
12. **Footer:** logo, contato, endereço, horários, redes sociais, wordmark gigante e direitos autorais.
13. **Extras:** botão flutuante de WhatsApp (desktop).

---

## 🛠️ 7. Decisões Técnicas

* **Stack: HTML5 + CSS3 + JavaScript puro** (sem framework, sem build, **sem bibliotecas JS**). Página única e estática, foco em velocidade e manutenção simples.
* **Arquivos:** `index.html`, `css/style.css`, `js/main.js`, `img/` (originais) e `img/opt/` (versões otimizadas, favicons e imagem Open Graph).
* **Otimização de imagens:** feita com `sharp` (Node), fora do projeto. Fotos em 640px (`-sm`) e até 1200px (`-lg`), WebP com qualidade 78.
* **Performance (metas):** Lighthouse mobile 95+, LCP abaixo de 2,0 s, sem layout shift. `srcset`/`sizes`, `width`/`height` em todas as imagens, `loading="lazy"` (exceto hero), `preload` da imagem do hero, `font-display: swap`, mapa com `loading="lazy"`.
* **SEO local:** `lang="pt-BR"`, title e description com sushi/rodízio/delivery/Sumaré, **JSON-LD `Restaurant`** (endereço, telefones, horários de todos os dias, `servesCuisine`, `hasMenu`, `sameAs`), Open Graph e Twitter Card.
* **Acessibilidade:** HTML semântico, skip link, foco visível, contraste conforme a seção 4, `alt` descritivo, navegação por teclado (abas, lightbox, menu), `prefers-reduced-motion`.
* **Links de ação:** WhatsApp com mensagem pré-preenchida; links externos em nova aba com `rel="noopener"`.

---

## 🖼️ 8. Inventário de Assets (pasta `img/`)

| Arquivo | O que mostra | Uso no site |
| :--- | :--- | :--- |
| `logo-temakeria-semfundo.png` | Logo transparente | Header, footer, favicon, OG |
| `logo-temakeria.png` | Logo com fundo preto | Não usado (substituído) |
| `sushi1.webp` | Salmão maçaricado com cebolinha e gergelim | Galeria, colagem do rodízio |
| `sushi2.webp` | Roll empanado crocante com molho | Galeria |
| `sushi3.webp` | Prato redondo com 5 porções | **Hero** (recorte circular), OG |
| `sushi4.webp` | Sashimi salmão/atum (baixa resolução) | Não usado |
| `sushi5.webp` | Camarões na chapa de ferro | Galeria, colagem do rodízio |
| `sushi6.webp` | Combinado em tábua com taça de ceviche | Card "Rodízio Completo", galeria |
| `sushi7.webp` | Fileira de nigiris de salmão | Card "Combinados & Sashimis", galeria |
| `sushi8.webp` | Prato quente com legumes (estilo yakisoba) | Galeria, colagem do rodízio |

---

## ❓ 9. Pendências (aguardando o cliente)

1. ⏳ **Depoimentos reais** do Google para substituir os fictícios (obrigatório antes de publicar).
2. ⏳ Fotos do **Sushi Burguer** e do **Temaki Salmão Crocante** (os cards podem trocar a ilustração pela foto).
3. ⏳ Confirmar a classificação de itens ambíguos do rodízio (Empanado Sil, Ferinha, Goiabinha).
4. ⏳ Confirmar se o telefone fixo (19) 3828-4466 continua válido (veio do material de divulgação).
5. ⏳ Domínio e hospedagem.
