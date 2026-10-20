# Palmeiras BI Dashboard 2026

Dashboard de performance do Palmeiras na temporada 2026. HTML/CSS/JS puro — abre direto no navegador, sem build e sem servidor.

## Como usar

1. Abra `index.html` no browser — os dados da temporada vêm embutidos no `script.js` (até Athletico-PR 0 x 2 Palmeiras, 17/10/2026)
2. Use os filtros no topo (Competição, Mando, Resultado, Adversário)

## Atualizando a base embutida

No topo do `script.js`, acrescente uma linha por jogo em `BASE_PARTIDAS`:

```js
['17/10/2026', 'Athletico-PR', 'Brasileirão', 'Ligga Arena', 2, 0, 'Maurício e Piquerez'],
//  data        adversário      competição     estádio     PAL ADV  autores dos gols
```

- **Autores** vão como a fonte escreve: `'V.Roque (2), Andreas e Sosa'`; `(c)` marca gol contra a favor; jogo sem gol fica `''`.
- Abreviações viram nome completo pela tabela `APELIDOS`, logo abaixo. Um apelido novo que não estiver lá aparece como outro jogador na artilharia — acrescente-o.
- Se os autores de um jogo não somarem o placar, o console do navegador (F12) avisa qual jogo.
- Resultado, placar e mando são derivados. Jogos em **Allianz Parque**, **Arena Barueri** ou **Nubank Parque** contam como mando de campo. Um 8º campo opcional substitui o placar exibido, para pênaltis: `'2(3)x(4)3'`.
- Jogos de **mata-mata** não valem pontos e aparecem com "—" na coluna Pts. A regra fica em `JOGOS_ANTES_DO_MATA_MATA`: quantos jogos de fase de pontos cada competição tem antes do mata-mata (Copa do Brasil `0`, Libertadores `6`). Jogos novos dessas competições já entram certos, sem marcar nada.
- Assistências (que não têm registro por jogo) ficam em `BASE_ASSISTENCIAS`.

## O que mostra

- **KPIs**: jogos, V/E/D, gols, saldo, pontos, aproveitamento — e até quando vão os dados
- **Por torneio**: aproveitamento, médias, barra de progresso e artilheiro de cada competição
- **Casa × Fora**: comparativo lado a lado com a diferença em pontos percentuais
- **Ranking de adversários**: 4 recortes (mais enfrentados, melhor aproveitamento, maior dificuldade, mais vencidos) com colunas ordenáveis
- **Evolução**: dois painéis com o mesmo eixo — pontos e saldo acumulados; aproveitamento móvel de 5 jogos contra a média do recorte. Mouse, toque ou teclado (foque o gráfico e use ← →) mostram cada partida com placar e autores dos gols
- **Momento**: últimos 5 jogos (com adversário e placar), tendência, sequência em curso e as maiores sequências do recorte, com período
- **Elenco**: artilharia (responde aos filtros) e assistências (temporada inteira), top 10 com "ver todos"
- **Ofensiva/Defensiva**: distribuição de gols por partida + 6 cards de destaque
- **Resultados**: donut V/E/D + barras por torneio e por mando
- **Partidas**: tabela com estádio, autores dos gols e mata-mata sinalizado; busca sem acento (time, jogador, estádio), ordenação e recorte de 5 / 10 / todas
- **Exportação**: botão **CSV** baixa as partidas do recorte atual (separador `;` + BOM, abre direto no Excel pt-BR)

Tudo responde aos filtros: cada mudança recalcula o painel inteiro a partir das linhas filtradas. A exceção são as assistências, que não têm registro por partida — a própria seção indica o escopo quando há filtro ativo.

## Stack

- HTML + CSS (Grid/Flex, variáveis CSS, tema verde escuro)
- JS vanilla, gráficos em SVG desenhados à mão (sem lib de charts), redesenhados na largura real da tela
- Zero build, zero dependências de rede além das fontes

## Estrutura

```
index.html    marcação e containers
styles.css    tema, componentes, responsivo e print
script.js     base embutida + cálculo (buildDataFromRows) + renderização
escudo.png    escudo em 220px (topo, hero e favicon)
```

O `script.js` tem duas camadas: a base embutida (`BASE_PARTIDAS`, `APELIDOS`, `JOGOS_ANTES_DO_MATA_MATA`, `BASE_ASSISTENCIAS`) e as funções de cálculo e render. `buildDataFromRows()` é a única fonte de números — cada filtro passa por ela, então não existe estatística calculada em dois lugares diferentes.
