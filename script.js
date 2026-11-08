/* ===== 1. TEXT IN THREE LANGUAGES (edit the words here) ===== */
const T = {
  en: {
    role: ["Multilingual Speaker", "English Language Learner", "Aspiring Front-End Developer"],
    nHome: "Home", nAbout: "About", nJourney: "Journey", nSkills: "Skills", nProjects: "Projects", nContact: "Contact",
    intro: "I love languages and I’m learning to build websites with HTML, CSS, and JavaScript.",
    cta1: "See my projects", cta2: "Contact me",
    aT: "About Me",
    a1: "Hello! I’m Sima Safi, a multilingual speaker and an enthusiastic learner with a strong interest in languages and technology.",
    a2: "I have spent two years developing my English skills, focusing on reading, writing, listening, and speaking. I speak Pashto as my native language, Dari fluently, and English at an upper-intermediate level.",
    a3: "Alongside language learning, I have been exploring web development and building my technical skills in HTML, CSS, and JavaScript.",
    a4: "I believe in continuous learning, personal growth, and challenging myself to discover new possibilities. My goal is to expand my knowledge, strengthen my abilities, and turn my ideas into meaningful digital experiences.",
    jT: "My Journey", j1: "English Learning", j1d: "Two years of reading, writing, listening, and speaking.",
    j2d: "Learning the structure of web pages.", j3d: "Learning styling, layouts, colors, and responsive design.", j4d: "Learning programming basics and interactive web development.",
    lT: "Languages", lP: "Pashto", lD: "Dari", lE: "English", native: "Native", fluent: "Fluent", upper: "Upper-Intermediate",
    sT: "Technical Skills", sh: "Building the structure of web pages.", sc: "Styling pages with colors, layouts, and responsive design.", sj: "Adding interaction and logic to web pages.",
    pT: "Projects", pt1: "PowerPoint Project (PowerPoint Presentation)", pt2: "HTML/CSS Project (Personal Website Design)", pd1: "A creative presentation designed with Microsoft PowerPoint, featuring organized slides, attractive layouts, and clear visual communication.", view: "View Project",
    cT: "Contact", fn: "Full Name", em: "Email Address", ms: "Message", send: "Send Message",
    pT: "Projects", pt1: "PowerPoint Project (PowerPoint Presentation)", pt2: "HTML/CSS Project (Personal Website Design)", pd2: "A front-end web development project built with HTML and CSS, focusing on clean structure, modern styling, and responsive design.", view: "View Project",
    cT: "Contact", fn: "Full Name", em: "Email Address", ms: "Message", send: "Send Message",
    err: "Please fill in all fields with a valid email.", ok: "Form checked! An email service must be connected to really send it.",
    quote: "“Every day I learn something new.”", rights: "All rights reserved."
  },
  fa: {
    role: ["سخنگوی چندزبانه", "یادگیرندهٔ زبان انگلیسی", "علاقه‌مند به توسعهٔ فرانت‌اند"],
    nHome: "خانه", nAbout: "دربارهٔ من", nJourney: "مسیر", nSkills: "مهارت‌ها", nProjects: "پروژه‌ها", nContact: "تماس",
    intro: "زبان‌ها را دوست دارم و ساخت وب‌سایت را با HTML، CSS و JavaScript یاد می‌گیرم.",
    cta1: "پروژه‌های من", cta2: "با من تماس بگیرید",
    aT: "دربارهٔ من",
    a1: "سلام! من سیما صافی هستم، سخنگوی چندزبانه و یادگیرنده‌ای مشتاق که به زبان‌ها و فناوری علاقهٔ زیادی دارم.",
    a2: "دو سال را صرف بهتر ساختن مهارت‌های زبان انگلیسی خود کرده‌ام و روی خواندن، نوشتن، شنیدن و صحبت کردن تمرکز داشته‌ام. زبان مادری‌ام پشتو است، دری را روان صحبت می‌کنم و انگلیسی را در سطح بالاتر از متوسط می‌دانم.",
    a3: "در کنار یادگیری زبان، به کشف توسعهٔ وب پرداخته‌ام و مهارت‌های فنی‌ام را در HTML، CSS و JavaScript پرورش می‌دهم.",
    a4: "من به یادگیری مداوم، رشد شخصی و به چالش کشیدن خودم برای کشف امکانات تازه باور دارم. هدفم گسترش دانش، تقویت توانایی‌هایم و تبدیل ایده‌هایم به تجربه‌های دیجیتال معنادار است.",
    jT: "مسیر یادگیری من", j1: "یادگیری انگلیسی", j1d: "دو سال خواندن، نوشتن، شنیدن و صحبت کردن.",
    j2d: "یادگیری ساختار صفحه‌های وب.", j3d: "یادگیری ظاهر، چیدمان، رنگ‌ها و طراحی واکنش‌گرا.", j4d: "یادگیری مبانی برنامه‌نویسی و ساخت صفحه‌های تعاملی.",
    lT: "زبان‌ها", lP: "پشتو", lD: "دری", lE: "انگلیسی", native: "زبان مادری", fluent: "روان", upper: "بالاتر از متوسط",
    sT: "مهارت‌های فنی", sh: "ساختن ساختار صفحه‌های وب.", sc: "زیباسازی صفحه‌ها با رنگ، چیدمان و طراحی واکنش‌گرا.", sj: "افزودن تعامل و منطق به صفحه‌های وب.",
    pT: "پروژه‌ها", pt1: "پروژهٔ پاورپوینت (ارائه پاورپوینت)", pt2: "پروژهٔ HTML/CSS (طراحی وب‌سایت شخصی", pd1: "یک ارائه خلاقانه که با استفاده از مایکروسافت پاورپوینت طراحی شده و شامل اسلایدهای منظم، طرح‌بندی‌های جذاب و انتقال واضح مفاهیم است.", view: "دیدن پروژه",
    cT: "تماس", fn: "نام کامل", em: "ایمیل", ms: "پیام", send: "ارسال پیام",
    pT: "پروژه‌ها", pt1: "پروژهٔ پاورپوینت (ارائه پاورپوینت)", pt2: "پروژهٔ HTML/CSS (طراحی وب‌سایت شخصی)", pd2: "یک پروژه توسعه وب در بخش فرانت‌اند که با استفاده از HTML و CSS ساخته شده و بر ساختار منظم، طراحی مدرن و سازگاری با اندازه‌های مختلف صفحه‌نمایش تمرکز دارد", view: "دیدن پروژه",
    cT: "تماس", fn: "نام کامل", em: "ایمیل", ms: "پیام", send: "ارسال پیام",
    err: "لطفاً همهٔ بخش‌ها را با یک ایمیل درست پر کنید.", ok: "فرم بررسی شد! برای ارسال واقعی باید یک سرویس ایمیل وصل شود.",
    quote: "«هر روز چیز تازه‌ای یاد می‌گیرم.»", rights: "همهٔ حقوق محفوظ است."
  },
  ps: {
    role: ["څو‌ژبې وینا‌کوونکې", "د انګلیسي ژبې زده‌کوونکې", "د فرنټ‌انډ پراختیا لیوالې"],
    nHome: "کور", nAbout: "زما په اړه", nJourney: "لاره", nSkills: "مهارتونه", nProjects: "پروژې", nContact: "اړیکه",
    intro: "زه ژبې خوښوم او د HTML، CSS او JavaScript په مټ د ویب‌پاڼو جوړول زده کوم.",
    cta1: "زما پروژې", cta2: "له ما سره اړیکه ونیسئ",
    aT: "زما په اړه",
    a1: "سلام! زه سیما صافي یم، یوه څو‌ژبې وینا‌کوونکې او لیواله زده‌کوونکې چې ژبو او ټیکنالوژۍ ته ډیره علاقه لرم.",
    a2: "ما دوه کاله د خپلو انګلیسي مهارتونو په ښه کولو تیر کړل او په لوستلو، لیکلو، اورېدلو او خبرو کولو مې تمرکز کړی دی. زما مورنۍ ژبه پښتو ده، دري په روانۍ وایم او انګلیسي د منځنۍ څخه پورته کچه پوهېږم.",
    a3: "د ژبو زده کړې ترڅنګ، ما د ویب پراختیا ګوته نیولې او په HTML، CSS او JavaScript کې خپل تخنیکي مهارتونه جوړوم.",
    a4: "زه په دوامداره زده کړه، شخصي ودې او نویو امکاناتو موندلو لپاره د ځان ننګولو باور لرم. زما موخه د پوهې پراخول، وړتیاوو ځواکمنول او خپلو نظرونو ته معنا لرونکې ډیجیټل بڼه ورکول دي.",
    jT: "زما د زده‌کړې لاره", j1: "انګلیسي زده کړه", j1d: "دوه کاله لوستل، لیکل، اورېدل او خبرې کول.",
    j2d: "د ویب پاڼو جوړښت زده کول.", j3d: "ډیزاین، ترتیب، رنګونه او غبرګوونکی ډیزاین زده کول.", j4d: "د پروګرامنګ بنسټونه او متقابلې پاڼې جوړول زده کول.",
    lT: "ژبې", lP: "پښتو", lD: "دري", lE: "انګلیسي", native: "مورنۍ ژبه", fluent: "روانه", upper: "د منځنۍ څخه پورته",
    sT: "تخنیکي مهارتونه", sh: "د ویب پاڼو جوړښت جوړول.", sc: "پاڼې په رنګونو، ترتیب او غبرګوونکي ډیزاین ښکلې کول.", sj: "ویب پاڼو ته متقابل عمل او منطق ورکول.",
    pT: "پروژې", pt1: "د پاورپوینټ پروژه (د پاورپواینټ پریزنټېشن)", pt2: "د HTML/CSS پروژه (د شخصي وېب‌پاڼې ډیزاین)", pd1: "یوه نوښتګره پریزنټېشن چې د مایکروسافټ پاورپواینټ په وسیله ډیزاین شوې، منظم سلایډونه، ښکلي ډیزاینونه او د مفاهیمو روښانه وړاندې کول لري.", view: "پروژه وګورئ",
    cT: "اړیکه", fn: "بشپړ نوم", em: "بریښنالیک", ms: "پیغام", send: "پیغام ولیږئ",
    pT: "پروژې", pt1: "د پاورپوینټ پروژه (د پاورپواینټ پریزنټېشن)", pt2: "د HTML/CSS پروژه (د شخصي وېب‌پاڼې ډیزاین)", pd2:"د وېب‌پاڼې د فرانت‌اېنډ یوه پروژه چې د HTML او CSS په وسیله جوړه شوې او پر منظم جوړښت، عصري ډیزاین او د بېلابېلو سکرینونو سره پر مطابقت تمرکز کوي.", view: "پروژه وګورئ",
    cT: "اړیکه", fn: "بشپړ نوم", em: "بریښنالیک", ms: "پیغام", send: "پیغام ولیږئ",
    err: "مهرباني وکړئ ټولې برخې په سم بریښنالیک ډکې کړئ.", ok: "فورم وکتل شو! د ریښتینې لیږلو لپاره باید د بریښنالیک خدمت وصل شي.",
    quote: "«هره ورځ یو نوی شی زده کوم.»", rights: "ټول حقونه خوندي دي."
  }
};

/* ===== 2. YOUR PROJECTS (add, remove, or edit items) =====
   Use titleKey/descKey for the translated placeholders, or write plain
   title/desc text for a real project. img: "images/shot.png" or "". */
const projects = [
  { titleKey: "pt1", descKey: "pd1", tech: ["PowerPoint"], img: "PP.jpeg", link: "#" },
  { titleKey: "pt2", descKey: "pd2", tech: ["HTML", "CSS"], img: "dd.png", link: "#" }
];

/* ===== 3. SETUP ===== */
const root = document.documentElement;
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
let lang = "en";

// Seamless marquee: repeat the nav items 3 more times
const track = $("track"), items = [...track.children];
for (let i = 0; i < 3; i++) items.forEach(li => { const c = li.cloneNode(true); c.setAttribute("aria-hidden", "true"); c.querySelector("a").tabIndex = -1; track.appendChild(c); });

function renderProjects() {
  const d = T[lang];
  $("projectGrid").innerHTML = projects.map(p => `
    <article class="glass tilt">
      <div class="thumb">${p.img ? `<img src="${p.img}" alt="">` : "Preview"}</div>
      <h3>${p.titleKey ? d[p.titleKey] : p.title}</h3>
      <p>${p.descKey ? d[p.descKey] : p.desc}</p>
      ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
      <a class="btn ghost" href="${p.link}">${d.view}</a>
    </article>`).join("");
}

/* ===== 4. LANGUAGE (switches text and left/right direction) ===== */
function setLang(l) {
  lang = l;
  root.lang = l; root.dir = l === "en" ? "ltr" : "rtl";
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = T[l][e.dataset.i18n]);
  $("lang").value = l; save("lang", l);
  renderProjects(); restartTyping();
}
$("lang").addEventListener("change", e => setLang(e.target.value));

/* ===== 5. TYPING ANIMATION ===== */
let ri = 0, ci = 0, del = false, timer;
function type() {
  const w = T[lang].role[ri];
  $("typed").textContent = w.slice(0, ci);
  if (!del && ci === w.length) { del = true; timer = setTimeout(type, 1500); return; }
  if (del && ci === 0) { del = false; ri = (ri + 1) % T[lang].role.length; }
  ci += del ? -1 : 1;
  timer = setTimeout(type, del ? 40 : 90);
}
function restartTyping() {
  clearTimeout(timer); ri = 0; ci = 0; del = false;
  if (calm) $("typed").textContent = T[lang].role[0]; else type();
}

/* ===== 6. THEME (remembered with localStorage) ===== */
let dot = "108,184,255";
function setTheme(t) {
  root.dataset.theme = t; save("theme", t);
  dot = t === "light" ? "29,111,214" : "108,184,255";
}
$("theme").addEventListener("click", () => setTheme(root.dataset.theme === "light" ? "dark" : "light"));

/* ===== 7. FLOATING PARTICLES ===== */
const cv = $("particles"), cx = cv.getContext("2d");
let W, H, P = [];
function resize() {
  W = cv.width = innerWidth; H = cv.height = innerHeight;
  P = Array.from({ length: Math.min(45, Math.floor(W / 28)) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + .6, v: Math.random() * .35 + .1 }));
}
function draw() {
  cx.clearRect(0, 0, W, H);
  P.forEach(p => {
    p.y -= p.v; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
    cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fillStyle = `rgba(${dot},.6)`; cx.fill();
  });
  if (!calm) requestAnimationFrame(draw);
}
addEventListener("resize", resize);

/* ===== 8. SCROLL EFFECTS ===== */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
let tick = false;
addEventListener("scroll", () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    $("toTop").classList.toggle("show", scrollY > 500);
    if (!calm) document.querySelectorAll(".orb").forEach(o => o.style.transform = `translateY(${scrollY * o.dataset.speed}px)`);
    tick = false;
  });
}, { passive: true });

/* ===== 9. 3D TILT ON CARDS ===== */
document.addEventListener("mousemove", e => {
  if (calm) return;
  const c = e.target.closest(".tilt"); if (!c) return;
  const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  c.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
});
document.addEventListener("mouseout", e => {
  const c = e.target.closest(".tilt");
  if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
});

/* ===== 10. CONTACT FORM CHECK =====
   This only CHECKS the form. To really send emails, connect a service
   such as Formspree or EmailJS (see the steps I gave you in the chat). */
$("form").addEventListener("submit", e => {
  e.preventDefault();
  const good = $("fname").value.trim() && /^\S+@\S+\.\S+$/.test($("femail").value.trim()) && $("fmsg").value.trim();
  $("status").textContent = good ? T[lang].ok : T[lang].err;
  if (good) e.target.reset();
});

/* ===== 11. START ===== */
$("year").textContent = new Date().getFullYear();
setTheme(load("theme") === "light" ? "light" : "dark");
const saved = load("lang"); setLang(T[saved] ? saved : "en");
resize(); draw();
addEventListener("load", () => setTimeout(() => $("loader").classList.add("hide"), 1300));

const skills = [
    ["English", 70],
    ["HTML", 85],
    ["CSS", 80],
    ["JavaScript", 65],
    ["Microsoft Word", 90],
    ["PowerPoint", 90],
    ["Excel", 80]
];

const list = document.getElementById("skillList");

skills.forEach(([name, percentage]) => {
    list.insertAdjacentHTML("beforeend", `
        <div class="skill">
            <div>
                <span>${name}</span>
                <span>${percentage}%</span>
            </div>

            <div class="bar">
                <i data-width="${percentage}%"></i>
            </div>
        </div>
    `);
});

requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.querySelectorAll("#skillList .bar i").forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    });
});