/* ================================================================
   PERSISTÊNCIA LOCAL
   Guarda a última planilha carregada (partidas + elenco) para que o
   painel volte com os dados do usuário ao reabrir o arquivo.
   Formato v2: {v:2, rows:[...], players:{artilharia, assistencias}}.
   O formato antigo (array puro de partidas) continua sendo lido.
   ================================================================ */
const STORAGE_KEY = 'palmeiras_bi_2026_rawrows';

function saveToStorage(rows, players){
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      v: 2,
      rows,
      players: players || {artilharia: [], assistencias: []},
    }));
  } catch (e) {
    console.warn('Não foi possível salvar no localStorage:', e);
  }
}

function loadFromStorage(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return null;
    const parsed = JSON.parse(raw);
    const rows = Array.isArray(parsed) ? parsed : (parsed.rows || []);
    const players = Array.isArray(parsed) ? null : parsed.players;
    const hydrated = rows
      .map(r => ({...r, DataObj: r.DataObj ? new Date(r.DataObj) : null}))
      .filter(r => r.DataObj && !isNaN(r.DataObj));
    return hydrated.length ? {rows: hydrated, players} : null;
  } catch (e) {
    console.warn('Erro ao ler localStorage:', e);
    return null;
  }
}

function clearStorage(){
  try { localStorage.removeItem(STORAGE_KEY); } catch(e){ /* modo privado */ }
}

let DATA = {"header": {"jogos": 44, "vitorias": 29, "empates": 9, "derrotas": 6, "golsMarcados": 77, "golsSofridos": 34, "saldo": 43, "pontos": 96, "pontosPossiveis": 132, "aproveitamento": 72.7}, "porCompeticao": [{"competicao": "Paulista", "jogos": 12, "vitorias": 9, "empates": 1, "derrotas": 2, "golsMarcados": 17, "golsSofridos": 9, "saldo": 8, "pontos": 28, "pontosPossiveis": 36, "aproveitamento": 77.8, "mediaGP": 1.42, "mediaGC": 0.75}, {"competicao": "Copa do Brasil", "jogos": 4, "vitorias": 3, "empates": 0, "derrotas": 1, "golsMarcados": 12, "golsSofridos": 4, "saldo": 8, "pontos": 9, "pontosPossiveis": 12, "aproveitamento": 75.0, "mediaGP": 3.0, "mediaGC": 1.0}, {"competicao": "Brasileirão", "jogos": 22, "vitorias": 14, "empates": 6, "derrotas": 2, "golsMarcados": 38, "golsSofridos": 16, "saldo": 22, "pontos": 48, "pontosPossiveis": 66, "aproveitamento": 72.7, "mediaGP": 1.73, "mediaGC": 0.73}, {"competicao": "Libertadores", "jogos": 6, "vitorias": 3, "empates": 2, "derrotas": 1, "golsMarcados": 10, "golsSofridos": 5, "saldo": 5, "pontos": 11, "pontosPossiveis": 18, "aproveitamento": 61.1, "mediaGP": 1.67, "mediaGC": 0.83}], "melhorCompeticao": "Paulista", "piorCompeticao": "Libertadores", "casaXFora": {"casa": {"jogos": 23, "vitorias": 17, "empates": 4, "derrotas": 2, "golsMarcados": 42, "golsSofridos": 14, "saldo": 28, "pontos": 55, "pontosPossiveis": 69, "aproveitamento": 79.7, "mediaGolsJogo": 1.83}, "fora": {"jogos": 21, "vitorias": 12, "empates": 5, "derrotas": 4, "golsMarcados": 35, "golsSofridos": 20, "saldo": 15, "pontos": 41, "pontosPossiveis": 63, "aproveitamento": 65.1, "mediaGolsJogo": 1.67}}, "maisEnfrentados": [{"adversario": "Novorizontino", "jogos": 3, "vitorias": 2, "empates": 0, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 5, "saldo": -2, "aproveitamento": 66.7}, {"adversario": "São Paulo", "jogos": 3, "vitorias": 3, "empates": 0, "derrotas": 0, "golsMarcados": 6, "golsSofridos": 2, "saldo": 4, "aproveitamento": 100.0}, {"adversario": "Atlético-MG", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 4, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Cerro Porteño", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 1, "golsSofridos": 2, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Corinthians", "jogos": 2, "vitorias": 1, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 0, "saldo": 1, "aproveitamento": 66.7}, {"adversario": "Fortaleza", "jogos": 2, "vitorias": 1, "empates": 0, "derrotas": 1, "golsMarcados": 5, "golsSofridos": 3, "saldo": 2, "aproveitamento": 50.0}], "melhorAproveitamento": [{"adversario": "Jacuipense", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 7, "golsSofridos": 1, "saldo": 6, "aproveitamento": 100.0}, {"adversario": "Mirassol", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 2, "golsSofridos": 0, "saldo": 2, "aproveitamento": 100.0}, {"adversario": "Sporting Cristal", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 4, "golsSofridos": 1, "saldo": 3, "aproveitamento": 100.0}, {"adversario": "São Paulo", "jogos": 3, "vitorias": 3, "empates": 0, "derrotas": 0, "golsMarcados": 6, "golsSofridos": 2, "saldo": 4, "aproveitamento": 100.0}, {"adversario": "Vitória", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 9, "golsSofridos": 1, "saldo": 8, "aproveitamento": 100.0}, {"adversario": "Corinthians", "jogos": 2, "vitorias": 1, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 0, "saldo": 1, "aproveitamento": 66.7}], "maiorDificuldade": [{"adversario": "Botafogo-SP", "jogos": 1, "vitorias": 0, "empates": 0, "derrotas": 1, "golsMarcados": 0, "golsSofridos": 1, "saldo": -1, "aproveitamento": 0.0}, {"adversario": "Vasco", "jogos": 1, "vitorias": 0, "empates": 0, "derrotas": 1, "golsMarcados": 1, "golsSofridos": 2, "saldo": -1, "aproveitamento": 0.0}, {"adversario": "Atlético-MG", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 4, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Cerro Porteño", "jogos": 2, "vitorias": 0, "empates": 1, "derrotas": 1, "golsMarcados": 1, "golsSofridos": 2, "saldo": -1, "aproveitamento": 16.7}, {"adversario": "Cruzeiro", "jogos": 1, "vitorias": 0, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 1, "saldo": 0, "aproveitamento": 33.3}, {"adversario": "Guarani", "jogos": 1, "vitorias": 0, "empates": 1, "derrotas": 0, "golsMarcados": 1, "golsSofridos": 1, "saldo": 0, "aproveitamento": 33.3}], "maisVencidos": [{"adversario": "São Paulo", "jogos": 3, "vitorias": 3, "empates": 0, "derrotas": 0, "golsMarcados": 6, "golsSofridos": 2, "saldo": 4, "aproveitamento": 100.0}, {"adversario": "Jacuipense", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 7, "golsSofridos": 1, "saldo": 6, "aproveitamento": 100.0}, {"adversario": "Mirassol", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 2, "golsSofridos": 0, "saldo": 2, "aproveitamento": 100.0}, {"adversario": "Novorizontino", "jogos": 3, "vitorias": 2, "empates": 0, "derrotas": 1, "golsMarcados": 3, "golsSofridos": 5, "saldo": -2, "aproveitamento": 66.7}, {"adversario": "Sporting Cristal", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 4, "golsSofridos": 1, "saldo": 3, "aproveitamento": 100.0}, {"adversario": "Vitória", "jogos": 2, "vitorias": 2, "empates": 0, "derrotas": 0, "golsMarcados": 9, "golsSofridos": 1, "saldo": 8, "aproveitamento": 100.0}], "sequencias": {"maiorVitorias": 5, "maiorSemPerder": 17, "maiorDerrotas": 1, "maiorSemVencer": 2, "maiorMarcando": 16, "maiorSemSofrer": 3, "maiorSofrendo": 5}, "ultimos5": [{"data": "26/07/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Casa", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "29/07/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Fora", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "02/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "05/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Fora", "placar": "2x3", "resultado": "Derrota", "gp": 2, "gc": 3}, {"data": "09/08/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Casa", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}], "ultimos10": [{"data": "20/05/2026", "adversario": "Cerro Porteño", "competicao": "Libertadores", "local": "Casa", "placar": "0x1", "resultado": "Derrota", "gp": 0, "gc": 1}, {"data": "23/05/2026", "adversario": "Flamengo", "competicao": "Brasileirão", "local": "Fora", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "28/05/2026", "adversario": "Junior Barranquilla", "competicao": "Libertadores", "local": "Casa", "placar": "4x1", "resultado": "Vitória", "gp": 4, "gc": 1}, {"data": "31/05/2026", "adversario": "Chapecoense", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "22/07/2026", "adversario": "Coritiba", "competicao": "Brasileirão", "local": "Fora", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "26/07/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Casa", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "29/07/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Fora", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "02/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "05/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Fora", "placar": "2x3", "resultado": "Derrota", "gp": 2, "gc": 3}, {"data": "09/08/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Casa", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}], "momentoAtual": {"sequencia": ["D", "V", "V", "D", "E"], "pontos": 7, "aproveitamento": 46.7, "classificacao": "Regular", "tendencia": "Caindo", "pontos10": 19, "aproveitamento10": 63.3}, "goleadaAplicada": {"adversario": "Vitória", "placar": "5x1", "data": "04/02/2026", "competicao": "Brasileirão"}, "goleadaSofrida": {"adversario": "Novorizontino", "placar": "0x4", "data": "20/01/2026", "competicao": "Paulista"}, "cleanSheets": 18, "jogosSemMarcar": 5, "maiorGP_umJogo": 5, "maiorGC_umJogo": 4, "distribuicaoGolsMarcados": {"0": 5, "1": 18, "2": 10, "3": 6, "4": 4, "5": 1}, "evolucao": [{"jogo": 1, "data": "10/01/2026", "pontosAcum": 3, "saldoAcum": 1, "gp": 1, "gc": 0, "aprovMovel5": null}, {"jogo": 2, "data": "14/01/2026", "pontosAcum": 6, "saldoAcum": 2, "gp": 1, "gc": 0, "aprovMovel5": null}, {"jogo": 3, "data": "17/01/2026", "pontosAcum": 9, "saldoAcum": 3, "gp": 1, "gc": 0, "aprovMovel5": null}, {"jogo": 4, "data": "20/01/2026", "pontosAcum": 9, "saldoAcum": -1, "gp": 0, "gc": 4, "aprovMovel5": null}, {"jogo": 5, "data": "24/01/2026", "pontosAcum": 12, "saldoAcum": 1, "gp": 3, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 6, "data": "28/01/2026", "pontosAcum": 13, "saldoAcum": 1, "gp": 2, "gc": 2, "aprovMovel5": 66.7}, {"jogo": 7, "data": "01/02/2026", "pontosAcum": 13, "saldoAcum": 0, "gp": 0, "gc": 1, "aprovMovel5": 46.7}, {"jogo": 8, "data": "04/02/2026", "pontosAcum": 16, "saldoAcum": 4, "gp": 5, "gc": 1, "aprovMovel5": 46.7}, {"jogo": 9, "data": "08/02/2026", "pontosAcum": 19, "saldoAcum": 5, "gp": 1, "gc": 0, "aprovMovel5": 66.7}, {"jogo": 10, "data": "12/02/2026", "pontosAcum": 22, "saldoAcum": 7, "gp": 3, "gc": 1, "aprovMovel5": 66.7}, {"jogo": 11, "data": "15/02/2026", "pontosAcum": 23, "saldoAcum": 7, "gp": 1, "gc": 1, "aprovMovel5": 66.7}, {"jogo": 12, "data": "21/02/2026", "pontosAcum": 26, "saldoAcum": 11, "gp": 4, "gc": 0, "aprovMovel5": 86.7}, {"jogo": 13, "data": "25/02/2026", "pontosAcum": 29, "saldoAcum": 12, "gp": 2, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 14, "data": "01/03/2026", "pontosAcum": 32, "saldoAcum": 13, "gp": 2, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 15, "data": "04/03/2026", "pontosAcum": 35, "saldoAcum": 14, "gp": 1, "gc": 0, "aprovMovel5": 86.7}, {"jogo": 16, "data": "08/03/2026", "pontosAcum": 38, "saldoAcum": 15, "gp": 2, "gc": 1, "aprovMovel5": 100.0}, {"jogo": 17, "data": "12/03/2026", "pontosAcum": 38, "saldoAcum": 14, "gp": 1, "gc": 2, "aprovMovel5": 80.0}, {"jogo": 18, "data": "15/03/2026", "pontosAcum": 41, "saldoAcum": 15, "gp": 1, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 19, "data": "18/03/2026", "pontosAcum": 44, "saldoAcum": 16, "gp": 2, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 20, "data": "21/03/2026", "pontosAcum": 47, "saldoAcum": 17, "gp": 1, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 21, "data": "02/04/2026", "pontosAcum": 50, "saldoAcum": 18, "gp": 2, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 22, "data": "05/04/2026", "pontosAcum": 53, "saldoAcum": 19, "gp": 2, "gc": 1, "aprovMovel5": 100.0}, {"jogo": 23, "data": "08/04/2026", "pontosAcum": 54, "saldoAcum": 19, "gp": 1, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 24, "data": "12/04/2026", "pontosAcum": 55, "saldoAcum": 19, "gp": 0, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 25, "data": "16/04/2026", "pontosAcum": 58, "saldoAcum": 20, "gp": 2, "gc": 1, "aprovMovel5": 73.3}, {"jogo": 26, "data": "19/04/2026", "pontosAcum": 61, "saldoAcum": 21, "gp": 1, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 27, "data": "23/04/2026", "pontosAcum": 64, "saldoAcum": 24, "gp": 3, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 28, "data": "26/04/2026", "pontosAcum": 67, "saldoAcum": 25, "gp": 1, "gc": 0, "aprovMovel5": 86.7}, {"jogo": 29, "data": "29/04/2026", "pontosAcum": 68, "saldoAcum": 25, "gp": 1, "gc": 1, "aprovMovel5": 86.7}, {"jogo": 30, "data": "02/05/2026", "pontosAcum": 69, "saldoAcum": 25, "gp": 1, "gc": 1, "aprovMovel5": 73.3}, {"jogo": 31, "data": "05/05/2026", "pontosAcum": 72, "saldoAcum": 27, "gp": 2, "gc": 0, "aprovMovel5": 73.3}, {"jogo": 32, "data": "10/05/2026", "pontosAcum": 73, "saldoAcum": 27, "gp": 1, "gc": 1, "aprovMovel5": 60.0}, {"jogo": 33, "data": "13/05/2026", "pontosAcum": 76, "saldoAcum": 30, "gp": 4, "gc": 1, "aprovMovel5": 60.0}, {"jogo": 34, "data": "16/05/2026", "pontosAcum": 77, "saldoAcum": 30, "gp": 1, "gc": 1, "aprovMovel5": 60.0}, {"jogo": 35, "data": "20/05/2026", "pontosAcum": 77, "saldoAcum": 29, "gp": 0, "gc": 1, "aprovMovel5": 53.3}, {"jogo": 36, "data": "23/05/2026", "pontosAcum": 80, "saldoAcum": 32, "gp": 3, "gc": 0, "aprovMovel5": 53.3}, {"jogo": 37, "data": "28/05/2026", "pontosAcum": 83, "saldoAcum": 35, "gp": 4, "gc": 1, "aprovMovel5": 66.7}, {"jogo": 38, "data": "31/05/2026", "pontosAcum": 86, "saldoAcum": 36, "gp": 1, "gc": 0, "aprovMovel5": 66.7}, {"jogo": 39, "data": "22/07/2026", "pontosAcum": 89, "saldoAcum": 38, "gp": 3, "gc": 1, "aprovMovel5": 80.0}, {"jogo": 40, "data": "26/07/2026", "pontosAcum": 89, "saldoAcum": 37, "gp": 1, "gc": 2, "aprovMovel5": 80.0}, {"jogo": 41, "data": "29/07/2026", "pontosAcum": 92, "saldoAcum": 41, "gp": 4, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 42, "data": "02/08/2026", "pontosAcum": 95, "saldoAcum": 44, "gp": 3, "gc": 0, "aprovMovel5": 80.0}, {"jogo": 43, "data": "05/08/2026", "pontosAcum": 95, "saldoAcum": 43, "gp": 2, "gc": 3, "aprovMovel5": 60.0}, {"jogo": 44, "data": "09/08/2026", "pontosAcum": 96, "saldoAcum": 43, "gp": 0, "gc": 0, "aprovMovel5": 46.7}], "resultadoMatrix": [{"resultado": "Vitória", "qtd": 29, "pct": 65.9}, {"resultado": "Empate", "qtd": 9, "pct": 20.5}, {"resultado": "Derrota", "qtd": 6, "pct": 13.6}], "artilharia": [{"Jogador": "López", "Gols": 16}, {"Jogador": "Sosa", "Gols": 9}, {"Jogador": "Maurício", "Gols": 8}, {"Jogador": "Arias", "Gols": 8}, {"Jogador": "Allan", "Gols": 6}, {"Jogador": "Vitor Roque", "Gols": 6}, {"Jogador": "Felipe Anderson", "Gols": 4}, {"Jogador": "Murilo", "Gols": 4}, {"Jogador": "Andreas", "Gols": 3}, {"Jogador": "Gómez", "Gols": 3}, {"Jogador": "Paulinho", "Gols": 2}, {"Jogador": "Luighi", "Gols": 2}, {"Jogador": "Marlon Freitas", "Gols": 2}, {"Jogador": "Khellven", "Gols": 1}, {"Jogador": "Erick Belé", "Gols": 1}], "assistencias": [{"Jogador": "López", "Assistencias": 10}, {"Jogador": "Andreas Pereira", "Assistencias": 10}, {"Jogador": "Sosa", "Assistencias": 7}, {"Jogador": "Allan", "Assistencias": 5}, {"Jogador": "Felipe Anderson", "Assistencias": 5}, {"Jogador": "Piquerez", "Assistencias": 4}, {"Jogador": "Maurício", "Assistencias": 3}, {"Jogador": "Arias", "Assistencias": 3}, {"Jogador": "Murilo", "Assistencias": 2}, {"Jogador": "Lucas Evangelista", "Assistencias": 2}, {"Jogador": "Jefté", "Assistencias": 1}, {"Jogador": "Marlon Freitas", "Assistencias": 1}, {"Jogador": "Vitor Roque", "Assistencias": 1}, {"Jogador": "Gómez", "Assistencias": 1}], "todasPartidas": [{"data": "10/01/2026", "adversario": "Portuguesa", "competicao": "Paulista", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "14/01/2026", "adversario": "Santos", "competicao": "Paulista", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "17/01/2026", "adversario": "Mirassol", "competicao": "Paulista", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "20/01/2026", "adversario": "Novorizontino", "competicao": "Paulista", "local": "Fora", "placar": "0x4", "resultado": "Derrota", "gp": 0, "gc": 4}, {"data": "24/01/2026", "adversario": "São Paulo", "competicao": "Paulista", "local": "Casa", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "28/01/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Fora", "placar": "2x2", "resultado": "Empate", "gp": 2, "gc": 2}, {"data": "01/02/2026", "adversario": "Botafogo-SP", "competicao": "Paulista", "local": "Fora", "placar": "0x1", "resultado": "Derrota", "gp": 0, "gc": 1}, {"data": "04/02/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Casa", "placar": "5x1", "resultado": "Vitória", "gp": 5, "gc": 1}, {"data": "08/02/2026", "adversario": "Corinthians", "competicao": "Paulista", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "12/02/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Fora", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "15/02/2026", "adversario": "Guarani", "competicao": "Paulista", "local": "Casa", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "21/02/2026", "adversario": "Capivariano", "competicao": "Paulista", "local": "Casa", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "25/02/2026", "adversario": "Fluminense", "competicao": "Brasileirão", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "01/03/2026", "adversario": "São Paulo", "competicao": "Paulista", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "04/03/2026", "adversario": "Novorizontino", "competicao": "Paulista", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "08/03/2026", "adversario": "Novorizontino", "competicao": "Paulista", "local": "Fora", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "12/03/2026", "adversario": "Vasco", "competicao": "Brasileirão", "local": "Fora", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "15/03/2026", "adversario": "Mirassol", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "18/03/2026", "adversario": "Botafogo", "competicao": "Brasileirão", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "21/03/2026", "adversario": "São Paulo", "competicao": "Brasileirão", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "02/04/2026", "adversario": "Grêmio", "competicao": "Brasileirão", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "05/04/2026", "adversario": "Bahia", "competicao": "Brasileirão", "local": "Fora", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "08/04/2026", "adversario": "Junior Barranquilla", "competicao": "Libertadores", "local": "Fora", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "12/04/2026", "adversario": "Corinthians", "competicao": "Brasileirão", "local": "Fora", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}, {"data": "16/04/2026", "adversario": "Sporting Cristal", "competicao": "Libertadores", "local": "Casa", "placar": "2x1", "resultado": "Vitória", "gp": 2, "gc": 1}, {"data": "19/04/2026", "adversario": "Athletico-PR", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "23/04/2026", "adversario": "Jacuipense", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "26/04/2026", "adversario": "Red Bull Bragantino", "competicao": "Brasileirão", "local": "Fora", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "29/04/2026", "adversario": "Cerro Porteño", "competicao": "Libertadores", "local": "Fora", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "02/05/2026", "adversario": "Santos", "competicao": "Brasileirão", "local": "Casa", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "05/05/2026", "adversario": "Sporting Cristal", "competicao": "Libertadores", "local": "Fora", "placar": "2x0", "resultado": "Vitória", "gp": 2, "gc": 0}, {"data": "10/05/2026", "adversario": "Remo", "competicao": "Brasileirão", "local": "Fora", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "13/05/2026", "adversario": "Jacuipense", "competicao": "Copa do Brasil", "local": "Fora", "placar": "4x1", "resultado": "Vitória", "gp": 4, "gc": 1}, {"data": "16/05/2026", "adversario": "Cruzeiro", "competicao": "Brasileirão", "local": "Casa", "placar": "1x1", "resultado": "Empate", "gp": 1, "gc": 1}, {"data": "20/05/2026", "adversario": "Cerro Porteño", "competicao": "Libertadores", "local": "Casa", "placar": "0x1", "resultado": "Derrota", "gp": 0, "gc": 1}, {"data": "23/05/2026", "adversario": "Flamengo", "competicao": "Brasileirão", "local": "Fora", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "28/05/2026", "adversario": "Junior Barranquilla", "competicao": "Libertadores", "local": "Casa", "placar": "4x1", "resultado": "Vitória", "gp": 4, "gc": 1}, {"data": "31/05/2026", "adversario": "Chapecoense", "competicao": "Brasileirão", "local": "Casa", "placar": "1x0", "resultado": "Vitória", "gp": 1, "gc": 0}, {"data": "22/07/2026", "adversario": "Coritiba", "competicao": "Brasileirão", "local": "Fora", "placar": "3x1", "resultado": "Vitória", "gp": 3, "gc": 1}, {"data": "26/07/2026", "adversario": "Atlético-MG", "competicao": "Brasileirão", "local": "Casa", "placar": "1x2", "resultado": "Derrota", "gp": 1, "gc": 2}, {"data": "29/07/2026", "adversario": "Vitória", "competicao": "Brasileirão", "local": "Fora", "placar": "4x0", "resultado": "Vitória", "gp": 4, "gc": 0}, {"data": "02/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Casa", "placar": "3x0", "resultado": "Vitória", "gp": 3, "gc": 0}, {"data": "05/08/2026", "adversario": "Fortaleza", "competicao": "Copa do Brasil", "local": "Fora", "placar": "2x3", "resultado": "Derrota", "gp": 2, "gc": 3}, {"data": "09/08/2026", "adversario": "Internacional", "competicao": "Brasileirão", "local": "Casa", "placar": "0x0", "resultado": "Empate", "gp": 0, "gc": 0}], "competicoesLista": ["Brasileirão", "Copa do Brasil", "Libertadores", "Paulista"], "adversariosLista": ["Athletico-PR", "Atlético-MG", "Bahia", "Botafogo", "Botafogo-SP", "Capivariano", "Cerro Porteño", "Chapecoense", "Corinthians", "Coritiba", "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Guarani", "Internacional", "Jacuipense", "Junior Barranquilla", "Mirassol", "Novorizontino", "Portuguesa", "Red Bull Bragantino", "Remo", "Santos", "Sporting Cristal", "São Paulo", "Vasco", "Vitória"]};

/* ================================================================
   PALMEIRAS · BI SPORTS ANALYTICS
   Camada de renderização. Tudo o que aparece na tela é derivado de
   DATA, que por sua vez é sempre recalculado a partir de RAW_ROWS
   (base carregada) pelo recorte de filtros ativo.
   ================================================================ */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- estado de UI preservado entre re-renders ---------- */
const UI = {
  rankTab: 'Mais enfrentados',
  rankSort: null,               // {key, dir}
  gamesScope: 10,               // 5 | 10 | 'all'
  gamesSort: {key:'data', dir:'desc'},
  gamesQuery: '',
};

/* Artilharia/assistências vivem fora de DATA: são da temporada
   inteira e não têm como ser recortadas por partida. */
let PLAYERS = {
  artilharia: DATA.artilharia || [],
  assistencias: DATA.assistencias || [],
};

/* ---------- helpers ---------- */
function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}
function esc(s){
  return String(s ?? '').replace(/[&<>"']/g, c => (
    {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
  ));
}
function aprovClass(v){ return v >= 66.6 ? 'hi' : v >= 40 ? 'mid' : 'lo'; }
function resClass(r){ return r === 'Vitória' ? 'v' : r === 'Empate' ? 'e' : 'd'; }
function signed(v){ return (v > 0 ? '+' : '') + v; }
function pct(v){ return (Number(v) || 0).toFixed(1) + '%'; }
function plural(n, um, muitos){ return n === 1 ? um : muitos; }
function parseBR(s){
  const [dd, mm, yyyy] = String(s).split('/');
  return new Date(+yyyy, +mm - 1, +dd);
}
function emptyMsg(txt){
  return '<div style="padding:34px 12px;text-align:center;font-family:var(--font-mono);font-size:12px;color:var(--grey-3)">' + esc(txt) + '</div>';
}

/* Anima um número até o valor final. Números pequenos (ou movimento
   reduzido) vão direto ao destino. */
function countUp(node, target, format){
  const fmt = format || (v => String(Math.round(v)));
  if(REDUCED_MOTION || !isFinite(target)){ node.textContent = fmt(target); return; }
  const dur = 550, t0 = performance.now();
  function frame(t){
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    node.textContent = fmt(target * eased);
    if(p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ================================================================
   CHROME: pill, tagline, rodapé, forma no hero, resumo de filtros
   ================================================================ */
function activeFilters(){
  const out = [];
  const comp = document.getElementById('f-competicao').value;
  const mand = document.getElementById('f-mandante').value;
  const res  = document.getElementById('f-resultado').value;
  const adv  = document.getElementById('f-adversario').value;
  if(comp) out.push(comp);
  if(mand) out.push(mand === 'casa' ? 'Em casa' : 'Fora de casa');
  if(res)  out.push(res + 's');
  if(adv)  out.push('vs ' + adv);
  return out;
}

function renderChrome(){
  const total = RAW_ROWS.length;
  const n = DATA.header.jogos;
  const filtros = activeFilters();

  document.getElementById('pill-partidas').textContent =
    n + ' ' + plural(n, 'partida', 'partidas') + (n < total ? ' de ' + total : '');

  document.getElementById('hero-tagline').textContent = filtros.length
    ? 'Recorte: ' + filtros.join(' · ')
    : 'Painel de performance · Temporada 2026 · Todas as competições';

  const sum = document.getElementById('filter-summary');
  sum.innerHTML = filtros.length
    ? 'Mostrando <b>' + n + '</b> de ' + total + ' partidas'
    : '<b>' + total + '</b> partidas na base';

  // Destaca visualmente os selects que estão filtrando algo
  ['f-competicao','f-mandante','f-resultado','f-adversario'].forEach(id => {
    const s = document.getElementById(id);
    s.classList.toggle('on', !!s.value);
  });

  const hf = document.getElementById('hero-form');
  hf.innerHTML = '';
  (DATA.momentoAtual.sequencia || []).forEach(r => hf.appendChild(el('div', 'fc ' + r, r)));

  document.getElementById('footer-note').textContent =
    'PALMEIRAS · BI SPORTS ANALYTICS — ' + n + ' ' + plural(n, 'partida', 'partidas') +
    (filtros.length ? ' no recorte (' + filtros.join(' · ') + ')' : ' na temporada 2026');
}

/* ================================================================
   KPIs
   ================================================================ */
function renderKPIs(){
  const h = DATA.header;
  const strip = document.getElementById('kpi-strip');
  strip.innerHTML = '';
  const items = [
    {l:'Jogos',          v:h.jogos},
    {l:'Vitórias',       v:h.vitorias,      cls:'green'},
    {l:'Empates',        v:h.empates,       cls:'gold'},
    {l:'Derrotas',       v:h.derrotas,      cls:'red'},
    {l:'Gols marcados',  v:h.golsMarcados,  cls:'green'},
    {l:'Gols sofridos',  v:h.golsSofridos,  cls:'red'},
    {l:'Saldo de gols',  v:h.saldo,         cls:h.saldo >= 0 ? 'green' : 'red', fmt:v => signed(Math.round(v))},
    {l:'Pontos',         v:h.pontos},
    {l:'Pts possíveis',  v:h.pontosPossiveis},
    {l:'Aproveitamento', v:h.aproveitamento, cls:'gold', hl:true, fmt:v => v.toFixed(1) + '%'},
  ];
  items.forEach(it => {
    const k = el('div', 'kpi' + (it.hl ? ' hl' : ''));
    k.appendChild(el('div', 'kpi-label', esc(it.l)));
    const val = el('div', 'kpi-value ' + (it.cls || ''));
    k.appendChild(val);
    strip.appendChild(k);
    countUp(val, it.v, it.fmt);
  });
}

/* ================================================================
   POR COMPETIÇÃO
   ================================================================ */
function renderCompeticoes(){
  const grid = document.getElementById('comp-grid');
  grid.innerHTML = '';
  const list = DATA.porCompeticao;
  if(!list.length){ grid.innerHTML = emptyMsg('Sem competições no recorte atual.'); return; }

  // "Melhor"/"pior" só fazem sentido com mais de uma competição no recorte
  const rotula = list.length > 1;
  list.forEach(c => {
    const isBest  = rotula && c.competicao === DATA.melhorCompeticao;
    const isWorst = rotula && c.competicao === DATA.piorCompeticao;
    const card = el('div', 'card comp-card' + (isBest ? ' best' : '') + (isWorst ? ' worst' : ''));
    const head = el('div', 'comp-head');
    head.appendChild(el('div', 'comp-name', esc(c.competicao)));
    if(isBest)  head.appendChild(el('div', 'badge best', 'Melhor aprov.'));
    if(isWorst) head.appendChild(el('div', 'badge worst', 'Pior aprov.'));
    card.appendChild(head);
    card.appendChild(el('div', 'comp-aprov', pct(c.aproveitamento)));
    card.appendChild(el('div', 'comp-aprov-label', c.pontos + ' de ' + c.pontosPossiveis + ' pontos possíveis'));

    const track = el('div', 'bar-track');
    const fill = el('div', 'bar-fill');
    fill.style.width = '0%';
    track.appendChild(fill);
    card.appendChild(track);
    requestAnimationFrame(() => { fill.style.width = c.aproveitamento + '%'; });

    const stats = el('div', 'comp-stats');
    [['J', c.jogos], ['V', c.vitorias], ['E', c.empates],
     ['D', c.derrotas], ['GP', c.golsMarcados], ['GC', c.golsSofridos],
     ['Saldo', signed(c.saldo)], ['Média GP', c.mediaGP], ['Média GC', c.mediaGC]
    ].forEach(([l, v]) => {
      const cs = el('div', 'comp-stat');
      cs.appendChild(el('div', 'v', v));
      cs.appendChild(el('div', 'l', l));
      stats.appendChild(cs);
    });
    card.appendChild(stats);
    grid.appendChild(card);
  });
}

/* ================================================================
   CASA × FORA
   ================================================================ */
function renderCasaFora(){
  const panel = document.getElementById('vs-panel');
  panel.innerHTML = '';
  const casa = DATA.casaXFora.casa, fora = DATA.casaXFora.fora;
  const diff = casa.aproveitamento - fora.aproveitamento;

  function side(d, label, destaque){
    const s = el('div', 'vs-side' + (destaque ? ' win' : ''));
    const head = el('div', 'vs-head');
    head.appendChild(el('h3', null, label));
    head.appendChild(el('div', 'tag', d.jogos + ' ' + plural(d.jogos, 'jogo', 'jogos')));
    s.appendChild(head);
    s.appendChild(el('div', 'vs-big' + (destaque ? ' green' : ''), pct(d.aproveitamento)));
    s.appendChild(el('div', 'kpi-sub', d.pontos + ' de ' + d.pontosPossiveis + ' pontos possíveis'));
    const g = el('div', 'vs-grid');
    [['V', d.vitorias], ['E', d.empates], ['D', d.derrotas],
     ['GP', d.golsMarcados], ['GC', d.golsSofridos], ['Saldo', signed(d.saldo)],
     ['Gols/jogo', d.mediaGolsJogo], ['Sofridos/jogo', d.jogos ? +(d.golsSofridos / d.jogos).toFixed(2) : 0], ['Pontos', d.pontos]
    ].forEach(([l, v]) => {
      const it = el('div', 'vs-item');
      it.appendChild(el('div', 'v', v));
      it.appendChild(el('div', 'l', l));
      g.appendChild(it);
    });
    s.appendChild(g);
    return s;
  }

  // Só há "lado melhor" quando os dois lados têm jogos no recorte
  const temAmbos = casa.jogos > 0 && fora.jogos > 0;
  panel.appendChild(side(casa, 'Em casa', temAmbos && diff >= 0));

  const mid = el('div', 'vs-mid');
  if(temAmbos){
    mid.appendChild(el('div', 'vlabel', diff >= 0 ? 'CASA RENDE MAIS' : 'FORA RENDE MAIS'));
    mid.appendChild(el('div', 'vval', '+' + Math.abs(diff).toFixed(1) + ' p.p.'));
  } else {
    mid.appendChild(el('div', 'vlabel', 'SEM COMPARAÇÃO'));
    mid.appendChild(el('div', 'vval', '—'));
  }
  panel.appendChild(mid);
  panel.appendChild(side(fora, 'Fora de casa', temAmbos && diff < 0));
}

/* ================================================================
   RANKING DE ADVERSÁRIOS
   ================================================================ */
const RANK_COLS = [
  {key:'adversario',   label:'Adversário', num:false},
  {key:'jogos',        label:'J'},
  {key:'vitorias',     label:'V'},
  {key:'empates',      label:'E'},
  {key:'derrotas',     label:'D'},
  {key:'golsMarcados', label:'GP'},
  {key:'golsSofridos', label:'GC'},
  {key:'saldo',        label:'Saldo'},
  {key:'aproveitamento', label:'Aprov.'},
];

function renderAdversarios(){
  const tabsWrap = document.getElementById('rank-tabs');
  const table = document.getElementById('rank-table');
  const datasets = {
    'Mais enfrentados':      DATA.maisEnfrentados,
    'Melhor aproveitamento': DATA.melhorAproveitamento,
    'Maior dificuldade':     DATA.maiorDificuldade,
    'Mais vencidos':         DATA.maisVencidos,
  };
  if(!datasets[UI.rankTab]) UI.rankTab = 'Mais enfrentados';

  tabsWrap.innerHTML = '';
  Object.keys(datasets).forEach(key => {
    const tab = el('button', 'rtab' + (key === UI.rankTab ? ' active' : ''), esc(key));
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', String(key === UI.rankTab));
    tab.onclick = () => { UI.rankTab = key; UI.rankSort = null; renderAdversarios(); };
    tabsWrap.appendChild(tab);
  });

  let rows = [...(datasets[UI.rankTab] || [])];
  if(UI.rankSort){
    const {key, dir} = UI.rankSort;
    rows.sort((a, b) => {
      const va = a[key], vb = b[key];
      const cmp = typeof va === 'string' ? va.localeCompare(vb, 'pt-BR') : va - vb;
      return dir === 'asc' ? cmp : -cmp;
    });
  }

  table.innerHTML = '';
  const thead = el('thead'), tr = el('tr');
  RANK_COLS.forEach(col => {
    const sorted = UI.rankSort && UI.rankSort.key === col.key;
    const th = el('th', [col.num === false ? '' : 'num', 'sortable', sorted ? 'sorted' : '', sorted && UI.rankSort.dir === 'asc' ? 'asc' : ''].filter(Boolean).join(' '), esc(col.label));
    th.onclick = () => {
      const asc = sorted && UI.rankSort.dir === 'desc';
      UI.rankSort = {key: col.key, dir: asc ? 'asc' : 'desc'};
      renderAdversarios();
    };
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = el('tbody');
  if(!rows.length){
    const r = el('tr', 'empty-row');
    const td = el('td', null, 'Nenhum adversário neste recorte.');
    td.colSpan = RANK_COLS.length;
    r.appendChild(td); tbody.appendChild(r);
  }
  rows.forEach(r => {
    const row = el('tr');
    row.appendChild(el('td', null, '<span class="opp-name">' + esc(r.adversario) + '</span>'));
    [r.jogos, r.vitorias, r.empates, r.derrotas, r.golsMarcados, r.golsSofridos, signed(r.saldo)]
      .forEach(v => row.appendChild(el('td', 'num', v)));
    row.appendChild(el('td', 'num',
      '<span class="aprov-tag ' + aprovClass(r.aproveitamento) + '">' + pct(r.aproveitamento) + '</span>'));
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  renderConfrontos();
}

function renderConfrontos(){
  const grid = document.getElementById('confrontos-grid');
  grid.innerHTML = '';
  const mais     = DATA.maisEnfrentados[0];
  const maisVenc = DATA.maisVencidos[0];
  const dificil  = DATA.maiorDificuldade[0];
  const ga = DATA.goleadaAplicada;
  if(!mais){ grid.innerHTML = emptyMsg('Sem confrontos no recorte atual.'); return; }

  const cards = [
    ['Adversário mais enfrentado', mais.adversario, mais.jogos + ' ' + plural(mais.jogos, 'jogo disputado', 'jogos disputados')],
    ['Adversário mais difícil', dificil ? dificil.adversario : '—', dificil ? pct(dificil.aproveitamento) + ' em ' + dificil.jogos + ' ' + plural(dificil.jogos, 'jogo', 'jogos') : ''],
    ['Mais vitórias contra', maisVenc ? maisVenc.adversario : '—', maisVenc ? maisVenc.vitorias + ' ' + plural(maisVenc.vitorias, 'vitória', 'vitórias') + ' em ' + maisVenc.jogos + ' ' + plural(maisVenc.jogos, 'jogo', 'jogos') : ''],
    ['Maior goleada aplicada', ga ? ga.placar + ' vs ' + ga.adversario : '—', ga ? ga.data + ' · ' + ga.competicao : ''],
  ];
  cards.forEach(([l, v, s]) => {
    const c = el('div', 'highlight-card');
    c.appendChild(el('div', 'hl-label', esc(l)));
    c.appendChild(el('div', 'hl-val', esc(v)));
    c.appendChild(el('div', 'hl-sub', esc(s)));
    grid.appendChild(c);
  });
}

/* ================================================================
   GRÁFICO DE EVOLUÇÃO (SVG interativo)
   Eixo esquerdo: pontos e saldo acumulados (contagens).
   Eixo direito: aproveitamento móvel de 5 jogos (0–100%).
   As 5 linhas de grade são compartilhadas pelas duas escalas, então
   os rótulos dos dois lados sempre caem exatamente sobre elas.
   ================================================================ */
const STEP_LADDER = [1, 2, 2.5, 5, 10];

function niceStep(raw){
  if(!(raw > 0)) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / pow;
  return (STEP_LADDER.find(x => norm <= x + 1e-9) || 10) * pow;
}
function nextNiceStep(s){
  const pow = Math.pow(10, Math.floor(Math.log10(s)));
  const norm = s / pow;
  const next = STEP_LADDER.find(x => x > norm + 1e-9);
  return next ? next * pow : pow * 10;
}

/* Escolhe início, passo e número de divisões do eixo esquerdo.
   Testa 4 e 5 divisões e fica com a que cobre os dados com a menor
   folga — um único valor negativo não deve custar metade do gráfico.
   Ambas as opções mantêm o eixo direito redondo (25% ou 20% por linha). */
function chooseScale(min, max){
  const opts = [];
  for(const ticks of [4, 5]){
    let step = niceStep((max - min) / ticks) || 1;
    for(let guard = 0; guard < 30; guard++){
      const lo = Math.floor(min / step) * step;
      if(lo + step * ticks >= max - 1e-9){ opts.push({lo, step, ticks, span: step * ticks}); break; }
      step = nextNiceStep(step);
    }
  }
  opts.sort((a, b) => a.span - b.span);
  return opts[0] || {lo: 0, step: 25, ticks: 4, span: 100};
}

function renderEvolucao(){
  const host = document.getElementById('evo-chart');
  const tip = document.getElementById('chart-tip');
  host.innerHTML = '';
  tip.hidden = true;

  const evo = DATA.evolucao;
  const jogos = DATA.todasPartidas;
  if(evo.length < 2){ host.innerHTML = emptyMsg('São necessárias ao menos 2 partidas para desenhar a evolução.'); return; }

  const W = 1180, H = 320, PL = 52, PR = 52, PT = 18, PB = 34;
  const IW = W - PL - PR, IH = H - PT - PB;
  const n = evo.length;
  const xAt = i => PL + i * (IW / (n - 1));

  // Escala esquerda com 4 intervalos "redondos" que cobrem pontos e saldo
  const vals = evo.flatMap(d => [d.pontosAcum, d.saldoAcum]);
  const rawMax = Math.max(...vals, 1);
  const rawMin = Math.min(...vals, 0);
  const sc = chooseScale(rawMin, rawMax);
  const yMin = sc.lo, yMax = sc.lo + sc.span;
  const yL = v => PT + IH * (1 - (v - yMin) / (yMax - yMin));
  const yR = v => PT + IH * (1 - v / 100);

  const path = (getter, from) => evo.map((d, i) =>
    (i === (from || 0) ? 'M' : 'L') + xAt(i).toFixed(1) + ',' + getter(d, i).toFixed(1)
  ).slice(from || 0).join(' ');

  const ptsPath   = path(d => yL(d.pontosAcum));
  const saldoPath = path(d => yL(d.saldoAcum));
  const firstAprov = evo.findIndex(d => d.aprovMovel5 !== null && d.aprovMovel5 !== undefined);
  const aprovPath = firstAprov >= 0 ? path(d => yR(d.aprovMovel5 ?? 0), firstAprov) : '';
  const areaPath  = ptsPath + ' L' + xAt(n - 1).toFixed(1) + ',' + yL(yMin).toFixed(1) +
                    ' L' + xAt(0).toFixed(1) + ',' + yL(yMin).toFixed(1) + ' Z';

  let grid = '', labelsL = '', labelsR = '';
  for(let k = 0; k <= sc.ticks; k++){
    const v = yMin + sc.step * k;
    const y = yL(v);
    const zero = Math.abs(v) < 1e-9;
    grid += '<line x1="' + PL + '" y1="' + y.toFixed(1) + '" x2="' + (W - PR) + '" y2="' + y.toFixed(1) +
            '" stroke="' + (zero ? '#2b4c39' : '#1e3a2c') + '" stroke-width="1" opacity="' + (zero ? 0.9 : 0.45) + '"/>';
    labelsL += '<text x="' + (PL - 10) + '" y="' + (y + 3.5).toFixed(1) + '" fill="#5f7267" font-size="10" text-anchor="end">' +
               (Math.round(v * 10) / 10) + '</text>';
    labelsR += '<text x="' + (W - PR + 10) + '" y="' + (y + 3.5).toFixed(1) + '" fill="#4d6a86" font-size="10">' +
               Math.round(k * 100 / sc.ticks) + '%</text>';
  }

  // Marcadores de partida coloridos por resultado
  const dots = evo.map((d, i) => {
    const j = jogos[i];
    const cor = !j ? '#39c96a' : j.resultado === 'Vitória' ? '#39c96a' : j.resultado === 'Empate' ? '#e8cd8a' : '#e0523f';
    return '<circle cx="' + xAt(i).toFixed(1) + '" cy="' + yL(d.pontosAcum).toFixed(1) +
           '" r="2.6" fill="' + cor + '" opacity="0.9"/>';
  }).join('');

  host.innerHTML =
  '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Evolução de pontos, saldo e aproveitamento ao longo de ' + n + ' jogos" style="font-family:var(--font-mono)">' +
    '<defs><linearGradient id="ptsFade" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#39c96a" stop-opacity="0.28"/>' +
      '<stop offset="100%" stop-color="#39c96a" stop-opacity="0"/>' +
    '</linearGradient></defs>' +
    grid + labelsL + labelsR +
    '<path d="' + areaPath + '" fill="url(#ptsFade)" stroke="none"/>' +
    (aprovPath ? '<path d="' + aprovPath + '" fill="none" stroke="#6f9ce6" stroke-width="1.6" stroke-dasharray="5 3" opacity="0.85" stroke-linejoin="round"/>' : '') +
    '<path d="' + saldoPath + '" fill="none" stroke="#e8cd8a" stroke-width="2" opacity="0.9" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<path d="' + ptsPath + '" fill="none" stroke="#39c96a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>' +
    dots +
    '<text x="' + PL + '" y="' + (H - 10) + '" fill="#5f7267" font-size="10">Jogo 1 · ' + esc(evo[0].data) + '</text>' +
    '<text x="' + (W - PR) + '" y="' + (H - 10) + '" fill="#5f7267" font-size="10" text-anchor="end">Jogo ' + n + ' · ' + esc(evo[n - 1].data) + '</text>' +
    '<g id="evo-cursor" opacity="0">' +
      '<line y1="' + PT + '" y2="' + (PT + IH) + '" stroke="#8ea095" stroke-width="1" stroke-dasharray="3 3"/>' +
      '<circle r="5" fill="#0b1712" stroke="#39c96a" stroke-width="2"/>' +
      '<circle r="4" fill="#0b1712" stroke="#e8cd8a" stroke-width="2"/>' +
      '<circle r="4" fill="#0b1712" stroke="#6f9ce6" stroke-width="2"/>' +
    '</g>' +
    '<rect id="evo-hit" x="' + PL + '" y="' + PT + '" width="' + IW + '" height="' + IH + '" fill="transparent" style="cursor:crosshair"/>' +
  '</svg>';

  const svg = host.querySelector('svg');
  const cursor = host.querySelector('#evo-cursor');
  const cLine = cursor.children[0], cPts = cursor.children[1],
        cSaldo = cursor.children[2], cAprov = cursor.children[3];

  function hide(){ cursor.setAttribute('opacity', '0'); tip.hidden = true; }

  function move(ev){
    const box = svg.getBoundingClientRect();
    const svgX = (ev.clientX - box.left) / box.width * W;
    let i = Math.round((svgX - PL) / (IW / (n - 1)));
    i = Math.max(0, Math.min(n - 1, i));
    const d = evo[i], j = jogos[i];
    const x = xAt(i);

    cursor.setAttribute('opacity', '1');
    cLine.setAttribute('x1', x); cLine.setAttribute('x2', x);
    cPts.setAttribute('cx', x);   cPts.setAttribute('cy', yL(d.pontosAcum));
    cSaldo.setAttribute('cx', x); cSaldo.setAttribute('cy', yL(d.saldoAcum));
    if(d.aprovMovel5 === null || d.aprovMovel5 === undefined){
      cAprov.setAttribute('opacity', '0');
    } else {
      cAprov.setAttribute('opacity', '1');
      cAprov.setAttribute('cx', x); cAprov.setAttribute('cy', yR(d.aprovMovel5));
    }

    tip.hidden = false;
    tip.innerHTML =
      '<div class="tt-head"><span class="tt-opp">' + esc(j ? j.adversario : 'Jogo ' + d.jogo) + '</span>' +
      '<span class="tt-date">' + esc(d.data) + '</span></div>' +
      (j ? '<div class="tt-row"><span>Placar</span><span>' + esc(j.placar) + ' · ' + esc(j.resultado) + '</span></div>' : '') +
      '<div class="tt-row"><span>Pontos acum.</span><span>' + d.pontosAcum + '</span></div>' +
      '<div class="tt-row"><span>Saldo acum.</span><span>' + signed(d.saldoAcum) + '</span></div>' +
      '<div class="tt-row"><span>Aprov. móvel 5</span><span>' +
        (d.aprovMovel5 === null || d.aprovMovel5 === undefined ? '—' : pct(d.aprovMovel5)) + '</span></div>' +
      (j ? '<div class="tt-meta">Jogo ' + d.jogo + ' de ' + n + ' · ' + esc(j.competicao) + ' · ' + esc(j.local) + '</div>'
         : '<div class="tt-meta">Jogo ' + d.jogo + ' de ' + n + '</div>');

    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = ev.clientX + 16, top = ev.clientY - th / 2;
    if(left + tw > window.innerWidth - 12) left = ev.clientX - tw - 16;
    top = Math.max(12, Math.min(window.innerHeight - th - 12, top));
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  const hit = host.querySelector('#evo-hit');
  hit.addEventListener('pointermove', move);
  hit.addEventListener('pointerdown', move);
  hit.addEventListener('pointerleave', hide);
  host.addEventListener('pointerleave', hide);
}

/* ================================================================
   MOMENTO / SEQUÊNCIAS
   ================================================================ */
function renderMomento(){
  const m = DATA.momentoAtual;
  const row = document.getElementById('form-row');
  row.innerHTML = '';
  if(!m.sequencia.length){
    row.innerHTML = emptyMsg('Sem jogos no recorte.');
  }
  m.sequencia.forEach(r => row.appendChild(el('div', 'form-chip ' + r, r)));

  document.getElementById('momento-aprov').textContent = m.sequencia.length ? pct(m.aproveitamento) : '—';

  const badges = document.getElementById('momento-badges');
  badges.innerHTML = '';
  const clsMap  = {'Evoluindo':'evoluindo', 'Estável':'estavel', 'Caindo':'caindo'};
  const iconMap = {'Evoluindo':'▲', 'Estável':'▬', 'Caindo':'▼'};
  if(m.sequencia.length){
    badges.appendChild(el('div', 'momentum-badge ' + clsMap[m.tendencia], iconMap[m.tendencia] + ' Tendência: ' + m.tendencia));
    badges.appendChild(el('div', 'momentum-badge estavel', 'Classificação: ' + m.classificacao));
  }

  const trendWrap = document.getElementById('trend-badge');
  trendWrap.innerHTML = '';
  if(m.sequencia.length){
    const nUlt = Math.min(10, DATA.header.jogos);
    trendWrap.appendChild(el('div', 'momentum-badge ' + clsMap[m.tendencia],
      iconMap[m.tendencia] + ' ' + m.tendencia + ' — últimos ' + nUlt + ' jogos: ' +
      m.pontos10 + '/' + (nUlt * 3) + ' pts (' + pct(m.aproveitamento10) + ')'));
  }
}

function renderSequencias(){
  const s = DATA.sequencias;
  const grid = document.getElementById('seq-grid');
  grid.innerHTML = '';
  [
    ['Maior seq. de vitórias', s.maiorVitorias, false],
    ['Maior seq. sem perder', s.maiorSemPerder, false],
    ['Maior seq. de derrotas', s.maiorDerrotas, true],
    ['Maior seq. sem vencer', s.maiorSemVencer, true],
    ['Maior seq. marcando gols', s.maiorMarcando, false],
    ['Maior seq. sem sofrer gols', s.maiorSemSofrer, false],
    ['Maior seq. sofrendo gols', s.maiorSofrendo, true],
  ].forEach(([l, v, neg]) => {
    const c = el('div', 'seq-card' + (neg && v > 0 ? ' neg' : ''));
    c.appendChild(el('div', 'seq-num', v));
    c.appendChild(el('div', 'seq-label', l));
    grid.appendChild(c);
  });
}

/* ================================================================
   ELENCO — artilharia e assistências
   ================================================================ */
function normalizePlayers(list){
  return (list || []).map(r => {
    if(r && typeof r === 'object' && 'nome' in r && 'valor' in r) return {nome: String(r.nome), valor: +r.valor || 0};
    const keys = Object.keys(r || {});
    const nameKey = keys.find(k => /jogador|nome|player|atleta/i.test(k)) || keys[0];
    const valKey  = keys.find(k => k !== nameKey && typeof r[k] === 'number') || keys[1];
    return {nome: String(r[nameKey] ?? '').trim(), valor: +r[valKey] || 0};
  }).filter(p => p.nome && p.nome !== 'null' && p.valor > 0)
    .sort((a, b) => b.valor - a.valor || a.nome.localeCompare(b.nome, 'pt-BR'));
}

function renderElenco(){
  const grid = document.getElementById('elenco-grid');
  grid.innerHTML = '';
  const blocos = [
    {titulo:'Artilharia', unidade:'gols', barra:'gols',   dados: normalizePlayers(PLAYERS.artilharia)},
    {titulo:'Assistências', unidade:'assistências', barra:'assist', dados: normalizePlayers(PLAYERS.assistencias)},
  ];

  blocos.forEach(b => {
    const card = el('div', 'card');
    card.appendChild(el('div', 'comp-name', b.titulo));
    if(!b.dados.length){
      card.appendChild(el('div', null, emptyMsg('A planilha carregada não traz uma aba de ' + b.titulo.toLowerCase() + '.')));
      grid.appendChild(card);
      return;
    }
    const max = b.dados[0].valor;
    const total = b.dados.reduce((s, p) => s + p.valor, 0);
    const lista = el('div', null, '');
    lista.style.marginTop = '14px';
    b.dados.slice(0, 10).forEach((p, i) => {
      const row = el('div', 'player-row' + (i === 0 ? ' top' : ''));
      row.appendChild(el('div', 'pos', i + 1));
      const mid = el('div');
      mid.appendChild(el('div', 'pname', esc(p.nome)));
      const bar = el('div', 'pbar');
      const fill = el('i', b.barra);
      fill.style.width = '0%';
      bar.appendChild(fill);
      mid.appendChild(bar);
      row.appendChild(mid);
      row.appendChild(el('div', 'pval', p.valor));
      lista.appendChild(row);
      requestAnimationFrame(() => { fill.style.width = (p.valor / max * 100) + '%'; });
    });
    card.appendChild(lista);

    const foot = el('div', 'elenco-foot');
    foot.appendChild(el('span', null, b.dados.length + ' ' + plural(b.dados.length, 'jogador', 'jogadores') + ' com ' + b.unidade));
    foot.appendChild(el('span', null, 'Total: ' + total));
    card.appendChild(foot);
    grid.appendChild(card);
  });
}

/* ================================================================
   OFENSIVA / DEFENSIVA
   ================================================================ */
function renderDistribuicao(){
  const dist = DATA.distribuicaoGolsMarcados;
  const wrap = document.getElementById('dist-gols');
  wrap.innerHTML = '';
  const keys = Object.keys(dist).sort((a, b) => a - b);
  if(!keys.length){ wrap.innerHTML = emptyMsg('Sem partidas no recorte.'); return; }

  const total = DATA.header.jogos;
  const max = Math.max(...Object.values(dist));
  keys.forEach(k => {
    const v = dist[k];
    const w = v / max * 100;
    const row = el('div', 'dist-row');
    row.appendChild(el('div', 'dist-label', k + ' ' + plural(+k, 'gol', 'gols')));
    const track = el('div', 'dist-track');
    const fill = el('div', 'dist-fill');
    fill.style.width = '0%';
    track.appendChild(fill);
    // Rótulo dentro da barra quando cabe, fora quando não cabe — assim
    // barras curtas continuam legíveis sem precisar distorcer a escala.
    const dentro = w > 26;
    const label = el('div', 'dist-val ' + (dentro ? 'inside' : 'outside'),
      v + ' ' + plural(v, 'jogo', 'jogos') + ' · ' + (v / total * 100).toFixed(0) + '%');
    label.style.left = dentro ? '10px' : 'calc(' + w + '% + 10px)';
    track.appendChild(label);
    row.appendChild(track);
    wrap.appendChild(row);
    requestAnimationFrame(() => { fill.style.width = w + '%'; });
  });
}

function renderHighlights(){
  const h = DATA.header;
  const set = (id, txt) => { document.getElementById(id).textContent = txt; };
  set('hl-cs', DATA.cleanSheets);
  set('hl-cs-sub', 'de ' + h.jogos + ' ' + plural(h.jogos, 'jogo', 'jogos') + ' sem sofrer gols');
  set('hl-nsm', DATA.jogosSemMarcar);
  set('hl-nsm-sub', 'de ' + h.jogos + ' ' + plural(h.jogos, 'partida', 'partidas'));
  set('hl-maxgp', DATA.maiorGP_umJogo);
  set('hl-maxgc', DATA.maiorGC_umJogo);
  const ga = DATA.goleadaAplicada, gs = DATA.goleadaSofrida;
  set('hl-golap', ga ? ga.placar + ' vs ' + ga.adversario : '—');
  set('hl-golap-sub', ga ? ga.data + ' · ' + ga.competicao : '');
  set('hl-golso', gs ? gs.placar + ' vs ' + gs.adversario : '—');
  set('hl-golso-sub', gs ? gs.data + ' · ' + gs.competicao : '');
}

function renderDonut(){
  const data = DATA.resultadoMatrix.filter(d => d.qtd > 0);
  const chart = document.getElementById('donut-chart');
  const legend = document.getElementById('donut-legend');
  chart.innerHTML = ''; legend.innerHTML = '';
  if(!data.length){ chart.innerHTML = emptyMsg('Sem partidas no recorte.'); return; }

  const colors = {'Vitória':'#39c96a', 'Empate':'#e8cd8a', 'Derrota':'#e0523f'};
  const R = 80, CX = 100, CY = 100, STROKE = 26, GAP = data.length > 1 ? 2 : 0;
  const circ = 2 * Math.PI * R;
  let offset = 0, segs = '';
  data.forEach(d => {
    const len = Math.max(circ * d.pct / 100 - GAP, 0.5);
    segs += '<circle class="seg" data-res="' + d.resultado + '" cx="' + CX + '" cy="' + CY + '" r="' + R +
            '" fill="none" stroke="' + colors[d.resultado] + '" stroke-width="' + STROKE +
            '" stroke-dasharray="' + len.toFixed(2) + ' ' + (circ - len).toFixed(2) +
            '" stroke-dashoffset="' + (-offset).toFixed(2) + '" transform="rotate(-90 ' + CX + ' ' + CY + ')"/>';
    offset += circ * d.pct / 100;
  });

  chart.innerHTML =
    '<svg viewBox="0 0 200 200" width="220" height="220" role="img" aria-label="Distribuição de resultados">' + segs +
    '<text x="100" y="94" text-anchor="middle" fill="#f4f7f4" font-family="Archivo" font-weight="800" font-size="30">' + DATA.header.jogos + '</text>' +
    '<text x="100" y="114" text-anchor="middle" fill="#5f7267" font-family="IBM Plex Mono" font-size="10">JOGOS</text>' +
    '</svg>';

  data.forEach(d => {
    const item = el('div', 'leg-item');
    item.dataset.res = d.resultado;
    const dot = el('div', 'leg-dot');
    dot.style.background = colors[d.resultado];
    item.appendChild(dot);
    item.appendChild(el('span', null, d.resultado + (d.qtd === 1 ? '' : 's')));
    item.appendChild(el('span', 'val', d.qtd + ' (' + d.pct.toFixed(1) + '%)'));
    legend.appendChild(item);
  });

  // Destaque cruzado entre fatia e legenda
  chart.querySelectorAll('.seg').forEach(seg => {
    const hl = on => {
      const leg = legend.querySelector('[data-res="' + seg.dataset.res + '"]');
      if(leg) leg.style.opacity = on ? '1' : '';
      legend.querySelectorAll('.leg-item').forEach(l => {
        if(l !== leg) l.style.opacity = on ? '0.4' : '';
      });
    };
    seg.addEventListener('pointerenter', () => hl(true));
    seg.addEventListener('pointerleave', () => hl(false));
  });
}

/* ================================================================
   TABELA DE PARTIDAS
   ================================================================ */
const GAME_COLS = [
  {key:'data',       label:'Data'},
  {key:'adversario', label:'Adversário'},
  {key:'competicao', label:'Competição'},
  {key:'local',      label:'Local'},
  {key:'placar',     label:'Placar'},
  {key:'pts',        label:'Pts', num:true},
  {key:'resultado',  label:'Resultado'},
];

function gameRows(){
  const pontosMap = {'Vitória':3, 'Empate':1, 'Derrota':0};
  return DATA.todasPartidas.map((g, i) => ({
    ...g, idx: i, dateObj: parseBR(g.data), pts: pontosMap[g.resultado] ?? 0,
  }));
}

function renderJogos(){
  const scopeWrap = document.getElementById('games-scope');
  const table = document.getElementById('games-table');
  const total = DATA.todasPartidas.length;

  const scopes = [['Últimos 5', 5], ['Últimos 10', 10], ['Todos (' + total + ')', 'all']];
  scopeWrap.innerHTML = '';
  scopes.forEach(([label, val]) => {
    const b = el('button', 'rtab' + (UI.gamesScope === val ? ' active' : ''), label);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', String(UI.gamesScope === val));
    b.onclick = () => { UI.gamesScope = val; renderJogos(); };
    scopeWrap.appendChild(b);
  });

  let rows = gameRows();
  if(UI.gamesScope !== 'all') rows = rows.slice(-UI.gamesScope);

  const q = UI.gamesQuery.trim().toLowerCase();
  if(q){
    rows = rows.filter(r =>
      r.adversario.toLowerCase().includes(q) ||
      r.competicao.toLowerCase().includes(q) ||
      r.resultado.toLowerCase().includes(q) ||
      r.placar.includes(q));
  }

  const {key, dir} = UI.gamesSort;
  rows.sort((a, b) => {
    let cmp;
    if(key === 'data') cmp = a.dateObj - b.dateObj || a.idx - b.idx;
    else if(typeof a[key] === 'number') cmp = a[key] - b[key];
    else cmp = String(a[key]).localeCompare(String(b[key]), 'pt-BR');
    return dir === 'asc' ? cmp : -cmp;
  });

  const titulo = UI.gamesScope === 'all'
    ? 'Todas as partidas do recorte'
    : 'Últimos ' + Math.min(UI.gamesScope, total) + ' jogos';
  document.getElementById('games-title').textContent = titulo;

  table.innerHTML = '';
  const thead = el('thead'), tr = el('tr');
  GAME_COLS.forEach(col => {
    const sorted = key === col.key;
    const th = el('th', [col.num ? 'num' : '', 'sortable', sorted ? 'sorted' : '', sorted && dir === 'asc' ? 'asc' : ''].filter(Boolean).join(' '), col.label);
    th.onclick = () => {
      UI.gamesSort = {key: col.key, dir: sorted && dir === 'desc' ? 'asc' : 'desc'};
      renderJogos();
    };
    tr.appendChild(th);
  });
  thead.appendChild(tr); table.appendChild(thead);

  const tbody = el('tbody');
  if(!rows.length){
    const r = el('tr', 'empty-row');
    const td = el('td', null, q ? 'Nenhuma partida encontrada para “' + esc(q) + '”.' : 'Sem partidas no recorte.');
    td.colSpan = GAME_COLS.length;
    r.appendChild(td); tbody.appendChild(r);
  }
  rows.forEach(g => {
    const row = el('tr');
    row.appendChild(el('td', null, esc(g.data)));
    row.appendChild(el('td', null, '<b style="color:var(--white)">' + esc(g.adversario) + '</b>'));
    row.appendChild(el('td', null, esc(g.competicao)));
    row.appendChild(el('td', null, '<span class="loc-tag ' + (g.local === 'Casa' ? 'casa' : '') + '">' + esc(g.local) + '</span>'));
    row.appendChild(el('td', null, '<span class="placar">' + esc(g.placar) + '</span>'));
    row.appendChild(el('td', 'num', g.pts));
    row.appendChild(el('td', null, '<span class="res-tag ' + resClass(g.resultado) + '">' + esc(g.resultado) + '</span>'));
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
}

/* ================================================================
   RENDER GERAL
   ================================================================ */
function renderDashboard(){
  renderChrome();
  renderKPIs();
  renderCompeticoes();
  renderCasaFora();
  renderAdversarios();
  renderEvolucao();
  renderMomento();
  renderSequencias();
  renderElenco();
  renderDistribuicao();
  renderHighlights();
  renderDonut();
  renderJogos();
}

/* ================================================================
   LEITURA DE EXCEL (SheetJS) — recalcula tudo a partir de um .xlsx
   Espera uma aba "Fato_Partidas" com as colunas:
   ID_Partida, Data, Adversario, Competicao, Local, Placar,
   Gols_Palmeiras, Gols_Adversario, Resultado.
   Abas opcionais "Artilharia" e "Assistencias" alimentam o elenco.
   Local em Arena Barueri / Allianz Parque / Nubank Parque = jogo em casa.
   ================================================================ */

const CASA_LOCAIS = new Set(['Arena Barueri', 'Allianz Parque', 'Nubank Parque']);

function excelDateToJsDate(serial){
  if(serial instanceof Date) return serial;
  if(typeof serial === 'string'){
    const s = serial.trim();
    // dd/mm/yyyy vem primeiro: new Date('10/01/2026') seria lido como
    // 10 de janeiro no padrão americano (mês/dia), invertendo a data.
    const br = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if(br) return new Date(+br[3], +br[2] - 1, +br[1]);
    const iso = new Date(s);
    return isNaN(iso) ? null : iso;
  }
  if(typeof serial === 'number'){
    const utcDays = Math.floor(serial - 25569);
    return new Date(utcDays * 86400 * 1000);
  }
  return null;
}

function fmtDateBR(d){
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return dd + '/' + mm + '/' + d.getFullYear();
}

function maxSeq(arr, cond){
  let best = 0, cur = 0;
  for(const v of arr){
    if(cond(v)){ cur++; best = Math.max(best, cur); } else { cur = 0; }
  }
  return best;
}

function emptyData(){
  const zero = {jogos:0, vitorias:0, empates:0, derrotas:0, golsMarcados:0, golsSofridos:0,
    saldo:0, pontos:0, pontosPossiveis:0, aproveitamento:0, mediaGolsJogo:0};
  return {
    header: {...zero}, porCompeticao: [], melhorCompeticao: null, piorCompeticao: null,
    casaXFora: {casa: {...zero}, fora: {...zero}},
    maisEnfrentados: [], melhorAproveitamento: [], maiorDificuldade: [], maisVencidos: [],
    sequencias: {maiorVitorias:0, maiorSemPerder:0, maiorDerrotas:0, maiorSemVencer:0,
      maiorMarcando:0, maiorSemSofrer:0, maiorSofrendo:0},
    ultimos5: [], ultimos10: [],
    momentoAtual: {sequencia: [], pontos:0, aproveitamento:0, classificacao:'—',
      tendencia:'Estável', pontos10:0, aproveitamento10:0},
    goleadaAplicada: null, goleadaSofrida: null,
    cleanSheets: 0, jogosSemMarcar: 0, maiorGP_umJogo: 0, maiorGC_umJogo: 0,
    distribuicaoGolsMarcados: {}, evolucao: [],
    resultadoMatrix: [{resultado:'Vitória', qtd:0, pct:0}, {resultado:'Empate', qtd:0, pct:0}, {resultado:'Derrota', qtd:0, pct:0}],
    todasPartidas: [], competicoesLista: [], adversariosLista: [],
  };
}

function buildDataFromRows(rows){
  const n = rows.length;
  if(!n) return emptyData();

  const pontosMap = {'Vitória':3, 'Empate':1, 'Derrota':0};
  rows.forEach(r => {
    r.Mandante = CASA_LOCAIS.has(r.Local);
    r.Pontos = pontosMap[r.Resultado] ?? 0;
    r.Saldo = r.Gols_Palmeiras - r.Gols_Adversario;
  });

  const conta = d => {
    const v = d.filter(r => r.Resultado === 'Vitória').length;
    const e = d.filter(r => r.Resultado === 'Empate').length;
    const de = d.filter(r => r.Resultado === 'Derrota').length;
    const gp = d.reduce((s, r) => s + r.Gols_Palmeiras, 0);
    const gc = d.reduce((s, r) => s + r.Gols_Adversario, 0);
    const pts = d.reduce((s, r) => s + r.Pontos, 0);
    const ptsPoss = d.length * 3;
    return {jogos: d.length, vitorias: v, empates: e, derrotas: de,
      golsMarcados: gp, golsSofridos: gc, saldo: gp - gc,
      pontos: pts, pontosPossiveis: ptsPoss,
      aproveitamento: ptsPoss ? +(pts / ptsPoss * 100).toFixed(1) : 0,
      mediaGP: d.length ? +(gp / d.length).toFixed(2) : 0,
      mediaGC: d.length ? +(gc / d.length).toFixed(2) : 0,
      mediaGolsJogo: d.length ? +(gp / d.length).toFixed(2) : 0};
  };

  const header = conta(rows);

  const agrupa = campo => {
    const map = {};
    rows.forEach(r => { (map[r[campo]] = map[r[campo]] || []).push(r); });
    return map;
  };

  const compMap = agrupa('Competicao');
  const porCompeticao = Object.keys(compMap)
    .map(comp => ({competicao: comp, ...conta(compMap[comp])}))
    .sort((a, b) => b.aproveitamento - a.aproveitamento);

  const casaXFora = {
    casa: conta(rows.filter(r => r.Mandante)),
    fora: conta(rows.filter(r => !r.Mandante)),
  };

  const advMap = agrupa('Adversario');
  const advRows = Object.keys(advMap).map(adv => ({adversario: adv, ...conta(advMap[adv])}));

  // Rankings de aproveitamento pedem amostra mínima de 2 jogos — senão
  // um único confronto isolado domina o topo e a base da lista.
  const comAmostra = advRows.filter(r => r.jogos >= 2);
  const baseAprov = comAmostra.length >= 3 ? comAmostra : advRows;

  const maisEnfrentados = [...advRows].sort((a, b) => b.jogos - a.jogos || b.aproveitamento - a.aproveitamento).slice(0, 6);
  const melhorAproveitamento = [...baseAprov].sort((a, b) => b.aproveitamento - a.aproveitamento || b.jogos - a.jogos).slice(0, 6);
  const maiorDificuldade = [...baseAprov].sort((a, b) => a.aproveitamento - b.aproveitamento || b.jogos - a.jogos).slice(0, 6);
  const maisVencidos = [...advRows].sort((a, b) => b.vitorias - a.vitorias || b.aproveitamento - a.aproveitamento).slice(0, 6);

  const resSeq = rows.map(r => r.Resultado);
  const sequencias = {
    maiorVitorias:  maxSeq(resSeq, x => x === 'Vitória'),
    maiorSemPerder: maxSeq(resSeq, x => x !== 'Derrota'),
    maiorDerrotas:  maxSeq(resSeq, x => x === 'Derrota'),
    maiorSemVencer: maxSeq(resSeq, x => x !== 'Vitória'),
    maiorMarcando:  maxSeq(rows.map(r => r.Gols_Palmeiras), x => x > 0),
    maiorSemSofrer: maxSeq(rows.map(r => r.Gols_Adversario), x => x === 0),
    maiorSofrendo:  maxSeq(rows.map(r => r.Gols_Adversario), x => x > 0),
  };

  const jogosLista = d => d.map(r => ({
    data: fmtDateBR(r.DataObj), adversario: r.Adversario, competicao: r.Competicao,
    local: r.Mandante ? 'Casa' : 'Fora', placar: r.Placar, resultado: r.Resultado,
    gp: r.Gols_Palmeiras, gc: r.Gols_Adversario,
  }));

  const ult5 = rows.slice(-5), ult10 = rows.slice(-10);
  const pts5 = ult5.reduce((s, r) => s + r.Pontos, 0);
  const aprov5 = +(pts5 / (ult5.length * 3) * 100).toFixed(1);
  const pts10 = ult10.reduce((s, r) => s + r.Pontos, 0);
  const aprov10 = +(pts10 / (ult10.length * 3) * 100).toFixed(1);

  const classificacao = aprov5 >= 80 ? 'Excelente' : aprov5 >= 65 ? 'Muito bom' :
    aprov5 >= 50 ? 'Bom' : aprov5 >= 35 ? 'Regular' : aprov5 >= 20 ? 'Ruim' : 'Muito ruim';
  const tendencia = aprov5 > header.aproveitamento + 5 ? 'Evoluindo' :
    aprov5 < header.aproveitamento - 5 ? 'Caindo' : 'Estável';

  const momentoAtual = {
    sequencia: ult5.map(r => r.Resultado[0]),
    pontos: pts5, aproveitamento: aprov5, classificacao, tendencia,
    pontos10: pts10, aproveitamento10: aprov10,
  };

  // Goleadas: maior saldo desempatado pelo maior número de gols marcados
  const bySaldo = [...rows].sort((a, b) => b.Saldo - a.Saldo || b.Gols_Palmeiras - a.Gols_Palmeiras);
  const goleadaObj = r => r && {adversario: r.Adversario, placar: r.Placar,
    data: fmtDateBR(r.DataObj), competicao: r.Competicao};

  const distribuicaoGolsMarcados = {};
  rows.forEach(r => {
    const k = String(r.Gols_Palmeiras);
    distribuicaoGolsMarcados[k] = (distribuicaoGolsMarcados[k] || 0) + 1;
  });

  let pontosAcum = 0, saldoAcum = 0;
  const evolucao = rows.map((r, i) => {
    pontosAcum += r.Pontos;
    saldoAcum += r.Saldo;
    let aprovMovel5 = null;
    if(i >= 4){
      const win = rows.slice(i - 4, i + 1);
      aprovMovel5 = +(win.reduce((s, x) => s + x.Pontos, 0) / 15 * 100).toFixed(1);
    }
    return {jogo: i + 1, data: fmtDateBR(r.DataObj), pontosAcum, saldoAcum,
      gp: r.Gols_Palmeiras, gc: r.Gols_Adversario, aprovMovel5};
  });

  const resultadoMatrix = [
    {resultado:'Vitória', qtd: header.vitorias, pct: +(header.vitorias / n * 100).toFixed(1)},
    {resultado:'Empate',  qtd: header.empates,  pct: +(header.empates / n * 100).toFixed(1)},
    {resultado:'Derrota', qtd: header.derrotas, pct: +(header.derrotas / n * 100).toFixed(1)},
  ];

  return {
    header, porCompeticao,
    melhorCompeticao: porCompeticao[0]?.competicao,
    piorCompeticao: porCompeticao[porCompeticao.length - 1]?.competicao,
    casaXFora, maisEnfrentados, melhorAproveitamento, maiorDificuldade, maisVencidos,
    sequencias, ultimos5: jogosLista(ult5), ultimos10: jogosLista(ult10), momentoAtual,
    goleadaAplicada: goleadaObj(bySaldo[0]),
    goleadaSofrida: goleadaObj(bySaldo[bySaldo.length - 1]),
    cleanSheets: rows.filter(r => r.Gols_Adversario === 0).length,
    jogosSemMarcar: rows.filter(r => r.Gols_Palmeiras === 0).length,
    maiorGP_umJogo: Math.max(...rows.map(r => r.Gols_Palmeiras)),
    maiorGC_umJogo: Math.max(...rows.map(r => r.Gols_Adversario)),
    distribuicaoGolsMarcados, evolucao, resultadoMatrix,
    todasPartidas: jogosLista(rows),
    competicoesLista: [...new Set(rows.map(r => r.Competicao))].sort(),
    adversariosLista: [...new Set(rows.map(r => r.Adversario))].sort(),
  };
}

/* Lê uma aba opcional de jogadores (artilharia / assistências) */
function readPlayerSheet(wb, needle){
  const name = wb.SheetNames.find(s => s.toLowerCase().includes(needle));
  if(!name) return [];
  try {
    return normalizePlayers(XLSX.utils.sheet_to_json(wb.Sheets[name], {defval: null}));
  } catch(e){
    console.warn('Não foi possível ler a aba', name, e);
    return [];
  }
}

function setStatus(msg, kind){
  const s = document.getElementById('upload-status');
  s.textContent = msg;
  s.className = 'upload-status' + (kind ? ' ' + kind : '');
}

function processExcelFile(file){
  setStatus('Lendo planilha…', 'loading');

  const reader = new FileReader();
  reader.onload = function(e){
    try {
      const wb = XLSX.read(e.target.result, {type:'array', cellDates:true});
      const sheetName = wb.SheetNames.find(n => n.toLowerCase().includes('fato')) || wb.SheetNames[0];
      const json = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {defval:null});
      if(!json.length) throw new Error('Planilha vazia ou aba não encontrada.');

      // Aceita "Local" (nome do estádio) ou "Local_Estadio" (modelo Power BI)
      const normalized = json.map(r => {
        if(!('Local' in r) && ('Local_Estadio' in r)){
          const {Local_Estadio, ...rest} = r;
          return {...rest, Local: Local_Estadio};
        }
        return r;
      });

      const required = ['Data','Adversario','Competicao','Local','Gols_Palmeiras','Gols_Adversario','Resultado'];
      const missing = required.filter(c => !(c in normalized[0]));
      if(missing.length) throw new Error('Colunas ausentes: ' + missing.join(', '));

      const rows = normalized.map(r => ({
        ...r,
        DataObj: excelDateToJsDate(r.Data),
        Placar: r.Placar || (r.Gols_Palmeiras + 'x' + r.Gols_Adversario),
      })).filter(r => r.DataObj);
      if(!rows.length) throw new Error('Nenhuma linha com data válida.');
      rows.sort((a, b) => a.DataObj - b.DataObj);

      // Cada planilha traz o próprio elenco — não herda o da anterior
      PLAYERS = {
        artilharia: readPlayerSheet(wb, 'artilharia'),
        assistencias: readPlayerSheet(wb, 'assist'),
      };

      RAW_ROWS = rows;
      saveToStorage(rows, PLAYERS);
      DATA = buildDataFromRows(rows.map(r => ({...r})));
      resetFilterUI();
      renderDashboard();

      const extras = [];
      if(PLAYERS.artilharia.length) extras.push('artilharia');
      if(PLAYERS.assistencias.length) extras.push('assistências');
      setStatus('✓ ' + rows.length + ' partidas carregadas' +
        (extras.length ? ' · ' + extras.join(' e ') + ' ' + plural(extras.length, 'lida', 'lidas') : ''), 'success');
    } catch(err){
      console.error(err);
      setStatus('✗ Erro ao ler o arquivo: ' + err.message, 'error');
    }
  };
  reader.onerror = function(){ setStatus('✗ Não foi possível ler o arquivo.', 'error'); };
  reader.readAsArrayBuffer(file);
}

/* ================================================================
   FILTROS
   RAW_ROWS guarda a base completa; os filtros recortam essa base e
   DATA é recalculado inteiro em cima do recorte.
   ================================================================ */
function rowsFromTodasPartidas(lista){
  return lista.map((p, i) => ({
    ID_Partida: i + 1,
    Data: p.data,
    DataObj: parseBR(p.data),
    Adversario: p.adversario,
    Competicao: p.competicao,
    Local: p.local === 'Casa' ? 'Allianz Parque' : '(fora)',
    Placar: p.placar,
    Gols_Palmeiras: p.gp,
    Gols_Adversario: p.gc,
    Resultado: p.resultado,
  }));
}

const BASE_PARTIDAS = DATA.todasPartidas;
const BASE_PLAYERS = {artilharia: DATA.artilharia || [], assistencias: DATA.assistencias || []};

let RAW_ROWS = [];

const FILTER_IDS = ['f-competicao', 'f-mandante', 'f-resultado', 'f-adversario'];

function populateFilterOptions(){
  const competicoes = [...new Set(RAW_ROWS.map(r => r.Competicao))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const adversarios = [...new Set(RAW_ROWS.map(r => r.Adversario))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  document.getElementById('f-competicao').innerHTML =
    '<option value="">Competição: Todas</option>' + competicoes.map(c => '<option value="' + esc(c) + '">' + esc(c) + '</option>').join('');
  document.getElementById('f-adversario').innerHTML =
    '<option value="">Adversário: Todos</option>' + adversarios.map(a => '<option value="' + esc(a) + '">' + esc(a) + '</option>').join('');
}

function resetFilterUI(){
  populateFilterOptions();
  document.getElementById('f-mandante').value = '';
  document.getElementById('f-resultado').value = '';
}

function filteredRows(){
  const competicao = document.getElementById('f-competicao').value;
  const mandante   = document.getElementById('f-mandante').value;
  const resultado  = document.getElementById('f-resultado').value;
  const adversario = document.getElementById('f-adversario').value;

  return RAW_ROWS.filter(r => {
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
}

function applyFilters(){
  const filtered = filteredRows();
  // buildDataFromRows anota as linhas (Mandante/Pontos/Saldo) — clona
  // para manter RAW_ROWS intacto entre recortes.
  DATA = buildDataFromRows(filtered.map(r => ({...r})));
  renderDashboard();

  if(!filtered.length){
    setStatus('⚠ Nenhuma partida corresponde aos filtros selecionados.', 'error');
  } else {
    setStatus('');
  }
}

/* ================================================================
   EXPORTAÇÃO CSV do recorte atual
   ================================================================ */
function exportCSV(){
  const rows = DATA.todasPartidas;
  if(!rows.length){ setStatus('Nada para exportar no recorte atual.', 'error'); return; }
  const cols = ['Data','Adversario','Competicao','Local','Placar','Gols_Palmeiras','Gols_Adversario','Resultado'];
  const cell = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  // Ponto-e-vírgula + BOM: é o que o Excel em pt-BR abre sem etapa de importação
  const csv = [cols.join(';')].concat(
    rows.map(g => [g.data, g.adversario, g.competicao, g.local, g.placar, g.gp, g.gc, g.resultado].map(cell).join(';'))
  ).join('\r\n');

  const blob = new Blob(['﻿' + csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'palmeiras_2026_' + rows.length + '_partidas.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus('✓ CSV exportado com ' + rows.length + ' partidas.', 'success');
}

/* ================================================================
   NAVEGAÇÃO — destaca a seção visível
   ================================================================ */
function initScrollSpy(){
  const links = [...document.querySelectorAll('.secnav a')];
  const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        links.forEach(a => a.classList.remove('current'));
        const link = byId.get(e.target.id);
        if(link) link.classList.add('current');
      }
    });
  }, {rootMargin:'-140px 0px -60% 0px', threshold:0});
  byId.forEach((_, id) => {
    const sec = document.getElementById(id);
    if(sec) obs.observe(sec);
  });
}

/* ================================================================
   INICIALIZAÇÃO
   ================================================================ */
(function init(){
  const stored = loadFromStorage();
  if(stored && stored.rows.length){
    stored.rows.sort((a, b) => a.DataObj - b.DataObj);
    RAW_ROWS = stored.rows;
    PLAYERS = stored.players || {artilharia: [], assistencias: []};
    setStatus('↺ ' + stored.rows.length + ' partidas restauradas do armazenamento local', 'success');
  } else {
    RAW_ROWS = rowsFromTodasPartidas(BASE_PARTIDAS);
    PLAYERS = {...BASE_PLAYERS};
  }

  populateFilterOptions();
  DATA = buildDataFromRows(RAW_ROWS.map(r => ({...r})));
  renderDashboard();
  initScrollSpy();

  document.getElementById('excel-upload').addEventListener('change', function(e){
    const file = e.target.files[0];
    if(file) processExcelFile(file);
    e.target.value = '';   // permite recarregar o mesmo arquivo
  });

  FILTER_IDS.forEach(id => document.getElementById(id).addEventListener('change', applyFilters));

  document.getElementById('f-clear').addEventListener('click', function(){
    FILTER_IDS.forEach(id => { document.getElementById(id).value = ''; });
    applyFilters();
  });

  document.getElementById('f-clear-storage').addEventListener('click', function(){
    clearStorage();
    RAW_ROWS = rowsFromTodasPartidas(BASE_PARTIDAS);
    PLAYERS = {...BASE_PLAYERS};
    FILTER_IDS.forEach(id => { document.getElementById(id).value = ''; });
    resetFilterUI();
    DATA = buildDataFromRows(RAW_ROWS.map(r => ({...r})));
    renderDashboard();
    setStatus('↺ Base original restaurada (' + RAW_ROWS.length + ' partidas).', 'success');
  });

  document.getElementById('btn-export').addEventListener('click', exportCSV);

  let searchTimer;
  document.getElementById('games-search').addEventListener('input', function(e){
    clearTimeout(searchTimer);
    const v = e.target.value;
    searchTimer = setTimeout(() => { UI.gamesQuery = v; renderJogos(); }, 120);
  });
})();
