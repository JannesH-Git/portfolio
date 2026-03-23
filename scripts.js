/* Extracted JS from portfolio_refined_dark.html */
/* ── ROUTING ── */
const PAGES = ['home','about','skills','experience','courses','contact'];
function sp(id) {
  PAGES.forEach(p => {
    document.getElementById('page-'+p).classList.toggle('active', p===id);
    document.getElementById('nav-'+p).classList.toggle('active', p===id);
  });
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ── EXPERIENCE DATA ── */
// PROFILE must be provided by profile.js (loaded before scripts.js)
// Avoid declaring `PROFILE` here to prevent redeclaration errors when
// `profile.js` defines it as `const PROFILE = {...}`. Use `window.PROFILE`.
if (typeof window !== 'undefined' && typeof window.PROFILE === 'undefined') {
  console.warn('PROFILE is not defined — ensure profile.js is included before scripts.js');
  window.PROFILE = {};
}
/*
  NOTE: profile data is loaded from profile.js as `PROFILE`.
  The large JSON-like block that was previously embedded here caused
  a runtime syntax error. The renderer below expects `PROFILE` to
  be a plain JavaScript object provided by profile.js which must
  be included before this script in the HTML.
*/

// Experience array will be derived from PROFILE.Employments if available
let EXP = [];

function buildEXPFromProfile() {
  if (!PROFILE || !PROFILE.Employments || PROFILE.Employments.length === 0) return;
  EXP = PROFILE.Employments.map(e => {
    const date = e.Period || (e.StartYear && e.EndYear ? `${e.StartYear} — ${e.EndYear}` : '');
    const company = e.Employer || e.Organization || '';
    const role = e.Function || '';
    const body = (e.Task || e.Result || e.Situation || '').replace(/\n/g,' ');
    const tags = e.Specialization ? e.Specialization.split(',').map(s=>s.trim()) : [];
    const highlights = [];
    const deliverables = body ? [body] : [];
    return {date, company, role, body, highlights, tags, deliverables};
  });
}

/** Render skills by category into the .skills-grid element */
function renderSkillsFromProfile() {
  if (!PROFILE || !Array.isArray(PROFILE.Categorys)) return;
  const grid = document.querySelector('.skills-grid');
  if (!grid) return;
  // Build panels per category
  grid.innerHTML = PROFILE.Categorys.map(cat => {
    const items = (cat.Specializations||[]).map(s => `
      <div class="skill-item">
        <div class="skill-hdr"><span class="skill-name">${s.Title}</span><span class="skill-pct">${Math.min(100, s.KnowledgeLevelInt*25)}%</span></div>
        <div class="skill-track"><div class="skill-fill" style="width:${Math.min(100, s.KnowledgeLevelInt*25)}%"></div></div>
      </div>`).join('');
    return `
      <div class="skill-panel">
        <div class="skill-panel-title">${cat.Name} <span>// ${cat.Specializations && cat.Specializations.length? '': '—'}</span></div>
        <div class="skill-list">${items}</div>
      </div>`;
  }).join('');
}

/** Render courses page content from PROFILE.Educations_2 */
function renderCoursesFromProfile() {
  const page = document.getElementById('page-courses');
  if (!page || !PROFILE || !Array.isArray(PROFILE.Educations_2)) return;
  const section = page.querySelector('.section');
  if (!section) return;
  const listHTML = PROFILE.Educations_2.map(c => `
    <div class="course-item">
      <div class="course-title">${c.Title}</div>
      <div class="course-meta">${c.Institute || ''} ${c.Period? '— '+c.Period: ''}</div>
    </div>
  `).join('');
  let container = section.querySelector('.courses-grid');
  if (!container) {
    container = document.createElement('div');
    container.className = 'courses-grid';
    section.appendChild(container);
  }
  container.innerHTML = listHTML;
}

function buildDetail(i) {
  const e = EXP[i];
  return `
    <div class="exp-detail-date">${e.date}</div>
    <div class="glitch-wrap">
      <div class="exp-detail-company glitch-title">${e.company}</div>
      <div class="exp-detail-company glitch-title-ghost" aria-hidden="true">${e.company}</div>
    </div>
    <div class="exp-detail-role">${e.role}</div>
    <div class="exp-detail-divider"></div>
    <div class="exp-detail-body">${e.body}</div>
    <div class="exp-highlights">
      ${e.highlights.map(h=>`<div class="exp-highlight"><div class="exp-highlight-num">${h.val}</div><div class="exp-highlight-lbl">${h.lbl}</div></div>`).join('')}
    </div>
    <div class="exp-tags-row">${e.tags.map(t=>`<span class="exp-tag">${t}</span>`).join('')}</div>
    <div class="exp-deliverables">
      ${e.deliverables.map(d=>`<div class="exp-deliverable"><div class="exp-dot"></div><div class="exp-del-text">${d}</div></div>`).join('')}
    </div>`;
}

/* ── CANVAS GLITCH ── */
let activeExp = 0, busy = false;

function glitchSwap(newIndex) {
  if (busy || newIndex === activeExp) return;
  busy = true;

  // Swap content immediately, then trigger a short CSS-based glitch
  const det = document.getElementById('exp-detail');
  det.innerHTML = buildDetail(newIndex);
  det.style.animation = 'none';
  // force reflow to restart detail animation
  void det.offsetHeight;
  det.style.animation = 'detailIn 0.4s ease';

  // Find the new title elements and play the hero-like glitch briefly
  const title = det.querySelector('.glitch-title');
  const ghost = det.querySelector('.glitch-title-ghost');
  if (title) {
    // apply a longer, more visible one-shot glitch and add visual emphasis
    const D = 2200; // duration in ms
    title.classList.add('glitch-intense');
    if (ghost) ghost.classList.add('glitch-intense');
    title.style.animation = `glitch-clip-short ${D}ms ease-in-out`;
    if (ghost) ghost.style.animation = `glitch-ghost ${D}ms ease-in-out`;
    // Ensure the red phase is exactly 500ms by applying inline color at the right time
    const redDuration = 500; // ms
    const redPhaseStart = Math.floor(D * 0.88); // aligned with keyframe timing
    const redTimeout = setTimeout(() => {
      try { title.style.color = 'var(--red3)'; } catch(e){}
      if (ghost) try { ghost.style.color = 'var(--red3)'; } catch(e){}
      setTimeout(() => {
        try { title.style.color = ''; } catch(e){}
        if (ghost) try { ghost.style.color = ''; } catch(e){}
      }, redDuration);
    }, redPhaseStart);
    // clear if animation ends earlier
    setTimeout(() => clearTimeout(redTimeout), D + 200);
    // clear animations and visual emphasis after finish
    setTimeout(() => {
      title.style.animation = '';
      if (ghost) ghost.style.animation = '';
      title.classList.remove('glitch-intense');
      if (ghost) ghost.classList.remove('glitch-intense');
      activeExp = newIndex;
      busy = false;
    }, D + 100);
  } else {
    activeExp = newIndex;
    busy = false;
  }
}

function selectExp(i) {
  document.querySelectorAll('.exp-row').forEach((r, idx) => r.classList.toggle('active', idx === i));
  glitchSwap(i);
}

// Init first entry on load
document.addEventListener('DOMContentLoaded', () => {
  // Apply basic profile fields
  try {
    if (PROFILE && PROFILE.FullName) {
      document.title = PROFILE.FullName + ' — Portfolio';
      const nav = document.querySelector('.nav-logo');
      if (nav) nav.innerHTML = PROFILE.FullName + '<span>.</span>';
    }
    if (PROFILE && PROFILE.Residence) {
      const hb = document.querySelector('.hero-eyebrow');
      if (hb) hb.textContent = PROFILE.Residence;
    }
    if (PROFILE && PROFILE.WhyMe && PROFILE.WhyMe.Description) {
      const hd = document.querySelector('.hero-desc');
      if (hd) hd.textContent = PROFILE.WhyMe.Description;
    }
    if (PROFILE && PROFILE.Title) {
      const roles = document.querySelector('.hero-roles');
      if (roles) {
        roles.innerHTML = '';
        const pill = document.createElement('span');
        pill.className = 'role-pill';
        pill.textContent = PROFILE.Title;
        roles.appendChild(pill);
      }
    }

    // Competences -> replace the simple values section
    if (PROFILE && Array.isArray(PROFILE.Competences)) {
      const vals = document.querySelector('.vals');
      if (vals) {
        vals.innerHTML = PROFILE.Competences.map((c, idx) => `
          <div class="val">
            <div class="val-tag">${String(idx+1).padStart(2,'0')}</div>
            <div class="val-name">${c.Title}</div>
            <div class="val-desc">${c.Description}</div>
          </div>`).join('');
      }
    }

    // Contact list - prefer LinkedIn from profile
    if (PROFILE && PROFILE.LinkedIn) {
      const contactList = document.querySelector('.contact-list');
      if (contactList) {
        contactList.innerHTML = `
          <div class="contact-item"><div class="contact-ico">LI</div><a href="${PROFILE.LinkedIn}" target="_blank">${PROFILE.LinkedIn.replace(/^https?:\/\//,'')}</a></div>
          <div class="contact-item"><div class="contact-ico">GH</div>github.com/yourhandle</div>
          <div class="contact-item"><div class="contact-ico">✉</div>hello@yoursite.be</div>
          <div class="contact-item"><div class="contact-ico">CV</div>Download resumé</div>`;
      }
    }

    // Build EXP from profile and render experience list
    buildEXPFromProfile();
    // Render skills and courses from profile
    renderSkillsFromProfile();
    renderCoursesFromProfile();
    // If employments exist in PROFILE, ensure EXP is built and the list is replaced
    if ((EXP && EXP.length > 0) || (PROFILE && Array.isArray(PROFILE.Employments) && PROFILE.Employments.length>0)) {
      const listPanel = document.querySelector('.exp-list-panel');
      if (listPanel) {
        // preserve header
        const header = listPanel.querySelector('.exp-list-header');
        let html = '';
        if (header) html += header.outerHTML;
        // build rows from EXP if available, otherwise from PROFILE.Employments
        const source = (EXP && EXP.length>0) ? EXP : PROFILE.Employments.map(e=>({
          date: e.Period || '',
          company: e.Employer || e.Organization || '',
          role: e.Function || '',
          body: (e.Task || e.Result || e.Situation || '').replace(/\n/g,' '),
          highlights: [],
          tags: e.Specialization ? e.Specialization.split(',').map(s=>s.trim()) : [],
          deliverables: e.Result ? [e.Result] : (e.Task ? [e.Task] : [])
        }));
        source.forEach((e, i) => {
          const active = i === 0 ? ' active' : '';
          html += `\n  <div class="exp-row${active}" id="exp-row-${i}" onclick="selectExp(${i})">\n    <div class="exp-row-date">${e.date || ''}</div>\n    <div class="exp-row-company">${e.company || ''}</div>\n    <div class="exp-row-role">${e.role || ''}</div>\n    <span class="exp-row-arrow">›</span>\n  </div>`;
        });
        listPanel.innerHTML = html;
      }

      // set initial detail
      const det = document.getElementById('exp-detail');
      if (det) det.innerHTML = buildDetail(0);
    }
    // visible debug banner so changes are obvious
    try {
      const dbg = document.createElement('div');
      dbg.textContent = 'Profile applied: ' + (PROFILE.FullName || 'unknown');
      Object.assign(dbg.style, {position:'fixed',top:'8px',right:'8px',padding:'6px 10px',background:'#111',color:'#fff',zIndex:9999,borderRadius:'6px',fontSize:'12px',opacity:'0.95'});
      document.body.appendChild(dbg);
    } catch(e){}
  } catch (err) {
    console.error('Error applying profile:', err);
  }
});
