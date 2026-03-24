/* ============================================================
   TACTICAL NOIR — INTERACTIVE ENGINE
   Three.js Particle Field + HUD Systems + Micro-interactions
   ============================================================ */

(function () {
  'use strict';

  // ── STATE ──
  const state = {
    mouse: { x: 0, y: 0, nx: 0, ny: 0 },
    scroll: 0,
    soundEnabled: false,
    audioCtx: null,
    heroVisible: true,
    typingStarted: false,
    barsAnimated: false,
    radarDrawn: false
  };

  // ── INITIALIZATION ──
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initTimestamp();
    initThreeJS();
    initCustomCursor();
    initHeroReticle();
    initScrollObserver();
    initRevealObserver();
    initBarObserver();
    initRadarObserver();
    initSidebarNav();
    initSoundSystem();
    initHeroTyping();
    initTerminalType();
    initSmoothScroll();
  }

  // ── TIMESTAMP ──
  function initTimestamp() {
    const el = document.getElementById('currentTimestamp');
    if (el) {
      const now = new Date();
      el.textContent = now.toISOString().replace('T', ' // ').slice(0, 22) + ' UTC';
    }
  }

  // ── THREE.JS PARTICLE STAR-FIELD ──
  function initThreeJS() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);

    // Particle geometry
    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600;
      sizes[i] = Math.random() * 2 + 0.5;
      alphas[i] = Math.random() * 0.6 + 0.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor: { value: new THREE.Color(0x00ff41) },
        uOpacity: { value: 0.6 }
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform vec2 uMouse;
        varying float vAlpha;

        void main() {
          vec3 pos = position;

          // Slow drift
          pos.x += sin(uTime * 0.1 + position.y * 0.01) * 2.0;
          pos.y += cos(uTime * 0.08 + position.x * 0.01) * 1.5;
          pos.z += sin(uTime * 0.06 + position.z * 0.01) * 1.0;

          // Mouse influence
          float dist = length(pos.xy - uMouse * 300.0);
          float influence = smoothstep(200.0, 0.0, dist);
          pos.xy += normalize(pos.xy - uMouse * 300.0) * influence * 15.0;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (200.0 / -mvPosition.z);

          vAlpha = smoothstep(600.0, 100.0, -mvPosition.z) * 0.7;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vAlpha;

        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, d) * vAlpha * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Grid lines (subtle)
    const gridMat = new THREE.LineBasicMaterial({ color: 0x00ff41, transparent: true, opacity: 0.03 });
    for (let i = -400; i <= 400; i += 80) {
      const geoH = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-400, i, -100),
        new THREE.Vector3(400, i, -100)
      ]);
      const geoV = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(i, -400, -100),
        new THREE.Vector3(i, 400, -100)
      ]);
      scene.add(new THREE.Line(geoH, gridMat));
      scene.add(new THREE.Line(geoV, gridMat));
    }

    // Mouse tracking
    window.addEventListener('mousemove', (e) => {
      state.mouse.nx = (e.clientX / window.innerWidth) * 2 - 1;
      state.mouse.ny = -(e.clientY / window.innerHeight) * 2 + 1;
      state.mouse.x = e.clientX;
      state.mouse.y = e.clientY;
    });

    // Resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsed;
      material.uniforms.uMouse.value.set(
        THREE.MathUtils.lerp(material.uniforms.uMouse.value.x, state.mouse.nx, 0.05),
        THREE.MathUtils.lerp(material.uniforms.uMouse.value.y, state.mouse.ny, 0.05)
      );

      // Subtle camera sway
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.nx * 20, 0.02);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.ny * 15, 0.02);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();
  }

  // ── CUSTOM CURSOR ──
  function initCustomCursor() {
    const reticle = document.getElementById('cursorReticle');
    if (!reticle) return;

    let cx = 0, cy = 0;

    function updateCursor() {
      cx += (state.mouse.x - cx) * 0.15;
      cy += (state.mouse.y - cy) * 0.15;
      reticle.style.left = cx + 'px';
      reticle.style.top = cy + 'px';
      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Scale cursor on interactive elements
    const interactives = document.querySelectorAll('a, button, .glass-card, .tech-tag, .competence-item, .intel-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        reticle.style.transform = 'translate(-50%, -50%) scale(1.5)';
        reticle.querySelector('svg').style.opacity = '1';
        playClickSound();
      });
      el.addEventListener('mouseleave', () => {
        reticle.style.transform = 'translate(-50%, -50%) scale(1)';
        reticle.querySelector('svg').style.opacity = '0.7';
      });
    });
  }

  // ── HERO TARGETING RETICLE ──
  function initHeroReticle() {
    const reticle = document.getElementById('heroReticle');
    const heroSection = document.getElementById('hero');
    if (!reticle || !heroSection) return;

    let rx = 0, ry = 0;

    function updateReticle() {
      if (state.heroVisible) {
        rx += (state.mouse.x - rx) * 0.04;
        ry += (state.mouse.y - ry) * 0.04;
        reticle.style.left = rx + 'px';
        reticle.style.top = ry + 'px';
        reticle.style.opacity = '0.6';
      } else {
        reticle.style.opacity = '0';
      }
      requestAnimationFrame(updateReticle);
    }
    updateReticle();

    // Track hero visibility
    const observer = new IntersectionObserver(([entry]) => {
      state.heroVisible = entry.isIntersecting;
    }, { threshold: 0.3 });
    observer.observe(heroSection);
  }

  // ── SCROLL PROGRESS (Altitude Meter) ──
  function initScrollObserver() {
    const fill = document.getElementById('altitudeFill');
    const marker = document.getElementById('altitudeMarker');
    const value = document.getElementById('altitudeValue');

    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      state.scroll = progress;

      if (fill) fill.style.height = (progress * 100) + '%';
      if (marker) marker.style.bottom = (progress * 100) + '%';
      if (value) value.textContent = String(Math.round(progress * 9999)).padStart(4, '0');
    }, { passive: true });
  }

  // ── SCROLL REVEAL (Intersection Observer) ──
  function initRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('shutter-in');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  // ── BAR FILL ANIMATION ──
  function initBarObserver() {
    const modulesSection = document.getElementById('modules');
    if (!modulesSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !state.barsAnimated) {
        state.barsAnimated = true;
        const bars = modulesSection.querySelectorAll('.bar-fill');
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.level + '%';
          }, i * 40);
        });
      }
    }, { threshold: 0.2 });
    observer.observe(modulesSection);
  }

  // ── RADAR CHART ──
  function initRadarObserver() {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !state.radarDrawn) {
        state.radarDrawn = true;
        drawRadar(canvas);
      }
    }, { threshold: 0.3 });
    observer.observe(canvas);
  }

  function drawRadar(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(cx, cy) - 50;
    const labels = ['Teamwork', 'Problem-solving', 'Communication', 'Leadership', 'Creativity', 'Visionary'];
    const values = [0.9, 0.85, 0.9, 0.8, 0.88, 0.82]; // normalized 0-1
    const n = labels.length;

    // Animate
    let progress = 0;
    function animateRadar() {
      progress = Math.min(progress + 0.02, 1);
      ctx.clearRect(0, 0, w, h);

      const eased = easeOutCubic(progress);

      // Draw grid rings
      for (let ring = 1; ring <= 5; ring++) {
        const r = (ring / 5) * maxR;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
          const px = cx + r * Math.cos(angle);
          const py = cy + r * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw axis lines
      for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw data polygon
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const idx = i % n;
        const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
        const r = values[idx] * maxR * eased;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.fillStyle = 'rgba(0,255,65,0.08)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,255,65,0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw data points
      for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const r = values[i] * maxR * eased;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff41';
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,255,65,0.15)';
        ctx.fill();
      }

      // Draw labels
      ctx.font = '10px JetBrains Mono';
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const lr = maxR + 28;
        const lx = cx + lr * Math.cos(angle);
        const ly = cy + lr * Math.sin(angle);
        ctx.fillText(labels[i].toUpperCase(), lx, ly);
      }

      if (progress < 1) requestAnimationFrame(animateRadar);
    }
    animateRadar();
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // ── SIDEBAR NAVIGATION ──
  function initSidebarNav() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.hud-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // ── SOUND SYSTEM ──
  function initSoundSystem() {
    const toggle = document.getElementById('soundToggle');
    const icon = document.getElementById('soundIcon');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      if (state.soundEnabled) {
        if (!state.audioCtx) {
          state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        icon.textContent = '◼ UNMUTED';
        playClickSound();
      } else {
        icon.textContent = '◻ MUTED';
      }
    });
  }

  function playClickSound() {
    if (!state.soundEnabled || !state.audioCtx) return;
    try {
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(state.audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, state.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, state.audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.03, state.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, state.audioCtx.currentTime + 0.08);
      osc.start(state.audioCtx.currentTime);
      osc.stop(state.audioCtx.currentTime + 0.08);
    } catch (e) { /* Silently fail */ }
  }

  function playHumSound() {
    if (!state.soundEnabled || !state.audioCtx) return;
    try {
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(state.audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(60, state.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, state.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, state.audioCtx.currentTime + 0.3);
      osc.start(state.audioCtx.currentTime);
      osc.stop(state.audioCtx.currentTime + 0.3);
    } catch (e) { /* Silently fail */ }
  }

  // ── HERO SUBTITLE TYPING ──
  function initHeroTyping() {
    const el = document.getElementById('heroSubtitle');
    if (!el) return;

    const text = 'MENDIX EXPERT // LEAD DEVELOPER';
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(typeChar, 60 + Math.random() * 40);
      }
    }
    setTimeout(typeChar, 800);
  }

  // ── MISSION BRIEFING TYPEWRITER ──
  function initBriefingTypewriter() {
    if (state.typingStarted) return;
    state.typingStarted = true;

    const el = document.getElementById('briefingText');
    const cursor = document.getElementById('briefingCursor');
    if (!el) return;

    const fullText = el.dataset.fullText || '';
    let idx = 0;
    el.textContent = '';

    function typeNext() {
      if (idx < fullText.length) {
        el.textContent += fullText[idx];
        idx++;
        const delay = fullText[idx - 1] === '.' ? 300 : fullText[idx - 1] === ',' ? 150 : 18 + Math.random() * 22;
        setTimeout(typeNext, delay);
      } else if (cursor) {
        // Keep cursor blinking after done
      }
    }
    typeNext();
    playHumSound();
  }

  // ── TERMINAL TYPE EFFECT (for timeline descriptions) ──
  function initTerminalType() {
    const terminalEls = document.querySelectorAll('.terminal-type');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!el.classList.contains('typed')) {
            el.classList.add('typed');
            playHumSound();
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    terminalEls.forEach(el => observer.observe(el));

    // Also observe briefing section for typewriter
    const briefingSection = document.getElementById('briefing');
    if (briefingSection) {
      const briefingObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          initBriefingTypewriter();
          briefingObserver.unobserve(entry.target);
        }
      }, { threshold: 0.4 });
      briefingObserver.observe(briefingSection);
    }
  }

  // ── SMOOTH SCROLL FOR SIDEBAR LINKS ──
  function initSmoothScroll() {
    document.querySelectorAll('.hud-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          playClickSound();
        }
      });
    });
  }

})();
