/* =============================================
   CUSTOM CURSOR
   ============================================= */
(function () {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) {
    dot.style.display = ring.style.display = 'none'; return;
  }

  let mx = -100, my = -100;   // dot: instant
  let rx = -100, ry = -100;   // ring: lerped

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function loop() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  // hover states on interactive elements
  const hoverEls = 'a, button, .skill-card, .project-card, .design-card, .quality-card, input, textarea';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
  });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();

/* =============================================
   NAVBAR SCROLL EFFECT
   ============================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* =============================================
   HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* =============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-item');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-item[href="#${sec.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { passive: true });

/* =============================================
   SCROLL REVEAL
   ============================================= */
const fadeEls = document.querySelectorAll('.fade-in');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => revealObserver.observe(el));

/* =============================================
   SKILLS DATA
   ─ Using Simple Icons SVG paths for real logos
   ============================================= */
const skills = [
  {
    name: 'HTML',
    color: '#E34F26',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>'
  },
  {
    name: 'CSS',
    color: '#1572B6',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.413z"/></svg>'
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><rect width="24" height="24" rx="2" fill="#F7DF1E"/><path d="M6.235 6.453h2.4v8.4c0 3.788-1.76 5.147-4.588 5.147-.641 0-1.481-.12-2.002-.314l.305-2.004c.381.12.882.195 1.403.195 1.204 0 2.482-.481 2.482-3.024V6.453zm5.319 9.977c.602.36 1.563.721 2.563.721 1.083 0 1.684-.481 1.684-1.204 0-.721-.481-1.083-1.683-1.564-1.684-.601-2.766-1.563-2.766-3.005 0-1.804 1.443-3.126 3.727-3.126 1.123 0 1.924.24 2.525.48l-.48 1.924c-.361-.24-1.083-.48-2.044-.48-1.083 0-1.563.48-1.563 1.083 0 .721.481.961 1.803 1.564 1.804.721 2.645 1.803 2.645 3.126 0 1.803-1.323 3.246-4.007 3.246-1.123 0-2.285-.36-2.886-.721l.482-1.04z"/></svg>'
  },
  {
    name: 'React',
    color: '#61DAFB',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.74-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>'
  },
  {
    name: 'Java',
    color: '#ED8B00',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#ED8B00" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>'
  },
  {
    name: 'MySQL',
    color: '#4479A1',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#4479A1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.182-.151zm5.16 17.949c-.092-.048-.192-.088-.284-.137-.02-.01-.036-.026-.058-.035l-.02-.012c.002.001.003.002.005.003-.021.01-.04.02-.059.03-.016.012-.026.018-.039.025.014.01.025.018.038.027.011.007.022.012.033.02.004.002.008.005.012.007l.026.016c.01.006.02.012.03.016.012.006.025.01.038.014.017.006.034.012.051.018.004.002.009.003.013.005.008.002.017.004.025.006.008.002.016.004.024.005.01.002.02.003.03.004.008.001.017.002.025.002H22c.009 0 .018 0 .027-.001l.024-.003c.008-.001.016-.002.024-.004.008-.002.016-.004.024-.006.008-.002.016-.004.023-.007.008-.003.016-.006.023-.01.007-.004.013-.007.02-.011.006-.004.012-.008.018-.012.005-.004.01-.008.014-.012.005-.004.01-.009.014-.013.005-.005.01-.009.013-.014.004-.005.008-.01.012-.016.003-.005.007-.011.01-.017.004-.007.007-.014.01-.021.003-.007.005-.015.007-.022.002-.007.003-.015.004-.023.001-.008.002-.016.001-.024 0-.008 0-.016-.001-.024-.001-.008-.003-.016-.004-.023-.002-.007-.004-.015-.007-.022-.003-.007-.006-.014-.01-.021-.003-.006-.007-.012-.01-.017-.004-.006-.008-.011-.012-.016-.005-.005-.009-.01-.014-.014-.004-.004-.009-.008-.014-.012-.006-.005-.012-.009-.018-.012-.007-.004-.013-.007-.02-.011-.008-.004-.016-.006-.023-.01-.008-.003-.016-.006-.023-.008-.008-.002-.016-.004-.024-.006-.008-.002-.016-.004-.024-.005-.008-.001-.016-.002-.024-.003H21.58c-.009 0-.017 0-.026.001l-.024.003c-.008.001-.016.002-.024.004-.008.002-.016.004-.024.006-.008.002-.016.004-.023.007-.008.003-.016.006-.023.01-.007.004-.013.007-.02.011-.006.004-.012.008-.018.012-.005.004-.01.008-.014.012-.004.004-.009.008-.013.013-.004.005-.009.01-.012.015-.004.006-.007.011-.01.017-.003.006-.006.013-.009.02-.002.007-.004.014-.006.021-.002.007-.003.015-.004.022-.001.008-.002.016-.001.024 0 .008 0 .016.001.024.001.008.002.016.004.024.001.008.003.015.006.023.002.007.005.015.009.022.003.007.007.014.011.02.004.006.008.012.012.017.005.005.01.01.015.014.005.004.01.008.015.012.006.005.012.009.018.012.007.004.014.007.022.01-.001 0-.001 0-.001.001zm2.197-14.666c.136.035.278.058.389.058.112 0 .176-.023.176-.07 0-.07-.064-.094-.208-.13l-.128-.033c-.22-.059-.328-.186-.328-.37 0-.278.217-.44.575-.44.151 0 .298.023.405.058l-.055.22c-.104-.035-.208-.05-.328-.05-.093 0-.15.023-.15.07 0 .059.07.085.21.12l.127.033c.232.06.343.187.343.37 0 .29-.22.452-.59.452-.152 0-.32-.027-.44-.07l.001-.008zM7.6.498C5.882.498 4.527 1.23 3.532 2.693 2.536 4.156 2.03 5.993 2.03 8.21v1.2c0 2.244.506 4.08 1.513 5.54 1.012 1.456 2.372 2.188 4.085 2.188 1.68 0 3.018-.738 4.011-2.195 1.005-1.46 1.515-3.3 1.515-5.533V8.21c0-2.188-.51-4.012-1.52-5.475C10.638 1.273 9.299.498 7.6.498zm0 1.565c1.174 0 2.087.565 2.752 1.698.665 1.131.998 2.578.998 4.337v1.2c0 1.778-.328 3.236-1.001 4.373-.668 1.131-1.583 1.698-2.749 1.698-1.178 0-2.093-.56-2.76-1.675-.666-1.128-1.003-2.594-1.003-4.396V8.098c0-1.777.337-3.23 1.003-4.363.666-1.129 1.581-1.672 2.76-1.672z"/></svg>'
  },
  {
    name: 'C / C++',
    color: '#00599C',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#00599C" d="M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.22c-.508-.293-1.339-.293-1.847 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.339.293 1.847 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.271-.616.271-.91V6.91c.002-.294-.102-.62-.269-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/></svg>'
  },
  {
    name: 'Git',
    color: '#F05032',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>'
  },
  {
    name: 'GitHub',
    color: '#F5F5F5',
    svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#F5F5F5" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>'
  },
];

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card fade-in';
  card.innerHTML = `${skill.svg}<div class="skill-name">${skill.name}</div>`;
  skillsGrid.appendChild(card);
  revealObserver.observe(card);
});

/* =============================================
   PROJECTS DATA
   ─ Each project has a unique gradient for its thumbnail.
   ─ Add your actual GitHub / demo links below.
   ============================================= */
const projects = [
  {
    name: 'Portfolio Website',
    desc: 'Personal portfolio showcasing development and design work with clean code and modern UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #0f2027, #1a4a6b, #1e6fa8)',
    github: 'https://github.com/Navinya-30/Navinya_Portfolio',
    demo: '#',
  },
  {
    name: 'Auto-Comment-Generator',
    desc: 'An AI-powered tool that generates relevant and engaging comments automatically from given content.',
    tags: ['JavaScript'],
    gradient: 'linear-gradient(135deg, #0d1b2a, #1b4332, #2d6a4f)',
    github: 'https://github.com/Navinya-30/Auto-Comment-Generator',
    demo: '#',
  },
  {
    name: 'Smart-Public-Commplaint-Tracker',
    desc: 'A digital platform for submitting, tracking, and managing public complaints efficiently.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #1a0533, #3b0764, #4c1d95)',
    github: 'https://github.com/Navinya-30/Smart-Public-Complaint-Tracker',
    demo: '#',
  },
  {
    name: 'Auto-Verse',
    desc: 'A smart car showroom management system that streamlines vehicle, customer, and sales operations.',
    tags: ['HTML', 'Dart', 'JavaScript', 'Swift', 'C++', 'CMake'],
    gradient: 'linear-gradient(135deg, #1c0b00, #7c2d12, #9a3412)',
    github: 'https://github.com/Navinya-30/auto_verse',
    demo: '#',
  },
  // {
  //   name: 'Project Five',
  //   desc: 'Add your project description here. Edit the projects array in main.js.',
  //   tags: ['C++', 'Algorithm'],
  //   gradient: 'linear-gradient(135deg, #0a1628, #0e3460, #0369a1)',
  //   github: 'https://github.com/Navinya-30',
  //   demo: '#',
  // },
  // {
  //   name: 'Project Six',
  //   desc: 'Add your project description here. Edit the projects array in main.js.',
  //   tags: ['Git', 'GitHub'],
  //   gradient: 'linear-gradient(135deg, #0d1117, #1a2332, #0f3460)',
  //   github: 'https://github.com/Navinya-30',
  //   demo: '#',
  // },
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'project-card fade-in';
  card.style.transitionDelay = `${i * 0.07}s`;

  const demoBtn = p.demo && p.demo !== '#'
    ? `<a href="${p.demo}" target="_blank" class="btn btn-outline btn-sm">Live Demo</a>`
    : '';

  const indexLabel = String(i + 1).padStart(2, '0');

  card.innerHTML = `
    <div class="project-thumb">
      <div class="project-thumb-gradient" style="background: ${p.gradient}">
        <div class="project-thumb-title">${p.name}</div>
      </div>
      <div class="project-index">${indexLabel}</div>
    </div>
    <div class="project-body">
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-actions">
        <a href="${p.github}" target="_blank" class="btn btn-outline btn-sm">GitHub</a>
        ${demoBtn}
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
  revealObserver.observe(card);

  // 3D tilt on mouse move
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s var(--ease), border-color 0.3s var(--ease), box-shadow 0.35s var(--ease)';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease, border-color 0.3s var(--ease), box-shadow 0.35s var(--ease)';
  });
});

/* =============================================
   GRAPHIC DESIGN DATA
   ─ Replace image paths with your actual design work
   ============================================= */
const designs = [
  { title: 'Event Poster', category: 'Poster', image: '' },
  { title: 'SRC Campaign', category: 'Event Branding', image: '' },
  { title: 'Social Creative', category: 'Social Media', image: '' },
  { title: 'Typography Work', category: 'Typography', image: '' },
  { title: 'Design Work', category: 'Creative Design', image: '' },
  { title: 'Design Work', category: 'Poster', image: '' },
];

const designGrid = document.getElementById('designGrid');
designs.forEach((d, i) => {
  const card = document.createElement('div');
  card.className = 'design-card fade-in';
  card.style.transitionDelay = `${i * 0.06}s`;

  const inner = d.image
    ? `
      <img src="${d.image}" alt="${d.title}" class="design-thumb" loading="lazy"/>
      <div class="design-overlay">
        <div class="design-title">${d.title}</div>
        <div class="design-cat">${d.category}</div>
      </div>`
    : `
      <div class="design-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" width="28" height="28"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Add design image</span>
        <span style="font-size:0.68rem;opacity:0.5">${d.category}</span>
      </div>`;

  card.innerHTML = inner;
  designGrid.appendChild(card);
  revealObserver.observe(card);
});

/* =============================================
   QUALITIES / LEADERSHIP
   ============================================= */
const qualities = [
  {
    name: 'Creative Problem Solving',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`
  },
  {
    name: 'Team Collaboration',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    name: 'Leadership',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  {
    name: 'Visual Communication',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
  },
  {
    name: 'Attention to Detail',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`
  },
  {
    name: 'Continuous Learning',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
];

const qualitiesGrid = document.getElementById('qualitiesGrid');
qualities.forEach((q, i) => {
  const card = document.createElement('div');
  card.className = 'quality-card fade-in';
  card.style.transitionDelay = `${i * 0.07}s`;
  card.innerHTML = `<div class="quality-icon">${q.icon}</div><div class="quality-name">${q.name}</div>`;
  qualitiesGrid.appendChild(card);
  revealObserver.observe(card);
});

/* =============================================
   CONTACT FORM
   ============================================= */
const form    = document.getElementById('contactForm');
const notice  = document.getElementById('formNotice');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    notice.textContent = 'Message received — I\'ll get back to you soon.';
    notice.className = 'form-notice ok';
    setTimeout(() => { notice.textContent = ''; notice.className = 'form-notice'; }, 5000);
  }, 1200);
});