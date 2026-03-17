/**
 * Wyoming LLC Guide — script.js  v2
 * ------------------------------------
 * 1. Copyright year
 * 2. Mobile nav toggle
 * 3. FAQ accordion
 * 4. Smooth scroll fallback (older browsers)
 * 5. Scroll spy — highlight active nav link
 * 6. Email form UX (AJAX option commented out, ready to enable)
 */

// =============================================
// 1. Copyright Year
// =============================================
(function () {
  var el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
})();

// =============================================
// 2. Mobile Navigation Toggle
// =============================================
(function () {
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close when a link is clicked
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    var nav = document.getElementById('site-nav');
    if (nav && !nav.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// =============================================
// 3. FAQ Accordion
// =============================================
(function () {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    var btn    = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      items.forEach(function (other) {
        var ob = other.querySelector('.faq-question');
        var oa = other.querySelector('.faq-answer');
        if (ob && oa && other !== item) {
          ob.setAttribute('aria-expanded', 'false');
          oa.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      answer.hidden = expanded;
    });
  });
})();

// =============================================
// 4. Smooth Scroll Fallback (for older browsers)
// =============================================
(function () {
  if ('scrollBehavior' in document.documentElement.style) return;
  var NAV_H = 72;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id     = this.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - NAV_H, behavior: 'smooth' });
    });
  });
})();

// =============================================
// 5. Scroll Spy — Active Nav Link
// =============================================
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navAs    = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navAs.length) return;

  function update() {
    var pos = window.pageYOffset + 90;
    var current = '';
    sections.forEach(function (s) {
      if (s.offsetTop <= pos) current = s.id;
    });
    navAs.forEach(function (a) {
      if (a.classList.contains('nav-cta')) return;
      a.style.color = (a.getAttribute('href').slice(1) === current) ? 'var(--accent)' : '';
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () { update(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  update();
})();

// =============================================
// 6. Email Form
// =============================================
(function () {
  var form = document.getElementById('checklist-form');
  if (!form) return;

  /*
   * OPTION A (default): standard HTML form POST.
   * Just set the correct action URL — works with
   * Formspree, ConvertKit, Mailchimp, etc.
   * No extra code needed here.
   *
   * OPTION B: uncomment below for AJAX / no-redirect.
   * Works well with Formspree's JSON API.
   */

  /*
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      if (res.ok) {
        form.innerHTML =
          '<p style="color:#fff;font-size:1.125rem;font-weight:600;text-align:center;padding:2rem 0;">' +
          '✓ Sent! Check your inbox for the checklist.</p>';
      } else {
        btn.textContent = 'Send Me the Checklist';
        btn.disabled = false;
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(function () {
      btn.textContent = 'Send Me the Checklist';
      btn.disabled = false;
      alert('Could not send. Check your connection and try again.');
    });
  });
  */
})();
