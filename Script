/**
 * Wyoming LLC Guide — script.js
 * --------------------------------
 * Features:
 *  1. Copyright year in footer
 *  2. Mobile nav toggle
 *  3. FAQ accordion
 *  4. Smooth scroll for anchor links (fallback for older browsers)
 *  5. Active nav link highlight on scroll
 *  6. Close mobile nav when a link is clicked
 */

// =============================================
// 1. Copyright Year
// =============================================
(function setCopyrightYear() {
  var el = document.getElementById('copyright-year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();


// =============================================
// 2. Mobile Navigation Toggle
// =============================================
(function initMobileNav() {
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      navLinks.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close mobile nav when any nav link is clicked
  var links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function (event) {
    var nav = document.getElementById('site-nav');
    if (nav && !nav.contains(event.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();


// =============================================
// 3. FAQ Accordion
// =============================================
(function initFAQ() {
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var button = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    if (!button || !answer) return;

    button.addEventListener('click', function () {
      var isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all other FAQ items (optional — comment out for multi-open behavior)
      faqItems.forEach(function (otherItem) {
        var otherButton = otherItem.querySelector('.faq-question');
        var otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherButton && otherAnswer && otherItem !== item) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherAnswer.hidden = true;
        }
      });

      // Toggle current item
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
      } else {
        button.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
})();


// =============================================
// 4. Smooth Scroll Fallback
// (CSS scroll-behavior handles modern browsers;
//  this is a lightweight fallback for older ones)
// =============================================
(function initSmoothScroll() {
  // Only run if CSS smooth scroll is not supported
  if ('scrollBehavior' in document.documentElement.style) return;

  var navHeight = 60; // match --nav-height in CSS

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      var targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });
})();


// =============================================
// 5. Active Nav Link on Scroll
// (Highlights the nav link for the visible section)
// =============================================
(function initScrollSpy() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  var navHeight = 80; // offset

  function onScroll() {
    var scrollPos = window.pageYOffset + navHeight + 20;
    var currentSection = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href').slice(1); // remove #
      if (href === currentSection) {
        link.style.color = 'var(--color-accent)';
      } else {
        // Reset non-CTA links
        if (!link.classList.contains('nav-cta')) {
          link.style.color = '';
        }
      }
    });
  }

  // Throttle scroll events for performance
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Run once on load
  onScroll();
})();


// =============================================
// 6. Email Form — Basic UX Enhancement
// (Shows a simple success message on submit.
//  Replace or remove this if your email service
//  redirects to its own confirmation page.)
// =============================================
(function initEmailForm() {
  var form = document.getElementById('checklist-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // ----------------------------------------
    // OPTION A (current): Let the form POST to
    // your action URL normally. This works with
    // Formspree, ConvertKit, Mailchimp, etc.
    // Just make sure your form action is set.
    //
    // OPTION B: If you want to handle the
    // submission with fetch (AJAX), uncomment
    // the block below and add your API logic.
    // ----------------------------------------

    /*
    // --- OPTION B: AJAX fetch example ---
    e.preventDefault();

    var data = new FormData(form);
    var submitBtn = form.querySelector('[type="submit"]');

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      if (res.ok) {
        form.innerHTML =
          '<p style="color:#fff;font-size:1.1rem;font-weight:600;text-align:center;padding:1.5rem 0;">' +
          '✓ Sent! Check your inbox for the checklist.' +
          '</p>';
      } else {
        submitBtn.textContent = 'Send Me the Checklist';
        submitBtn.disabled = false;
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(function () {
      submitBtn.textContent = 'Send Me the Checklist';
      submitBtn.disabled = false;
      alert('Could not send. Please check your connection and try again.');
    });
    */
  });
})();
