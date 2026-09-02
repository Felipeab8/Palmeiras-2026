# Palmeiras BI Dashboard 2026

Dashboard de performance do Palmeiras na temporada 2026. HTML/CSS/JS puro — abre direto no navegador, sem build e sem servidor.

## Como usar

1. Abra `index.html` no browser
2. Clique em **"Carregar planilha (.xlsx)"** e selecione `Palmeiras_BI_2026.xlsx`
3. Use os filtros no topo (Competição, Mando, Resultado, Adversário)

A última planilha carregada fica salva no navegador (localStorage) e volta sozinha na próxima abertura. **Restaurar base original** limpa esse cache e volta aos dados embutidos no `script.js`.

## O que mostra

- **KPIs**: jogos, V/E/D, gols, saldo, pontos, aproveitamento
- **Por torneio**: cards com aproveitamento, médias e barra de progresso
- **Casa × Fora**: comparativo lado a lado com a diferença em pontos percentuais
- **Ranking de adversários**: 4 recortes (mais enfrentados, melhor aproveitamento, maior dificuldade, mais vencidos) com colunas ordenáveis
- **Evolução**: gráfico interativo de pontos acumulados, saldo e aproveitamento móvel de 5 jogos — passe o mouse para ver partida a partida
- **Momento**: últimos 5 jogos, tendência e sequências do recorte
- **Elenco**: artilharia e assistências
- **Ofensiva/Defensiva**: distribuição de gols por partida + 6 cards de destaque
- **Donut**: vitórias/empates/derrotas
- **Partidas**: tabela com busca, ordenação e recorte de 5 / 10 / todas
- **Exportação**: botão **CSV** baixa as partidas do recorte atual (separador `;` + BOM, abre direto no Excel pt-BR)

Tudo responde aos filtros: cada mudança recalcula o painel inteiro a partir das linhas filtradas. Artilharia e assistências são a exceção — a base não liga gol a partida, então esses números são sempre da temporada cheia (indicado na própria seção).

## Stack

- HTML + CSS (Grid/Flex, variáveis CSS, tema verde escuro)
- JS vanilla, gráficos em SVG desenhados à mão (sem lib de charts)
- SheetJS (`xlsx.full.min.js`, local) para ler o Excel
- Zero build, zero dependências de rede além das fontes

## Dados esperados no Excel

Aba **`Fato_Partidas`** (ou a primeira aba com "fato" no nome; se não houver, a primeira aba do arquivo):

| Coluna | Obrigatória | Observação |
|---|---|---|
| `Data` | sim | data serial do Excel, `dd/mm/aaaa` ou ISO |
| `Adversario` | sim | |
| `Competicao` | sim | |
| `Local` | sim | também aceita `Local_Estadio` |
| `Gols_Palmeiras` | sim | |
| `Gols_Adversario` | sim | |
| `Resultado` | sim | `Vitória` / `Empate` / `Derrota` |
| `Placar` | não | derivado dos gols quando ausente |

Jogos em **Allianz Parque**, **Arena Barueri** ou **Nubank Parque** contam como mando de campo.

Abas opcionais **`Artilharia`** e **`Assistencias`**: uma coluna de nome (`Jogador`) e uma coluna numérica. Sem elas, a seção Elenco avisa que a planilha não trouxe os dados — nada é herdado da planilha anterior.

## Estrutura

```
index.html    marcação e containers
styles.css    tema, componentes, responsivo e print
script.js     DATA embutido + cálculo (buildDataFromRows) + renderização
```

O `script.js` tem três camadas: persistência local, a base `DATA` embutida (temporada 2026), e as funções de render. `buildDataFromRows()` é a única fonte de números — tanto o upload quanto cada filtro passam por ela, então não existe estatística calculada em dois lugares diferentes.
