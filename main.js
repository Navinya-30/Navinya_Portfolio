// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (cursor) { cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; }
});
function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  if (follower) { follower.style.left = followerX + 'px'; follower.style.top = followerY + 'px'; }
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ===== NAVBAR SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
let overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  overlay.classList.toggle('show');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
overlay.addEventListener('click', closeMenu);
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ===== SKILLS DATA =====
const skills = [
  { name: 'HTML', emoji: '🌐' },
  { name: 'CSS', emoji: '🎨' },
  { name: 'JavaScript', emoji: '⚡' },
  { name: 'C ', emoji: '🔧' },
  // { name: 'Java', emoji: '☕' },
  { name: 'Git', emoji: '🌿' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'Graphic Design', emoji: '✏️' },
  { name: 'MySql', emoji: '🗄️' },
  { name: 'React.js', emoji: '🌐' },
];

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach((skill, i) => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.style.animationDelay = `${i * 0.07}s`;
  card.innerHTML = `
    <div class="skill-emoji">${skill.emoji}</div>
    <div class="skill-name">${skill.name}</div>
  `;
  skillsGrid.appendChild(card);
});

// ===== PROJECTS DATA =====
// 👉 Add your own projects here!
const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio to showcase my work, skills, and journey as a developer.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🚀',
    bg: 'linear-gradient(135deg, #1a0533, #2d0b55)',
    Vercel: 'https://my-portfolio-nine-nu-r0uktmdnfl.vercel.app/',
    demo: '#',
  },
  {
    title: 'Smart Public Complaint Tracker 🔨',
    desc: 'Currently working on exciting new project. Check back here soon!',
    tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    emoji: '⚙️',
    bg: 'linear-gradient(135deg, #0a1a2e, #0d2b4a)',
    Vercel: 'https://smart-public-complaint-tracker.vercel.app/',
    demo: '#',
  },
  {
    title: 'Auto Comment Generator',
    desc: 'Currently working on exciting new project. Check back here soon!',
    tags: ['JavaScript'],
    emoji: '✨',
    bg: 'linear-gradient(135deg, #0d1f0d, #163516)',
    github: '#',
    demo: '#',
  },
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((proj, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.animationDelay = `${i * 0.12}s`;
  card.innerHTML = `
    <div class="project-thumb" style="background: ${proj.bg}">
      ${proj.emoji}
    </div>
    <div class="project-body">
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-title">${proj.title}</div>
      <div class="project-desc">${proj.desc}</div>
      <div class="project-links">
        <a href="${proj.github}" class="project-link" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
        ${proj.demo !== '#' ? `<a href="${proj.demo}" class="project-link" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>` : ''}
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"] span');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Message';
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 4000);
  }, 1200);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop, height = sec.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (link) link.style.color = (scrollY >= top && scrollY < top + height) ? 'var(--accent)' : '';
  });
});

// ===== STAGGER REVEAL for skills/projects =====
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-card, .project-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.07}s`;
        card.style.animationPlayState = 'running';
      });
    }
  });
}, { threshold: 0.1 });
[skillsGrid, projectsGrid].forEach(g => { if(g) cardObserver.observe(g); });
