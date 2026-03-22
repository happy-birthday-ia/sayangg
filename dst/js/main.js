const starsEl = document.getElementById("starsEl");
for (let i = 0; i < 100; i++) {
  const s = document.createElement("div");
  s.className = "star";
  const sz = Math.random() * 2.5 + 0.8;
  s.style.cssText = `
        width: ${sz}px;
        height: ${sz}px;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation-duration: ${1.5 + Math.random() * 3}s;
        animation-delay: ${Math.random() * 5}s;
      `;
  starsEl.appendChild(s);
}

//   const confettiEl = document.getElementById("confettiEl");
//   const colors = ["#f9a8d4", "#c4b5fd", "#93c5fd", "#fde68a", "#bbf7d0"];
//   for (let i = 0; i < 50; i++) {
//     const c = document.createElement("div");
//     c.className = "confetti-piece";
//     const sz = 6 + Math.random() * 8;
//     c.style.cssText = `
//     width: ${sz}px;
//     height: ${sz}px;
//     left: ${Math.random() * 100}%;
//     background: ${colors[Math.floor(Math.random() * colors.length)]};
//     animation-duration: ${4 + Math.random() * 5}s;
//     animation-delay: ${Math.random() * 4}s;
//   `;
//     confettiEl.appendChild(c);
//   }

const PIN = "230326";
let current = "";

function updateDots() {
  for (let i = 0; i < 6; i++) {
    const d = document.getElementById("d" + i);
    d.className = "dot" + (i < current.length ? " filled" : "");
  }
}

function press(n) {
  if (current.length >= 6) return;
  current += n;
  updateDots();
  if (current.length === 6) setTimeout(check, 200);
}

function del() {
  current = current.slice(0, -1);
  updateDots();
}

function check() {
  if (current === PIN) {
    triggerBurst();
  } else {
    for (let i = 0; i < 6; i++) {
      document.getElementById("d" + i).className = "dot wrong";
    }
    const msg = document.getElementById("wrongMsg");
    msg.classList.add("show");
    setTimeout(() => {
      current = "";
      updateDots();
      msg.classList.remove("show");
    }, 900);
  }
}

function triggerBurst() {
  document.getElementById("pinSection").classList.add("hide");

  const delays = [0, 80, 160];
  ["burst1", "burst2", "burst3"].forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.classList.remove("go");
      void el.offsetWidth;
      el.classList.add("go");
    }, delays[i]);
  });

  setTimeout(() => {
    document.getElementById("mainSection").classList.add("show");
  }, 450);
}

const petalContainer = document.getElementById("petals");
const petals = ["🌸", "🌺", "🌷", "✿"];
for (let i = 0; i < 18; i++) {
  const p = document.createElement("div");
  p.className = "petal";
  p.textContent = petals[Math.floor(Math.random() * petals.length)];
  p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 60}%;
        font-size: ${12 + Math.random() * 14}px;
        animation-duration: ${6 + Math.random() * 8}s;
        animation-delay: ${Math.random() * 6}s;
      `;
  petalContainer.appendChild(p);
}

// window.onload = () => triggerBurst();

const pgRows = document.getElementById("pgRows");
const rowCount = 3;

const photosPerRow = 10;
const durations = [40, 50, 44];

const photoRows = [
  [
    "img/ceweku/30.jpg",

    "img/ceweku/1.webp",
    "img/ceweku/2.webp",
    "img/ceweku/4.jpeg",
    "img/ceweku/7.webp",
    "img/ceweku/9.webp",
    "img/ceweku/8.webp",
    "img/ceweku/3.jpeg",
    "img/ceweku/5.webp",
    "img/ceweku/6.webp",
  ],

  [
    "img/ceweku/10.jpg",
    "img/ceweku/15.jpg",
    "img/ceweku/17.jpg",
    "img/ceweku/13.jpg",
    "img/ceweku/14.jpg",
    "img/ceweku/16.jpg",
    "img/ceweku/11.jpg",
    "img/ceweku/28.jpg",
    "img/ceweku/21.jpg",
    "img/ceweku/25.jpg",
  ],

  [
    "img/ceweku/23.jpg",
    "img/ceweku/22.jpg",
    "img/ceweku/12.jpg",
    "img/ceweku/18.jpg",
    "img/ceweku/19.jpg",
    "img/ceweku/24.jpg",
    "img/ceweku/26.jpg",
    "img/ceweku/27.jpg",
    "img/ceweku/28.jpg",
    "img/ceweku/29.jpg",
    "img/ceweku/20.jpg",
  ],
];

for (let r = 0; r < rowCount; r++) {
  const row = document.createElement("div");
  row.className = "pg-row " + (r % 2 === 0 ? "left" : "right");
  row.style.animationDuration = durations[r] + "s";

  for (let pass = 0; pass < 2; pass++) {
    for (let p = 0; p < photosPerRow; p++) {
      const div = document.createElement("div");
      div.className = "pg-photo";
      const img = document.createElement("img");
      img.src = photoRows[r][p];
      img.alt = "foto";
      div.appendChild(img);
      row.appendChild(div);
    }
  }
  pgRows.appendChild(row);
}

function openBook() {
  document.getElementById("bookBackdrop").classList.add("show");
  setTimeout(() => {
    document.getElementById("bookClosed").classList.add("opening");
    document.getElementById("bookOpen").classList.add("show");
    document.getElementById("bookWrap").style.width = "680px";
  }, 700);
}

function openSong() {
  alert("Lagu untukmu coming soon! 🎵");
}

let currentPage = 0;
const totalPages = 4;

function openBook() {
  document.getElementById("bookBackdrop").classList.add("show");
  setTimeout(() => {
    document.getElementById("bookClosed").classList.add("opening");
    document.getElementById("bookOpen").classList.add("show");
    document.getElementById("bookWrap").style.width = "680px";
  }, 700);
}

function closeBook() {
  document.getElementById("bookOpen").classList.remove("show");
  document.getElementById("bookClosed").classList.remove("opening");
  document.getElementById("bookWrap").style.width = "340px";
  setTimeout(() => {
    document.getElementById("bookBackdrop").classList.remove("show");
    setTimeout(() => {
      currentPage = 0;
      renderPage();
    }, 300);
  }, 400);
}

function handleBackdropClick(e) {
  if (e.target === document.getElementById("bookBackdrop")) closeBook();
}

function changePage(dir) {
  const next = currentPage + dir;
  if (next < 0 || next >= totalPages) return;
  currentPage = next;
  renderPage();
}

function renderPage() {
  document
    .querySelectorAll(".photo-slide")
    .forEach((s, i) => s.classList.toggle("active", i === currentPage));
  document
    .querySelectorAll(".page-slide")
    .forEach((s, i) => s.classList.toggle("active", i === currentPage));
  document.getElementById("pageIndicator").textContent =
    currentPage + 1 + " / " + totalPages;
  document
    .getElementById("prevBtn")
    .classList.toggle("disabled", currentPage === 0);
  document
    .getElementById("nextBtn")
    .classList.toggle("disabled", currentPage === totalPages - 1);
}

const CW_WORDS = {
  // ACROSS (Mendatar)
  1: { word: "SELAMANYA", r: 1, c: 2, dir: "H", clue: "Masa depan kita" },
  3: { word: "JANUARI", r: 4, c: 3, dir: "H", clue: "Tanggal jadian kita" },
  5: { word: "BONEKA", r: 7, c: 2, dir: "H", clue: "Hadiah pertama dari aku" },
  7: {
    word: "BANYAK",
    r: 10,
    c: 2,
    dir: "H",
    clue: "Tempat yang pengen kita datengin bareng",
  },
  9: {
    word: "PERGI",
    r: 13,
    c: 4,
    dir: "H",
    clue: "Aku paling takut kalau kamu ...",
  },
  10: { word: "TIGA", r: 3, c: 7, dir: "H", clue: "Jumlah anak yang kamu mau" },
  11: {
    word: "CHAT",
    r: 15,
    c: 3,
    dir: "H",
    clue: "Hal pertama yang aku lakuin pas bangun tidur",
  },
  12: {
    word: "PAP",
    r: 15,
    c: 9,
    dir: "H",
    clue: "Aku paling seneng kalau kamu ...",
  },
  // DOWN (Menurun)
  2: {
    word: "SENYUM",
    r: 1,
    c: 2,
    dir: "V",
    clue: "Hal yang paling aku suka dari kamu",
  },
  4: { word: "IDO", r: 4, c: 9, dir: "V", clue: "Siapa yang nembak duluan" },
  6: { word: "KANGEN", r: 10, c: 7, dir: "V", clue: "Kata yang sering muncul" },
  8: {
    word: "CINTA",
    r: 8,
    c: 4,
    dir: "V",
    clue: "Alasan aku bertahan sama kamu",
  },
};

const CW_ROWS = 17;
const CW_COLS = 14;

let cwGrid = Array.from({ length: CW_ROWS }, () => Array(CW_COLS).fill(null));
let cwNumbers = {};
let cwUserInput = {};
let cwSolvedWords = new Set();

Object.entries(CW_WORDS).forEach(([num, info]) => {
  const { word, r, c, dir } = info;
  for (let i = 0; i < word.length; i++) {
    const pr = dir === "H" ? r : r + i;
    const pc = dir === "H" ? c + i : c;
    cwGrid[pr][pc] = word[i];
    if (i === 0) {
      const key = `${pr},${pc}`;
      if (!cwNumbers[key]) {
        cwNumbers[key] = String(num);
      } else {
        cwNumbers[key] =
          info.dir === "H" ? `${num},${existing}` : `${cwNumbers[key]},${num}`;
      }
    }
  }
});

function renderCwGrid() {
  const grid = document.getElementById("cwGrid");
  grid.style.gridTemplateColumns = `repeat(${CW_COLS}, 38px)`;
  grid.style.gridTemplateRows = `repeat(${CW_ROWS}, 38px)`;
  grid.innerHTML = "";

  for (let r = 0; r < CW_ROWS; r++) {
    for (let c = 0; c < CW_COLS; c++) {
      const cell = document.createElement("div");
      if (cwGrid[r][c]) {
        cell.className = "cw-cell letter";
        cell.dataset.r = r;
        cell.dataset.c = c;

        const num = cwNumbers[`${r},${c}`];
        if (num) {
          const span = document.createElement("div");
          span.className = "cw-cell-num";
          span.textContent = num;
          cell.appendChild(span);
        }

        const inp = document.createElement("input");
        inp.maxLength = 1;
        inp.dataset.r = r;
        inp.dataset.c = c;
        inp.value = cwUserInput[`${r},${c}`] || "";
        inp.addEventListener("input", onCwInput);
        inp.addEventListener("keydown", onCwKeydown);
        inp.addEventListener("focus", onCwFocus);
        cell.appendChild(inp);
      } else {
        cell.className = "cw-cell empty";
      }
      grid.appendChild(cell);
    }
  }
  updateProgress();
}

function renderCwClues() {
  const across = document.getElementById("cwCluesAcross");
  const down = document.getElementById("cwCluesDown");
  across.innerHTML = "";
  down.innerHTML = "";

  const sorted = Object.entries(CW_WORDS).sort(
    (a, b) => parseInt(a[0]) - parseInt(b[0]),
  );
  sorted.forEach(([num, info]) => {
    const div = document.createElement("div");
    div.className = "cw-clue-item";
    div.id = `clue-${num}`;
    div.innerHTML = `<span class="cw-clue-num">${num}.</span><span class="cw-clue-text">${info.clue}</span>`;
    div.onclick = () => focusWord(num);
    if (info.dir === "H") across.appendChild(div);
    else down.appendChild(div);
  });

  document.getElementById("cwTotal").textContent = sorted.length;
}

function onCwInput(e) {
  const r = parseInt(e.target.dataset.r);
  const c = parseInt(e.target.dataset.c);
  const val = e.target.value.toUpperCase().slice(-1);
  const total = Object.keys(CW_WORDS).length;
  let solved = 0;
  e.target.value = val;
  e.target.classList.remove("correct-text", "wrong-text");
  e.target.closest(".cw-cell").classList.remove("correct", "wrong");

  if (val) {
    cwUserInput[`${r},${c}`] = val;
    const correct = cwGrid[r][c];

    if (val === correct) {
      e.target.classList.add("correct-text");
      e.target.closest(".cw-cell").classList.add("correct");
      e.target.readOnly = true;
    } else {
      e.target.classList.add("wrong-text");
      e.target.closest(".cw-cell").classList.add("wrong");

      setTimeout(() => {
        e.target.value = "";
        e.target.classList.remove("wrong-text");
        e.target.closest(".cw-cell").classList.remove("wrong");
        delete cwUserInput[`${r},${c}`];
      }, 600);
    }
    moveToNext(r, c);
  } else {
    delete cwUserInput[`${r},${c}`];
  }
  Object.entries(CW_WORDS).forEach(([num, info]) => {
    const { word, r, c, dir } = info;
    let ok = true;
    for (let i = 0; i < word.length; i++) {
      const pr = dir === "H" ? r : r + i;
      const pc = dir === "H" ? c + i : c;
      if ((cwUserInput[`${pr},${pc}`] || "").toUpperCase() !== word[i]) {
        ok = false;
        break;
      }
    }
    if (ok) solved++;
  });

  if (solved === total) {
    setTimeout(() => {
      document.getElementById("cwWin").classList.add("show");
      launchFireworks();
    }, 400);
  }
  updateProgress();
}

function onCwKeydown(e) {
  const r = parseInt(e.target.dataset.r);
  const c = parseInt(e.target.dataset.c);
  if (e.key === "Backspace") {
    if (e.target.readOnly) return;
    if (!e.target.value) moveToPrev(r, c);
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    focusCell(r, c + 1);
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    focusCell(r, c - 1);
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    focusCell(r + 1, c);
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    focusCell(r - 1, c);
  }
}

function onCwFocus(e) {
  document
    .querySelectorAll(".cw-cell")
    .forEach((c) => c.classList.remove("active"));
  e.target.closest(".cw-cell").classList.add("active");
}

function moveToNext(r, c) {
  if (focusCell(r, c + 1)) return;
  focusCell(r + 1, c);
}

function moveToPrev(r, c) {
  if (focusCell(r, c - 1)) return;
  focusCell(r - 1, c);
}

function focusCell(r, c) {
  const inp = document.querySelector(`input[data-r="${r}"][data-c="${c}"]`);
  if (inp) {
    inp.focus();
    return true;
  }
  return false;
}

function focusWord(num) {
  const info = CW_WORDS[num];
  const inp = document.querySelector(
    `input[data-r="${info.r}"][data-c="${info.c}"]`,
  );
  if (inp) inp.focus();

  document
    .querySelectorAll(".cw-clue-item")
    .forEach((i) => i.classList.remove("active"));
  const clue = document.getElementById(`clue-${num}`);
  if (clue) clue.classList.add("active");
}

function checkAllAnswers() {
  let allCorrect = true;
  cwSolvedWords.clear();

  Object.entries(CW_WORDS).forEach(([num, info]) => {
    const { word, r, c, dir } = info;
    let wordCorrect = true;

    for (let i = 0; i < word.length; i++) {
      const pr = dir === "H" ? r : r + i;
      const pc = dir === "H" ? c + i : c;
      const inp = document.querySelector(
        `input[data-r="${pr}"][data-c="${pc}"]`,
      );
      if (!inp) continue;

      const userVal = (cwUserInput[`${pr},${pc}`] || "").toUpperCase();
      const correct = word[i].toUpperCase();

      inp.classList.remove("correct-text", "wrong-text");
      inp.closest(".cw-cell").classList.remove("correct", "wrong");

      if (userVal === correct) {
        inp.classList.add("correct-text");
        inp.closest(".cw-cell").classList.add("correct");
      } else {
        inp.classList.add("wrong-text");
        inp.closest(".cw-cell").classList.add("wrong");
        wordCorrect = false;
        allCorrect = false;
      }
    }

    if (wordCorrect) {
      cwSolvedWords.add(parseInt(num));
      const clueText = document.querySelector(`#clue-${num} .cw-clue-text`);
      if (clueText) clueText.classList.add("solved");
    }
  });

  updateProgress();
  if (allCorrect) {
    setTimeout(() => {
      document.getElementById("cwWin").classList.add("show");
      launchFireworks();
    }, 600);
  }
}

function updateProgress() {
  const total = Object.keys(CW_WORDS).length;

  let solved = 0;
  Object.entries(CW_WORDS).forEach(([num, info]) => {
    const { word, r, c, dir } = info;
    let ok = true;
    for (let i = 0; i < word.length; i++) {
      const pr = dir === "H" ? r : r + i;
      const pc = dir === "H" ? c + i : c;
      if ((cwUserInput[`${pr},${pc}`] || "").toUpperCase() !== word[i]) {
        ok = false;
        break;
      }
    }
    if (ok) solved++;
  });
  document.getElementById("cwSolved").textContent = solved;
  document.getElementById("cwTotal").textContent = total;
}

function openPuzzle() {
  renderCwGrid();
  renderCwClues();
  document.getElementById("crosswordModal").classList.add("show");
  document.getElementById("cwWin").classList.remove("show");

  setTimeout(() => {
    const gridArea = document.querySelector(".cw-grid-area");
    if (gridArea) gridArea.scrollTop = 0;
  }, 100);
}

function closePuzzle() {
  document.getElementById("crosswordModal").classList.remove("show");
}

function launchFireworks() {
  const canvas = document.getElementById("cwFireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  const particles = [];
  const colors = [
    "#f9a8d4",
    "#c4b5fd",
    "#93c5fd",
    "#fde68a",
    "#bbf7d0",
    "#fb923c",
    "#c9705a",
    "#fff",
  ];

  function createBurst(x, y) {
    for (let i = 0; i < 80; i++) {
      const angle = ((Math.PI * 2) / 80) * i;
      const speed = 2 + Math.random() * 4;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 3,
        decay: 0.012 + Math.random() * 0.008,
        gravity: 0.08,
      });
    }
  }

  let shootCount = 0;
  const shootInterval = setInterval(() => {
    const x = 100 + Math.random() * (window.innerWidth - 200);
    const y = 80 + Math.random() * (window.innerHeight * 0.5);
    createBurst(x, y);
    shootCount++;
    if (shootCount >= 8) clearInterval(shootInterval);
  }, 400);

  function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (particles.length > 0 || shootCount < 8) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        canvas.style.opacity = "0";
        canvas.style.transition = "opacity 1s ease";
        setTimeout(() => {
          canvas.style.display = "none";
          canvas.style.opacity = "1";
          canvas.style.transition = "";
        }, 1000);
      }, 500);
    }
  }

  animate();
}

const container = document.getElementById("particles");
const leftEl = document.getElementById("loveLeft");

for (let i = 0; i < 30; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  const size = 1.5 + Math.random() * 2.5;
  p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${10 + Math.random() * 80}%;
      top: ${20 + Math.random() * 70}%;
      animation-duration: ${3 + Math.random() * 4}s;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0;
    `;
  container.appendChild(p);
}

document.addEventListener(
  "click",
  function startMusic() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.4;
    music.play().catch(() => {});

    document.removeEventListener("click", startMusic);
  },
  { once: true },
);

function openGiftMessage() {
  const el = document.getElementById("giftBackdrop");
  el.style.display = "flex";
  setTimeout(() => (el.style.opacity = "1"), 10);
}

function closeGiftMessage() {
  document.getElementById("giftBackdrop").style.display = "none";
}

function openBucketList() {
  const el = document.getElementById("bucketBackdrop");
  el.style.display = "flex";
  setTimeout(() => (el.style.opacity = "1"), 10);
  updateBucketProgress();
}

function closeBucketList() {
  const el = document.getElementById("bucketBackdrop");
  el.style.opacity = "0";
  setTimeout(() => (el.style.display = "none"), 300);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".bucket-item").forEach((item) => {
    item.addEventListener("click", () => {
      const done = item.dataset.done === "true";
      item.dataset.done = done ? "false" : "true";
      item.querySelector(".bucket-check").textContent = done ? "☐" : "☑";
      updateBucketProgress();
    });
  });
});

function updateBucketProgress() {
  const items = document.querySelectorAll(".bucket-item");
  const done = document.querySelectorAll(
    '.bucket-item[data-done="true"]',
  ).length;
  const total = items.length;
  document.getElementById("bucketProgress").textContent =
    `${done} / ${total} tercapai`;
  document.getElementById("bucketBar").style.width = `${(done / total) * 100}%`;
}

(function () {
  const canvas = document.getElementById("heartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const wrap = document.getElementById("hbSection");
  const textEl = document.getElementById("hbText");

  let W, H, cx, cy, R;
  let heartStars = [],
    bursts = [],
    rockets = [];
  let drawProgress = 0;
  let heartComplete = false;
  let animating = false;
  let rafId = null;
  let timers = [];

  const starColors = [
    "#ff6b9d",
    "#ff9a3c",
    "#ffd93d",
    "#6bcb77",
    "#4d96ff",
    "#c77dff",
    "#ff4d6d",
    "#ffb3c6",
    "#fff",
  ];

  function resize() {
    W = canvas.width = wrap.clientWidth;
    H = canvas.height = wrap.clientHeight;
    cx = W / 2;
    cy = H / 2;
    R = Math.min(W, H) * 0.026;
  }

  function heartPoint(t) {
    return {
      x: cx + 16 * Math.pow(Math.sin(t), 3) * R,
      y:
        cy -
        (13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t)) *
          R,
    };
  }

  function makeHeartPts(n) {
    const pts = [];
    for (let i = 0; i < n; i++) pts.push(heartPoint((i / n) * Math.PI * 2));
    return pts;
  }

  function drawStar(x, y, size, color, alpha, rot) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? size : size * 0.4;
      const a = (i * Math.PI) / 5;
      i === 0
        ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r)
        : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function addRocket() {
    rockets.push({
      x: W * 0.1 + Math.random() * (W * 0.8),
      y: H + 10,
      vy: -(8 + Math.random() * 6),
      targetY: H * 0.1 + Math.random() * (H * 0.5),
      color: starColors[Math.floor(Math.random() * starColors.length)],
      trail: [],
    });
  }

  function addBurst(x, y) {
    const count = 80 + Math.floor(Math.random() * 40);
    const c1 = starColors[Math.floor(Math.random() * starColors.length)];
    const c2 = starColors[Math.floor(Math.random() * starColors.length)];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
      const speed = 2 + Math.random() * 5;
      bursts.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: Math.random() > 0.5 ? c1 : c2,
        size: 1.5 + Math.random() * 2.5,
        decay: 0.012 + Math.random() * 0.01,
        gravity: 0.05 + Math.random() * 0.05,
        rot: Math.random() * Math.PI * 2,
      });
    }
  }

  function addHeartSpark() {
    const pts = makeHeartPts(100);
    const p = pts[Math.floor(Math.random() * pts.length)];
    for (let i = 0; i < 5; i++) {
      bursts.push({
        x: p.x,
        y: p.y,
        vx: (Math.random() - 0.5) * 2,
        vy: -1 - Math.random() * 2,
        alpha: 1,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        size: 1 + Math.random() * 2,
        decay: 0.02 + Math.random() * 0.015,
        gravity: 0.04,
        rot: Math.random() * Math.PI * 2,
      });
    }
  }

  const TOTAL = 80;
  const SPEED = 0.7;

  window.startAnim = function () {
    if (rafId) cancelAnimationFrame(rafId);
    timers.forEach((t) => clearInterval(t));
    timers = [];
    heartStars = [];
    bursts = [];
    rockets = [];
    drawProgress = 0;
    heartComplete = false;
    animating = true;
    textEl.classList.remove("show");
    resize();

    const ri = setInterval(addRocket, 600);
    timers.push(ri);

    animate();
  };

  function animate() {
    ctx.fillStyle = "rgba(5,5,16,0.18)";
    ctx.fillRect(0, 0, W, H);

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 12) r.trail.shift();
      r.trail.forEach((p, idx) => {
        ctx.save();
        ctx.globalAlpha = (idx / r.trail.length) * 0.6;
        ctx.fillStyle = r.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      r.x += (Math.random() - 0.5) * 0.5;
      r.y += r.vy;
      if (r.y <= r.targetY) {
        addBurst(r.x, r.y);
        rockets.splice(i, 1);
      }
    }

    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      b.x += b.vx;
      b.y += b.vy;
      b.vy += b.gravity;
      b.vx *= 0.98;
      b.alpha -= b.decay;
      b.rot += 0.05;
      if (b.alpha <= 0) {
        bursts.splice(i, 1);
        continue;
      }
      drawStar(b.x, b.y, b.size, b.color, b.alpha, b.rot);
    }

    if (drawProgress < TOTAL) {
      drawProgress += SPEED;
      while (heartStars.length < Math.floor(drawProgress)) {
        const pts = makeHeartPts(TOTAL);
        const p = pts[heartStars.length];
        heartStars.push({
          x: p.x,
          y: p.y,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          size: 4 + Math.random() * 4,
          rot: Math.random() * Math.PI * 2,
          pulse: Math.random() * Math.PI * 2,
        });
        for (let k = 0; k < 3; k++) {
          bursts.push({
            x: p.x,
            y: p.y,
            vx: (Math.random() - 0.5) * 3,
            vy: -1 - Math.random() * 2,
            alpha: 0.8,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            size: 1.5,
            decay: 0.03,
            gravity: 0.05,
            rot: 0,
          });
        }
      }
    } else if (!heartComplete) {
      heartComplete = true;
      textEl.classList.add("show");
      const si = setInterval(addHeartSpark, 150);
      timers.push(si);
    }

    heartStars.forEach((s) => {
      s.pulse += 0.05;
      s.rot += 0.02;
      const pulse = 0.85 + 0.15 * Math.sin(s.pulse);
      drawStar(s.x, s.y, s.size * pulse, s.color, 1, s.rot);
    });

    rafId = requestAnimationFrame(animate);
  }

  resize();
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !animating) startAnim();
      });
    },
    { threshold: 0.3 },
  );
  obs.observe(wrap);

  window.addEventListener("resize", resize);
})();
