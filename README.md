# Palmeiras BI Dashboard 2026

Dashboard de performance do Palmeiras na temporada 2026. HTML/CSS/JS puro — abre direto no navegador.

## Como usar

1. Abra `index.html` no browser
2. Clique em **"Carregar planilha (.xlsx)"** e selecione `Palmeiras_BI_2026.xlsx`
3. Use os filtros no topo (Competição, Casa/Fora, Resultado, Adversário)

## O que mostra

- **KPIs**: Jogos, V/E/D, Gols, Saldo, Pontos, Aproveitamento
- **Por torneio**: Cards com aproveitamento, médias, barras de progresso
- **Casa × Fora**: Comparativo lado a lado com diferença % 
- **Ranking adversários**: 4 abas (mais enfrentados, melhor aproveitamento, maior dificuldade, mais vencidos)
- **Evolução**: Gráfico de linhas (pontos, saldo, aproveitamento móvel 5 jogos)
- **Momento**: Últimos 5 jogos, tendência, sequências da temporada
- **Ofensiva/Defensiva**: Distribuição de gols + 6 cards (clean sheets, maiores goleadas, etc)
- **Donut**: Vitórias/Empates/Derrotas
- **Últimos 10 jogos**: Tabela com tags coloridas
- **Confrontos importantes**: 4 cards de destaque

## Stack

- HTML + CSS (Grid/Flex, variáveis CSS, tema verde escuro)
- JS vanilla (SheetJS via CDN para ler Excel)
- Zero build, zero dependências locais

## Dados esperados no Excel

Colunas: `Data, Adversario, Competicao, Local, Gols_Palmeiras, Gols_Adversario, Resultado`  
Locais "Casa": Allianz Parque, Arena Barueri, Nubank Parque