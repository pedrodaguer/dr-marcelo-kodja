# Site Dr. Marcelo Kodja - Ortopedia e Traumatologia

Site institucional de alta conversão para o Dr. Marcelo Kodja Daguer, hospedado na
**Hotmart Pages**. Conceito visual: **"Estrutura & Movimento"** - azul petróleo
premium com acento em titânio/aço, remetendo a solidez óssea, movimento e
recuperação, sem perder o aspecto clean e clínico.

## O que é cada pasta

```
Site/
├── prototipo/            -> Versão para testar no navegador (multi-arquivo)
│   ├── index.html            abra este arquivo no Chrome
│   ├── css/style.css
│   ├── js/app.js
│   └── img/                  onde colocar as fotos (ver LEIA-ME-IMAGENS.txt)
│
└── hotmart/              -> Versão para publicar
    ├── site-completo.html    bloco ÚNICO, cole no "Código Customizado (HTML)"
    └── INSTRUCOES-HOTMART.md  passo a passo + o que confirmar/substituir
```

O `site-completo.html` é gerado a partir do protótipo testado, então os dois são
**idênticos** (paridade 1:1). Alterou o protótipo? Regenere o bloco da Hotmart.

## Como testar localmente

Abra `prototipo/index.html` no Chrome (duplo clique). Não precisa de servidor.

## Destaques técnicos

- **Paleta oficial** do site atual (azul `#034697` e derivados) + acento titânio/aço.
- **Tipografia:** Fraunces (títulos), Manrope (texto), JetBrains Mono (detalhes técnicos).
- **Responsivo de verdade** (mobile-first): cortes em 1024px + camada de tablet-retrato.
- **Sem dependências externas de JS** (nada de GSAP/CDN frágil). Animações em
  IntersectionObserver, com salvaguarda: se o JS falhar, o conteúdo continua visível.
- **CSS 100% escopado** em `#mk-site`, sem colidir com o CSS base da Hotmart.
- **CTA por WhatsApp** (link rastreado nos botões + número direto no contato/rodapé).
- **SEO local:** JSON-LD de médico + endereços das duas unidades.
- **Prova social honesta:** fatos verificáveis + avaliação pública real + espaço para novas.
- **Identidade ortopédica:** arte vetorial de articulação e arco de amplitude de
  movimento, microinterações e divisores metálicos.

## Conteúdo (fontes públicas)

Dr. Marcelo Kodja Daguer · Ortopedista e Traumatologista · CRM 7670-SC · RQE 2621 ·
24+ anos · Sociedade Brasileira de Cirurgia do Joelho · Balneário Camboriú e Joinville.

Veja `hotmart/INSTRUCOES-HOTMART.md` para a lista de itens a confirmar antes de publicar.
