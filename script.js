var PAIRS = {
  Africa: [
    ['Algeria', 'Algiers'],
    ['Angola', 'Luanda'],
    ['Benin', 'Porto-Novo'],
    ['Botswana', 'Gaborone'],
    ['Burkina Faso', 'Ouagadougou'],
    ['Burundi', 'Gitega'],
    ['Cameroon', 'Yaounde'],
    ['Cape Verde', 'Praia'],
    ['Chad', "N'Djamena"],
    ['Congo', 'Brazzaville'],
    ['Democratic Republic of the Congo', 'Kinshasa'],
    ['Djibouti', 'Djibouti City'],
    ['Egypt', 'Cairo'],
    ['Eritrea', 'Asmara'],
    ['Ethiopia', 'Addis Ababa'],
    ['Gabon', 'Libreville'],
    ['Gambia', 'Banjul'],
    ['Ghana', 'Accra'],
    ['Guinea', 'Conakry'],
    ['Ivory Coast', 'Yamoussoukro'],
    ['Kenya', 'Nairobi'],
    ['Liberia', 'Monrovia'],
    ['Libya', 'Tripoli'],
    ['Madagascar', 'Antananarivo'],
    ['Malawi', 'Lilongwe'],
    ['Mali', 'Bamako'],
    ['Mauritania', 'Nouakchott'],
    ['Mauritius', 'Port Louis'],
    ['Morocco', 'Rabat'],
    ['Mozambique', 'Maputo'],
    ['Namibia', 'Windhoek'],
    ['Niger', 'Niamey'],
    ['Nigeria', 'Abuja'],
    ['Rwanda', 'Kigali'],
    ['Senegal', 'Dakar'],
    ['Sierra Leone', 'Freetown'],
    ['Somalia', 'Mogadishu'],
    ['South Africa', 'Pretoria'],
    ['South Sudan', 'Juba'],
    ['Sudan', 'Khartoum'],
    ['Tanzania', 'Dodoma'],
    ['Togo', 'Lome'],
    ['Tunisia', 'Tunis'],
    ['Uganda', 'Kampala'],
    ['Zambia', 'Lusaka'],
    ['Zimbabwe', 'Harare']
  ],
  Americas: [
    ['Argentina', 'Buenos Aires'],
    ['Bahamas', 'Nassau'],
    ['Barbados', 'Bridgetown'],
    ['Belize', 'Belmopan'],
    ['Bolivia', 'Sucre'],
    ['Brazil', 'Brasilia'],
    ['Canada', 'Ottawa'],
    ['Chile', 'Santiago'],
    ['Colombia', 'Bogota'],
    ['Costa Rica', 'San Jose'],
    ['Cuba', 'Havana'],
    ['Dominican Republic', 'Santo Domingo'],
    ['Ecuador', 'Quito'],
    ['El Salvador', 'San Salvador'],
    ['Guatemala', 'Guatemala City'],
    ['Guyana', 'Georgetown'],
    ['Haiti', 'Port-au-Prince'],
    ['Honduras', 'Tegucigalpa'],
    ['Jamaica', 'Kingston'],
    ['Mexico', 'Mexico City'],
    ['Nicaragua', 'Managua'],
    ['Panama', 'Panama City'],
    ['Paraguay', 'Asuncion'],
    ['Peru', 'Lima'],
    ['Suriname', 'Paramaribo'],
    ['Trinidad and Tobago', 'Port of Spain'],
    ['United States', 'Washington, D.C.'],
    ['Uruguay', 'Montevideo'],
    ['Venezuela', 'Caracas']
  ],
  Asia: [
    ['Afghanistan', 'Kabul'],
    ['Armenia', 'Yerevan'],
    ['Azerbaijan', 'Baku'],
    ['Bahrain', 'Manama'],
    ['Bangladesh', 'Dhaka'],
    ['Bhutan', 'Thimphu'],
    ['Cambodia', 'Phnom Penh'],
    ['China', 'Beijing'],
    ['Georgia', 'Tbilisi'],
    ['India', 'New Delhi'],
    ['Indonesia', 'Jakarta'],
    ['Iran', 'Tehran'],
    ['Iraq', 'Baghdad'],
    ['Israel', 'Jerusalem'],
    ['Japan', 'Tokyo'],
    ['Jordan', 'Amman'],
    ['Kazakhstan', 'Astana'],
    ['Kuwait', 'Kuwait City'],
    ['Kyrgyzstan', 'Bishkek'],
    ['Laos', 'Vientiane'],
    ['Lebanon', 'Beirut'],
    ['Malaysia', 'Kuala Lumpur'],
    ['Maldives', 'Male'],
    ['Mongolia', 'Ulaanbaatar'],
    ['Myanmar', 'Naypyidaw'],
    ['Nepal', 'Kathmandu'],
    ['Oman', 'Muscat'],
    ['Pakistan', 'Islamabad'],
    ['Philippines', 'Manila'],
    ['Qatar', 'Doha'],
    ['Saudi Arabia', 'Riyadh'],
    ['Singapore', 'Singapore'],
    ['South Korea', 'Seoul'],
    ['Sri Lanka', 'Sri Jayawardenepura Kotte'],
    ['Syria', 'Damascus'],
    ['Taiwan', 'Taipei'],
    ['Tajikistan', 'Dushanbe'],
    ['Thailand', 'Bangkok'],
    ['Turkey', 'Ankara'],
    ['Turkmenistan', 'Ashgabat'],
    ['United Arab Emirates', 'Abu Dhabi'],
    ['Uzbekistan', 'Tashkent'],
    ['Vietnam', 'Hanoi'],
    ['Yemen', 'Sanaa']
  ],
  Europe: [
    ['Albania', 'Tirana'],
    ['Andorra', 'Andorra la Vella'],
    ['Austria', 'Vienna'],
    ['Belarus', 'Minsk'],
    ['Belgium', 'Brussels'],
    ['Bosnia and Herzegovina', 'Sarajevo'],
    ['Bulgaria', 'Sofia'],
    ['Croatia', 'Zagreb'],
    ['Cyprus', 'Nicosia'],
    ['Czechia', 'Prague'],
    ['Denmark', 'Copenhagen'],
    ['Estonia', 'Tallinn'],
    ['Finland', 'Helsinki'],
    ['France', 'Paris'],
    ['Germany', 'Berlin'],
    ['Greece', 'Athens'],
    ['Hungary', 'Budapest'],
    ['Iceland', 'Reykjavik'],
    ['Ireland', 'Dublin'],
    ['Italy', 'Rome'],
    ['Latvia', 'Riga'],
    ['Lithuania', 'Vilnius'],
    ['Luxembourg', 'Luxembourg City'],
    ['Malta', 'Valletta'],
    ['Moldova', 'Chisinau'],
    ['Monaco', 'Monaco'],
    ['Montenegro', 'Podgorica'],
    ['Netherlands', 'Amsterdam'],
    ['North Macedonia', 'Skopje'],
    ['Norway', 'Oslo'],
    ['Poland', 'Warsaw'],
    ['Portugal', 'Lisbon'],
    ['Romania', 'Bucharest'],
    ['Russia', 'Moscow'],
    ['Serbia', 'Belgrade'],
    ['Slovakia', 'Bratislava'],
    ['Slovenia', 'Ljubljana'],
    ['Spain', 'Madrid'],
    ['Sweden', 'Stockholm'],
    ['Switzerland', 'Bern'],
    ['Ukraine', 'Kyiv'],
    ['United Kingdom', 'London']
  ],
  Oceania: [
    ['Australia', 'Canberra'],
    ['Cook Islands', 'Avarua'],
    ['Fiji', 'Suva'],
    ['French Polynesia', 'Papeete'],
    ['Guam', 'Hagatna'],
    ['Kiribati', 'Tarawa'],
    ['Marshall Islands', 'Majuro'],
    ['Micronesia', 'Palikir'],
    ['Nauru', 'Yaren'],
    ['New Caledonia', 'Noumea'],
    ['New Zealand', 'Wellington'],
    ['Niue', 'Alofi'],
    ['Northern Mariana Islands', 'Saipan'],
    ['Palau', 'Ngerulmud'],
    ['Papua New Guinea', 'Port Moresby'],
    ['Samoa', 'Apia'],
    ['Solomon Islands', 'Honiara'],
    ['Tonga', "Nuku'alofa"],
    ['Tuvalu', 'Funafuti'],
    ['American Samoa', 'Pago Pago'],
    ['Vanuatu', 'Port Vila']
  ]
};

var REGION_NAMES = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
var TIME_LIMIT = 15;
var BEST_KEY = 'capitalquiz:best:v1';

var startScreen = document.getElementById('startScreen');
var quizScreen = document.getElementById('quizScreen');
var results = document.getElementById('results');
var regionSelect = document.getElementById('regionSelect');
var lengthSelect = document.getElementById('lengthSelect');
var startBtn = document.getElementById('startBtn');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');
var roundEl = document.getElementById('round');
var scoreEl = document.getElementById('score');
var streakEl = document.getElementById('streak');
var timerEl = document.getElementById('timer');
var progressEl = document.getElementById('progress');
var nextBtn = document.getElementById('nextBtn');
var finalScoreEl = document.getElementById('finalScore');
var bestEl = document.getElementById('best');
var reviewEl = document.getElementById('review');
var playAgainBtn = document.getElementById('playAgainBtn');

var state = {
  region: 'World',
  total: 10,
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  questions: [],
  answered: false,
  picked: null,
  onQuiz: false
};

var timeLeft = TIME_LIMIT;
var tickId = null;
var autoId = null;

function poolFor(region) {
  if (region === 'World') {
    var all = [];
    REGION_NAMES.forEach(function (name) {
      all = all.concat(PAIRS[name]);
    });
    return all;
  }
  return PAIRS[region] ? PAIRS[region].slice() : [];
}

function shuffle(input) {
  var list = input.slice();
  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
  return list;
}

function buildQuestions(region, count) {
  var pool = poolFor(region);
  var questions = [];
  while (questions.length < count) {
    var batch = shuffle(pool);
    for (var i = 0; i < batch.length && questions.length < count; i++) {
      var pair = batch[i];
      var others = [];
      for (var k = 0; k < pool.length; k++) {
        if (pool[k][1] !== pair[1]) others.push(pool[k][1]);
      }
      var distractors = shuffle(others).slice(0, 3);
      var choices = shuffle([pair[1]].concat(distractors));
      questions.push({ country: pair[0], capital: pair[1], choices: choices, picked: null });
    }
  }
  return questions;
}

function loadBest() {
  try {
    var raw = localStorage.getItem(BEST_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveBest(data) {
  try {
    localStorage.setItem(BEST_KEY, JSON.stringify(data));
  } catch (e) {
    return;
  }
}

function paintTimer() {
  timerEl.textContent = timeLeft + 's';
  if (timeLeft <= 5) {
    timerEl.classList.add('low');
  } else {
    timerEl.classList.remove('low');
  }
}

function stopTimer() {
  if (tickId !== null) {
    window.clearInterval(tickId);
    tickId = null;
  }
}

function startTimer() {
  stopTimer();
  timeLeft = TIME_LIMIT;
  paintTimer();
  tickId = window.setInterval(function () {
    timeLeft -= 1;
    if (timeLeft < 0) timeLeft = 0;
    paintTimer();
    if (timeLeft === 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function paintHud() {
  roundEl.textContent = 'Question ' + (state.index + 1) + ' of ' + state.total;
  scoreEl.textContent = 'Score ' + state.score;
  streakEl.textContent = 'Streak ' + state.streak;
  var step = state.answered ? 1 : 0;
  progressEl.style.width = (((state.index + step) / state.total) * 100) + '%';
}

function renderChoices() {
  var q = state.questions[state.index];
  choicesEl.innerHTML = '';
  q.choices.forEach(function (city, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice';
    btn.dataset.index = String(i);
    btn.innerHTML = '<span class="key">' + (i + 1) + '</span><span class="value"></span>';
    btn.querySelector('.value').textContent = city;
    choicesEl.appendChild(btn);
  });
}

function reveal() {
  var q = state.questions[state.index];
  var nodes = choicesEl.querySelectorAll('.choice');
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var city = q.choices[i];
    node.disabled = true;
    if (city === q.capital) {
      node.classList.add('correct');
      if (state.picked !== null && state.picked !== q.capital) node.classList.add('reveal');
    } else if (state.picked === city) {
      node.classList.add('wrong');
    } else {
      node.classList.add('dim');
    }
  }
}

function renderQuestion() {
  var q = state.questions[state.index];
  state.answered = false;
  state.picked = null;
  questionEl.textContent = q.country;
  renderChoices();
  nextBtn.disabled = true;
  nextBtn.textContent = state.index === state.total - 1 ? 'See results' : 'Next';
  paintHud();
  startTimer();
}

function answer(value) {
  if (state.answered) return;
  state.answered = true;
  state.picked = value;
  stopTimer();
  var q = state.questions[state.index];
  q.picked = value;
  if (value === q.capital) {
    state.score += 1;
    state.streak += 1;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  } else {
    state.streak = 0;
  }
  reveal();
  paintHud();
  nextBtn.disabled = false;
  nextBtn.focus();
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;
  state.picked = null;
  state.streak = 0;
  var q = state.questions[state.index];
  q.picked = null;
  reveal();
  paintHud();
  autoId = window.setTimeout(advance, 1300);
}

function advance() {
  if (autoId !== null) {
    window.clearTimeout(autoId);
    autoId = null;
  }
  if (!state.answered) return;
  if (state.index >= state.total - 1) {
    showResults();
    return;
  }
  state.index += 1;
  renderQuestion();
}

function showScreen(name) {
  startScreen.hidden = name !== 'start';
  quizScreen.hidden = name !== 'quiz';
  results.hidden = name !== 'results';
}

function showResults() {
  state.onQuiz = false;
  stopTimer();
  showScreen('results');
  finalScoreEl.textContent = state.score + ' / ' + state.total;

  var data = loadBest();
  var previous = data[state.region];
  var note;
  if (!previous || state.score > previous.score) {
    note = 'New best for ' + state.region + ' at ' + state.score + ' out of ' + state.total + '.';
    data[state.region] = { score: state.score, total: state.total };
    saveBest(data);
  } else {
    note = 'Best for ' + state.region + ': ' + previous.score + ' out of ' + previous.total + '.';
  }
  bestEl.textContent = note + ' Longest streak this round: ' + state.bestStreak + '.';

  reviewEl.innerHTML = '';
  state.questions.forEach(function (q) {
    var li = document.createElement('li');
    var ok = q.picked === q.capital;
    li.className = ok ? 'ok' : 'no';
    var name = document.createElement('span');
    name.className = 'rname';
    name.textContent = q.country;
    var meta = document.createElement('span');
    meta.className = 'rmeta';
    var given = q.picked === null ? 'no answer' : q.picked;
    meta.textContent = 'You said ' + given + ' · correct ' + q.capital;
    name.appendChild(meta);
    var tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = ok ? 'Correct' : 'Missed';
    li.appendChild(name);
    li.appendChild(tag);
    reviewEl.appendChild(li);
  });
}

function startRound() {
  var region = regionSelect.value;
  var count = parseInt(lengthSelect.value, 10);
  state.region = region;
  state.total = count;
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.questions = buildQuestions(region, count);
  state.onQuiz = true;
  showScreen('quiz');
  renderQuestion();
}

startBtn.addEventListener('click', startRound);

nextBtn.addEventListener('click', advance);

playAgainBtn.addEventListener('click', function () {
  stopTimer();
  showScreen('start');
  startBtn.focus();
});

choicesEl.addEventListener('click', function (e) {
  var btn = e.target.closest('.choice');
  if (!btn || btn.disabled) return;
  var index = Number(btn.dataset.index);
  var q = state.questions[state.index];
  answer(q.choices[index]);
});

document.addEventListener('keydown', function (e) {
  if (!state.onQuiz) return;
  if (e.key >= '1' && e.key <= '4') {
    var index = Number(e.key) - 1;
    var q = state.questions[state.index];
    if (q && index < q.choices.length && !state.answered) {
      e.preventDefault();
      answer(q.choices[index]);
    }
    return;
  }
  if (e.key === 'Enter' && state.answered) {
    e.preventDefault();
    advance();
  }
});

showScreen('start');
