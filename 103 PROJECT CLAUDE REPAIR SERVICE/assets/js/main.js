/* ÉLORA SPA — main script */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const LANGS = ['ru', 'ky', 'en'];
  const HTML_LANG = { ru: 'ru', ky: 'ky', en: 'en' };
  const PHONE_WA = '996555123456';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Storage (safe) ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } }
  };

  let lang = LANGS.includes(store.get('elora-lang')) ? store.get('elora-lang') : 'ru';
  let lastBooking = null;

  /* ---------- Helpers ---------- */
  const t = (key, vars) => {
    let s = I18N[lang][key] ?? I18N.ru[key] ?? key;
    if (vars) Object.keys(vars).forEach(k => { s = s.split(`{${k}}`).join(vars[k]); });
    return s;
  };

  const fmtNumber = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'en' ? ',' : ' ');
  const fmtPrice = n => (lang === 'en' ? `${t('currency')} ${fmtNumber(n)}` : `${fmtNumber(n)} ${t('currency')}`);

  const fmtDuration = min => {
    if (min < 180) return `${min} ${t('unit.min')}`;
    const h = Math.round(min / 60);
    if (lang === 'en') return `${h} hours`;
    if (lang === 'ky') return `${h} саат`;
    const m10 = h % 10, m100 = h % 100;
    const word = m10 === 1 && m100 !== 11 ? 'час' : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? 'часа' : 'часов';
    return `${h} ${word}`;
  };

  const fmtDate = iso => {
    const [y, m, d] = iso.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    const loc = lang === 'en' ? 'en-GB' : lang === 'ky' ? 'ky-KG' : 'ru-RU';
    try { return date.toLocaleDateString(loc, { day: 'numeric', month: 'long', weekday: 'long' }); }
    catch { return date.toLocaleDateString(); }
  };

  const toISO = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  const srcset = (id, widths, q = 75) => widths.map(w => `${IMG(id, w, q)} ${w}w`).join(', ');

  const allOfferings = () => [
    ...SERVICES.map(s => ({ id: s.id, label: s.name[lang] })),
    ...PACKAGES.map(p => ({ id: p.id, label: `${p.tag[lang]} · ${p.name}` }))
  ];
  const offeringLabel = id => (allOfferings().find(o => o.id === id) || {}).label || '';

  /* ---------- Rendering ---------- */
  function renderServices() {
    const grid = $('#services-grid');
    grid.innerHTML = SERVICES.map((s, i) => `
      <article class="service-card reveal" style="--d:${(i % 3) * 90}ms">
        <div class="service-media">
          <img src="${IMG(s.img, 700)}" srcset="${srcset(s.img, [480, 700, 1000])}"
               sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
               loading="lazy" alt="${s.name[lang]}">
          <span class="service-num">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <div class="service-body">
          <p class="service-meta"><svg class="ic"><use href="#i-clock"/></svg>${fmtDuration(s.min)}</p>
          <h3 class="service-name">${s.name[lang]}</h3>
          <p class="service-desc">${s.desc[lang]}</p>
          <div class="service-foot">
            <p class="service-price">${fmtPrice(s.price)}${s.forTwo ? `<small>${t('price.forTwo')}</small>` : ''}</p>
            <button type="button" class="btn-link" data-book="${s.id}">
              ${t('services.book')}<svg class="ic"><use href="#i-arrow"/></svg>
            </button>
          </div>
        </div>
      </article>`).join('');
  }

  function renderGallery() {
    const grid = $('#gallery-grid');
    grid.innerHTML = GALLERY.map((g, i) => `
      <button type="button" class="gallery-item ${g.cls} reveal" data-index="${i}"
              aria-label="${t('gallery.open')}: ${g.cap[lang]}" style="--d:${(i % 3) * 80}ms">
        <img src="${IMG(g.img, 900)}" srcset="${srcset(g.img, [500, 900, 1300])}"
             sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 40vw" loading="lazy" alt="${g.cap[lang]}">
        <span class="gallery-cap">${g.cap[lang]}</span>
      </button>`).join('');
  }

  function renderPackages() {
    const wrap = $('#packages');
    wrap.innerHTML = PACKAGES.map((p, i) => `
      <article class="package ${p.featured ? 'package--featured' : ''} reveal" style="--d:${i * 90}ms">
        ${p.featured ? `<span class="package-badge">${t('prices.popular')}</span>` : ''}
        <p class="package-tag">${p.tag[lang]}</p>
        <h3 class="package-name">${p.name}</h3>
        <p class="package-price">${fmtPrice(p.price)}</p>
        <p class="package-per">${p.forTwo ? t('price.forTwo') : '&nbsp;'}</p>
        <p class="package-dur"><svg class="ic"><use href="#i-clock"/></svg><span>${t('prices.duration')}:</span> ${p.dur[lang]}</p>
        <ul class="package-list">
          ${p.items[lang].map(item => `<li><svg class="ic"><use href="#i-check"/></svg>${item}</li>`).join('')}
        </ul>
        <button type="button" class="btn ${p.featured ? 'btn-light' : 'btn-outline'} btn-block" data-book="${p.id}">${t('prices.choose')}</button>
      </article>`).join('');
  }

  function renderFooterServices() {
    $('#footer-services').innerHTML = SERVICES.slice(0, 6)
      .map(s => `<li><a href="#services">${s.name[lang]}</a></li>`).join('');
  }

  function renderServiceSelect() {
    const sel = $('#f-service');
    const current = sel.value;
    sel.innerHTML = `
      <option value="">${t('form.selectService')}</option>
      <optgroup label="${t('form.groupServices')}">
        ${SERVICES.map(s => `<option value="${s.id}">${s.name[lang]} — ${fmtPrice(s.price)}</option>`).join('')}
      </optgroup>
      <optgroup label="${t('form.groupPackages')}">
        ${PACKAGES.map(p => `<option value="${p.id}">${p.tag[lang]} · ${p.name} — ${fmtPrice(p.price)}</option>`).join('')}
      </optgroup>`;
    sel.value = current;
  }

  function renderTimeSelect() {
    const sel = $('#f-time');
    const current = sel.value;
    const dateVal = $('#f-date').value;
    const now = new Date();
    const isToday = dateVal === toISO(now);
    const nowMin = now.getHours() * 60 + now.getMinutes() + 30; // 30 min lead time
    let html = `<option value="">${t('form.selectTime')}</option>`;
    for (let m = 9 * 60; m <= 20 * 60 + 30; m += 30) {
      const hh = String(Math.floor(m / 60)).padStart(2, '0');
      const mm = String(m % 60).padStart(2, '0');
      const disabled = isToday && m < nowMin;
      html += `<option value="${hh}:${mm}"${disabled ? ' disabled' : ''}>${hh}:${mm}</option>`;
    }
    sel.innerHTML = html;
    const opt = [...sel.options].find(o => o.value === current && !o.disabled);
    sel.value = opt ? current : '';
  }

  /* ---------- Language ---------- */
  function applyStatic() {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    $$('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });

    document.documentElement.lang = HTML_LANG[lang];
    document.title = t('meta.title');
    const md = $('meta[name="description"]');
    if (md) md.content = t('meta.description');

    $$('[data-lang]').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });

    const waHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(t('wa.default'))}`;
    $$('.js-wa').forEach(a => { a.href = waHref; });
  }

  function setLanguage(next, animate = true) {
    if (!LANGS.includes(next)) return;
    const run = () => {
      lang = next;
      store.set('elora-lang', lang);
      applyStatic();
      renderServices();
      renderGallery();
      renderPackages();
      renderFooterServices();
      renderServiceSelect();
      renderTimeSelect();
      refreshErrors();
      if (lastBooking) showSuccess(lastBooking, false);
      observeReveals(animate); // on a switch, show on-screen items at once
    };
    if (!animate || reduceMotion) return run();
    document.body.classList.add('is-switching');
    setTimeout(() => { run(); requestAnimationFrame(() => document.body.classList.remove('is-switching')); }, 180);
  }

  /* ---------- Reveal on scroll ---------- */
  let io = null;
  function observeReveals(instant = false) {
    const els = $$('.reveal:not(.is-visible)');
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-visible')); return; }
    if (!io) {
      io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    els.forEach(e => {
      // After a language switch, show items already on screen immediately
      if (instant) {
        const r = e.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) { e.classList.add('is-visible', 'no-delay'); return; }
      }
      io.observe(e);
    });
  }

  /* ---------- Header & navigation ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section highlight
  const navLinks = $$('.main-nav a');
  if ('IntersectionObserver' in window) {
    const secIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const id = en.target.id === 'booking' ? 'prices' : en.target.id;
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(s => secIO.observe(s));
  }

  // Mobile menu
  const burger = $('.burger');
  const menu = $('#mobile-menu');
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    if (open) setTimeout(() => $('a', menu).focus(), 250);
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 1024) setMenu(false); });

  // Language buttons
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.lang !== lang) setLanguage(b.dataset.lang);
  }));

  /* ---------- Book buttons (delegated) ---------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-book]');
    if (!btn) return;
    if (lastBooking) resetBooking();
    $('#f-service').value = btn.dataset.book;
    clearError('service');
    $('#booking').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    setTimeout(() => $('#f-name').focus({ preventScroll: true }), reduceMotion ? 0 : 700);
  });

  /* ---------- Gallery lightbox ---------- */
  const lb = $('#lightbox');
  const lbImg = $('#lb-img');
  const lbCap = $('#lb-caption');
  let lbIndex = 0;
  let lbReturn = null;

  const lbShow = i => {
    lbIndex = (i + GALLERY.length) % GALLERY.length;
    const g = GALLERY[lbIndex];
    lbImg.src = IMG(g.img, 1600, 80);
    lbImg.alt = g.cap[lang];
    lbCap.textContent = `${g.cap[lang]}  ·  ${lbIndex + 1} / ${GALLERY.length}`;
  };
  const lbOpen = i => {
    lbReturn = document.activeElement;
    lbShow(i);
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    $('.lb-close', lb).focus();
  };
  const lbClose = () => {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (lbReturn) lbReturn.focus();
  };

  $('#gallery-grid').addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (item) lbOpen(Number(item.dataset.index));
  });
  $('.lb-close', lb).addEventListener('click', lbClose);
  $('.lb-prev', lb).addEventListener('click', () => lbShow(lbIndex - 1));
  $('.lb-next', lb).addEventListener('click', () => lbShow(lbIndex + 1));
  lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });

  // Touch swipe in lightbox
  let touchX = null;
  lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  document.addEventListener('keydown', e => {
    if (lb.classList.contains('is-open')) {
      if (e.key === 'Escape') lbClose();
      if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
      if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      if (e.key === 'Tab') { // simple focus trap
        const f = $$('button', lb);
        const i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    } else if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenu(false);
      burger.focus();
    }
  });

  /* ---------- Booking form ---------- */
  const form = $('#booking-form');
  const fDate = $('#f-date');
  const errors = {}; // field -> i18n key

  const today = new Date();
  const maxDate = new Date(); maxDate.setDate(maxDate.getDate() + 90);
  fDate.min = toISO(today);
  fDate.max = toISO(maxDate);

  function setError(field, key) {
    errors[field] = key;
    const input = form.elements[field];
    const el = $(`#e-${field}`);
    el.textContent = t(key);
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', `e-${field}`);
    input.closest('.field').classList.add('has-error');
  }
  function clearError(field) {
    delete errors[field];
    const input = form.elements[field];
    $(`#e-${field}`).textContent = '';
    input.removeAttribute('aria-invalid');
    input.closest('.field').classList.remove('has-error');
  }
  function refreshErrors() {
    Object.entries(errors).forEach(([f, k]) => { $(`#e-${f}`).textContent = t(k); });
  }

  const validators = {
    name(v) {
      if (!v.trim()) return 'err.required';
      if (v.trim().replace(/[^\p{L}]/gu, '').length < 2) return 'err.name';
      return null;
    },
    phone(v) {
      if (!v.trim()) return 'err.required';
      if (!/^[+\d\s\-()]+$/.test(v)) return 'err.phone';
      const digits = v.replace(/\D/g, '');
      if (digits.length < 9 || digits.length > 15) return 'err.phone';
      return null;
    },
    service(v) { return v ? null : 'err.service'; },
    date(v) {
      if (!v) return 'err.required';
      if (v < fDate.min || v > fDate.max) return 'err.date';
      return null;
    },
    time(v) {
      if (!v) return 'err.time';
      if (fDate.value === toISO(new Date())) {
        const [h, m] = v.split(':').map(Number);
        const n = new Date();
        if (h * 60 + m < n.getHours() * 60 + n.getMinutes() + 30) return 'err.timePast';
      }
      return null;
    }
  };

  const validateField = name => {
    const key = validators[name](form.elements[name].value);
    key ? setError(name, key) : clearError(name);
    return !key;
  };

  Object.keys(validators).forEach(name => {
    const el = form.elements[name];
    el.addEventListener('blur', () => { if (el.value || errors[name]) validateField(name); });
    el.addEventListener(el.tagName === 'SELECT' || el.type === 'date' ? 'change' : 'input', () => {
      if (errors[name]) validateField(name);
    });
  });

  fDate.addEventListener('change', () => {
    renderTimeSelect();
    if (errors.time || form.elements.time.value) validateField('time');
  });

  // Gentle phone formatting: keep +996 prefix readable
  $('#f-phone').addEventListener('focus', e => { if (!e.target.value) e.target.value = '+996 '; });
  $('#f-phone').addEventListener('blur', e => { if (e.target.value.trim() === '+996') e.target.value = ''; });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = Object.keys(validators).map(validateField).every(Boolean);
    if (!ok) {
      const first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    const submit = $('button[type="submit"]', form);
    submit.disabled = true;
    submit.classList.add('is-loading');
    // Simulated request — replace with a real endpoint (CRM, Telegram bot, email service)
    setTimeout(() => {
      submit.disabled = false;
      submit.classList.remove('is-loading');
      lastBooking = data;
      showSuccess(data, true);
    }, 900);
  });

  function showSuccess(d, focus) {
    const name = d.name.trim().split(/\s+/)[0];
    const service = offeringLabel(d.service);
    const date = fmtDate(d.date);
    $('#success-title').textContent = t('success.title', { name });
    $('#success-text').textContent = t('success.text', { phone: d.phone.trim() });
    const rows = [
      [t('form.service'), service],
      [t('form.date'), date],
      [t('form.time'), d.time]
    ];
    if (d.message && d.message.trim()) rows.push([t('form.message'), d.message.trim()]);
    const dl = $('#success-summary');
    dl.innerHTML = '';
    rows.forEach(([k, v]) => {
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = v;
      dl.append(dt, dd);
    });
    const msg = t('success.waMsg', { service, date, time: d.time, name: d.name.trim(), phone: d.phone.trim() });
    $('#success-wa').href = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(msg)}`;
    form.hidden = true;
    const box = $('#booking-success');
    box.hidden = false;
    if (focus) box.focus();
  }

  function resetBooking() {
    lastBooking = null;
    form.reset();
    Object.keys(errors).forEach(clearError);
    renderTimeSelect();
    $('#booking-success').hidden = true;
    form.hidden = false;
  }
  $('#success-new').addEventListener('click', () => { resetBooking(); $('#f-name').focus(); });

  /* ---------- Init ---------- */
  $('#year').textContent = new Date().getFullYear();
  setLanguage(lang, false);
  requestAnimationFrame(() => document.body.classList.add('is-ready'));
})();
