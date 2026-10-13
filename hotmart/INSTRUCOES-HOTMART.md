# Como publicar na Hotmart Pages

Site do **Dr. Marcelo Kodja** (Ortopedia e Traumatologia). Este guia cobre a
publicação na Hotmart Pages e o que confirmar / substituir antes de ir ao ar.

---

## 1. Publicar o site (jeito recomendado: bloco único)

1. Abra a página no construtor da Hotmart Pages.
2. Arraste um elemento **"Código Customizado"** (HTML) para ocupar a página inteira.
   Deixe-o como o **único** conteúdo daquela seção, sem margens ou colunas por volta.
3. Abra o arquivo **`site-completo.html`**, selecione **todo** o conteúdo (Ctrl+A) e
   cole dentro do bloco de Código Customizado.
4. Salve e clique em **Visualizar**. Publique quando estiver satisfeito.

> Tudo já está embutido nesse arquivo: fontes (Google Fonts), CSS e JavaScript.
> Todo o CSS está escopado sob `#mk-site`, então **não conflita** com o CSS base da
> Hotmart. Não é preciso mexer em mais nada.

### Alternativa: por seções (opcional)
Se preferir dividir em vários blocos, use o `site-completo.html` como base e separe
pelos comentários `<!-- ================= NOME ================= -->`. Nesse caso, o
**primeiro** bloco precisa conter as `<link>` das fontes + a tag `<style>` inteira +
a abertura `<div id="mk-site">`, e o **último** precisa fechar `</div>` + a tag
`<script>`. O bloco único é mais simples e à prova de erros, por isso é o recomendado.

---

## 2. SEO (importante)

O bloco entra no corpo da página, então o **título e a descrição** da página devem
ser definidos nas **configurações de SEO da própria Hotmart** (campo Title e Meta
Description da página). Sugestões prontas:

- **Título:** `Ortopedista em Balneário Camboriú | Dr. Marcelo Kodja`
- **Descrição:** `Dr. Marcelo Kodja Daguer, ortopedista e traumatologista em Balneário Camboriú e Joinville. Mais de 24 anos tratando dores no joelho, coluna e dor crônica com abordagem integrativa. CRM 7670-SC, RQE 2621.`

Os **dados estruturados (JSON-LD)** de médico e endereços já vão dentro do bloco.

---

## 3. Confirme / substitua antes de publicar

| Item | Onde está hoje | O que fazer |
|------|----------------|-------------|
| **WhatsApp (botões)** | Link rastreado atual `https://pxa.marcelokodja.com.br/lt/whatsapp-direto` | Confirmar se é o funil que quer manter. |
| **WhatsApp (número direto)** | `+55 47 99252-0256` no bloco Contato e no rodapé | Confirmar o número. É o que abre a conversa com mensagem pronta. |
| **E-mail** | `adm@marcelokodja.com.br` | Confirmar. |
| **Instagram** | `instagram.com/drmarcelokodja` | Confirmar. |
| **Endereços** | Balneário Camboriú (Av. Carlos Drummond de Andrade, 789, Praia Brava) e Joinville (R. Aracaju, 1382, Santo Antônio) | Confirmar. São os mesmos da Dra. Vivian, conforme combinado. |
| **Foto do médico** | Espaço reservado na seção "Sobre" | Adicionar foto real (ver seção 4). |
| **Depoimentos** | 1 avaliação pública real + espaço para novas | Colar avaliações reais do Google/Doctoralia (ver seção 5). |
| **Horários** | Texto "atendimento com hora marcada" | Incluir horários específicos se desejar. |

Para trocar qualquer texto/link: procure no `site-completo.html` pela palavra
(ex.: `99252-0256` ou `pxa.marcelokodja`) e substitua em todas as ocorrências.

---

## 4. Adicionar a foto do Dr. Marcelo (seção "Sobre")

No `site-completo.html`, procure por `mk-sobre__frame`. Você verá:

```html
<div class="mk-sobre__frame" data-ph="[ Foto do Dr. Marcelo Kodja ... ]"></div>
```

1. Suba a foto na biblioteca de mídia da Hotmart e copie a URL dela.
2. Troque a linha por:

```html
<div class="mk-sobre__frame has-img">
  <img src="COLE_A_URL_DA_FOTO_AQUI" alt="Dr. Marcelo Kodja">
</div>
```

Foto ideal: retrato vertical (proporção 4:5), boa iluminação, fundo neutro.

---

## 5. Adicionar depoimentos reais

Procure por `mk-review`. O primeiro card já traz uma avaliação pública real. Para
adicionar mais, **duplique** um card `<article class="mk-review"> ... </article>` e
troque o texto, o nome e a inicial do avatar. **Use apenas avaliações reais**
(Google/Doctoralia), nunca texto inventado, para respeitar a ética médica.

---

## 6. Checklist final

- [ ] Bloco colado e página visualizando sem erros.
- [ ] Título e descrição de SEO definidos nas configurações da Hotmart.
- [ ] Botões de WhatsApp abrindo a conversa certa (teste no celular).
- [ ] Foto do médico adicionada.
- [ ] Depoimentos reais no lugar dos exemplos.
- [ ] Testado em celular, tablet e desktop.
- [ ] Cache da página limpo / republicado após ajustes.

---

## Ficha de dados usada (fontes públicas)

- Dr. Marcelo Kodja Daguer, Ortopedista e Traumatologista
- CRM 7670-SC · RQE 2621 · 24+ anos de experiência
- Membro da Sociedade Brasileira de Cirurgia do Joelho
- Atendimento particular (não atende convênios)
- WhatsApp: +55 47 99252-0256 · adm@marcelokodja.com.br
- Unidades: Balneário Camboriú (Praia Brava) e Joinville (Santo Antônio), SC
