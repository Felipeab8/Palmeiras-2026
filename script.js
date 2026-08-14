const STORAGE_KEY = 'palmeiras_bi_2026_rawrows';

function saveToStorage(rows) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
  } catch (e) {
    console.warn('localStorage cheio:', e);
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Erro ao ler localStorage:', e);
  }
  return null;
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

let DATA = {"header": {"jogos": 44, "vitorias": 29, "empates": 9, "derrotas": 6, "golsMarcados": 77, "golsSofridos": 34, "saldo": 43, "pontos": 96, "pontosPossiveis": 132, "aproveitamento": 72.7}, "porCompeticao": [{"competicao": "Paulista", "jogos": 12, "vitorias": 9, "empates": 1, "derrotas": 2, "golsMarcados": 17, "golsSofridos": 9, "saldo": 8, "pontos": 28, "pontosPossiveis": 36, "aproveitamento": 77.8, "mediaGP": 1.42, "mediaGC": 0.75}, {"competicao": "Copa do Brasil", "jogos": 4, "vitorias": 3, "empates": 0, "derrotas": 1, "golsMarcados": 12, "golsSofridos": 4, "saldo": 8, "pontos": 9, "pontosPossiveis": 12, "aproveitamento": 75.0, "mediaGP": 3.0, "mediaGC": 1.0}, {"competicao": "Brasileirão", "jogos": 22, "vitorias": 14, "empates": 6, "derrotas": 2, "golsMarcados": 38, "golsSofridos": 16, "saldo": 22, "pontos": 48, "pontosPossiveis": 66, "aproveitamento": 72.7, "mediaGP": 1.73, "mediaGC": 0.73}, {"competicao": "Libertadores", "jogos": 6, "vitorias": 3, "empates": 2, "derrotas": 1, "golsMarcados": 10, "golsSofridos": 5, "saldo": 5, "pontos": 11, "pontosPossiveis": 18, "aproveitamento": 61.1, "mediaGP": 1.67, "mediaGC": 0.83}], "melhorCompeticao": "Paulista", "piorCompeticao": "Libertadores", "casaXFora": {"casa": {"jogos": 23, "vitorias": 17, "empates": 4, "derrotas": 2, "golsMarcados": 42, "golsSofridos": 14, "saldo": 28, "pontos": 55, "pontosPossiveis": 69, "aproveitamento": 79.7, "mediaGolsJogo": 1.83}, "fora": {"jogos": 21, "vitorias": 12, "empates": 5, "derrotas": 4, "golsMarcados": 35, "golsSofridos": 20, "saldo": 15, "pontos": 41, "pontosPossiveis": 63, "aproveitamento": 65.1, "mediaGolsJogo": 1.67}}, "maisEnfrentados": [{"adversario": "Novorizontino", "jogos": 3, "vitorias": 2, "empates": 0, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 5, "saldo": -2, "aproveitamento": 66.7}, {"adversario": "São Paulo", "jogos": 3, "vitorias": 3, "empates": 0, "derrotas": 0, "golsMarcados": 6, "golsSofridos": 2, "saldo": 4, "aproveitamento": 100.0}, {"adversario": "Atlético-MG", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 4, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Cerro Porteño", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 1, "golsSofridos": 2, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Corinthians", "jogos": 2, "vitorias": 1, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 0, "saldo": 1, "aproveitamento": 66.7}, {"adversario": "Fortaleza", "jogos": 2, "vitorias": 1, "empates": 0, "derrotas": 1, "golsMarcados": 5, "golsSofridos": 3, "saldo": 2, "aproveitamento": 50.0}], "melhorAproveitamento": [{"adversario": "Jacuipense", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 7, "golsSofridos": 1, "saldo": 6, "aproveitamento": 100.0}, {"adversario": "Mirassol", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 2, "golsSofridos": 0, "saldo": 2, "aproveitamento": 100.0}, {"adversario": "Sporting Cristal", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 4, "golsSofridos": 1, "saldo": 3, "aproveitamento": 100.0}, {"adversario": "São Paulo", "jogos": 3, "vitorias": 3, "empates": 0, "derrotas": 0, "golsMarcados": 6, "golsSofridos": 2, "saldo": 4, "aproveitamento": 100.0}, {"adversario": "Vitória", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 9, "golsSofridos": 1, "saldo": 8, "aproveitamento": 100.0}, {"adversario": "Corinthians", "jogos": 2, "vitorias": 1, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 0, "saldo": 1, "aproveitamento": 66.7}], "maiorDificuldade": [{"adversario": "Botafogo-SP", "jogos": 1, "vitorias": 0, "empates": 0, "derrotas": 1, "golsMarcados": 0, "golsSofridos": 1, "saldo": -1, "aproveitamento": 0.0}, {"adversario": "Vasco", "jogos": 1, "vitorias": 0, "empates": 0, "derrotas": 1, "golsMarcados": 1, "golsSofridos": 2, "saldo": -1, "aproveitamento": 0.0}, {"adversario": "Atlético-MG", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 4, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Cerro Porteño", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 1, "golsSofridos": 2, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Cruzeiro", "jogos": 1, "vitorias": 0, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 1, "saldo": 0, "aproveitamento": 33.3}, {"adversario": "Guarani", "jogos": 1, "vitorias": 0, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 1, "saldo": 0, "aproveitamento": 33.3}], "maisVencidos": [{"adversario": "São Paulo", "jogos": 3, "vitorias": 3, "empates": 0, "derrotas": 0, "golsMarcados": 6, "golsSofridos": 2, "saldo": 4, "aproveitamento": 100.0}, {"adversario": "Jacuipense", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 7, "golsSofridos": 1, "saldo": 6, "aproveitamento": 100.0}, {"adversario": "Mirassol", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 2, "golsSofridos": 0, "saldo": 2, "aproveitamento": 100.0}, {"adversario": "Novorizontino", "jogos": 3, "vitorias": 2, "empates": 0, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 5, "saldo": -2, "aproveitamento": 66.7}, {"adversario": "Sporting Cristal", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 4, "golsSofridos": 1, "saldo": 3, "aproveitamento": 100.0}, {"adversario": "Vitória", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 9, "golsSofridos": 1, "saldo": 8, "aproveitamento": 100.0}], "sequencias": {"maiorVitorias": 5, "maiorSemPerder": 17, "maiorDerrotas": 1, "maiorSemVencer": 2, "maiorMarcando": 16, "maiorSemSofrer": 3, "maiorSofrendo": 5}, "ultimos5": [{"data": "26/07/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Casa", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "29/07/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Fora", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "02/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "05/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Fora", "placar": "2x3", "resultado": "Derrota", "gp": 2, "gc": 3}, {"data": "09/08/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Casa", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}], "ultimos10": [{"data": "20/05/2026", "adversario": "Cerro Porteño", "competicao": "Libertadores", "local": "Casa", "placar": "0x1", "resultado": "Derrota", "gp": 0, "gc": 1}, {"data": "23/05/2026", "adversario": "Flamengo", "competicao": "Brasileirão", "local": "Fora", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "28/05/2026", "adversario": "Junior Barranquilla", "competicao": "Libertadores", "local": "Casa", "placar": "4x1", "resultado": "Vitória", "gp": 4, "gc": 1}, {"data": "31/05/2026", "adversario": "Chapecoense", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "22/07/2026", "adversario": "Coritiba", "competicao": "Brasileirão", "local": "Fora", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "26/07/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Casa", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "29/07/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Fora", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "02/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "05/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Fora", "placar": "2x3", "resultado": "Derrota", "gp": 2, "gc": 3}, {"data": "09/08/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Casa", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}], "momentoAtual": {"sequencia": ["D", "V", "V", "D", "E"], "pontos": 7, "aproveitamento": 46.7, "classificacao": "Regular", "tendencia": "Caindo", "pontos10": 19, "aproveitamento10": 63.3}, "goleadaAplicada": {"adversario": "Vitória", "placar": "5x1", "data": "04/02/2026", "competicao": "Brasileirão"}, "goleadaSofrida": {"adversario": "Novorizontino", "placar": "0x4", "data": "20/01/2026", "competicao": "Paulista"}, "cleanSheets": 18, "jogosSemMarcar": 5, "maiorGP_umJogo": 5, "maiorGC_umJogo": 4, "distribuicaoGolsMarcados": {"0": 5, "1": 18, "2": 10, "3": 6, "4": 4, "5": 1}, "evolucao": [{"jogo": 1, "data": "10/01/2026", "pontosAcum": 3, "saldoAcum": 1, "gp": 1, "gc": 0, "aprovMovel5": null}, {"jogo": 2, "data": "14/01/2026", "pontosAcum": 6, "saldoAcum": 2, "gp": 1, "gc": 0, "aprovMovel5": null}, {"jogo": 3, "data": "17/01/2026", "pontosAcum": 9, "saldoAcum": 3, "gp": 1, "gc": 0, "aprovMovel5": null}, {"jogo": 4, "data": "20/01/2026", "pontosAcum": 9, "saldoAcum": -1, "gp": 0, "gc": 4, "aprovMovel5": null}, {"jogo": 5, "data": "24/01/2026", "pontosAcum": 12, "saldoAcum": 1, "gp": 3, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 6, "data": "28/01/2026", "pontosAcum": 13, "saldoAcum": 1, "gp": 2, "gc": 2, "aprovMovel5": 66.7}, {"jogo": 7, "data": "01/02/2026", "pontosAcum": 13, "saldoAcum": 0, "gp": 0, "gc": 1, "aprovMovel5": 46.7}, {"jogo": 8, "data": "04/02/2026", "pontosAcum": 16, "saldoAcum": 4, "gp": 5, "gc": 1, "aprovMovel5": 46.7}, {"jogo": 9, "data": "08/02/2026", "pontosAcum": 19, "saldoAcum": 5, "gp": 1, "gc": 0, "aprovMovel5": 66.7}, {"jogo": 10, "data": "12/02/2026", "pontosAcum": 22, "saldoAcum": 7, "gp": 3, "gc": 1, "aprovMovel5": 66.7}, {"jogo": 11, "data": "15/02/2026", "pontosAcum": 23, "saldoAcum": 7, "gp": 1, "gc": 1, "aprovMovel5": 66.7}, {"jogo": 12, "data": "21/02/2026", "pontosAcum": 26, "saldoAcum": 11, "gp": 4, "gc": 0, "aprovMovel5": 86.7}, {"jogo": 13, "data": "25/02/2026", "pontosAcum": 29, "saldoAcum": 12, "gp": 2, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 14, "data": "01/03/2026", "pontosAcum": 32, "saldoAcum": 13, "gp": 2, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 15, "data": "04/03/2026", "pontosAcum": 35, "saldoAcum": 14, "gp": 1, "gc": 0, "aprovMovel5": 86.7}, {"jogo": 16, "data": "08/03/2026", "pontosAcum": 38, "saldoAcum": 15, "gp": 2, "gc": 1, "aprovMovel5": 100.0}, {"jogo": 17, "data": "12/03/2026", "pontosAcum": 38, "saldoAcum": 14, "gp": 1, "gc": 2, "aprovMovel5": 80.0}, {"jogo": 18, "data": "15/03/2026", "pontosAcum": 41, "saldoAcum": 15, "gp": 1, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 19, "data": "18/03/2026", "pontosAcum": 44, "saldoAcum": 16, "gp": 2, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 20, "data": "21/03/2026", "pontosAcum": 47, "saldoAcum": 17, "gp": 1, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 21, "data": "02/04/2026", "pontosAcum": 50, "saldoAcum": 18, "gp": 2, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 22, "data": "05/04/2026", "pontosAcum": 53, "saldoAcum": 19, "gp": 2, "gc": 1, "aprovMovel5": 100.0}, {"jogo": 23, "data": "08/04/2026", "pontosAcum": 54, "saldoAcum": 19, "gp": 1, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 24, "data": "12/04/2026", "pontosAcum": 55, "saldoAcum": 19, "gp": 0, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 25, "data": "16/04/2026", "pontosAcum": 58, "saldoAcum": 20, "gp": 2, "gc": 1, "aprovMovel5": 73.3}, {"jogo": 26, "data": "19/04/2026", "pontosAcum": 61, "saldoAcum": 21, "gp": 1, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 27, "data": "23/04/2026", "pontosAcum": 64, "saldoAcum": 24, "gp": 3, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 28, "data": "26/04/2026", "pontosAcum": 67, "saldoAcum": 25, "gp": 1, "gc": 0, "aprovMovel5": 86.7}, {"jogo": 29, "data": "29/04/2026", "pontosAcum": 68, "saldoAcum": 25, "gp": 1, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 30, "data": "02/05/2026", "pontosAcum": 69, "saldoAcum": 25, "gp": 1, "gc": 1, "aprovMovel5": 73.3}, {"jogo": 31, "data": "05/05/2026", "pontosAcum": 72, "saldoAcum": 27, "gp": 2, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 32, "data": "10/05/2026", "pontosAcum": 73, "saldoAcum": 27, "gp": 1, "gc": 1, "aprovMovel5": 60.0}, {"jogo": 33, "data": "13/05/2026", "pontosAcum": 76, "saldoAcum": 30, "gp": 4, "gc": 1, "aprovMovel5": 60.0}, {"jogo": 34, "data": "16/05/2026", "pontosAcum": 77, "saldoAcum": 30, "gp": 1, "gc": 1, "aprovMovel5": 60.0}, {"jogo": 35, "data": "20/05/2026", "pontosAcum": 77, "saldoAcum": 29, "gp": 0, "gc": 1, "aprovMovel5": 53.3}, {"jogo": 36, "data": "23/05/2026", "pontosAcum": 80, "saldoAcum": 32, "gp": 3, "gc": 0, "aprovMovel5": 53.3}, {"jogo": 37, "data": "28/05/2026", "pontosAcum": 83, "saldoAcum": 35, "gp": 4, "gc": 1, "aprovMovel5": 66.7}, {"jogo": 38, "data": "31/05/2026", "pontosAcum": 86, "saldoAcum": 36, "gp": 1, "gc": 0, "aprovMovel5": 66.7}, {"jogo": 39, "data": "22/07/2026", "pontosAcum": 89, "saldoAcum": 38, "gp": 3, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 40, "data": "26/07/2026", "pontosAcum": 89, "saldoAcum": 37, "gp": 1, "gc": 2, "aprovMovel5": 80.0}, {"jogo": 41, "data": "29/07/2026", "pontosAcum": 92, "saldoAcum": 41, "gp": 4, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 42, "data": "02/08/2026", "pontosAcum": 95, "saldoAcum": 44, "gp": 3, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 43, "data": "05/08/2026", "pontosAcum": 95, "saldoAcum": 43, "gp": 2, "gc": 3, "aprovMovel5": 60.0}, {"jogo": 44, "data": "09/08/2026", "pontosAcum": 96, "saldoAcum": 43, "gp": 0, "gc": 0, "aprovMovel5": 46.7}], "resultadoMatrix": [{"resultado": "Vitória", "qtd": 29, "pct": 65.9}, {"resultado": "Empate", "qtd": 9, "pct": 20.5}, {"resultado": "Derrota", "qtd": 6, "pct": 13.6}], "artilharia": [{"Jogador": "López", "Gols": 16}, {"Jogador": "Sosa", "Gols": 9}, {"Jogador": "Maurício", "Gols": 8}, {"Jogador": "Arias", "Gols": 8}, {"Jogador": "Allan", "Gols": 6}, {"Jogador": "Vitor Roque", "Gols": 6}, {"Jogador": "Felipe Anderson", "Gols": 4}, {"Jogador": "Murilo", "Gols": 4}, {"Jogador": "Andreas", "Gols": 3}, {"Jogador": "Gómez", "Gols": 3}, {"Jogador": "Paulinho", "Gols": 2}, {"Jogador": "Luighi", "Gols": 2}, {"Jogador": "Marlon Freitas", "Gols": 2}, {"Jogador": "Khellven", "Gols": 1}, {"Jogador": "Erick Belé", "Gols": 1}], "assistencias": [{"Jogador": "López", "Assistencias": 10}, {"Jogador": "Andreas Pereira", "Assistencias": 10}, {"Jogador": "Sosa", "Assistencias": 7}, {"Jogador": "Allan", "Assistencias": 5}, {"Jogador": "Felipe Anderson", "Assistencias": 5}, {"Jogador": "Piquerez", "Assistencias": 4}, {"Jogador": "Maurício", "Assistencias": 3}, {"Jogador": "Arias", "Assistencias": 3}, {"Jogador": "Murilo", "Assistencias": 2}, {"Jogador": "Lucas Evangelista", "Assistencias": 2}, {"Jogador": "Jefté", "Assistencias": 1}, {"Jogador": "Marlon Freitas", "Assistencias": 1}, {"Jogador": "Vitor Roque", "Assistencias": 1}, {"Jogador": "Gómez", "Assistencias": 1}], "todasPartidas": [{"data": "10/01/2026", "adversario": "Portuguesa", "competicao": "Paulista", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "14/01/2026", "adversario": "Santos", "competicao": "Paulista", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "17/01/2026", "adversario": "Mirassol", "competicao": "Paulista", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "20/01/2026", "adversario": "Novorizontino", "competicao": "Paulista", "local": "Fora", "placar": "0x4", "resultado": "Derrota", "gp": 0, "gc": 4}, {"data": "24/01/2026", "adversario": "São Paulo", "competicao": "Paulista", "local": "Casa", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "28/01/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Fora", "placar": "2x2", "resultado": "Empate", "gp": 2, "gc": 2}, {"data": "01/02/2026", "adversario": "Botafogo-SP", "competicao": "Paulista", "local": "Fora", "placar": "0x1", "resultado": "Derrota", "gp": 0, "gc": 1}, {"data": "04/02/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Casa", "placar": "5x1", "resultado": "Vitória", "gp": 5, "gc": 1}, {"data": "08/02/2026", "adversario": "Corinthians", "competicao": "Paulista", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "12/02/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Fora", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "15/02/2026", "adversario": "Guarani", "competicao": "Paulista", "local": "Casa", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "21/02/2026", "adversario": "Capivariano", "competicao": "Paulista", "local": "Casa", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "25/02/2026", "adversario": "Fluminense", "competicao": "Brasileirão", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "01/03/2026", "adversario": "São Paulo", "competicao": "Paulista", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "04/03/2026", "adversario": "Novorizontino", "competicao": "Paulista", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "08/03/2026", "adversario": "Novorizontino", "competicao": "Paulista", "local": "Fora", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "12/03/2026", "adversario": "Vasco", "competicao": "Brasileirão", "local": "Fora", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "15/03/2026", "adversario": "Mirassol", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "18/03/2026", "adversario": "Botafogo", "competicao": "Brasileirão", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "21/03/2026", "adversario": "São Paulo", "competicao": "Brasileirão", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "02/04/2026", "adversario": "Grêmio", "competicao": "Brasileirão", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "05/04/2026", "adversario": "Bahia", "competicao": "Brasileirão", "local": "Fora", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "08/04/2026", "adversario": "Junior Barranquilla", "competicao": "Libertadores", "local": "Fora", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "12/04/2026", "adversario": "Corinthians", "competicao": "Brasileirão", "local": "Fora", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}, {"data": "16/04/2026", "adversario": "Sporting Cristal", "competicao": "Libertadores", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "19/04/2026", "adversario": "Athletico-PR", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "23/04/2026", "adversario": "Jacuipense", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "26/04/2026", "adversario": "Red Bull Bragantino", "competicao": "Brasileirão", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "29/04/2026", "adversario": "Cerro Porteño", "competicao": "Libertadores", "local": "Fora", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "02/05/2026", "adversario": "Santos", "competicao": "Brasileirão", "local": "Casa", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "05/05/2026", "adversario": "Sporting Cristal", "competicao": "Libertadores", "local": "Fora", "placar": "2x0", "resultado": "Vitória", "gp": 2, "gc": 0}, {"data": "10/05/2026", "adversario": "Remo", "competicao": "Brasileirão", "local": "Fora", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "13/05/2026", "adversario": "Jacuipense", "competicao": "Copa do Brasil", "local": "Fora", "placar": "4x1", "resultado": "Vitória", "gp": 4, "gc": 1}, {"data": "16/05/2026", "adversario": "Cruzeiro", "competicao": "Brasileirão", "local": "Casa", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "20/05/2026", "adversario": "Cerro Porteño", "competicao": "Libertadores", "local": "Casa", "placar": "0x1", "resultado": "Derrota", "gp": 0, "gc": 1}, {"data": "23/05/2026", "adversario": "Flamengo", "competicao": "Brasileirão", "local": "Fora", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "28/05/2026", "adversario": "Junior Barranquilla", "competicao": "Libertadores", "local": "Casa", "placar": "4x1", "resultado": "Vitória", "gp": 4, "gc": 1}, {"data": "31/05/2026", "adversario": "Chapecoense", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "22/07/2026", "adversario": "Coritiba", "competicao": "Brasileirão", "local": "Fora", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "26/07/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Casa", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "29/07/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Fora", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "02/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "05/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Fora", "placar": "2x3", "resultado": "Derrota", "gp": 2, "gc": 3}, {"data": "09/08/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Casa", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}], "competicoesLista": ["Brasileirão", "Copa do Brasil", "Libertadores", "Paulista"], "adversariosLista": ["Athletico-PR", "Atlético-MG", "Bahia", "Botafogo", "Botafogo-SP", "Capivariano", "Cerro Porteño", "Chapecoense", "Corinthians", "Coritiba", "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Guarani", "Internacional", "Jacuipense", "Junior Barranquilla", "Mirassol", "Novorizontino", "Portuguesa", "Red Bull Bragantino", "Remo", "Santos", "Sporting Cristal", "São Paulo", "Vasco", "Vitória"]};

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}
function aprovClass(v){ return v >= 66.6 ? 'hi' : v >= 40 ? 'mid' : 'lo'; }


function renderDashboard(){
  // Clear all containers before re-render (safe for repeated calls after Excel upload)
  document.getElementById('kpi-strip').innerHTML = '';
  document.getElementById('comp-grid').innerHTML = '';
  document.getElementById('vs-panel').innerHTML = '';
  document.getElementById('rank-tabs').innerHTML = '';
  document.getElementById('rank-table').innerHTML = '';
  document.getElementById('evo-chart').innerHTML = '';
  document.getElementById('form-row').innerHTML = '';
  document.getElementById('momento-badges').innerHTML = '';
  document.getElementById('trend-badge').innerHTML = '';
  document.getElementById('seq-grid').innerHTML = '';
  document.getElementById('dist-gols').innerHTML = '';
  document.getElementById('hl-cs').innerHTML = '';
  document.getElementById('hl-nsm').innerHTML = '';
  document.getElementById('hl-maxgp').innerHTML = '';
  document.getElementById('hl-maxgc').innerHTML = '';
  document.getElementById('hl-golap').innerHTML = '';
  document.getElementById('hl-golap-sub').innerHTML = '';
  document.getElementById('hl-golso').innerHTML = '';
  document.getElementById('hl-golso-sub').innerHTML = '';
  document.getElementById('donut-chart').innerHTML = '';
  document.getElementById('donut-legend').innerHTML = '';
  document.getElementById('games-table').innerHTML = '';
  document.getElementById('confrontos-grid').innerHTML = '';

/* ===== KPI STRIP ===== */
(function(){
  const h = DATA.header;
  const items = [
    {l:'Jogos', v:h.jogos, cls:''},
    {l:'Vitórias', v:h.vitorias, cls:'green'},
    {l:'Empates', v:h.empates, cls:'gold'},
    {l:'Derrotas', v:h.derrotas, cls:'red'},
    {l:'Gols marcados', v:h.golsMarcados, cls:'green'},
    {l:'Gols sofridos', v:h.golsSofridos, cls:'red'},
    {l:'Saldo de gols', v:'+'+h.saldo, cls:'green'},
    {l:'Pontos', v:h.pontos, cls:''},
    {l:'Pts possíveis', v:h.pontosPossiveis, cls:''},
    {l:'Aproveitamento', v:h.aproveitamento.toFixed(1)+'%', cls:'gold', hl:true},
  ];
  const strip = document.getElementById('kpi-strip');
  items.forEach(it=>{
    const k = el('div','kpi'+(it.hl?' hl':''));
    k.appendChild(el('div','kpi-label',it.l));
    k.appendChild(el('div','kpi-value '+it.cls, it.v));
    strip.appendChild(k);
  });
})();

/* ===== POR COMPETIÇÃO ===== */
(function(){
  const grid = document.getElementById('comp-grid');
  const list = DATA.porCompeticao;
  const best = DATA.melhorCompeticao, worst = DATA.piorCompeticao;
  list.forEach(c=>{
    const isBest = c.competicao===best, isWorst = c.competicao===worst;
    const card = el('div','card comp-card'+(isBest?' best':'')+(isWorst?' worst':''));
    const head = el('div','comp-head');
    head.appendChild(el('div','comp-name', c.competicao));
    if(isBest) head.appendChild(el('div','badge best','Melhor aproveitamento'));
    if(isWorst) head.appendChild(el('div','badge worst','Pior aproveitamento'));
    card.appendChild(head);
    card.appendChild(el('div','comp-aprov', c.aproveitamento.toFixed(1)+'%'));
    card.appendChild(el('div','comp-aprov-label', c.pontos+' de '+c.pontosPossiveis+' pontos possíveis'));
    const track = el('div','bar-track');
    const fill = el('div','bar-fill'); fill.style.width = c.aproveitamento+'%';
    track.appendChild(fill); card.appendChild(track);
    const stats = el('div','comp-stats');
    const cells = [
      ['J', c.jogos],['V',c.vitorias],['E',c.empates],
      ['D',c.derrotas],['GP',c.golsMarcados],['GC',c.golsSofridos],
      ['Saldo', (c.saldo>=0?'+':'')+c.saldo],['Média GP',c.mediaGP],['Média GC',c.mediaGC]
    ];
    cells.forEach(([l,v])=>{
      const cs = el('div','comp-stat');
      cs.appendChild(el('div','v', v));
      cs.appendChild(el('div','l', l));
      stats.appendChild(cs);
    });
    card.appendChild(stats);
    grid.appendChild(card);
  });
})();

/* ===== CASA X FORA ===== */
(function(){
  const panel = document.getElementById('vs-panel');
  const casa = DATA.casaXFora.casa, fora = DATA.casaXFora.fora;
  function side(d, label, tagClass){
    const s = el('div','vs-side '+tagClass);
    const head = el('div','vs-head');
    head.appendChild(el('h3', null, label));
    head.appendChild(el('div','tag', d.jogos+' jogos'));
    s.appendChild(head);
    s.appendChild(el('div','vs-big green', d.aproveitamento.toFixed(1)+'%'));
    s.appendChild(el('div','kpi-sub', d.pontos+' de '+d.pontosPossiveis+' pontos possíveis'));
    const g = el('div','vs-grid');
    [['V',d.vitorias],['E',d.empates],['D',d.derrotas],
     ['GP',d.golsMarcados],['GC',d.golsSofridos],['Saldo',(d.saldo>=0?'+':'')+d.saldo],
     ['Média gols/jogo',d.mediaGolsJogo],['Aproveitamento',d.aproveitamento.toFixed(1)+'%'],['Pontos',d.pontos]
    ].forEach(([l,v])=>{
      const it = el('div','vs-item');
      it.appendChild(el('div','v', v));
      it.appendChild(el('div','l', l));
      g.appendChild(it);
    });
    s.appendChild(g);
    return s;
  }
  panel.appendChild(side(casa,'Em casa','casa'));
  const mid = el('div','vs-mid');
  mid.appendChild(el('div','vlabel','DIFERENÇA DE APROVEITAMENTO'));
  mid.appendChild(el('div','vval', '+'+(casa.aproveitamento-fora.aproveitamento).toFixed(1)+' p.p.'));
  panel.appendChild(mid);
  panel.appendChild(side(fora,'Fora de casa',''));
})();

/* ===== RANKING ADVERSÁRIOS ===== */
(function(){
  const tabsWrap = document.getElementById('rank-tabs');
  const table = document.getElementById('rank-table');
  const datasets = {
    'Mais enfrentados': DATA.maisEnfrentados,
    'Melhor aproveitamento': DATA.melhorAproveitamento,
    'Maior dificuldade': DATA.maiorDificuldade,
    'Mais vencidos': DATA.maisVencidos,
  };
  let active = 'Mais enfrentados';
  function renderTable(){
    table.innerHTML = '';
    const thead = el('thead');
    const tr = el('tr');
    ['Adversário','J','V','E','D','GP','GC','Saldo','Aprov.'].forEach((h,i)=>{
      const th = el('th', i>0?'num':null, h);
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    const tbody = el('tbody');
    datasets[active].forEach(r=>{
      const row = el('tr');
      row.appendChild(el('td',null, '<span class="opp-name">'+r.adversario+'</span>'));
      row.appendChild(el('td','num', r.jogos));
      row.appendChild(el('td','num', r.vitorias));
      row.appendChild(el('td','num', r.empates));
      row.appendChild(el('td','num', r.derrotas));
      row.appendChild(el('td','num', r.golsMarcados));
      row.appendChild(el('td','num', r.golsSofridos));
      row.appendChild(el('td','num', (r.saldo>=0?'+':'')+r.saldo));
      const tagTd = el('td','num');
      tagTd.innerHTML = '<span class="aprov-tag '+aprovClass(r.aproveitamento)+'">'+r.aproveitamento.toFixed(1)+'%</span>';
      row.appendChild(tagTd);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
  }
  Object.keys(datasets).forEach(key=>{
    const tab = el('div','rtab'+(key===active?' active':''), key);
    tab.onclick = ()=>{
      active = key;
      [...tabsWrap.children].forEach(c=>c.classList.remove('active'));
      tab.classList.add('active');
      renderTable();
    };
    tabsWrap.appendChild(tab);
  });
  renderTable();
})();

/* ===== EVOLUÇÃO CHART (SVG line chart) ===== */
(function(){
  const evo = DATA.evolucao;
  const W = 1180, H = 300, PAD_L = 44, PAD_R = 20, PAD_T = 20, PAD_B = 30;
  const n = evo.length;
  const xStep = (W-PAD_L-PAD_R)/(n-1);
  const maxPts = Math.max(...evo.map(d=>d.pontosAcum));
  const maxSaldo = Math.max(...evo.map(d=>Math.abs(d.saldoAcum)));
  const maxScale = Math.max(maxPts, maxSaldo, 100);
  function yPts(v){ return PAD_T + (H-PAD_T-PAD_B) * (1 - v/maxScale); }
  function yAprov(v){ return PAD_T + (H-PAD_T-PAD_B) * (1 - (v||0)/100); }

  function pathFor(getter){
    let d = '';
    evo.forEach((pt,i)=>{
      const x = PAD_L + i*xStep;
      const y = getter(pt);
      d += (i===0?'M':'L')+x.toFixed(1)+','+y.toFixed(1)+' ';
    });
    return d;
  }
  const ptsPath = pathFor(d=>yPts(d.pontosAcum));
  const saldoPath = pathFor(d=>yPts(d.saldoAcum));
  const aprovPath = pathFor(d=> d.aprovMovel5===null ? yAprov(0) : yAprov(d.aprovMovel5));

  // gridlines
  let grid = '';
  for(let i=0;i<=4;i++){
    const y = PAD_T + (H-PAD_T-PAD_B)*i/4;
    grid += `<line x1="${PAD_L}" y1="${y}" x2="${W-PAD_R}" y2="${y}" stroke="#1e3a2c" stroke-width="1" opacity="0.5"/>`;
  }

  const svg = `
  <svg viewBox="0 0 ${W} ${H}" width="100%" style="overflow:visible;font-family:'IBM Plex Mono',monospace;">
    ${grid}
    <path d="${ptsPath}" fill="none" stroke="#39c96a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="${saldoPath}" fill="none" stroke="#e8cd8a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.85"/>
    <path d="${aprovPath}" fill="none" stroke="#5f8bd9" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" opacity="0.8" stroke-dasharray="4 3"/>
    <text x="${PAD_L}" y="${H-8}" fill="#5f7267" font-size="10">Jogo 1</text>
    <text x="${W-PAD_R-50}" y="${H-8}" fill="#5f7267" font-size="10">Jogo ${n}</text>
  </svg>`;
  document.getElementById('evo-chart').innerHTML = svg;
})();

/* ===== MOMENTUM ===== */
(function(){
  const m = DATA.momentoAtual;
  const row = document.getElementById('form-row');
  m.sequencia.forEach(r=>{
    row.appendChild(el('div','form-chip '+r, r));
  });
  document.getElementById('momento-aprov').textContent = m.aproveitamento.toFixed(1)+'%';
  const badges = document.getElementById('momento-badges');
  const clsMap = {'Evoluindo':'evoluindo','Estável':'estavel','Caindo':'caindo'};
  const iconMap = {'Evoluindo':'📈','Estável':'➡️','Caindo':'📉'};
  const b1 = el('div','momentum-badge '+clsMap[m.tendencia], iconMap[m.tendencia]+' Tendência: '+m.tendencia);
  const b2 = el('div','momentum-badge estavel', 'Classificação: '+m.classificacao);
  badges.appendChild(b1); badges.appendChild(b2);

  const trendWrap = document.getElementById('trend-badge');
  trendWrap.appendChild(el('div','momentum-badge '+clsMap[m.tendencia], iconMap[m.tendencia]+' '+m.tendencia+' — últimos 10 jogos: '+m.pontos10+'/30 pts ('+m.aproveitamento10.toFixed(1)+'%)'));
})();

/* ===== SEQUÊNCIAS ===== */
(function(){
  const s = DATA.sequencias;
  const grid = document.getElementById('seq-grid');
  const items = [
    ['Maior seq. de vitórias', s.maiorVitorias],
    ['Maior seq. sem perder', s.maiorSemPerder],
    ['Maior seq. de derrotas', s.maiorDerrotas],
    ['Maior seq. sem vencer', s.maiorSemVencer],
    ['Maior seq. marcando gols', s.maiorMarcando],
    ['Maior seq. sem sofrer gols', s.maiorSemSofrer],
    ['Maior seq. sofrendo gols', s.maiorSofrendo],
  ];
  items.forEach(([l,v])=>{
    const c = el('div','seq-card');
    c.appendChild(el('div','seq-num', v));
    c.appendChild(el('div','seq-label', l));
    grid.appendChild(c);
  });
})();

/* ===== DISTRIBUIÇÃO GOLS MARCADOS ===== */
(function(){
  const dist = DATA.distribuicaoGolsMarcados;
  const wrap = document.getElementById('dist-gols');
  wrap.style.display = 'flex';
  wrap.style.flexDirection = 'column';
  wrap.style.justifyContent = 'flex-start';
  wrap.style.gap = '8px';
  wrap.style.padding = '8px 0';
  const total = DATA.header.jogos;
  const max = Math.max(...Object.values(dist));
  const keys = Object.keys(dist).sort((a,b)=>a-b);
  keys.forEach(k=>{
    const v = dist[k];
    const pct = (v/max*100);
    const row = el('div','dist-row');
    row.style.gap = '14px';
    row.appendChild(el('div','dist-label', k+' gol'+(k=='1'?'':'s')));
    const track = el('div','dist-track');
    track.style.flex = '1';
    track.style.minHeight = '28px';
    const fill = el('div','dist-fill'); fill.style.width = Math.max(pct,14)+'%';
    fill.innerHTML = '<span>'+v+' jogos</span>';
    fill.style.minHeight = '28px';
    track.appendChild(fill);
    row.appendChild(track);
    wrap.appendChild(row);
  });
})();

/* ===== HIGHLIGHTS OFENSIVA/DEFENSIVA ===== */
(function(){
  document.getElementById('hl-cs').textContent = DATA.cleanSheets;
  document.getElementById('hl-nsm').textContent = DATA.jogosSemMarcar;
  document.getElementById('hl-maxgp').textContent = DATA.maiorGP_umJogo;
  document.getElementById('hl-maxgc').textContent = DATA.maiorGC_umJogo;
  const ga = DATA.goleadaAplicada, gs = DATA.goleadaSofrida;
  document.getElementById('hl-golap').textContent = ga.placar+' vs '+ga.adversario;
  document.getElementById('hl-golap-sub').textContent = ga.data+' · '+ga.competicao;
  document.getElementById('hl-golso').textContent = gs.placar+' vs '+gs.adversario;
  document.getElementById('hl-golso-sub').textContent = gs.data+' · '+gs.competicao;
})();

/* ===== DONUT RESULTADOS ===== */
(function(){
  const data = DATA.resultadoMatrix;
  const colors = {'Vitória':'#39c96a','Empate':'#e8cd8a','Derrota':'#e0523f'};
  const R = 80, CX=100, CY=100, STROKE=28;
  const circ = 2*Math.PI*R;
  let offset = 0;
  let paths = '';
  data.forEach(d=>{
    const frac = d.pct/100;
    const len = circ*frac;
    paths += `<circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="${colors[d.resultado]}" stroke-width="${STROKE}" stroke-dasharray="${len} ${circ-len}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${CX} ${CY})"/>`;
    offset += len;
  });
  const svg = `<svg viewBox="0 0 200 200" width="220" height="220">
    ${paths}
    <text x="100" y="94" text-anchor="middle" fill="#f4f7f4" font-family="Archivo" font-weight="800" font-size="30">${DATA.header.jogos}</text>
    <text x="100" y="114" text-anchor="middle" fill="#5f7267" font-family="IBM Plex Mono" font-size="10">JOGOS</text>
  </svg>`;
  document.getElementById('donut-chart').innerHTML = svg;
  const legend = document.getElementById('donut-legend');
  data.forEach(d=>{
    const item = el('div','leg-item');
    const dot = el('div','leg-dot'); dot.style.background = colors[d.resultado];
    item.appendChild(dot);
    item.appendChild(el('span', null, d.resultado));
    item.appendChild(el('span','val', d.qtd+' ('+d.pct.toFixed(1)+'%)'));
    legend.appendChild(item);
  });
})();

/* ===== ÚLTIMOS 10 JOGOS TABLE ===== */
(function(){
  const table = document.getElementById('games-table');
  const thead = el('thead');
  const tr = el('tr');
  ['Data','Adversário','Competição','Local','Placar','Resultado'].forEach(h=>tr.appendChild(el('th',null,h)));
  thead.appendChild(tr); table.appendChild(thead);
  const tbody = el('tbody');
  [...DATA.ultimos10].reverse().forEach(g=>{
    const row = el('tr');
    row.appendChild(el('td',null,g.data));
    row.appendChild(el('td',null,'<b style="color:var(--white)">'+g.adversario+'</b>'));
    row.appendChild(el('td',null,g.competicao));
    row.appendChild(el('td',null,'<span class="loc-tag">'+g.local+'</span>'));
    row.appendChild(el('td',null,g.placar));
    row.appendChild(el('td',null,'<span class="res-tag '+g.resultado+'">'+g.resultado+'</span>'));
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
})();

/* ===== CONFRONTOS IMPORTANTES ===== */
(function(){
  const grid = document.getElementById('confrontos-grid');
  const mais = DATA.maisEnfrentados[0];
  const maisVenc = DATA.maisVencidos[0];
  const dificil = DATA.maiorDificuldade[0];
  const ga = DATA.goleadaAplicada, gs = DATA.goleadaSofrida;
  const cards = [
    ['Adversário mais enfrentado', mais.adversario, mais.jogos+' jogos disputados'],
    ['Adversário mais difícil', dificil.adversario, dificil.aproveitamento.toFixed(1)+'% de aproveitamento'],
    ['Mais vitórias contra', maisVenc.adversario, maisVenc.vitorias+' vitórias em '+maisVenc.jogos+' jogos'],
    ['Maior goleada aplicada', ga.placar+' vs '+ga.adversario, ga.data],
  ];
  cards.forEach(([l,v,s])=>{
    const c = el('div','highlight-card');
    c.appendChild(el('div','hl-label',l));
    c.appendChild(el('div','hl-val',v));
    c.appendChild(el('div','hl-sub',s));
    grid.appendChild(c);
  });
})();
}

renderDashboard();

/* ================================================================
   LEITURA DE EXCEL (SheetJS) — recalcula tudo a partir de um .xlsx
   Espera uma aba "Fato_Partidas" com as colunas:
   ID_Partida, Data, Adversario, Competicao, Local, Placar,
   Gols_Palmeiras, Gols_Adversario, Resultado, Goleadores (opcional)
   Local em Arena Barueri / Allianz Parque / Nubank Parque = jogo em casa.
   ================================================================ */

const CASA_LOCAIS = new Set(['Arena Barueri','Allianz Parque','Nubank Parque']);

function excelDateToJsDate(serial){
  if(serial instanceof Date) return serial;
  if(typeof serial === 'string'){
    // try dd/mm/yyyy or yyyy-mm-dd
    const iso = new Date(serial);
    if(!isNaN(iso)) return iso;
    const parts = serial.split('/');
    if(parts.length === 3) return new Date(+parts[2], +parts[1]-1, +parts[0]);
    return null;
  }
  // Excel serial number
  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  return new Date(utcValue * 1000);
}

function fmtDateBR(d){
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function maxSeq(arr, cond){
  let best = 0, cur = 0;
  for(const v of arr){
    if(cond(v)){ cur++; best = Math.max(best,cur); } else { cur = 0; }
  }
  return best;
}

function buildDataFromRows(rows){
  // rows: array of objects from the Fato_Partidas sheet, already sorted by date ascending
  const n = rows.length;
  const pontosMap = {'Vitória':3,'Empate':1,'Derrota':0};

  rows.forEach(r=>{
    r.Mandante = CASA_LOCAIS.has(r.Local);
    r.Pontos = pontosMap[r.Resultado] ?? 0;
    r.Saldo = r.Gols_Palmeiras - r.Gols_Adversario;
  });

  const jogos = n;
  const vitorias = rows.filter(r=>r.Resultado==='Vitória').length;
  const empates = rows.filter(r=>r.Resultado==='Empate').length;
  const derrotas = rows.filter(r=>r.Resultado==='Derrota').length;
  const golsMarcados = rows.reduce((s,r)=>s+r.Gols_Palmeiras,0);
  const golsSofridos = rows.reduce((s,r)=>s+r.Gols_Adversario,0);
  const pontos = rows.reduce((s,r)=>s+r.Pontos,0);
  const pontosPossiveis = jogos*3;

  const header = {
    jogos, vitorias, empates, derrotas, golsMarcados, golsSofridos,
    saldo: golsMarcados-golsSofridos, pontos, pontosPossiveis,
    aproveitamento: pontosPossiveis ? +(pontos/pontosPossiveis*100).toFixed(1) : 0
  };

  // Por competição
  const compMap = {};
  rows.forEach(r=>{
    if(!compMap[r.Competicao]) compMap[r.Competicao] = [];
    compMap[r.Competicao].push(r);
  });
  const porCompeticao = Object.keys(compMap).map(comp=>{
    const d = compMap[comp];
    const v = d.filter(r=>r.Resultado==='Vitória').length;
    const e = d.filter(r=>r.Resultado==='Empate').length;
    const de = d.filter(r=>r.Resultado==='Derrota').length;
    const gp = d.reduce((s,r)=>s+r.Gols_Palmeiras,0);
    const gc = d.reduce((s,r)=>s+r.Gols_Adversario,0);
    const pts = d.reduce((s,r)=>s+r.Pontos,0);
    const ptsPoss = d.length*3;
    return {
      competicao: comp, jogos: d.length, vitorias: v, empates: e, derrotas: de,
      golsMarcados: gp, golsSofridos: gc, saldo: gp-gc,
      pontos: pts, pontosPossiveis: ptsPoss,
      aproveitamento: +(pts/ptsPoss*100).toFixed(1),
      mediaGP: +(gp/d.length).toFixed(2), mediaGC: +(gc/d.length).toFixed(2)
    };
  }).sort((a,b)=>b.aproveitamento-a.aproveitamento);
  const melhorCompeticao = porCompeticao[0]?.competicao;
  const piorCompeticao = porCompeticao[porCompeticao.length-1]?.competicao;

  // Casa x Fora
  function bloco(d){
    const v = d.filter(r=>r.Resultado==='Vitória').length;
    const e = d.filter(r=>r.Resultado==='Empate').length;
    const de = d.filter(r=>r.Resultado==='Derrota').length;
    const gp = d.reduce((s,r)=>s+r.Gols_Palmeiras,0);
    const gc = d.reduce((s,r)=>s+r.Gols_Adversario,0);
    const pts = d.reduce((s,r)=>s+r.Pontos,0);
    const ptsPoss = d.length*3;
    return {jogos:d.length, vitorias:v, empates:e, derrotas:de, golsMarcados:gp, golsSofridos:gc,
      saldo: gp-gc, pontos: pts, pontosPossiveis: ptsPoss,
      aproveitamento: ptsPoss ? +(pts/ptsPoss*100).toFixed(1) : 0,
      mediaGolsJogo: d.length ? +(gp/d.length).toFixed(2) : 0};
  }
  const casaXFora = {
    casa: bloco(rows.filter(r=>r.Mandante)),
    fora: bloco(rows.filter(r=>!r.Mandante))
  };

  // Adversários
  const advMap = {};
  rows.forEach(r=>{
    if(!advMap[r.Adversario]) advMap[r.Adversario] = [];
    advMap[r.Adversario].push(r);
  });
  const advRows = Object.keys(advMap).map(adv=>{
    const d = advMap[adv];
    const v = d.filter(r=>r.Resultado==='Vitória').length;
    const e = d.filter(r=>r.Resultado==='Empate').length;
    const de = d.filter(r=>r.Resultado==='Derrota').length;
    const gp = d.reduce((s,r)=>s+r.Gols_Palmeiras,0);
    const gc = d.reduce((s,r)=>s+r.Gols_Adversario,0);
    const pts = d.reduce((s,r)=>s+r.Pontos,0);
    return {adversario: adv, jogos: d.length, vitorias: v, empates: e, derrotas: de,
      golsMarcados: gp, golsSofridos: gc, saldo: gp-gc,
      aproveitamento: +(pts/(d.length*3)*100).toFixed(1)};
  });
  const maisEnfrentados = [...advRows].sort((a,b)=>b.jogos-a.jogos).slice(0,6);
  const melhorAproveitamento = [...advRows].filter(r=>r.jogos>=2).sort((a,b)=>b.aproveitamento-a.aproveitamento).slice(0,6);
  const maiorDificuldade = [...advRows].sort((a,b)=>a.aproveitamento-b.aproveitamento).slice(0,6);
  const maisVencidos = [...advRows].sort((a,b)=>b.vitorias-a.vitorias).slice(0,6);

  // Sequências
  const resSeq = rows.map(r=>r.Resultado);
  const sequencias = {
    maiorVitorias: maxSeq(resSeq, x=>x==='Vitória'),
    maiorSemPerder: maxSeq(resSeq, x=>x!=='Derrota'),
    maiorDerrotas: maxSeq(resSeq, x=>x==='Derrota'),
    maiorSemVencer: maxSeq(resSeq, x=>x!=='Vitória'),
    maiorMarcando: maxSeq(rows.map(r=>r.Gols_Palmeiras), x=>x>0),
    maiorSemSofrer: maxSeq(rows.map(r=>r.Gols_Adversario), x=>x===0),
    maiorSofrendo: maxSeq(rows.map(r=>r.Gols_Adversario), x=>x>0),
  };

  // Últimos 5/10
  function jogosLista(d){
    return d.map(r=>({
      data: fmtDateBR(r.DataObj), adversario: r.Adversario, competicao: r.Competicao,
      local: r.Mandante ? 'Casa' : 'Fora', placar: r.Placar, resultado: r.Resultado,
      gp: r.Gols_Palmeiras, gc: r.Gols_Adversario
    }));
  }
  const ultimos5 = jogosLista(rows.slice(-5));
  const ultimos10 = jogosLista(rows.slice(-10));
  const pts5 = rows.slice(-5).reduce((s,r)=>s+r.Pontos,0);
  const aprov5 = rows.slice(-5).length ? +(pts5/(rows.slice(-5).length*3)*100).toFixed(1) : 0;
  const pts10 = rows.slice(-10).reduce((s,r)=>s+r.Pontos,0);
  const aprov10 = rows.slice(-10).length ? +(pts10/(rows.slice(-10).length*3)*100).toFixed(1) : 0;

  let classificacao;
  if(aprov5>=80) classificacao='Excelente';
  else if(aprov5>=65) classificacao='Muito bom';
  else if(aprov5>=50) classificacao='Bom';
  else if(aprov5>=35) classificacao='Regular';
  else if(aprov5>=20) classificacao='Ruim';
  else classificacao='Muito ruim';

  let tendencia;
  if(aprov5 > header.aproveitamento+5) tendencia='Evoluindo';
  else if(aprov5 < header.aproveitamento-5) tendencia='Caindo';
  else tendencia='Estável';

  const momentoAtual = {
    sequencia: rows.slice(-5).map(r=>r.Resultado[0]),
    pontos: pts5, aproveitamento: aprov5, classificacao, tendencia,
    pontos10: pts10, aproveitamento10: aprov10
  };

  // Goleadas
  const bySaldo = [...rows].sort((a,b)=>b.Saldo-a.Saldo);
  const goleadaAplicadaRow = bySaldo[0];
  const goleadaSofridaRow = bySaldo[bySaldo.length-1];
  function goleadaObj(r){
    return {adversario:r.Adversario, placar:r.Placar, data: fmtDateBR(r.DataObj), competicao:r.Competicao};
  }

  const cleanSheets = rows.filter(r=>r.Gols_Adversario===0).length;
  const jogosSemMarcar = rows.filter(r=>r.Gols_Palmeiras===0).length;
  const maiorGP_umJogo = Math.max(...rows.map(r=>r.Gols_Palmeiras));
  const maiorGC_umJogo = Math.max(...rows.map(r=>r.Gols_Adversario));

  const distribuicaoGolsMarcados = {};
  rows.forEach(r=>{
    const k = String(r.Gols_Palmeiras);
    distribuicaoGolsMarcados[k] = (distribuicaoGolsMarcados[k]||0)+1;
  });

  // Evolução
  let pontosAcum = 0, saldoAcum = 0;
  const evolucao = rows.map((r,i)=>{
    pontosAcum += r.Pontos;
    saldoAcum += r.Saldo;
    let aprovMovel5 = null;
    if(i>=4){
      const window = rows.slice(i-4, i+1);
      const wp = window.reduce((s,x)=>s+x.Pontos,0);
      aprovMovel5 = +(wp/15*100).toFixed(1);
    }
    return {jogo:i+1, data: fmtDateBR(r.DataObj), pontosAcum, saldoAcum,
      gp: r.Gols_Palmeiras, gc: r.Gols_Adversario, aprovMovel5};
  });

  const resultadoMatrix = [
    {resultado:'Vitória', qtd: vitorias, pct: +(vitorias/jogos*100).toFixed(1)},
    {resultado:'Empate', qtd: empates, pct: +(empates/jogos*100).toFixed(1)},
    {resultado:'Derrota', qtd: derrotas, pct: +(derrotas/jogos*100).toFixed(1)},
  ];

  return {
    header, porCompeticao, melhorCompeticao, piorCompeticao, casaXFora,
    maisEnfrentados, melhorAproveitamento, maiorDificuldade, maisVencidos,
    sequencias, ultimos5, ultimos10, momentoAtual,
    goleadaAplicada: goleadaObj(goleadaAplicadaRow),
    goleadaSofrida: goleadaObj(goleadaSofridaRow),
    cleanSheets, jogosSemMarcar, maiorGP_umJogo, maiorGC_umJogo,
    distribuicaoGolsMarcados, evolucao, resultadoMatrix,
    artilharia: DATA.artilharia || [], assistencias: DATA.assistencias || [],
    todasPartidas: jogosLista(rows),
    competicoesLista: [...new Set(rows.map(r=>r.Competicao))].sort(),
    adversariosLista: [...new Set(rows.map(r=>r.Adversario))].sort(),
  };
}

function processExcelFile(file){
  const statusEl = document.getElementById('upload-status');
  statusEl.textContent = 'Lendo planilha...';
  statusEl.className = 'upload-status loading';

  const reader = new FileReader();
  reader.onload = function(e){
    try {
      const wb = XLSX.read(e.target.result, {type:'array', cellDates:true});
      const sheetName = wb.SheetNames.find(n => n.toLowerCase().includes('fato')) || wb.SheetNames[0];
      const ws = wb.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(ws, {defval:null});

      if(!json.length) throw new Error('Planilha vazia ou aba não encontrada.');

      // Aceita tanto "Local" (nome do estádio) quanto "Local_Estadio"
      // (nome usado na planilha do modelo Power BI) — normaliza para "Local".
      const normalized = json.map(r => {
        if(!('Local' in r) && ('Local_Estadio' in r)){
          const { Local_Estadio, ...rest } = r;
          return { ...rest, Local: Local_Estadio };
        }
        return r;
      });

      const required = ['Data','Adversario','Competicao','Local','Gols_Palmeiras','Gols_Adversario','Resultado'];
      const missing = required.filter(c => !(c in normalized[0]));
      if(missing.length) throw new Error('Colunas ausentes: ' + missing.join(', '));

      const rows = normalized.map(r => ({
        ...r,
        DataObj: excelDateToJsDate(r.Data),
        Placar: r.Placar || `${r.Gols_Palmeiras}x${r.Gols_Adversario}`,
      })).filter(r => r.DataObj);

      rows.sort((a,b)=> a.DataObj - b.DataObj);

      RAW_ROWS = rows;
      saveToStorage(rows);
      DATA = buildDataFromRows(rows);
      resetFilterUI();
      renderDashboard();

      statusEl.textContent = `✓ ${rows.length} partidas carregadas com sucesso`;
      statusEl.className = 'upload-status success';
    } catch(err){
      console.error(err);
      statusEl.textContent = '✗ Erro ao ler o arquivo: ' + err.message;
      statusEl.className = 'upload-status error';
    }
  };
  reader.onerror = function(){
    statusEl.textContent = '✗ Não foi possível ler o arquivo.';
    statusEl.className = 'upload-status error';
  };
  reader.readAsArrayBuffer(file);
}

document.getElementById('excel-upload').addEventListener('change', function(e){
  const file = e.target.files[0];
  if(file) processExcelFile(file);
});

/* ================================================================
   FILTROS FUNCIONAIS
   Mantém RAW_ROWS (formato aceito por buildDataFromRows) sempre
   disponível. Os filtros recortam RAW_ROWS e recalculam DATA inteiro.
   ================================================================ */

// Reconstrói RAW_ROWS a partir do DATA embutido inicialmente (todasPartidas
// já vem no formato local:'Casa'/'Fora' — convertemos de volta para o
// formato "cru" usando um estádio-sentinela por mando de campo).
const storedRows = loadFromStorage();
let RAW_ROWS = storedRows || DATA.todasPartidas.map((p, i) => {
  const [gpStr, gcStr] = p.placar.split('x');
  const [dd, mm, yyyy] = p.data.split('/');
  return {
    ID_Partida: i + 1,
    Data: p.data,
    DataObj: new Date(+yyyy, +mm - 1, +dd),
    Adversario: p.adversario,
    Competicao: p.competicao,
    Local: p.local === 'Casa' ? 'Allianz Parque' : '(fora)',
    Placar: p.placar,
    Gols_Palmeiras: p.gp,
    Gols_Adversario: p.gc,
    Resultado: p.resultado,
  };
});

// Se carregou do localStorage, reconstrói DATA e renderiza
if (storedRows) {
  DATA = buildDataFromRows(storedRows);
  renderDashboard();
}

const FILTER_IDS = ['f-competicao', 'f-mandante', 'f-resultado', 'f-adversario'];

function populateFilterOptions(){
  const competicoes = [...new Set(RAW_ROWS.map(r => r.Competicao))].sort();
  const adversarios = [...new Set(RAW_ROWS.map(r => r.Adversario))].sort();

  const compSel = document.getElementById('f-competicao');
  const advSel = document.getElementById('f-adversario');

  compSel.innerHTML = '<option value="">Competição: Todas</option>' +
    competicoes.map(c => `<option value="${c}">${c}</option>`).join('');
  advSel.innerHTML = '<option value="">Adversário: Todos</option>' +
    adversarios.map(a => `<option value="${a}">${a}</option>`).join('');
}

function resetFilterUI(){
  populateFilterOptions();
  document.getElementById('f-mandante').value = '';
  document.getElementById('f-resultado').value = '';
}

function applyFilters(){
  const competicao = document.getElementById('f-competicao').value;
  const mandante = document.getElementById('f-mandante').value; // 'casa' | 'fora' | ''
  const resultado = document.getElementById('f-resultado').value;
  const adversario = document.getElementById('f-adversario').value;

  let filtered = RAW_ROWS.filter(r => {
    if(competicao && r.Competicao !== competicao) return false;
    if(resultado && r.Resultado !== resultado) return false;
    if(adversario && r.Adversario !== adversario) return false;
    if(mandante){
      const isCasa = CASA_LOCAIS.has(r.Local);
      if(mandante === 'casa' && !isCasa) return false;
      if(mandante === 'fora' && isCasa) return false;
    }
    return true;
  });

  const statusEl = document.getElementById('upload-status');
  if(filtered.length === 0){
    statusEl.textContent = '⚠ Nenhuma partida corresponde aos filtros selecionados.';
    statusEl.className = 'upload-status error';
    return;
  }
  statusEl.textContent = '';
  statusEl.className = 'upload-status';

  // buildDataFromRows mutates rows (adds Mandante/Pontos/Saldo) — clone to keep RAW_ROWS pristine
  const clone = filtered.map(r => ({...r}));
  DATA = buildDataFromRows(clone);
  renderDashboard();
}

FILTER_IDS.forEach(id => {
  document.getElementById(id).addEventListener('change', applyFilters);
});

document.getElementById('f-clear').addEventListener('click', function(){
  document.getElementById('f-competicao').value = '';
  document.getElementById('f-mandante').value = '';
  document.getElementById('f-resultado').value = '';
  document.getElementById('f-adversario').value = '';
  applyFilters();
});

document.getElementById('f-clear-storage').addEventListener('click', function(){
  clearStorage();
  RAW_ROWS = DATA.todasPartidas.map((p, i) => {
    const [gpStr, gcStr] = p.placar.split('x');
    const [dd, mm, yyyy] = p.data.split('/');
    return {
      ID_Partida: i + 1,
      Data: p.data,
      DataObj: new Date(+yyyy, +mm - 1, +dd),
      Adversario: p.adversario,
      Competicao: p.competicao,
      Local: p.local === 'Casa' ? 'Allianz Parque' : '(fora)',
      Placar: p.placar,
      Gols_Palmeiras: p.gp,
      Gols_Adversario: p.gc,
      Resultado: p.resultado,
    };
  });
  DATA = buildDataFromRows(RAW_ROWS);
  resetFilterUI();
  renderDashboard();
  document.getElementById('upload-status').textContent = 'Dados resetados para o original';
  document.getElementById('upload-status').className = 'upload-status success';
});

populateFilterOptions();
