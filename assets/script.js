/* ==========================================================================
   DEEPAK PRASAD VERMA — INTERACTIVE PORTFOLIO ENGINE
   ========================================================================== */

// 1. Project Deep-Dive Data for Architecture Inspector Modal
const PROJECTS_DATA = {
  oshn: {
    title: "OSHN BLRREALTOR — Luxury Real Estate Platform",
    subtitle: "Full-Stack MERN Application • Deployed on Vercel & Render",
    category: "Full-Stack MERN",
    liveUrl: "https://oshn-blr-realtor.vercel.app",
    backendUrl: "https://oshn-blr-realtor.onrender.com",
    repoUrl: "https://github.com/deepakprasadverma/oshn-blr-realtor",
    status: "Production Live",
    description:
      "A comprehensive full-stack real estate platform engineered for discovering luxury apartments, premium villas, and RERA-approved investment plots across Bengaluru. Built with React 19, Vite, and Tailwind CSS v4 on the frontend, paired with a dedicated Node.js + Express 5 + MongoDB backend hosted on Render.",
    architecture: [
      "Frontend SPA built with React 19, React Router v7, and Tailwind CSS v4 deployed on Vercel with custom SPA routing rules.",
      "Dedicated Admin Dashboard (/src/admin) and Context API state management for dynamic property listings and inquiries.",
      "RESTful Backend powered by Node.js, Express 5, and Mongoose ORM connected to MongoDB Atlas.",
      "Includes real-time MongoDB diagnostic health monitoring (/system-stats) and automated Render.com deployment via render.yaml."
    ],
    techStack: ["React 19", "Vite 8", "Tailwind CSS v4", "Node.js", "Express 5", "MongoDB", "Mongoose", "React Router v7", "Vercel", "Render"]
  },
  fitness: {
    title: "Verma Brothers Fitness — AI-Powered Gym Platform",
    subtitle: "Interactive Client Web App + Virtual AI Workout Coach",
    category: "Frontend & AI UX",
    liveUrl: "https://verma-brothers-fitness.vercel.app",
    repoUrl: "https://github.com/deepakprasadverma/verma_-brothers-fitness",
    status: "Production Live",
    description:
      "A high-converting, modern web platform built for Hazaribagh's premier fitness center. Features an interactive Virtual AI Workout Coach that dynamically generates personalized daily training splits based on user goals (Weight Loss, Muscle Hypertrophy, Powerlifting, Endurance) and experience levels.",
    architecture: [
      "Interactive AI Workout Coach engine that computes tailored exercise routines, sets, reps, and rest intervals on the client.",
      "Responsive dark-themed athletic UI built with Tailwind CSS, Oswald & Poppins typography, and smooth scroll navigation.",
      "Automated CI/CD deployment pipeline using GitHub Actions (static.yml) and Vercel edge hosting.",
      "Includes membership tier comparisons, facility showcases (CrossFit zone, imported bio-mechanical machines), and lead capture."
    ],
    techStack: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)", "AI Coach Engine", "FontAwesome", "GitHub Actions CI/CD", "Vercel"]
  },
  tracker: {
    title: "Hybrid GPS & IP Geolocation Tracker",
    subtitle: "Hardware Serial NMEA Stream Parser + Interactive Folium GIS Mapper",
    category: "Python & IoT",
    liveUrl: "https://github.com/deepakprasadverma/location-tracker",
    repoUrl: "https://github.com/deepakprasadverma/location-tracker",
    status: "Open Source Utility",
    description:
      "A dual-mode geolocation tracking system written in Python that interfaces directly with physical GPS hardware receivers over serial ports (COM3 / /dev/ttyUSB0) and seamlessly falls back to IP-based geolocation when hardware is unavailable.",
    architecture: [
      "Hardware GPS Mode: Connects via PySerial at 9600 baud and parses live $GPRMC and $GPGGA NMEA 0183 satellite sentences using PyNMEA2.",
      "Automatic Failover: Detects serial hardware availability and switches to REST IP-Geolocation (ip-api.com) with 10-second live polling.",
      "Interactive Map Generation: Uses Folium (Leaflet.js wrapper) to plot real-time coordinates, city/country popups, and markers into live_map.html.",
      "Cross-platform compatibility supporting both Windows COM ports and Linux/macOS ttyUSB interfaces."
    ],
    techStack: ["Python 3", "Folium (Leaflet GIS)", "PySerial", "PyNMEA2", "Requests", "REST API", "Hardware Interfacing"]
  },
  bawal: {
    title: "Bawal Mode — Dual-Canvas Matrix & Particle FX Engine",
    subtitle: "High-FPS Interactive Visual Synthesizer & Physics Particle System",
    category: "Creative Coding",
    liveUrl: "#bawal-demo",
    repoUrl: "https://github.com/deepakprasadverma/Bawal",
    status: "Interactive Canvas Demo",
    description:
      "An experimental creative-coding web application featuring a dual-layer HTML5 Canvas rendering pipeline. Combines a cyberpunk Matrix digital rain background with an interactive physics-driven particle explosion engine ('Auto Boom' & tap-to-detonate).",
    architecture: [
      "Layer 1 (#rain canvas): Renders continuous Devanagari + alphanumeric Matrix rain streams with alpha trail fade.",
      "Layer 2 (#fx canvas): Handles multi-particle radial burst physics, velocity decay, gravity, and neon HSL color cycling.",
      "Mobile-first safe-area-inset viewport adaptation with glassmorphic floating HUD controls.",
      "Click 'Launch Bawal FX' right here on this portfolio to experience the particle engine live!"
    ],
    techStack: ["HTML5 Canvas 2D", "Vanilla JavaScript", "Particle Physics", "RequestAnimationFrame", "CSS Glassmorphism"]
  }
};

// 2. Typewriter Role Switcher
const ROLES = [
  "Full-Stack MERN Developer",
  "IT Engineering Student @ UCET Hazaribagh",
  "React 19 & Node.js Web Architect",
  "Python & Geo-Tracking Builder",
  "Problem Solver & Tech Peer Mentor"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const currentRole = ROLES[roleIndex];
  if (isDeleting) {
    charIndex--;
    el.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    el.textContent = currentRole.substring(0, charIndex);
  }

  let speed = isDeleting ? 35 : 70;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % ROLES.length;
    speed = 350;
  }

  setTimeout(initTypewriter, speed);
}

// 3. Interactive Developer Terminal (dpv-shell)
const TERMINAL_COMMANDS = {
  help: () => `
<div class="space-y-1 text-slate-300">
  <div class="text-sky-400 font-semibold">Available Commands in dpv-shell v2.6:</div>
  <div><span class="text-emerald-400 font-bold w-24 inline-block">about</span>     → Who is Deepak Prasad Verma?</div>
  <div><span class="text-emerald-400 font-bold w-24 inline-block">skills</span>    → View full-stack & programming arsenal</div>
  <div><span class="text-emerald-400 font-bold w-24 inline-block">projects</span>  → List deployed apps & GitHub repositories</div>
  <div><span class="text-emerald-400 font-bold w-24 inline-block">education</span> → Academic credentials (UCET & Govt Polytechnic)</div>
  <div><span class="text-emerald-400 font-bold w-24 inline-block">audit</span>     → View LinkedIn Profile Review & Growth Score</div>
  <div><span class="text-emerald-400 font-bold w-24 inline-block">contact</span>   → Email, LinkedIn, GitHub & LeetCode links</div>
  <div><span class="text-pink-400 font-bold w-24 inline-block">bawal</span>     → Trigger Bawal Mode Fireworks FX! 🎆</div>
  <div><span class="text-amber-400 font-bold w-24 inline-block">clear</span>     → Clear terminal output</div>
</div>`,
  about: () => `
<div class="text-slate-300 space-y-1">
  <div><span class="text-sky-400 font-semibold">Name:</span> Deepak Prasad Verma (@deepakprasadverma)</div>
  <div><span class="text-sky-400 font-semibold">Role:</span> Full-Stack Web Developer & Information Technology Undergraduate</div>
  <div><span class="text-sky-400 font-semibold">Location:</span> Hazaribagh, Jharkhand, India 🇮🇳</div>
  <div><span class="text-sky-400 font-semibold">Focus:</span> Building production-grade MERN web apps, AI-assisted user experiences, and Python automation tools.</div>
</div>`,
  skills: () => `
<div class="text-slate-300 space-y-1">
  <div><span class="text-indigo-400 font-semibold">[Frontend]</span> React 19, Vite, JavaScript (ES6+), Tailwind CSS v4, HTML5, CSS3, Canvas 2D</div>
  <div><span class="text-emerald-400 font-semibold">[Backend]</span>  Node.js, Express 5, MongoDB, Mongoose, REST APIs, CORS</div>
  <div><span class="text-amber-400 font-semibold">[Core/IoT]</span> Python, Java, DSA, Folium GIS, PySerial, PyNMEA2 (GPS Hardware)</div>
  <div><span class="text-sky-400 font-semibold">[DevOps]</span>   Vercel, Render.com, GitHub Actions CI/CD, Git, GitHub Pages</div>
</div>`,
  projects: () => `
<div class="text-slate-300 space-y-1.5">
  <div>1. <a href="https://oshn-blr-realtor.vercel.app" target="_blank" class="text-sky-400 underline font-semibold">OSHN BLRREALTOR</a> — Full-Stack Luxury Real Estate Portal (React 19 + Node + MongoDB)</div>
  <div>2. <a href="https://verma-brothers-fitness.vercel.app" target="_blank" class="text-emerald-400 underline font-semibold">Verma Brothers Fitness</a> — Hazaribagh Gym Platform with Virtual AI Coach</div>
  <div>3. <a href="https://github.com/deepakprasadverma/location-tracker" target="_blank" class="text-amber-400 underline font-semibold">Hybrid Location Tracker</a> — Python Serial NMEA GPS + IP Folium Map Engine</div>
  <div>4. <a href="https://github.com/deepakprasadverma/Bawal" target="_blank" class="text-pink-400 underline font-semibold">Bawal Mode</a> — Dual-Canvas Matrix Rain & Particle FX Engine</div>
</div>`,
  education: () => `
<div class="text-slate-300 space-y-1.5">
  <div>🎓 <span class="text-white font-semibold">B.Tech in Information Technology</span> — University College of Engineering and Technology (UCET), Hazaribagh (Vinoba Bhave University)</div>
  <div>🏛️ <span class="text-white font-semibold">Diploma in Engineering</span> — Government Polytechnic, Dumka, Jharkhand</div>
</div>`,
  audit: () => {
    const auditSection = document.getElementById("linkedin-review");
    if (auditSection) auditSection.scrollIntoView({ behavior: "smooth" });
    return `<div class="text-emerald-400">✔ Scrolled to LinkedIn Profile Review & Optimization Roadmap section below! (Current Profile Score: 78/100 → Target: 98/100)</div>`;
  },
  contact: () => `
<div class="text-slate-300 space-y-1">
  <div>📧 <span class="text-sky-400">Email:</span> <a href="mailto:deepakprasadverma90@gmail.com" class="underline">deepakprasadverma90@gmail.com</a></div>
  <div>💼 <span class="text-sky-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/deepak-prasad-verma-872947250/" target="_blank" class="underline">linkedin.com/in/deepak-prasad-verma-872947250</a></div>
  <div>🐙 <span class="text-sky-400">GitHub:</span> <a href="https://github.com/deepakprasadverma" target="_blank" class="underline">github.com/deepakprasadverma</a></div>
  <div>🧩 <span class="text-sky-400">LeetCode:</span> <a href="https://leetcode.com/u/deepakprasadverma/" target="_blank" class="underline">leetcode.com/u/deepakprasadverma</a></div>
</div>`,
  bawal: () => {
    triggerBawalMode();
    return `<div class="text-pink-400 font-bold">💥 BAWAL MODE ACTIVATED! Launching cyberpunk fireworks across your screen...</div>`;
  }
};

function runTerminalCommand(rawCmd) {
  const output = document.getElementById("terminal-output");
  const input = document.getElementById("terminal-input");
  if (!output) return;

  const cmd = (rawCmd || "").trim().toLowerCase();
  if (!cmd) return;

  if (cmd === "clear") {
    output.innerHTML = `<div class="text-slate-400 text-xs">Terminal cleared. Type <span class="text-emerald-400">'help'</span> for available commands.</div>`;
    if (input) input.value = "";
    return;
  }

  const promptLine = document.createElement("div");
  promptLine.className = "mt-3";
  promptLine.innerHTML = `<span class="text-emerald-400 font-semibold">deepak@ucet-dev</span>:<span class="text-sky-400">~</span>$ <span class="text-white">${escapeHtml(cmd)}</span>`;
  output.appendChild(promptLine);

  const responseLine = document.createElement("div");
  responseLine.className = "mt-1 pl-2 border-l-2 border-slate-700/80";

  if (TERMINAL_COMMANDS[cmd]) {
    responseLine.innerHTML = TERMINAL_COMMANDS[cmd]();
  } else {
    responseLine.innerHTML = `<span class="text-rose-400">Command not found: '${escapeHtml(cmd)}'. Type <span class="text-emerald-400 underline cursor-pointer" onclick="runTerminalCommand('help')">help</span> for a list of commands.</span>`;
  }

  output.appendChild(responseLine);
  output.scrollTop = output.scrollHeight;
  if (input) input.value = "";
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[m]);
}

// 4. Project Filtering
function filterProjects(category, btnElement) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((b) => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const cats = (card.getAttribute("data-category") || "").split(" ");
    if (category === "all" || cats.includes(category)) {
      card.style.display = "flex";
      card.classList.add("animate-fadeIn");
    } else {
      card.style.display = "none";
    }
  });
}

// 5. Project Architecture Modal
function openProjectModal(projectId) {
  const data = PROJECTS_DATA[projectId];
  if (!data) return;

  const modal = document.getElementById("project-modal");
  const content = document.getElementById("project-modal-body");
  if (!modal || !content) return;

  const archList = data.architecture
    .map(
      (item) =>
        `<li class="flex items-start gap-2.5 text-slate-300 text-sm"><i class="fas fa-check-circle text-emerald-400 mt-1 shrink-0"></i><span>${item}</span></li>`
    )
    .join("");

  const techBadges = data.techStack
    .map(
      (t) =>
        `<span class="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/25">${t}</span>`
    )
    .join("");

  const liveButton =
    data.liveUrl === "#bawal-demo"
      ? `<button onclick="closeProjectModal(); triggerBawalMode();" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:opacity-95 transition flex items-center gap-2"><i class="fas fa-bolt"></i> Launch Bawal FX Live</button>`
      : `<a href="${data.liveUrl}" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition flex items-center gap-2"><i class="fas fa-external-link-alt"></i> Open Live Deployment</a>`;

  const backendButton = data.backendUrl
    ? `<a href="${data.backendUrl}" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold text-sm hover:bg-emerald-500/25 transition flex items-center gap-2"><i class="fas fa-server"></i> Render Backend API</a>`
    : "";

  content.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">${data.status}</span>
      <span class="text-xs font-mono-code text-slate-400">${data.category}</span>
    </div>
    <h3 class="text-2xl md:text-3xl font-bold text-white font-display mb-1">${data.title}</h3>
    <p class="text-sky-400 text-sm font-medium mb-4">${data.subtitle}</p>
    <p class="text-slate-300 text-sm leading-relaxed mb-6">${data.description}</p>

    <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 mb-6">
      <h4 class="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-3">System Architecture & Engineering Highlights</h4>
      <ul class="space-y-2.5">${archList}</ul>
    </div>

    <div class="mb-6">
      <h4 class="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2.5">Technologies & Cloud Stack</h4>
      <div class="flex flex-wrap gap-2">${techBadges}</div>
    </div>

    <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
      ${liveButton}
      ${backendButton}
      <a href="${data.repoUrl}" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition flex items-center gap-2">
        <i class="fab fa-github"></i> Source Code
      </a>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// 6. Bawal Mode Tribute — Interactive Fireworks & Matrix Burst Canvas Overlay
let bawalTimeout = null;
function triggerBawalMode() {
  const existing = document.getElementById("bawal-canvas-overlay");
  if (existing) existing.remove();

  const canvas = document.createElement("canvas");
  canvas.id = "bawal-canvas-overlay";
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff2fd4", "#38bdf8", "#10b981", "#fbbf24", "#818cf8", "#f43f5e"];

  function createBurst(x, y) {
    for (let i = 0; i < 65; i++) {
      const angle = (Math.PI * 2 * i) / 65 + (Math.random() - 0.5) * 0.2;
      const speed = 2 + Math.random() * 7.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 3.5
      });
    }
  }

  // Launch multiple celebratory bursts
  createBurst(canvas.width * 0.25, canvas.height * 0.35);
  createBurst(canvas.width * 0.75, canvas.height * 0.35);
  createBurst(canvas.width * 0.5, canvas.height * 0.25);
  setTimeout(() => createBurst(canvas.width * 0.35, canvas.height * 0.5), 400);
  setTimeout(() => createBurst(canvas.width * 0.65, canvas.height * 0.45), 750);

  showToast("💥 BAWAL MODE Activated! (Tribute to github.com/deepakprasadverma/Bawal)");

  let frameId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // gravity
      p.vx *= 0.985;
      p.alpha -= 0.014;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (particles.length > 0) {
      frameId = requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  animate();
  if (bawalTimeout) clearTimeout(bawalTimeout);
  bawalTimeout = setTimeout(() => {
    cancelAnimationFrame(frameId);
    canvas.remove();
  }, 4500);
}

// 7. Live GitHub Stats Sync
async function syncGitHubProfile() {
  try {
    const res = await fetch("https://api.github.com/users/deepakprasadverma");
    if (!res.ok) return;
    const data = await res.json();

    const repoEl = document.getElementById("gh-repos-count");
    const followersEl = document.getElementById("gh-followers-count");
    const followingEl = document.getElementById("gh-following-count");

    if (repoEl && typeof data.public_repos === "number") repoEl.textContent = data.public_repos;
    if (followersEl && typeof data.followers === "number") followersEl.textContent = data.followers;
    if (followingEl && typeof data.following === "number") followingEl.textContent = data.following;
  } catch (err) {
    // Silent fallback to pre-populated real stats
  }
}

// 8. Copy to Clipboard & Toast Notification
function copyText(text, label = "Copied to clipboard!") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(label));
  } else {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast(label);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0");
  }, 3400);
}

// 9. Dark / Light Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-toggle-icon");
  html.classList.toggle("light");

  const isLight = html.classList.contains("light");
  if (icon) {
    icon.className = isLight ? "fas fa-moon text-indigo-600" : "fas fa-sun text-amber-400";
  }
  localStorage.setItem("dpv-theme", isLight ? "light" : "dark");
}

// 10. Resume / CV Modal
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// 11. LinkedIn Audit Checklist Interactive Progress
function updateAuditScore() {
  const checkboxes = document.querySelectorAll(".audit-checkbox");
  const scoreEl = document.getElementById("audit-live-score");
  const barEl = document.getElementById("audit-score-bar");
  if (!checkboxes.length || !scoreEl || !barEl) return;

  let checkedCount = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) checkedCount++;
  });

  // Base score is 78, each checked item adds up to 100
  const bonus = Math.round((checkedCount / checkboxes.length) * 22);
  const total = Math.min(100, 78 + bonus);
  scoreEl.textContent = `${total}/100`;
  barEl.style.width = `${total}%`;
}

// 12. Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name")?.value.trim() || "Recruiter / Client";
  const email = document.getElementById("contact-email")?.value.trim() || "";
  const subject = document.getElementById("contact-subject")?.value.trim() || "Opportunity via Portfolio";
  const message = document.getElementById("contact-message")?.value.trim() || "";

  const mailtoBody = encodeURIComponent(
    `Hi Deepak,\n\n${message}\n\nBest regards,\n${name}\n${email}`
  );
  const mailtoUrl = `mailto:deepakprasadverma90@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

  showToast("Opening your email client to message Deepak...");
  window.location.href = mailtoUrl;
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  syncGitHubProfile();

  // Restore saved theme
  const savedTheme = localStorage.getItem("dpv-theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
    const icon = document.getElementById("theme-toggle-icon");
    if (icon) icon.className = "fas fa-moon text-indigo-600";
  }

  // Terminal Enter key listener
  const termInput = document.getElementById("terminal-input");
  if (termInput) {
    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        runTerminalCommand(termInput.value);
      }
    });
  }

  // Keyboard shortcut Ctrl+K or Cmd+K to focus terminal
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const termSection = document.getElementById("terminal-card");
      if (termSection) termSection.scrollIntoView({ behavior: "smooth", block: "center" });
      if (termInput) setTimeout(() => termInput.focus(), 350);
    }
    if (e.key === "Escape") {
      closeProjectModal();
      closeResumeModal();
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
