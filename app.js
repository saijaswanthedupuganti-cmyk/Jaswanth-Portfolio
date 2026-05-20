/* ════════════════════════════════════════════════════════════════
   app.js — application logic
   Reads: PROFILE, PROJECTS, CERTIFICATIONS, SKILLS, EVENTS (data.js)
   Do not edit unless adding new features.
════════════════════════════════════════════════════════════════ */

/* ── BOOT ──────────────────────────────────────────────────────── */
(function boot() {
  // Apply saved theme
  const saved = localStorage.getItem('pt');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    syncThemeIcons(saved);
  }

  // Populate static profile fields
  fillProfile();

  // Render dynamic sections
  renderCards('all');
  renderAbout();
  renderEvents();

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('pdf-modal').classList.contains('on')) {
        closePdf();
      } else if (document.getElementById('embed-modal').classList.contains('on')) {
        closeEmbed();
      } else if (document.getElementById('lb').classList.contains('on')) {
        closeLb();
      } else {
        closeSb();
      }
    }
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft')  lbNav(-1);
  });

  // Clock tick
  tick();
  setInterval(tick, 30000);
})();

/* ── PROFILE FILL ────────────────────────────────────────────── */
function fillProfile() {
  const P = PROFILE;

  // Sidebar
  setAvatar(q('.av'), P);
  q('.id-name').textContent       = P.firstName;
  q('.id-handle').textContent     = P.handle;
  q('.id-role').textContent       = `${P.role} · ${P.company}`;
  q('.sb-status').innerHTML       = `<span class="dot"></span>${P.available ? 'Open to Work' : 'Not Available'}`;

  // Social links
  q('#lnk-linkedin').href         = P.social.linkedin;
  q('#lnk-behance').href          = P.social.behance;
  q('#lnk-github').href           = P.social.github;
  q('#lnk-resume').href           = P.resume;
  q('#lnk-resume-dl').href        = P.resume;

  // Mobile header
  setAvatar(q('.mob-av'), P);
  q('.mob-name').textContent      = P.firstName;

  // Topbar handle
  q('.id-handle').textContent     = P.handle;

  // Hero
  q('.hero-p').textContent        = P.bio;

  // Hero KPIs
  const kpiEl = q('#hero-kpis');
  if (kpiEl) {
    kpiEl.innerHTML = P.stats.map(s =>
      `<div class="kpi"><div class="kpi-n">${s.n}</div><div class="kpi-l">${s.label}</div></div>`
    ).join('');
  }

  // Info cards
  const el = id => document.getElementById(id);
  setTxt('prof-stat-0', P.stats[0]?.n + ' ' + P.stats[0]?.label);
}

function q(sel) { return document.querySelector(sel); }
function setTxt(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function setAvatar(el, P) {
  if (!el) return;
  if (P.photo) {
    el.textContent = '';
    const img = document.createElement('img');
    img.src = P.photo;
    img.alt = `${P.fullName}, ${P.role}`;
    img.style.cssText = 'width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;';
    el.appendChild(img);
  } else {
    el.textContent = P.initials;
  }
}

/* ── ABOUT PAGE RENDER ───────────────────────────────────────── */
function renderAbout() {
  const P = PROFILE;

  // Identity banner
  setAvatar(document.getElementById('ab-initials'), P);
  setInner('ab-full-name', P.firstName);
  setInner('ab-role-company', `${P.role} · ${P.company}`);
  setInner('ab-since-txt', `Active since ${P.activeSince}`);

  // Stats
  const statsEl = document.getElementById('ab-stats-row');
  if (statsEl) {
    statsEl.innerHTML = P.stats.map(s =>
      `<div class="ab-stat"><div class="ab-stat-n">${s.n}</div><div class="ab-stat-l">${s.label}</div></div>`
    ).join('');
  }

  // Quick info
  setInner('ab-name-val', P.fullName);
  setInner('ab-role-val', P.role);
  setInner('ab-company-val', P.company);
  setInner('ab-location-val', P.location);
  setInner('ab-edu-val', P.education);

  // Tools
  const toolsEl = document.getElementById('ab-tools');
  if (toolsEl) {
    toolsEl.innerHTML = P.tools.map(t => `<span class="ab-tool">${t}</span>`).join('');
  }

  // Process skills
  const psEl = document.getElementById('ab-process-skills');
  if (psEl) {
    psEl.innerHTML = P.processSkills.map(t => `<span class="ab-tool">${t}</span>`).join('');
  }

  // Skills bars
  const skEl = document.getElementById('ab-skills-list');
  if (skEl) {
    skEl.innerHTML = SKILLS.map(s =>
      `<div class="ab-sk-it">
        <div class="ab-sk-h"><span class="ab-sk-n">${s.name}</span><span class="ab-sk-p">${s.pct}%</span></div>
        <div class="ab-sk-tr"><div class="ab-sk-fl" data-w="${s.pct}%"></div></div>
      </div>`
    ).join('');
  }

  // Philosophy
  const philEl = document.getElementById('ab-philosophy');
  if (philEl) {
    philEl.innerHTML = P.philosophy.map(p => `<li>${p}</li>`).join('');
  }

  // Certifications — clickable if url present
  const certEl = document.getElementById('ab-certs');
  if (certEl) {
    certEl.innerHTML = CERTIFICATIONS.map(c => {
      const hasLink = !!c.url;
      return `<div class="ab-cert" ${hasLink ? `data-href="${c.url}"` : ''} onclick="${hasLink ? `openCertLink('${c.url}')` : ''}">
        <div class="ab-cert-ico">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M8 1l1.9 3.8L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 1.9.7-4.1L2 5.6l4.1-.8L8 1z"/>
          </svg>
        </div>
        <div>
          <div class="ab-cert-t">${c.title}</div>
          <div class="ab-cert-s">${c.issuer} · ${c.year}</div>
        </div>
        ${hasLink ? `<div class="ab-cert-link-ico">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M7 1h4m0 0v4m0-4L4 8M2 5H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1"/>
          </svg>
        </div>` : ''}
      </div>`;
    }).join('');
  }
}

function setInner(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function openCertLink(url) {
  if (url) window.open(url, '_blank');
}

/* ── EVENTS GALLERY RENDER ───────────────────────────────────── */
function renderEvents() {
  const container = document.getElementById('ev-grid');
  if (!container) return;

  if (!EVENTS || EVENTS.length === 0) {
    container.innerHTML = `<div class="ev-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M8 2v4M16 2v4M3 10h18"/>
        <circle cx="8" cy="15" r="1" fill="currentColor"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
        <circle cx="16" cy="15" r="1" fill="currentColor"/>
      </svg>
      <p>Events will appear here.<br>Add them in data.js under EVENTS.</p>
    </div>`;
    return;
  }

  container.innerHTML = EVENTS.map((ev, i) => {
    const imgs = ev.images || [];
    const hasImages = imgs.length > 0;

    // Build 4 cells: filled image or empty placeholder
    const cells = Array.from({ length: 4 }, (_, j) => {
      const src = imgs[j];
      return src
        ? `<div class="ev-img-cell"><img src="${src}" alt="${ev.title} photo ${j + 1}" loading="lazy"></div>`
        : `<div class="ev-img-cell ev-img-ph"></div>`;
    }).join('');

    return `<div class="ev-card${hasImages ? ' ev-card-clickable' : ''}"
              ${hasImages ? `onclick="openEvGallery(${i})"` : ''}>
      <div class="ev-img-grid">
        ${cells}
        <div class="ev-tag">${ev.tag}</div>
      </div>
      <div class="ev-body">
        <div class="ev-title">${ev.title}</div>
        <div class="ev-meta"><span>${ev.date}</span><span>·</span><span>${ev.location}</span></div>
        ${ev.caption ? `<div class="ev-cap">${ev.caption}</div>` : ''}
      </div>
    </div>`;
  }).join('');
}

// Open lightbox gallery for a specific event
function openEvGallery(idx) {
  const ev = EVENTS[idx];
  if (!ev || !ev.images || !ev.images.length) return;
  const mapped = ev.images.map((src, j) => ({
    src,
    label: `${ev.title} · ${ev.date} (${j + 1} / ${ev.images.length})`
  }));
  openLb(mapped, 0);
}

/* ── PROJECT CARDS ───────────────────────────────────────────── */
function renderCards(f) {
  const all = (f === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat.includes(f))
  ).filter(p => !p.disabled);

  const office     = all.filter(p => p.type === 'office');
  const personal   = all.filter(p => p.type === 'personal');
  const assignment = all.filter(p => p.type === 'assignment');

  const makeCard = p => `
    <div class="pcard" onclick="openCase('${p.id}')" style="--pc:${p.ic}">
      <div class="ct">
        <div class="ct-bg" style="background:${p.bg}"></div>
        ${p.cover ? `<img class="ct-cover-img" src="${p.cover}" alt="${p.name}" loading="lazy">` : ''}
        <div class="ct-grain"></div><div class="ct-dots"></div>
        ${!p.cover ? `<div class="ct-ctr"><div class="ct-ico">
          <svg viewBox="0 0 28 28" fill="none" stroke="${p.ic}" stroke-width="1.4">
            <rect x="2" y="2" width="10" height="10" rx="2.5"/>
            <rect x="16" y="2" width="10" height="10" rx="2.5"/>
            <rect x="2" y="16" width="10" height="10" rx="2.5"/>
            <rect x="16" y="16" width="10" height="10" rx="2.5"/>
          </svg>
        </div></div>` : ''}
        <div class="ct-foot">${p.tools}</div>
        <div class="ct-badge ${p.status === 'published' ? 'pub' : p.status === 'progress' ? 'prog' : 'soon'}">
          ${p.status === 'published' ? '● Published' : p.status === 'progress' ? '◐ In Progress' : '○ Coming Soon'}
        </div>
      </div>
      <div class="cb">
        <div class="cb-dom">${p.domain}</div>
        <div class="cb-nm">${p.name}</div>
        <div class="cb-br">${p.brief}</div>
        <div class="cb-tags">${p.cat.map(c => `<span class="cb-tag">${c}</span>`).join('')}</div>
        <div class="cb-ft">
          <span class="cb-meta">${p.role} · ${p.timeline}</span>
          ${!p.confidential ? `<span class="cb-cta">${p.type === 'assignment' ? 'View Screens' : 'View Case Study'}
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 6h8M6 2l4 4-4 4"/>
            </svg>
          </span>` : ''}
        </div>
      </div>
    </div>`;

  const divider = (label, sub) => `
    <div class="assign-divider">
      <div class="assign-divider-line"></div>
      <div class="assign-divider-label">${label}</div>
      <div class="assign-divider-line"></div>
    </div>
    ${sub ? `<p class="assign-sub">${sub}</p>` : ''}`;

  let html = '';

  if (office.length) {
    html += divider('Office Work', 'Enterprise SaaS products designed at MyClassboard.');
    html += office.map(makeCard).join('');
  }

  if (personal.length) {
    if (office.length) html += divider('Self-Initiated Projects', '');
    html += personal.map(makeCard).join('');
  }

  if (assignment.length) {
    html += divider('Company Assignments', 'Screens and briefs from design challenges during interview processes.');
    html += assignment.map(makeCard).join('');
  }

  document.getElementById('pgrid').innerHTML = html;
}

/* ── CASE STUDY PAGE ─────────────────────────────────────────── */
function openCase(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  // Build lightbox list from screens that have images
  const imgScreens = p.screens.filter(s => s.src);

    const screens = p.screens.map(s => {
    const type = s.type || 'desktop';
    const lbIdx = imgScreens.indexOf(s);
    if (s.src) {
      const lbData = JSON.stringify(imgScreens).replace(/"/g, '&quot;');
      return `<div class="sg-it" data-type="${type}" onclick="openLb(${lbData}, ${lbIdx})">
        <img src="${s.src}" alt="${s.label}" loading="lazy">
        <div class="sg-lbl">${s.label}</div>
      </div>`;
    }
    // support an embed tile (click to open embed modal)
    if (s.type === 'embed') {
      return `<div class="sg-it" data-type="desktop" onclick="openEmbedFor('${p.id}')">
        <div class="sg-ph">
          <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="2" y="2" width="24" height="24" rx="3"/>
            <path d="M9 8l10 6-10 6z"/>
          </svg>
          <span>${s.label}</span>
        </div>
        <div class="sg-lbl">${s.label}</div>
      </div>`;
    }
    return `<div class="sg-it" data-type="${type}">
      <div class="sg-ph">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.2">
          <rect x="2" y="3" width="16" height="11" rx="1.5"/>
          <path d="M7 14h6M10 14v3"/>
        </svg>
        <span>${s.label}</span>
      </div>
      <div class="sg-lbl">${s.label}</div>
    </div>`;
  }).join('');

  const getEmbedSrc = value => {
    const raw = (value || '').trim();
    if (!raw) return '';
    const match = raw.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
    return match ? match[1] : raw;
  };

  const embedSrc = getEmbedSrc(p.embedUrl);

  const figmaFallback = p.figmaLink
    ? `<span class="embed-lnk" onclick="window.open('${p.figmaLink}','_blank')">Open in Figma →</span>`
    : '';

  const embed = embedSrc
    ? `<div class="embed-box"><iframe src="${embedSrc}" allowfullscreen></iframe></div>`
    : `<div class="embed-box"><div class="embed-ph">
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.2">
          <rect x="2" y="2" width="24" height="24" rx="3"/>
          <path d="M2 9h24M9 2v7"/>
        </svg>
        <p>Add Figma embedUrl in data.js to activate prototype preview</p>
        ${figmaFallback}
      </div></div>`;

  const prototypeSection = !p.confidential && (embedSrc || p.figmaLink)
    ? `<div class="csb"><div class="csb-lbl">Interactive Prototype</div>${embed}</div>`
    : '';

  const mkBtn = (href, label, icon, cls) => href
    ? `<a class="${cls}" href="${href}" target="_blank">${icon}${label}</a>`
    : `<span class="${cls}" style="opacity:.4;cursor:not-allowed;">${icon}${label} — Coming Soon</span>`;

  const extIco = `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px">
    <path d="M8 1h5m0 0v5m0-5L6 8"/><path d="M5 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"/>
  </svg> `;
  const dlIco = `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" style="width:13px;height:13px">
    <path d="M7 1v8M4.5 6.5 7 9l2.5-2.5M2 11v.5A1.5 1.5 0 0 0 3.5 13h7a1.5 1.5 0 0 0 1.5-1.5V11"/>
  </svg> `;

  // If project provides an embeddable Behance iframe/html, show it in-site.
  // Confidential projects hide case study links and Behance entirely.
  let viewBtn = '';
  let dlBtn   = '';
  let asideView = '';
  let asideDl   = '';
  if (!p.confidential) {
    viewBtn = p.pdfPath
      ? `<button class="cs-btn-primary" onclick="openPdfFor('${p.id}')">${extIco}View Case Study</button>`
      : `<span class="cs-btn-primary" style="opacity:.4;cursor:not-allowed;">${extIco}Case Study — Coming Soon</span>`;

    dlBtn = p.pdfPath
      ? `<a class="cs-btn-secondary" href="${p.pdfPath}" download>${dlIco}Download PDF</a>`
      : `<span class="cs-btn-secondary" style="opacity:.4;cursor:not-allowed;">${dlIco}PDF — Coming Soon</span>`;

    asideView = p.pdfPath
      ? `<button class="aside-btn-primary" onclick="openPdfFor('${p.id}')">${extIco}View Case Study</button>`
      : `<span class="aside-btn-primary" style="opacity:.4;cursor:not-allowed;">Case Study — Coming Soon</span>`;

    asideDl = p.pdfPath
      ? `<a class="aside-btn-secondary" href="${p.pdfPath}" download>${dlIco}Download PDF</a>`
      : `<span class="aside-btn-secondary" style="opacity:.4;cursor:not-allowed;">PDF Coming Soon</span>`;
  }

  document.getElementById('cs-ct').innerHTML = `
    <div class="cs-back-bar">
      <div class="cs-back" onclick="go('projects', document.querySelector('[onclick*=projects]'))">
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 2L4 7l5 5"/></svg>
        All Case Studies
      </div>
    </div>
    <div class="cs-cover" style="background:${p.bg}">
      ${p.cover ? `<img class="cs-cover-img" src="${p.cover}" alt="${p.name}">` : ''}
      <div class="cs-cover-grain"></div>
      <div class="cs-cover-dots"></div>
      <div class="cs-cover-grad"></div>
      <div class="cs-cover-c">
        <div class="cs-cover-dom">${p.domain}</div>
        <div class="cs-cover-title">${p.name}</div>
      </div>
    </div>
    <div class="cs-actions">${viewBtn}${dlBtn}</div>
    <div class="cs-meta">
      <div class="csm"><div class="csm-k">Role</div><div class="csm-v">${p.role}</div></div>
      <div class="csm"><div class="csm-k">Timeline</div><div class="csm-v">${p.timeline}</div></div>
      <div class="csm"><div class="csm-k">Platform</div><div class="csm-v">${p.platform}</div></div>
      <div class="csm"><div class="csm-k">Tools</div><div class="csm-v">${p.tools}</div></div>
    </div>
    <div class="cs-body">
      <div class="cs-main">
        <div class="csb"><div class="csb-lbl">The Problem</div><div class="csb-txt">${p.problem}</div></div>
        <div class="csb"><div class="csb-lbl">The Solution</div><div class="csb-txt">${p.solution}</div></div>
        <div class="csb">
          <div class="csb-lbl">Key Highlights</div>
          <ul class="hl">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        </div>
        ${!p.confidential ? `<div class="csb"><div class="csb-lbl">Screens</div><div class="sg">${screens}</div></div>` : ''}
        ${prototypeSection}
      </div>
      <div class="cs-aside">
        ${!p.confidential ? `<div class="aside-actions">${asideView}${asideDl}</div>` : ''}
        <div class="ac">
          <div class="ac-t">Brief</div>
          ${[p.role, p.timeline, p.platform].map(v => `<div class="ac-it">${v}</div>`).join('')}
        </div>
        <div class="ac">
          <div class="ac-t">Tools</div>
          ${p.tools.split(' · ').map(t => `<div class="ac-it">${t}</div>`).join('')}
        </div>
        <div class="ac">
          <div class="ac-t">Tags</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px">
            ${p.cat.map(c => `<span class="cb-tag">${c}</span>`).join('')}
          </div>
        </div>
        ${!p.confidential && p.figmaLink ? `<a class="proto-btn" href="${p.figmaLink}" target="_blank">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M8 1h5m0 0v5m0-5L6 8"/>
            <path d="M5 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"/>
          </svg>
          View in Figma
        </a>` : ''}
      </div>
    </div>
  `;

  showPage('case');
  document.querySelectorAll('.ni').forEach(ni => {
    if (ni.getAttribute('onclick') && ni.getAttribute('onclick').includes('projects'))
      ni.classList.add('on');
  });
  document.getElementById('bc').textContent =
    p.name.length > 28 ? p.name.slice(0, 28) + '…' : p.name;
  document.getElementById('sc').scrollTo({ top: 0, behavior: 'instant' });
}

/* ── NAVIGATION ───────────────────────────────────────────────── */
function go(page, el) {
  showPage(page);
  document.querySelectorAll('.ni, .bn').forEach(i => i.classList.remove('on'));
  if (el) el.classList.add('on');
  document.querySelectorAll('.bn').forEach(b => { if (b.dataset.page === page) b.classList.add('on'); });
  document.getElementById('bc').textContent = page;
  document.getElementById('sc').scrollTo({ top: 0, behavior: 'instant' });
  closeSb();
  if (page === 'projects') renderCards('all');
  if (page === 'about') setTimeout(() => {
    document.querySelectorAll('.ab-sk-fl').forEach(b => { b.style.width = b.dataset.w; });
  }, 100);
}

function showPage(page) {
  document.querySelectorAll('.pv').forEach(v => v.classList.remove('on'));
  const el = document.getElementById('pv-' + page);
  if (el) el.classList.add('on');
}

/* ── FILTER ───────────────────────────────────────────────────── */
function filt(f, el) {
  document.querySelectorAll('.fc').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  renderCards(f);
}

/* ── THEME ────────────────────────────────────────────────────── */
function toggleTheme() {
  const h = document.documentElement;
  const dark = h.getAttribute('data-theme') === 'dark';
  const next = dark ? 'light' : 'dark';
  h.setAttribute('data-theme', next);
  syncThemeIcons(next);
  localStorage.setItem('pt', next);
}

function syncThemeIcons(theme) {
  ['ico-d', 'ico-l', 'd-ico-d', 'd-ico-l'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = (i % 2 === 0)
      ? (theme === 'light' ? 'none' : 'block')
      : (theme === 'light' ? 'block' : 'none');
  });
}

/* ── LIGHTBOX ─────────────────────────────────────────────────── */
let _lbList = [], _lbIdx = 0;

function openLb(list, idx) {
  _lbList = list;
  _lbIdx  = idx;
  _showLb();
  document.getElementById('lb').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function _showLb() {
  const s = _lbList[_lbIdx];
  document.getElementById('lb-img').src = s.src;
  document.getElementById('lb-cap').textContent = s.label || '';
  const many = _lbList.length > 1;
  document.querySelector('.lb-prev').style.display = many ? 'flex' : 'none';
  document.querySelector('.lb-next').style.display = many ? 'flex' : 'none';
}

function lbNav(dir, e) {
  if (e) e.stopPropagation();
  _lbIdx = (_lbIdx + dir + _lbList.length) % _lbList.length;
  _showLb();
}

function closeLb(e) {
  if (e && e.target !== document.getElementById('lb')) return;
  document.getElementById('lb').classList.remove('on');
  document.body.style.overflow = '';
}

/* ── EMBED MODAL (for Behance embeds) ───────────────────────── */
function openEmbedFor(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p || !p.behanceUrl) return;
  const wrap = document.getElementById('embed-content');
  if (!wrap) return;
  wrap.innerHTML = p.behanceUrl; // insert raw iframe/html
  document.getElementById('embed-modal').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeEmbed() {
  const wrap = document.getElementById('embed-content');
  if (wrap) wrap.innerHTML = '';
  document.getElementById('embed-modal').classList.remove('on');
  document.body.style.overflow = '';
}

/* ── PDF MODAL ────────────────────────────────────────────────── */
function openPdfFor(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p || !p.pdfPath) return;
  // iOS Safari can't render PDFs in iframes — open in a new tab instead
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    window.open(p.pdfPath, '_blank', 'noopener');
    return;
  }
  const wrap = document.getElementById('pdf-content');
  if (!wrap) return;
  wrap.innerHTML = `<iframe src="${p.pdfPath}" title="${p.name} — Case Study PDF"></iframe>`;
  document.getElementById('pdf-modal').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closePdf() {
  const wrap = document.getElementById('pdf-content');
  if (wrap) wrap.innerHTML = '';
  document.getElementById('pdf-modal').classList.remove('on');
  document.body.style.overflow = '';
}

/* ── MOBILE SIDEBAR ───────────────────────────────────────────── */
function openSb() {
  document.getElementById('sb').classList.add('open');
  document.getElementById('mob-ov').classList.add('on');
}
function closeSb() {
  document.getElementById('sb').classList.remove('open');
  document.getElementById('mob-ov').classList.remove('on');
}

/* ── CLOCK ────────────────────────────────────────────────────── */
function tick() {
  const el = document.getElementById('clk');
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true,
    timeZone: PROFILE.timezone || 'Asia/Kolkata',
  }) + ' IST';
}

/* ── COPY ─────────────────────────────────────────────────────── */
function cp(text) {
  navigator.clipboard.writeText(text).then(() => {
    const t = document.getElementById('toast');
    t.classList.add('on');
    setTimeout(() => t.classList.remove('on'), 2200);
  });
}
