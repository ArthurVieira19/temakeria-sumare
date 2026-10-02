/* Temakeria.com Sumaré — interações */
(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Aberto agora (fuso de São Paulo, todos os dias) ---------- */
  const PERIODS = [
    { id: 'lunch', open: 11 * 60, close: 15 * 60 },
    { id: 'dinner', open: 18 * 60, close: 23 * 60 },
  ];

  function nowInSaoPaulo() {
    const parts = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (type) => Number(parts.find((p) => p.type === type).value);
    return get('hour') * 60 + get('minute');
  }

  const fmt = (min) => `${Math.floor(min / 60)}h`;

  function getStatus() {
    const now = nowInSaoPaulo();
    const current = PERIODS.find((p) => now >= p.open && now < p.close);
    if (current) {
      const left = current.close - now;
      const text = left <= 30
        ? `<strong>Aberto agora</strong> · fecha em ${left} min`
        : `<strong>Aberto agora</strong> · fecha às ${fmt(current.close)}`;
      return { open: true, period: current.id, text };
    }
    const next = PERIODS.find((p) => now < p.open);
    return {
      open: false,
      period: null,
      text: next ? `Fechado agora · abre às ${fmt(next.open)}` : `Fechado agora · abre amanhã às ${fmt(PERIODS[0].open)}`,
    };
  }

  function renderStatus() {
    const status = getStatus();
    $$('[data-status-pill]').forEach((el) => {
      el.classList.toggle('is-open', status.open);
      const text = $('[data-status-text]', el);
      if (text) text.innerHTML = status.text;
    });
    $$('[data-period]').forEach((row) => {
      row.classList.toggle('is-current', row.dataset.period === status.period);
    });
  }

  renderStatus();
  setInterval(renderStatus, 60 * 1000);

  /* ---------- Header: estado ao rolar + menu mobile ---------- */
  const header = $('[data-header]');
  const burger = $('[data-burger]');
  const fab = $('.fab-whats');
  const hero = $('.hero');

  function setMenu(open) {
    header.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
  $$('[data-nav] a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      setMenu(false);
      burger.focus();
    }
  });
  window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => {
    if (e.matches) setMenu(false);
  });

  /* Link ativo na navegação */
  const navLinks = $$('.nav__list a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((a) => {
    const target = $(a.getAttribute('href'));
    if (target) sectionObserver.observe(target);
  });

  /* ---------- Revelação no scroll ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal]').forEach((el) => revealObserver.observe(el));

  /* ---------- Vitrine horizontal fixada (desktop) ---------- */
  const showcase = $('[data-showcase]');
  const rail = $('[data-rail]');
  const progress = $('[data-progress]');
  const desktopMq = window.matchMedia('(min-width: 1024px)');
  let pinDistance = 0;

  function setupShowcase() {
    const enable = desktopMq.matches && !reducedMotion.matches;
    showcase.classList.toggle('is-pinned', enable);
    if (!enable) {
      showcase.style.height = '';
      rail.style.transform = '';
      pinDistance = 0;
      return;
    }
    pinDistance = Math.max(0, rail.scrollWidth - window.innerWidth);
    showcase.style.height = `${pinDistance + window.innerHeight}px`;
  }

  function updateShowcase() {
    if (!pinDistance) return;
    const top = showcase.getBoundingClientRect().top;
    const p = Math.min(1, Math.max(0, -top / pinDistance));
    rail.style.transform = `translate3d(${-p * pinDistance}px, 0, 0)`;
    if (progress) progress.style.transform = `scaleX(${p})`;
  }

  /* ---------- Parallax e prato girando ---------- */
  const spinEl = $('[data-spin]');
  const parallaxEls = $$('[data-parallax]');

  function updateMotion() {
    if (reducedMotion.matches) return;
    const y = window.scrollY;
    if (spinEl && y < window.innerHeight * 1.2) spinEl.style.rotate = `${y * 0.06}deg`;
    parallaxEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.translate = `0 ${center * Number(el.dataset.parallax)}px`;
    });
  }

  /* ---------- Loop de scroll ---------- */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 24);
      if (fab) fab.classList.toggle('is-visible', y > hero.offsetHeight * 0.7);
      updateShowcase();
      updateMotion();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { setupShowcase(); onScroll(); }, 150);
  });
  desktopMq.addEventListener('change', () => { setupShowcase(); onScroll(); });
  reducedMotion.addEventListener('change', () => { setupShowcase(); onScroll(); });

  setupShowcase();
  onScroll();
  // recalcula depois que fontes e imagens carregam (largura do trilho muda)
  window.addEventListener('load', () => { setupShowcase(); onScroll(); });
  if (document.fonts) document.fonts.ready.then(() => { setupShowcase(); onScroll(); });

  /* ---------- Abas do rodízio ---------- */
  $$('[data-tabs]').forEach((tabs) => {
    const tabList = $$('[role="tab"]', tabs);

    function select(tab, focus = false) {
      tabList.forEach((t) => {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        t.tabIndex = selected ? 0 : -1;
        $(`#${t.getAttribute('aria-controls')}`).hidden = !selected;
      });
      if (focus) tab.focus();
    }

    tabList.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowRight') next = tabList[(i + 1) % tabList.length];
        if (e.key === 'ArrowLeft') next = tabList[(i - 1 + tabList.length) % tabList.length];
        if (e.key === 'Home') next = tabList[0];
        if (e.key === 'End') next = tabList[tabList.length - 1];
        if (next) {
          e.preventDefault();
          select(next, true);
        }
      });
    });
  });

  /* ---------- Lightbox da galeria ---------- */
  const lightbox = $('[data-lightbox]');
  const lbImg = $('[data-lightbox-img]');
  const lbCaption = $('[data-lightbox-caption]');
  const items = $$('[data-gallery] [data-full]');
  let index = 0;
  let lastFocus = null;

  function show(i) {
    index = (i + items.length) % items.length;
    const item = items[index];
    lbImg.src = item.dataset.full;
    lbImg.alt = item.dataset.caption;
    lbCaption.textContent = item.dataset.caption;
  }

  if (lightbox && typeof lightbox.showModal === 'function') {
    items.forEach((item, i) => {
      item.addEventListener('click', () => {
        lastFocus = item;
        show(i);
        lightbox.showModal();
        document.body.style.overflow = 'hidden';
      });
    });
    $('[data-lightbox-close]').addEventListener('click', () => lightbox.close());
    $('[data-lightbox-prev]').addEventListener('click', () => show(index - 1));
    $('[data-lightbox-next]').addEventListener('click', () => show(index + 1));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') show(index + 1);
      if (e.key === 'ArrowLeft') show(index - 1);
    });
    lightbox.addEventListener('close', () => {
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    });
  }

  /* ---------- Ano no rodapé ---------- */
  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
