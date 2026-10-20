/* ================================================================
   BASE EMBUTIDA · TEMPORADA 2026
   Dados até Athletico-PR 0 x 2 Palmeiras, em 17/10/2026.
   Uma linha por partida, em ordem cronológica:
     [data, adversário, competição, estádio, gols PAL, gols ADV, autores, placar?]
   "autores" é o texto da fonte, como veio: "V.Roque (2), Andreas e Sosa";
   "(c)" marca gol contra a favor. Apelidos viram nome completo via
   APELIDOS, logo abaixo. O placar é montado a partir dos gols; o 8º
   campo só aparece quando a fonte traz algo além disso (pênaltis).
   Mando sai do estádio (CASA_LOCAIS) e resultado sai dos gols — para
   atualizar, basta acrescentar linhas aqui. Se os autores de um jogo
   não somarem o placar, o console avisa.
   ================================================================ */
const BASE_PARTIDAS = [
  ['10/01/2026', 'Portuguesa',          'Paulista',       'Canindé',         1, 0, 'Luighi'],
  ['14/01/2026', 'Santos',              'Paulista',       'Arena Barueri',   1, 0, 'Allan'],
  ['17/01/2026', 'Mirassol',            'Paulista',       'Arena Barueri',   1, 0, 'López'],
  ['20/01/2026', 'Novorizontino',       'Paulista',       'Novo Horizonte',  0, 4, ''],
  ['24/01/2026', 'São Paulo',           'Paulista',       'Arena Barueri',   3, 1, 'Maurício, López e Khellven'],
  ['28/01/2026', 'Atlético-MG',         'Brasileirão',    'Arena MRV',       2, 2, 'López e V.Roque'],
  ['01/02/2026', 'Botafogo-SP',         'Paulista',       'Ribeirão Preto',  0, 1, ''],
  ['04/02/2026', 'Vitória',             'Brasileirão',    'Arena Barueri',   5, 1, 'Murilo, Gómez, Maurício, Allan e Sosa'],
  ['08/02/2026', 'Corinthians',         'Paulista',       'Itaquerão',       1, 0, 'López'],
  ['12/02/2026', 'Internacional',       'Brasileirão',    'Beira-Rio',       3, 1, 'Gómez, V.Roque e Andreas'],
  ['15/02/2026', 'Guarani',             'Paulista',       'Arena Barueri',   1, 1, 'López'],
  ['21/02/2026', 'Capivariano',         'Paulista',       'Arena Barueri',   4, 0, 'V.Roque (2), Andreas e Sosa'],
  ['25/02/2026', 'Fluminense',          'Brasileirão',    'Arena Barueri',   2, 1, 'V.Roque e Allan'],
  ['01/03/2026', 'São Paulo',           'Paulista',       'Arena Barueri',   2, 1, 'Maurício e López'],
  ['04/03/2026', 'Novorizontino',       'Paulista',       'Arena Barueri',   1, 0, 'López'],
  ['08/03/2026', 'Novorizontino',       'Paulista',       'Novo Horizonte',  2, 1, 'Murilo e V.Roque'],
  ['12/03/2026', 'Vasco',               'Brasileirão',    'São Januário',    1, 2, 'López'],
  ['15/03/2026', 'Mirassol',            'Brasileirão',    'Allianz Parque',  1, 0, 'López'],
  ['18/03/2026', 'Botafogo',            'Brasileirão',    'Allianz Parque',  2, 1, 'Allan e Arias'],
  ['21/03/2026', 'São Paulo',           'Brasileirão',    'Morumbi',         1, 0, 'Arias'],
  ['02/04/2026', 'Grêmio',              'Brasileirão',    'Arena Barueri',   2, 1, 'M.Freitas (2)'],
  ['05/04/2026', 'Bahia',               'Brasileirão',    'Fonte Nova',      2, 1, 'Arias e Ramos (c)'],
  ['08/04/2026', 'Junior Barranquilla', 'Libertadores',   'Cartagena-COL',   1, 1, 'Sosa'],
  ['12/04/2026', 'Corinthians',         'Brasileirão',    'Itaquerão',       0, 0, ''],
  ['16/04/2026', 'Sporting Cristal',    'Libertadores',   'Allianz Parque',  2, 1, 'Murilo e López'],
  ['19/04/2026', 'Athletico-PR',        'Brasileirão',    'Allianz Parque',  1, 0, 'Gómez'],
  ['23/04/2026', 'Jacuipense',          'Copa do Brasil', 'Allianz Parque',  3, 0, 'Sosa (2) e F.Anderson'],
  ['26/04/2026', 'Red Bull Bragantino', 'Brasileirão',    'Bragança',        1, 0, 'López'],
  ['29/04/2026', 'Cerro Porteño',       'Libertadores',   'Assunção-PAR',    1, 1, 'Arias'],
  ['02/05/2026', 'Santos',              'Brasileirão',    'Allianz Parque',  1, 1, 'López'],
  ['05/05/2026', 'Sporting Cristal',    'Libertadores',   'Lima-PER',        2, 0, 'López e Sosa'],
  ['10/05/2026', 'Remo',                'Brasileirão',    'Mangueirão',      1, 1, 'Sosa'],
  ['13/05/2026', 'Jacuipense',          'Copa do Brasil', 'Estádio do Café', 4, 1, 'Maurício, Felipe A., Belé e Luighi'],
  ['16/05/2026', 'Cruzeiro',            'Brasileirão',    'Arena Barueri',   1, 1, 'F.Anderson'],
  ['20/05/2026', 'Cerro Porteño',       'Libertadores',   'Allianz Parque',  0, 1, ''],
  ['23/05/2026', 'Flamengo',            'Brasileirão',    'Maracanã',        3, 0, 'López, Allan e Paulinho'],
  ['28/05/2026', 'Junior Barranquilla', 'Libertadores',   'Allianz Parque',  4, 1, 'Arias (2), Allan e Andreas'],
  ['31/05/2026', 'Chapecoense',         'Brasileirão',    'Allianz Parque',  1, 0, 'Paulinho'],
  ['22/07/2026', 'Coritiba',            'Brasileirão',    'Couto Pereira',   3, 1, 'Maurício (2) e Sosa'],
  ['26/07/2026', 'Atlético-MG',         'Brasileirão',    'Nubank Parque',   1, 2, 'Felipe Anderson'],
  ['29/07/2026', 'Vitória',             'Brasileirão',    'Barradão',        4, 0, 'Maurício, Fabiano (c), Arias e Sosa'],
  ['02/08/2026', 'Fortaleza',           'Copa do Brasil', 'Nubank Parque',   3, 0, 'Maurício, Arias e López'],
  ['05/08/2026', 'Fortaleza',           'Copa do Brasil', 'Arena Pantanal',  2, 3, 'López e Murilo'],
  ['09/08/2026', 'Internacional',       'Brasileirão',    'Nubank Parque',   0, 0, ''],
  ['12/08/2026', 'Cerro Porteño',       'Libertadores',   'Nubank Parque',   1, 1, 'López'],
  ['15/08/2026', 'Fluminense',          'Brasileirão',    'Maracanã',        2, 3, 'Gómez e Maurício'],
  ['19/08/2026', 'Cerro Porteño',       'Libertadores',   'Assunção',        1, 0, 'Gómez'],
  ['23/08/2026', 'Vasco',               'Brasileirão',    'Nubank Parque',   4, 1, 'López (2), V.Roque e Maurício'],
  ['26/08/2026', 'Santos',              'Copa do Brasil', 'Nubank Parque',   3, 0, 'López (2) e Andreas Pereira'],
  ['30/08/2026', 'Mirassol',            'Brasileirão',    'Mirassol',        1, 1, 'Maurício'],
  ['02/09/2026', 'Santos',              'Copa do Brasil', 'Vila Belmiro',    0, 0, ''],
  ['06/09/2026', 'Botafogo',            'Brasileirão',    'Engenhão',        0, 0, ''],
  ['09/09/2026', 'LDU',                 'Libertadores',   'Nubank Parque',   1, 0, 'Giay'],
  ['12/09/2026', 'São Paulo',           'Brasileirão',    'Nubank Parque',   2, 0, 'Murilo e V.Roque'],
  ['16/09/2026', 'LDU',                 'Libertadores',   'Quito',           2, 3, 'Marlon e V.Roque', '2(3)x(4)3'],
  ['20/09/2026', 'Grêmio',              'Brasileirão',    'Arena Grêmio',    0, 0, ''],
  ['08/10/2026', 'Bahia',               'Brasileirão',    'Nubank Parque',   1, 0, 'López'],
  ['11/10/2026', 'Corinthians',         'Brasileirão',    'Nubank Parque',   4, 1, 'Barboza, Giay (2) e Bidu (c)'],
  ['14/10/2026', 'Fluminense',          'Libertadores',   'Maracanã',        2, 1, 'López e Marlon'],
  ['17/10/2026', 'Athletico-PR',        'Brasileirão',    'Ligga Arena',     2, 0, 'Maurício e Piquerez'],
];

/* Como a fonte abrevia cada nome → nome completo. Um apelido novo que
   não estiver aqui vira um "jogador" separado na artilharia. */
const APELIDOS = {
  'V.Roque':    'Vitor Roque',
  'F.Anderson': 'Felipe Anderson',
  'Felipe A.':  'Felipe Anderson',
  'M.Freitas':  'Marlon Freitas',
  'Marlon':     'Marlon Freitas',
  'Andreas':    'Andreas Pereira',
  'Belé':       'Erick Belé',
  'Ramos':      'Ramos Mingo',
};

/* Mata-mata não vale pontos: na tabela de partidas esses jogos mostram
   "—" na coluna Pts. Por competição, quantos jogos de fase de pontos vêm
   antes do mata-mata: a Copa do Brasil é toda eliminatória; na
   Libertadores, o mata-mata começa depois dos 6 jogos da fase de grupos.
   Competição fora desta lista tem pontos em todos os jogos. */
const JOGOS_ANTES_DO_MATA_MATA = {
  'Copa do Brasil': 0,
  'Libertadores':   6,
};

/* A artilharia sai dos autores de cada jogo (e por isso responde aos
   filtros). Assistências não têm registro por partida: ficam aqui, da
   temporada inteira. */
const BASE_ASSISTENCIAS = [
  {Jogador:'López',             Assistencias:12},
  {Jogador:'Andreas Pereira',   Assistencias:12},
  {Jogador:'Sosa',              Assistencias:7},
  {Jogador:'Piquerez',          Assistencias:6},
  {Jogador:'Felipe Anderson',   Assistencias:6},
  {Jogador:'Arias',             Assistencias:6},
  {Jogador:'Allan',             Assistencias:6},
  {Jogador:'Lucas Evangelista', Assistencias:3},
  {Jogador:'Maurício',          Assistencias:3},
  {Jogador:'Gómez',             Assistencias:3},
  {Jogador:'Marlon Freitas',    Assistencias:2},
  {Jogador:'Murilo',            Assistencias:2},
  {Jogador:'Barboza',           Assistencias:1},
  {Jogador:'Khellven',          Assistencias:1},
  {Jogador:'Giay',              Assistencias:1},
  {Jogador:'Jefté',             Assistencias:1},
  {Jogador:'Vitor Roque',       Assistencias:1},
];

let DATA = emptyData();

/* ================================================================
   PALMEIRAS · BI SPORTS ANALYTICS
   Camada de renderização. Tudo o que aparece na tela é derivado de
   DATA, que por sua vez é sempre recalculado a partir de RAW_ROWS
   (a base embutida) pelo recorte de filtros ativo.
   ================================================================ */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- estado de UI preservado entre re-renders ---------- */
const UI = {
  rankTab: 'Mais enfrentados',
  rankSort: null,               // {key, dir}
  gamesScope: 10,               // 5 | 10 | 'all'
  gamesSort: {key:'data', dir:'desc'},
  gamesQuery: '',
  elencoAberto: {},             // {Artilharia: true} = lista completa
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
// Decimais à brasileira: 71,1% · 1,42 gol por jogo
function num(v, casas){
  return (Number(v) || 0).toLocaleString('pt-BR', {minimumFractionDigits: casas, maximumFractionDigits: casas});
}
function pct(v){ return num(v, 1) + '%'; }
function plural(n, um, muitos){ return n === 1 ? um : muitos; }
function parseBR(s){
  const [dd, mm, yyyy] = String(s).split('/');
  return new Date(+yyyy, +mm - 1, +dd);
}
// "dd/mm/aaaa" → "dd/mm": a temporada inteira é do mesmo ano
function ddmm(s){ return String(s).slice(0, 5); }
// Busca sem acento e sem caixa: "lopez" encontra "López"
function fold(s){ return String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
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

  // Último jogo da base inteira (não do recorte): diz até quando os dados vão
  const ult = RAW_ROWS[RAW_ROWS.length - 1];
  document.getElementById('hero-updated').textContent = ult
    ? 'Dados até ' + fmtDateBR(ult.DataObj) + ' · ' + ult.Placar + ' vs ' + ult.Adversario
    : '';

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
    {l:'Aproveitamento', v:h.aproveitamento, cls:'gold', hl:true, fmt:pct},
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
     ['Saldo', signed(c.saldo)], ['Média GP', num(c.mediaGP, 2)], ['Média GC', num(c.mediaGC, 2)]
    ].forEach(([l, v]) => {
      const cs = el('div', 'comp-stat');
      cs.appendChild(el('div', 'v', v));
      cs.appendChild(el('div', 'l', l));
      stats.appendChild(cs);
    });
    card.appendChild(stats);

    if(c.artilheiro){
      const a = c.artilheiro;
      // Empate entre muitos (comum em recortes pequenos) não vira uma lista sem fim
      const nomes = a.nomes.length > 2 ? a.nomes.slice(0, 2).join(', ') + ' +' + (a.nomes.length - 2) : a.nomes.join(' e ');
      card.appendChild(el('div', 'comp-foot',
        plural(a.nomes.length, 'Artilheiro', 'Artilheiros') + ' <b>' + esc(nomes) + '</b> · ' +
        a.gols + ' ' + plural(a.gols, 'gol', 'gols')));
    }
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
     ['Gols/jogo', num(d.mediaGolsJogo, 2)], ['Sofridos/jogo', num(d.jogos ? d.golsSofridos / d.jogos : 0, 2)], ['Pontos', d.pontos]
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
    mid.appendChild(el('div', 'vval', '+' + num(Math.abs(diff), 1) + ' p.p.'));
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
   Dois painéis empilhados sobre o mesmo eixo X (jogo a jogo):
   em cima, pontos e saldo acumulados — duas contagens, uma escala;
   embaixo, o aproveitamento móvel de 5 jogos, em 0–100%. Medidas de
   escalas diferentes ficam em painéis diferentes: dois eixos Y no
   mesmo plot sugeririam uma relação que não existe nos dados.
   O SVG é desenhado na largura real do card (texto sempre a 10px,
   inclusive no celular) e redesenhado quando a largura muda.
   ================================================================ */
const STEP_LADDER = [1, 2, 2.5, 5, 10];
const COR_RESULTADO = {'Vitória':'#39c96a', 'Empate':'#e8cd8a', 'Derrota':'#e0523f'};
const MESES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
let EVO_W = 0;   // largura do último desenho — o resize só redesenha se mudar
let esconderEvo = () => {};   // fecha o tooltip do gráfico (toque fora, rolagem)

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

/* Escolhe início, passo e número de divisões do eixo. Testa de 3 a 5
   divisões e fica com a que cobre os dados com a menor folga (no
   empate, a de menos linhas de grade). */
function chooseScale(min, max){
  const opts = [];
  for(const ticks of [3, 4, 5]){
    let step = niceStep((max - min) / ticks) || 1;
    for(let guard = 0; guard < 30; guard++){
      const lo = Math.floor(min / step) * step;
      if(lo + step * ticks >= max - 1e-9){ opts.push({lo, step, ticks, span: step * ticks}); break; }
      step = nextNiceStep(step);
    }
  }
  opts.sort((a, b) => a.span - b.span || a.ticks - b.ticks);
  return opts[0] || {lo: 0, step: 25, ticks: 4, span: 100};
}

function renderEvolucao(){
  const host = document.getElementById('evo-chart');
  const tip = document.getElementById('chart-tip');
  const live = document.getElementById('evo-live');
  host.innerHTML = '';
  tip.hidden = true;

  const evo = DATA.evolucao;
  const jogos = DATA.todasPartidas;
  if(evo.length < 2){
    host.removeAttribute('tabindex');
    host.innerHTML = emptyMsg('São necessárias ao menos 2 partidas para desenhar a evolução.');
    return;
  }

  const W = EVO_W = Math.max(300, Math.round(host.clientWidth) || 1180);
  const compacto = W < 640;
  const PL = compacto ? 34 : 46, PR = compacto ? 34 : 46;
  const PT = 26, HA = compacto ? 180 : 230, GAP = 50, HB = compacto ? 76 : 92, PB = 30;
  const H = PT + HA + GAP + HB + PB;
  const IW = W - PL - PR;
  const topB = PT + HA + GAP;            // topo do painel de aproveitamento
  const fimB = topB + HB;
  const n = evo.length;
  const passoX = IW / (n - 1);
  const xAt = i => PL + i * passoX;
  // O marcador encolhe quando os jogos se apertam (celular, temporada longa)
  const R = Math.max(2, Math.min(4, passoX * 0.3));

  // Painel de cima: uma escala para pontos e saldo. Um saldo de −1 no
  // começo da temporada não abre uma faixa negativa inteira — abaixo
  // de 3% da amplitude, a linha só encosta um pouco sob o zero.
  const vals = evo.flatMap(d => [d.pontosAcum, d.saldoAcum]);
  const rawMax = Math.max(...vals, 1);
  let rawMin = Math.min(...vals, 0);
  if(rawMin < 0 && -rawMin < 0.03 * (rawMax - rawMin)) rawMin = 0;
  const sc = chooseScale(rawMin, rawMax);
  const yMin = sc.lo, yMax = sc.lo + sc.span;
  const yA = v => PT + HA * (1 - (v - yMin) / (yMax - yMin));
  const yB = v => topB + HB * (1 - v / 100);

  const linha = pts => pts.map((p, k) => (k ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const ptsXY   = evo.map((d, i) => [xAt(i), yA(d.pontosAcum)]);
  const saldoXY = evo.map((d, i) => [xAt(i), yA(d.saldoAcum)]);
  const aprovXY = evo.map((d, i) => d.aprovMovel5 == null ? null : [xAt(i), yB(d.aprovMovel5)]).filter(Boolean);
  const zeroY = yA(Math.max(0, yMin));
  const area = linha(ptsXY) + ' L' + xAt(n - 1).toFixed(1) + ',' + zeroY.toFixed(1) +
               ' L' + PL.toFixed(1) + ',' + zeroY.toFixed(1) + ' Z';

  const hline = (y, cls) => '<line class="' + cls + '" x1="' + PL + '" x2="' + (W - PR) + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '"/>';
  const texto = (x, y, txt, cls, anchor) => '<text class="' + cls + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '"' +
    (anchor ? ' text-anchor="' + anchor + '"' : '') + '>' + esc(txt) + '</text>';

  let s = '';
  s += texto(PL, 12, 'Pontos e saldo de gols acumulados', 'ttl');
  for(let k = 0; k <= sc.ticks; k++){
    const v = yMin + sc.step * k;
    s += hline(yA(v), Math.abs(v) < 1e-9 ? 'grid zero' : 'grid');
    s += texto(PL - 8, yA(v) + 3.5, String(Math.round(v * 10) / 10), 'ax', 'end');
  }

  const media = DATA.header.aproveitamento;
  s += texto(PL, topB - 14, compacto ? 'Aprov. móvel · 5 jogos' : 'Aproveitamento móvel · 5 jogos', 'ttl');
  s += texto(W - PR, topB - 14, (compacto ? 'média ' : 'média do recorte ') + pct(media), 'ttl', 'end');
  [0, 50, 100].forEach(v => {
    s += hline(yB(v), v === 0 ? 'grid zero' : 'grid');
    s += texto(PL - 8, yB(v) + 3.5, v + '%', 'ax', 'end');
  });
  s += hline(yB(media), 'ref');

  // Meses no eixo X: o eixo é por jogo, então o rótulo cai no 1º jogo de cada mês
  let mesAnt = -1, ultimoX = -Infinity;
  jogos.forEach((j, i) => {
    const mes = parseBR(j.data).getMonth();
    if(mes === mesAnt) return;
    mesAnt = mes;
    const x = xAt(i);
    if(x - ultimoX < 28) return;
    ultimoX = x;
    s += '<line class="tick" x1="' + x.toFixed(1) + '" x2="' + x.toFixed(1) + '" y1="' + fimB + '" y2="' + (fimB + 4) + '"/>';
    s += texto(x, fimB + 17, MESES[mes], 'ax', i === 0 ? 'start' : 'middle');
  });

  s += '<path class="area" d="' + area + '"/>';
  s += '<path class="ln saldo" d="' + linha(saldoXY) + '"/>';
  s += '<path class="ln pts" d="' + linha(ptsXY) + '"/>';
  if(aprovXY.length > 1) s += '<path class="ln aprov" d="' + linha(aprovXY) + '"/>';
  s += evo.map((d, i) => '<circle class="mk" cx="' + ptsXY[i][0].toFixed(1) + '" cy="' + ptsXY[i][1].toFixed(1) +
    '" r="' + R.toFixed(1) + '" fill="' + (COR_RESULTADO[jogos[i].resultado] || COR_RESULTADO['Vitória']) + '"/>').join('');

  // Rótulos diretos só no fim das linhas; o de saldo some se colidir com o de pontos
  const ult = evo[n - 1];
  const xFim = xAt(n - 1) + 8;
  s += texto(xFim, yA(ult.pontosAcum) + 3.5, String(ult.pontosAcum), 'end-lbl strong');
  if(Math.abs(yA(ult.pontosAcum) - yA(ult.saldoAcum)) >= 12) s += texto(xFim, yA(ult.saldoAcum) + 3.5, signed(ult.saldoAcum), 'end-lbl');
  if(ult.aprovMovel5 != null) s += texto(xFim, yB(ult.aprovMovel5) + 3.5, Math.round(ult.aprovMovel5) + '%', 'end-lbl');

  s += '<g class="cursor" opacity="0">' +
         '<line class="cur-line" y1="' + PT + '" y2="' + fimB + '"/>' +
         '<circle class="cur pts" r="5"/><circle class="cur saldo" r="4"/><circle class="cur aprov" r="4"/>' +
       '</g>';
  s += '<rect class="hit" x="' + (PL - passoX / 2).toFixed(1) + '" y="' + PT + '" width="' + (IW + passoX).toFixed(1) +
       '" height="' + (fimB - PT) + '"/>';

  host.innerHTML = '<svg class="evo" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" ' +
    'aria-label="Evolução ao longo de ' + n + ' jogos: ' + ult.pontosAcum + ' pontos, saldo ' + signed(ult.saldoAcum) +
    '. Os valores de cada jogo estão na tabela de partidas.">' + s + '</svg>';

  const svg = host.querySelector('svg');
  const cursor = svg.querySelector('.cursor');
  const [cLine, cPts, cSaldo, cAprov] = cursor.children;
  let atual = -1;

  function esconde(){ atual = -1; cursor.setAttribute('opacity', '0'); tip.hidden = true; }
  esconderEvo = esconde;

  function resumo(i){
    const d = evo[i], j = jogos[i];
    return 'Jogo ' + d.jogo + ', ' + d.data + ', ' + j.placar + ' contra ' + j.adversario + ', ' + j.resultado +
      '. ' + d.pontosAcum + ' pontos acumulados, saldo ' + signed(d.saldoAcum) + '.';
  }

  // Posiciona cursor e tooltip no jogo i; (cx, cy) é o ponto da tela onde o tooltip se ancora
  function mostra(i, cx, cy){
    atual = i;
    const d = evo[i], j = jogos[i], x = xAt(i);
    cursor.setAttribute('opacity', '1');
    cLine.setAttribute('x1', x); cLine.setAttribute('x2', x);
    cPts.setAttribute('cx', x);   cPts.setAttribute('cy', yA(d.pontosAcum));
    cSaldo.setAttribute('cx', x); cSaldo.setAttribute('cy', yA(d.saldoAcum));
    const temAprov = d.aprovMovel5 != null;
    cAprov.setAttribute('opacity', temAprov ? '1' : '0');
    if(temAprov){ cAprov.setAttribute('cx', x); cAprov.setAttribute('cy', yB(d.aprovMovel5)); }

    const row = (cor, l, v) => '<div class="tt-row"><span><i class="tt-key" style="background:' + cor + '"></i>' + l +
      '</span><span>' + v + '</span></div>';
    tip.hidden = false;
    tip.innerHTML =
      '<div class="tt-head"><span class="tt-opp">' + esc(j.adversario) + '</span>' +
      '<span class="tt-date">' + esc(d.data) + '</span></div>' +
      '<div class="tt-score"><span class="res-tag ' + resClass(j.resultado) + '">' + esc(j.resultado) + '</span> ' + esc(j.placar) + '</div>' +
      (j.gols ? '<div class="tt-gols">' + esc(j.gols) + '</div>' : '') +
      row('#39c96a', 'Pontos acum.', d.pontosAcum) +
      row('#e8cd8a', 'Saldo acum.', signed(d.saldoAcum)) +
      row('#6f9ce6', 'Aprov. móvel 5', temAprov ? pct(d.aprovMovel5) : '—') +
      '<div class="tt-meta">Jogo ' + d.jogo + ' de ' + n + ' · ' + esc(j.competicao) + (j.mataMata ? ' (mata-mata)' : '') + ' · ' + esc(j.local) +
      (j.estadio ? ' · ' + esc(j.estadio) : '') + '</div>';

    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let left = cx + 16, top = cy - th / 2;
    if(left + tw > window.innerWidth - 12) left = cx - tw - 16;
    left = Math.max(12, left);
    top = Math.max(12, Math.min(window.innerHeight - th - 12, top));
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  function indiceDoPonteiro(ev){
    const box = svg.getBoundingClientRect();
    const x = (ev.clientX - box.left) / box.width * W;
    return Math.max(0, Math.min(n - 1, Math.round((x - PL) / passoX)));
  }
  function noPonteiro(ev){ mostra(indiceDoPonteiro(ev), ev.clientX, ev.clientY); }

  const hit = svg.querySelector('.hit');
  hit.addEventListener('pointermove', noPonteiro);
  hit.addEventListener('pointerdown', noPonteiro);
  // No toque o pointerleave chega logo após soltar o dedo: o tooltip fica até tocar fora ou rolar
  hit.addEventListener('pointerleave', ev => { if(ev.pointerType !== 'touch') esconde(); });

  // Teclado: ← → percorrem os jogos, Home/End vão às pontas, Esc fecha.
  // Handlers por propriedade: o host sobrevive aos re-renders e não deve acumular ouvintes.
  host.tabIndex = 0;
  host.onblur = esconde;
  host.onkeydown = ev => {
    if(ev.key === 'Escape'){ esconde(); return; }
    const passos = {ArrowRight: 1, ArrowLeft: -1, Home: -n, End: n};
    if(!(ev.key in passos)) return;
    ev.preventDefault();
    const i = atual < 0
      ? (ev.key === 'ArrowRight' || ev.key === 'Home' ? 0 : n - 1)
      : Math.max(0, Math.min(n - 1, atual + passos[ev.key]));
    const box = svg.getBoundingClientRect();
    mostra(i, box.left + xAt(i) / W * box.width, box.top + yA(evo[i].pontosAcum) / H * box.height);
    live.textContent = resumo(i);
  };
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
    const sa = textoSeqAtual(m.seqAtual);
    if(sa) badges.appendChild(el('div', 'momentum-badge ' + (sa.bom ? 'evoluindo' : 'caindo'), esc(sa.texto)));
  }

  // Os mesmos 5 jogos dos chips, na mesma ordem, com adversário e placar
  const lista = document.getElementById('last-games');
  lista.innerHTML = '';
  DATA.ultimos5.forEach(g => {
    const r = el('div', 'lg-row');
    r.appendChild(el('span', 'lg-dot ' + g.resultado[0]));
    r.appendChild(el('span', 'lg-date', esc(ddmm(g.data))));
    r.appendChild(el('span', 'lg-opp', esc(g.adversario) + '<small>' + esc(g.local) + ' · ' + esc(g.competicao) + '</small>'));
    r.appendChild(el('span', 'placar', esc(g.placar)));
    lista.appendChild(r);
  });

  const trendWrap = document.getElementById('trend-badge');
  trendWrap.innerHTML = '';
  if(m.sequencia.length){
    const nUlt = Math.min(10, DATA.header.jogos);
    trendWrap.appendChild(el('div', 'momentum-badge ' + clsMap[m.tendencia],
      iconMap[m.tendencia] + ' ' + m.tendencia + ' — últimos ' + nUlt + ' jogos: ' +
      m.pontos10 + '/' + (nUlt * 3) + ' pts (' + pct(m.aproveitamento10) + ')'));
  }
}

/* Sequência em curso, na forma mais forte que ela admite:
   "4 vitórias seguidas · invicto há 5 jogos", "sem vencer há 3 jogos"… */
function textoSeqAtual(sa){
  if(!sa) return null;
  if(sa.vitorias >= 2) return {bom: true, texto: sa.vitorias + ' vitórias seguidas' +
    (sa.invicto > sa.vitorias ? ' · invicto há ' + sa.invicto + ' jogos' : '')};
  if(sa.invicto >= 2)  return {bom: true,  texto: 'Invicto há ' + sa.invicto + ' jogos'};
  if(sa.derrotas >= 2) return {bom: false, texto: sa.derrotas + ' derrotas seguidas'};
  if(sa.semVencer >= 2) return {bom: false, texto: 'Sem vencer há ' + sa.semVencer + ' jogos'};
  return null;
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
  ].forEach(([l, seq, neg]) => {
    const c = el('div', 'seq-card' + (neg && seq.n > 0 ? ' neg' : ''));
    c.appendChild(el('div', 'seq-num', seq.n));
    c.appendChild(el('div', 'seq-label', l));
    // Período da sequência: "08/02 → 13/05" (um jogo só = uma data)
    if(seq.n) c.appendChild(el('div', 'seq-period', esc(seq.n > 1 ? ddmm(seq.de) + ' → ' + ddmm(seq.ate) : ddmm(seq.de))));
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

const ELENCO_TOP = 10;

function renderElenco(){
  const grid = document.getElementById('elenco-grid');
  grid.innerHTML = '';
  const recorte = activeFilters().length > 0;
  const blocos = [
    {titulo:'Artilharia', unidade:'gols', barra:'gols',
     dados: normalizePlayers(DATA.artilharia), escopo: 'No recorte', contra: DATA.golsContra,
     vazio: 'Nenhum gol no recorte atual.'},
    {titulo:'Assistências', unidade:'assistências', barra:'assist',
     dados: normalizePlayers(BASE_ASSISTENCIAS), escopo: 'Temporada inteira', contra: 0,
     vazio: 'Sem assistências registradas.'},
  ];

  blocos.forEach(b => {
    const card = el('div', 'card');
    const head = el('div', 'elenco-head');
    head.appendChild(el('div', 'comp-name', b.titulo));
    // O escopo só precisa ser dito quando há filtro: sem filtro, tudo é a temporada
    if(recorte) head.appendChild(el('span', 'scope-tag' + (b.escopo === 'No recorte' ? ' on' : ''), b.escopo));
    card.appendChild(head);
    if(!b.dados.length){
      card.appendChild(el('div', null, emptyMsg(b.vazio)));
      grid.appendChild(card);
      return;
    }
    const max = b.dados[0].valor;
    const total = b.dados.reduce((s, p) => s + p.valor, 0);
    const aberto = !!UI.elencoAberto[b.titulo];
    const lista = el('div', null, '');
    lista.style.marginTop = '14px';
    b.dados.slice(0, aberto ? b.dados.length : ELENCO_TOP).forEach((p, _, arr) => {
      // Empatados dividem a posição: 1, 2, 3, 3, 5…
      const pos = arr.findIndex(q => q.valor === p.valor) + 1;
      const row = el('div', 'player-row' + (pos === 1 ? ' top' : ''));
      row.appendChild(el('div', 'pos', pos));
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
    if(b.dados.length > ELENCO_TOP){
      const mais = el('button', 'elenco-more', aberto ? 'Ver só o top ' + ELENCO_TOP : 'Ver todos (' + b.dados.length + ')');
      mais.type = 'button';
      mais.setAttribute('aria-expanded', String(aberto));
      mais.onclick = () => { UI.elencoAberto[b.titulo] = !aberto; renderElenco(); };
      foot.appendChild(mais);
    }
    foot.appendChild(el('span', null, 'Total: ' + total +
      (b.contra ? ' + ' + b.contra + ' ' + plural(b.contra, 'gol contra', 'gols contra') : '')));
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
    const label = el('div', 'dist-val',
      v + ' ' + plural(v, 'jogo', 'jogos') + ' · ' + (v / total * 100).toFixed(0) + '%');
    track.appendChild(label);
    row.appendChild(track);
    wrap.appendChild(row);
    // Rótulo dentro da barra só quando cabe nela com folga — medido em px,
    // não em %, porque no celular a mesma barra é bem mais curta. Senão
    // vai para fora, depois do fim da barra, sem distorcer a escala.
    const dentro = label.offsetWidth + 20 <= track.clientWidth * w / 100;
    label.classList.add(dentro ? 'inside' : 'outside');
    label.style.left = dentro ? '10px' : 'calc(' + w + '% + 10px)';
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
    item.appendChild(el('span', 'val', d.qtd + ' (' + pct(d.pct) + ')'));
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

/* V/E/D de cada torneio e de cada mando, em barras 100% empilhadas ao
   lado do donut: o mesmo total, aberto. Os números ficam escritos ao
   lado — a barra não é a única forma de ler o valor. */
function renderResultadosAbertos(){
  const wrap = document.getElementById('res-breakdown');
  wrap.innerHTML = '';
  if(!DATA.header.jogos) return;
  wrap.appendChild(el('div', 'bd-title', 'Resultados por torneio e mando'));
  const linha = (nome, d) => {
    if(!d.jogos) return;
    const row = el('div', 'bd-row');
    row.appendChild(el('div', 'bd-name', esc(nome)));
    const bar = el('div', 'bd-bar');
    [['V', d.vitorias, 'vitória'], ['E', d.empates, 'empate'], ['D', d.derrotas, 'derrota']].forEach(([k, q, rotulo]) => {
      if(!q) return;
      const seg = el('span', 'bd-seg ' + k);
      seg.style.flexGrow = q;
      seg.title = nome + ': ' + q + ' ' + rotulo + (q === 1 ? '' : 's') + ' (' + pct(q / d.jogos * 100) + ')';
      bar.appendChild(seg);
    });
    row.appendChild(bar);
    row.appendChild(el('div', 'bd-val', d.vitorias + 'V ' + d.empates + 'E ' + d.derrotas + 'D'));
    wrap.appendChild(row);
  };
  DATA.porCompeticao.forEach(c => linha(c.competicao, c));
  wrap.appendChild(el('div', 'bd-sep'));
  linha('Em casa', DATA.casaXFora.casa);
  linha('Fora de casa', DATA.casaXFora.fora);
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
  {key:'gols',       label:'Gols', semOrdem:true},
  {key:'pts',        label:'Pts', num:true},
  {key:'resultado',  label:'Resultado'},
];

function gameRows(){
  const pontosMap = {'Vitória':3, 'Empate':1, 'Derrota':0};
  // Mata-mata não vale pontos: pts fica null e a célula mostra "—"
  return DATA.todasPartidas.map((g, i) => ({
    ...g, idx: i, dateObj: parseBR(g.data), pts: g.mataMata ? null : pontosMap[g.resultado] ?? 0,
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

  const busca = UI.gamesQuery.trim();
  const q = fold(busca);
  if(q){
    rows = rows.filter(r => [r.adversario, r.competicao, r.resultado, r.placar, r.estadio, r.gols, r.mataMata ? 'mata-mata' : '']
      .some(v => fold(v).includes(q)));
  }

  const {key, dir} = UI.gamesSort;
  rows.sort((a, b) => {
    // Ordenando por Pts, jogo sem pontos (mata-mata) fica no fim nos dois sentidos
    if(key === 'pts' && (a.pts == null) !== (b.pts == null)) return a.pts == null ? 1 : -1;
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
    if(col.semOrdem){ tr.appendChild(el('th', null, col.label)); return; }
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
    const td = el('td', null, q ? 'Nenhuma partida encontrada para “' + esc(busca) + '”.' : 'Sem partidas no recorte.');
    td.colSpan = GAME_COLS.length;
    r.appendChild(td); tbody.appendChild(r);
  }
  rows.forEach(g => {
    const row = el('tr');
    row.appendChild(el('td', null, esc(g.data)));
    row.appendChild(el('td', null, '<b style="color:var(--white)">' + esc(g.adversario) + '</b>'));
    row.appendChild(el('td', null, esc(g.competicao) + (g.mataMata ? '<span class="loc-std">mata-mata</span>' : '')));
    row.appendChild(el('td', null, '<span class="loc-tag ' + (g.local === 'Casa' ? 'casa' : '') + '">' + esc(g.local) + '</span>' +
      (g.estadio ? '<span class="loc-std">' + esc(g.estadio) + '</span>' : '')));
    row.appendChild(el('td', null, '<span class="placar">' + esc(g.placar) + '</span>'));
    row.appendChild(el('td', 'gols-cell', g.gols ? esc(g.gols) : '<span class="muted">—</span>'));
    row.appendChild(el('td', 'num', g.pts == null
      ? '<span class="muted" title="Mata-mata: jogo eliminatório não vale pontos">—</span>' : g.pts));
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
  renderResultadosAbertos();
  renderJogos();
}

/* ================================================================
   CÁLCULO — buildDataFromRows recalcula tudo a partir das linhas
   (base inteira ou recorte de filtro).
   Estádio em Arena Barueri / Allianz Parque / Nubank Parque = jogo em casa.
   ================================================================ */

const CASA_LOCAIS = new Set(['Arena Barueri', 'Allianz Parque', 'Nubank Parque']);

function fmtDateBR(d){
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return dd + '/' + mm + '/' + d.getFullYear();
}

/* Maior sequência de jogos em que cond(jogo) vale, com o período.
   No empate de tamanho fica a mais recente. */
function maxSeq(rows, cond){
  let best = {n: 0, de: null, ate: null}, cur = 0;
  rows.forEach((r, i) => {
    if(!cond(r)){ cur = 0; return; }
    cur++;
    if(cur >= best.n) best = {n: cur, de: fmtDateBR(rows[i - cur + 1].DataObj), ate: fmtDateBR(r.DataObj)};
  });
  return best;
}

/* Tamanho da sequência que termina no último jogo */
function seqFinal(rows, cond){
  let n = 0;
  for(let i = rows.length - 1; i >= 0 && cond(rows[i]); i--) n++;
  return n;
}

/* "V.Roque (2), Andreas e Sosa" → [{nome:'Vitor Roque', gols:2, contra:false}, …].
   "(c)" ou "(contra)" marca gol contra a favor. Vazio ou traço = sem gols. */
function parseAutores(texto){
  const s = String(texto ?? '').trim();
  if(!s || /^[-–—]$/.test(s)) return [];
  return s.split(/\s*,\s*|\s+e\s+/).filter(Boolean).map(parte => {
    const m = parte.match(/^(.+?)\s*(?:\((\d+|c|contra)\))?$/i);
    const nome = m[1].trim();
    const extra = (m[2] || '').toLowerCase();
    return {nome: APELIDOS[nome] || nome, gols: /^\d+$/.test(extra) ? +extra : 1, contra: extra === 'c' || extra === 'contra'};
  });
}

/* Forma de exibição (nomes completos) — e que parseAutores lê de volta */
function formatAutores(lista){
  return lista.map(a => a.nome + (a.contra ? ' (contra)' : a.gols > 1 ? ' (' + a.gols + ')' : '')).join(', ');
}

/* Marca os jogos de mata-mata (ver JOGOS_ANTES_DO_MATA_MATA). Recebe a
   base inteira em ordem cronológica: é a posição do jogo dentro da
   competição que diz a fase, e um recorte de filtro mudaria essa conta. */
function marcarMataMata(rows){
  const vistos = {};
  rows.forEach(r => {
    const n = vistos[r.Competicao] = (vistos[r.Competicao] || 0) + 1;
    const antes = JOGOS_ANTES_DO_MATA_MATA[r.Competicao];
    r.MataMata = antes !== undefined && n > antes;
  });
  return rows;
}

/* Artilheiro(s) de um conjunto de jogos: {nomes, gols} ou null */
function artilheiroDe(rows){
  const mapa = {};
  rows.forEach(r => parseAutores(r.Autores).forEach(a => {
    if(!a.contra) mapa[a.nome] = (mapa[a.nome] || 0) + a.gols;
  }));
  const max = Math.max(0, ...Object.values(mapa));
  if(!max) return null;
  const nomes = Object.keys(mapa).filter(k => mapa[k] === max).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  return {nomes, gols: max};
}

function emptyData(){
  const zero = {jogos:0, vitorias:0, empates:0, derrotas:0, golsMarcados:0, golsSofridos:0,
    saldo:0, pontos:0, pontosPossiveis:0, aproveitamento:0, mediaGolsJogo:0};
  return {
    header: {...zero}, porCompeticao: [], melhorCompeticao: null, piorCompeticao: null,
    casaXFora: {casa: {...zero}, fora: {...zero}},
    maisEnfrentados: [], melhorAproveitamento: [], maiorDificuldade: [], maisVencidos: [],
    sequencias: Object.fromEntries(['maiorVitorias', 'maiorSemPerder', 'maiorDerrotas', 'maiorSemVencer',
      'maiorMarcando', 'maiorSemSofrer', 'maiorSofrendo'].map(k => [k, {n: 0, de: null, ate: null}])),
    ultimos5: [], ultimos10: [],
    momentoAtual: {sequencia: [], pontos:0, aproveitamento:0, classificacao:'—',
      tendencia:'Estável', pontos10:0, aproveitamento10:0, seqAtual: null},
    goleadaAplicada: null, goleadaSofrida: null,
    artilharia: [], golsContra: 0,
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
    .map(comp => ({competicao: comp, ...conta(compMap[comp]), artilheiro: artilheiroDe(compMap[comp])}))
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

  const vence = r => r.Resultado === 'Vitória', perde = r => r.Resultado === 'Derrota';
  const sequencias = {
    maiorVitorias:  maxSeq(rows, vence),
    maiorSemPerder: maxSeq(rows, r => !perde(r)),
    maiorDerrotas:  maxSeq(rows, perde),
    maiorSemVencer: maxSeq(rows, r => !vence(r)),
    maiorMarcando:  maxSeq(rows, r => r.Gols_Palmeiras > 0),
    maiorSemSofrer: maxSeq(rows, r => r.Gols_Adversario === 0),
    maiorSofrendo:  maxSeq(rows, r => r.Gols_Adversario > 0),
  };

  const jogosLista = d => d.map(r => ({
    data: fmtDateBR(r.DataObj), adversario: r.Adversario, competicao: r.Competicao,
    local: r.Mandante ? 'Casa' : 'Fora', estadio: r.Local || '', placar: r.Placar, resultado: r.Resultado,
    mataMata: !!r.MataMata,
    gp: r.Gols_Palmeiras, gc: r.Gols_Adversario,
    gols: formatAutores(parseAutores(r.Autores)),
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
    seqAtual: {
      vitorias: seqFinal(rows, vence), invicto: seqFinal(rows, r => !perde(r)),
      derrotas: seqFinal(rows, perde), semVencer: seqFinal(rows, r => !vence(r)),
    },
  };

  // Goleadas: maior saldo desempatado pelo maior número de gols marcados.
  // Só há goleada aplicada com saldo positivo (e sofrida com negativo) —
  // num recorte só de derrotas, a "maior vitória" não pode ser uma derrota.
  const bySaldo = [...rows].sort((a, b) => b.Saldo - a.Saldo || b.Gols_Palmeiras - a.Gols_Palmeiras);
  const goleadaObj = r => r && {adversario: r.Adversario, placar: r.Placar,
    data: fmtDateBR(r.DataObj), competicao: r.Competicao};
  const maiorVitoria = bySaldo[0], maiorDerrota = bySaldo[bySaldo.length - 1];

  // Artilharia do recorte; gols contra a favor ficam num total à parte
  const golsPorJogador = {};
  let golsContra = 0;
  rows.forEach(r => parseAutores(r.Autores).forEach(a => {
    if(a.contra) golsContra += a.gols;
    else golsPorJogador[a.nome] = (golsPorJogador[a.nome] || 0) + a.gols;
  }));
  const artilharia = Object.keys(golsPorJogador).map(nome => ({nome, valor: golsPorJogador[nome]}));

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
    goleadaAplicada: maiorVitoria.Saldo > 0 ? goleadaObj(maiorVitoria) : null,
    goleadaSofrida: maiorDerrota.Saldo < 0 ? goleadaObj(maiorDerrota) : null,
    artilharia, golsContra,
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

function setStatus(msg, kind){
  const s = document.getElementById('upload-status');
  s.textContent = msg;
  s.className = 'upload-status' + (kind ? ' ' + kind : '');
}

/* ================================================================
   FILTROS
   RAW_ROWS guarda a base completa; os filtros recortam essa base e
   DATA é recalculado inteiro em cima do recorte.
   ================================================================ */
/* Converte BASE_PARTIDAS nas linhas que buildDataFromRows recebe: um
   objeto por jogo, com placar, resultado e mata-mata já resolvidos. */
function rowsFromBase(base){
  return marcarMataMata(base.map(([data, adversario, competicao, local, gp, gc, autores, placar], i) => {
    const soma = parseAutores(autores).reduce((s, a) => s + a.gols, 0);
    if(soma !== gp) console.warn('BASE_PARTIDAS: autores somam ' + soma + ' gol(s), mas o placar diz ' + gp +
      ' — ' + data + ' vs ' + adversario);
    return {
      ID_Partida: i + 1,
      Data: data,
      DataObj: parseBR(data),
      Adversario: adversario,
      Competicao: competicao,
      Local: local,
      Placar: placar || gp + 'x' + gc,
      Gols_Palmeiras: gp,
      Gols_Adversario: gc,
      Resultado: gp > gc ? 'Vitória' : gp === gc ? 'Empate' : 'Derrota',
      Autores: autores || '',
    };
  }));
}

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
  const cols = ['Data','Adversario','Competicao','Estadio','Mando','Placar','Gols_Palmeiras','Gols_Adversario','Resultado','Autores'];
  const cell = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  // Ponto-e-vírgula + BOM: é o que o Excel em pt-BR abre sem etapa de importação
  const csv = [cols.join(';')].concat(
    rows.map(g => [g.data, g.adversario, g.competicao, g.estadio, g.local, g.placar, g.gp, g.gc, g.resultado, g.gols]
      .map(cell).join(';'))
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
  RAW_ROWS = rowsFromBase(BASE_PARTIDAS);
  populateFilterOptions();
  DATA = buildDataFromRows(RAW_ROWS.map(r => ({...r})));
  renderDashboard();
  initScrollSpy();

  FILTER_IDS.forEach(id => document.getElementById(id).addEventListener('change', applyFilters));

  document.getElementById('f-clear').addEventListener('click', function(){
    FILTER_IDS.forEach(id => { document.getElementById(id).value = ''; });
    applyFilters();
  });

  document.getElementById('btn-export').addEventListener('click', exportCSV);

  let searchTimer;
  document.getElementById('games-search').addEventListener('input', function(e){
    clearTimeout(searchTimer);
    const v = e.target.value;
    searchTimer = setTimeout(() => { UI.gamesQuery = v; renderJogos(); }, 120);
  });

  // O gráfico é desenhado na largura do card: redesenha quando ela muda
  let resizeTimer;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if(Math.abs(document.getElementById('evo-chart').clientWidth - EVO_W) > 4) renderEvolucao();
      renderDistribuicao();   // rótulo dentro/fora da barra depende da largura
    }, 150);
  });
  // O tooltip é fixo na tela: some ao rolar ou ao tocar fora do gráfico
  window.addEventListener('scroll', () => esconderEvo(), {passive: true});
  document.addEventListener('pointerdown', e => {
    if(!e.target.closest('#evo-chart')) esconderEvo();
  });
})();
