/* ═══════════════════════════════════════════════════════════════════
   site.config.js — Single source of truth for all editable content.

   HOW TO USE
   ──────────
   1. Edit the SITE object below.
   2. Save — changes automatically apply to every page on refresh.
   3. Never edit the "Apply Configuration" section below the SITE object.

   WHAT YOU CAN CHANGE HERE
   ────────────────────────
   • Colors       → SITE.colors  (primary, navy, accent, etc.)
   • Logo         → SITE.company.logo  (file path) + logoAlt (alt text)
   • Phone        → SITE.company.phone + phoneHref
   • Contact info → SITE.company.*
   • Social links → SITE.social  (add / remove entries freely)
   • Hours        → SITE.hours   (set open: false for closed days)
   • Awards       → SITE.awards  (add / remove / reorder freely)
   • Hero section → SITE.hero    (badge, headline, stats, image)
   • Why-Us cards → SITE.whyUs  (icon, title, body for each card)
   • Financing    → SITE.financing  (image + bullet points)
   ═══════════════════════════════════════════════════════════════════ */

const SITE = {

  // ── Company Info ────────────────────────────────────────────────
  company: {
    name:        'SML Roofing',
    tagline:     'Roofing Solutions That Last a Lifetime',
    phone:       '(540) 555-1234',
    phoneHref:   'tel:+15405551234',
    email:       'info@smlroofing.com',
    address:     'Wirtz, VA 24184',
    license:     '2705-XXXXXX',
    serviceArea: 'Smith Mountain Lake, Roanoke, Lynchburg',
    about:       'Serving Smith Mountain Lake, Roanoke, Lynchburg & surrounding communities with expert roofing, siding, and gutter solutions. Locally owned, community-driven, and built on trust.',
    copyright:   '2025 SML Roofing',
    logo:        'Mason Assets/masonlogo.png',
    logoAlt:     'SML Roofing Logo',
  },

  // ── Colors ──────────────────────────────────────────────────────
  // Each value maps to a CSS custom property used across every page.
  // Changing a color here instantly updates all buttons, headings,
  // icons, and accents on every page without touching any HTML or CSS.
  colors: {
    primary:     '#c8102e',   // --red      (buttons, badges, icons)
    primaryDark: '#a50d24',   // --red-dark (hover states)
    navy:        '#0d1b2a',   // --navy     (headings, footer background)
    navyMid:     '#162233',   // --navy-mid (subtle navy variant)
    accent:      '#e8a020',   // --gold     (financing section highlights)
  },

  // ── Social Links ────────────────────────────────────────────────
  // icon: any Font Awesome class string (e.g. 'fa-brands fa-instagram')
  social: [
    { href: 'https://www.linkedin.com/company/mason-roofingva',                  icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/p/Mason-Company-Roofing-100051569756166/', icon: 'fa-brands fa-facebook-f',  label: 'Facebook' },
    { href: 'https://www.youtube.com/@masoncompany_roofing',                     icon: 'fa-brands fa-youtube',     label: 'YouTube'  },
  ],

  // ── Business Hours ──────────────────────────────────────────────
  // Set open: false for days that show as closed.
  hours: [
    { day: 'Monday',    hours: '8am – 6pm', open: true  },
    { day: 'Tuesday',   hours: '8am – 6pm', open: true  },
    { day: 'Wednesday', hours: '8am – 6pm', open: true  },
    { day: 'Thursday',  hours: '8am – 6pm', open: true  },
    { day: 'Friday',    hours: '8am – 6pm', open: true  },
    { day: 'Saturday',  hours: '9am – 2pm', open: true  },
    { day: 'Sunday',    hours: 'Closed',          open: false },
  ],

  // ── Awards & Accreditations ─────────────────────────────────────
  // Shown in the footer badges grid on the home page.
  // Add, remove, or reorder freely — the grid adjusts automatically.
  // icon: any Font Awesome class string
  awards: [
    { icon: 'fa-solid fa-building-columns',   label: 'Better Business Bureau A+' },
    { icon: 'fa-solid fa-house-circle-check', label: 'HomeAdvisor Screened & Approved' },
    { icon: 'fa-solid fa-award',              label: 'GAF Master Elite Contractor 2025' },
    { icon: 'fa-solid fa-handshake',          label: 'Smith Mountain Lake Chamber of Commerce' },
    { icon: 'fa-solid fa-shield-halved',      label: 'Licensed & Fully Insured' },
  ],

  // ── Hero Section (home page only) ──────────────────────────────
  hero: {
    badge:          'GAF Master Elite Contractor 2025 &nbsp;&bull;&nbsp; A+ BBB Rated',
    headline:       'Roofing Solutions',
    headlineAccent: 'That Last a Lifetime',
    subheadline:    'Protect what matters most, with a roof built to last. Expert roofing, siding, and gutter services for homeowners across Smith Mountain Lake and beyond.',
    image:          'Mason Assets/HeroImage.png',
    stats: [
      { value: 500, suffix: '+', label: 'Roofs Installed' },
      { value: 15,  suffix: '+', label: 'Years in Business' },
      { value: 5,   suffix: '★', label: 'Average Rating' },
      { value: 100, suffix: '%', label: 'Satisfaction Guaranteed' },
    ],
  },

  // ── Why-Us Cards (home page only) ──────────────────────────────
  // icon: any Font Awesome class string
  whyUs: [
    {
      icon:  'fa-solid fa-award',
      title: 'GAF Master Elite Certified',
      body:  'Only the top 3% of roofing contractors nationwide earn this designation — guaranteeing superior installation and enhanced warranty protection.',
    },
    {
      icon:  'fa-solid fa-handshake',
      title: 'Honest, Transparent Pricing',
      body:  'No hidden fees, no high-pressure sales tactics. We provide detailed written estimates and walk you through every line item.',
    },
    {
      icon:  'fa-solid fa-shield-halved',
      title: 'Lifetime Workmanship Warranty',
      body:  'We stand behind every nail we drive. Our workmanship warranty gives you lasting peace of mind long after we’ve left.',
    },
    {
      icon:  'fa-solid fa-house-chimney-user',
      title: 'Local Community Roots',
      body:  'Based right here in Wirtz, VA — we protect the homes of our friends, family, and neighbors across Smith Mountain Lake.',
    },
  ],

  // ── Financing Points (home page only) ──────────────────────────
  financing: {
    image: 'Mason Assets/RoofingImageRate.png',
    points: [
      { bold: '0% Interest Financing',      text: '— Keep more money in your pocket' },
      { bold: '$0 Down',                     text: '— Start your project with no upfront cost' },
      { bold: 'Affordable Monthly Payments', text: '— Tailored to fit your budget' },
      { bold: 'No Collateral Required',      text: '— Unsecured financing options available' },
      { bold: 'Funds in 1–5 Business Days', text: '— Get started fast' },
      { bold: 'Soft Credit Pull',            text: '— Checking your rate won’t affect your score' },
    ],
  },

};

/* ═══════════════════════════════════════════════════════════════════
   Apply Configuration
   Runs automatically on every page. Do not edit below this line.
   ═══════════════════════════════════════════════════════════════════ */

// 1. Colors — applied synchronously before any rendering so there is
//    no flash of the wrong color scheme.
(function () {
  var r = document.documentElement.style;
  r.setProperty('--red',       SITE.colors.primary);
  r.setProperty('--red-dark',  SITE.colors.primaryDark);
  r.setProperty('--navy',      SITE.colors.navy);
  r.setProperty('--navy-mid',  SITE.colors.navyMid);
  r.setProperty('--gold',      SITE.colors.accent);
})();

// 2. Content — applied after the DOM is ready.
//    Registered first (script is in <head>) so it fires before the
//    inline page scripts that set up scroll animations.
document.addEventListener('DOMContentLoaded', function () {

  // ── Logos (all pages) ──────────────────────────────────────────
  document.querySelectorAll('.site-logo').forEach(function (img) {
    img.src = SITE.company.logo;
    img.alt = SITE.company.logoAlt;
  });

  // ── Phone links (all pages) ────────────────────────────────────
  document.querySelectorAll('.site-phone').forEach(function (el) {
    el.href = SITE.company.phoneHref;
    var icon = el.querySelector('i');
    el.textContent = SITE.company.phone;
    if (icon) el.prepend(icon);
  });

  // ── Footer: about text ─────────────────────────────────────────
  var footerAbout = document.getElementById('footer-about');
  if (footerAbout) footerAbout.textContent = SITE.company.about;

  // ── Footer: contact list ───────────────────────────────────────
  var contactList = document.getElementById('footer-contact-list');
  if (contactList) {
    contactList.innerHTML =
      '<li><i class="fa-solid fa-location-dot"></i><span>' + SITE.company.address + '</span></li>' +
      '<li><i class="fa-solid fa-phone"></i><a href="' + SITE.company.phoneHref + '">' + SITE.company.phone + '</a></li>' +
      '<li><i class="fa-solid fa-envelope"></i><a href="mailto:' + SITE.company.email + '">' + SITE.company.email + '</a></li>' +
      '<li><i class="fa-solid fa-id-card"></i><span>VA Contractor License #<strong style="color:rgba(255,255,255,0.85);">' + SITE.company.license + '</strong></span></li>';
  }

  // ── Footer: social links ───────────────────────────────────────
  var socialEl = document.getElementById('footer-social');
  if (socialEl) {
    socialEl.innerHTML = SITE.social.map(function (s) {
      return '<a href="' + s.href + '" class="social-btn" aria-label="' + s.label + '" target="_blank" rel="noopener noreferrer"><i class="' + s.icon + '"></i></a>';
    }).join('');
  }

  // ── Footer: business hours ─────────────────────────────────────
  var hoursEl = document.getElementById('footer-hours');
  if (hoursEl) {
    hoursEl.innerHTML = SITE.hours.map(function (h) {
      return '<div class="day-row"><span>' + h.day + '</span><span class="' + (h.open ? 'open' : 'closed') + '">' + h.hours + '</span></div>';
    }).join('');
  }

  // ── Footer: awards / badges ────────────────────────────────────
  var badgesGrid = document.getElementById('badges-grid');
  if (badgesGrid) {
    badgesGrid.innerHTML = SITE.awards.map(function (a) {
      return '<div class="badge-item"><i class="' + a.icon + '"></i><span>' + a.label + '</span></div>';
    }).join('');
  }

  // ── Footer: service area ───────────────────────────────────────
  var serviceAreaEl = document.getElementById('footer-service-area');
  if (serviceAreaEl) {
    serviceAreaEl.innerHTML =
      '<i class="fa-solid fa-location-dot"></i> Proudly serving <strong style="color:rgba(255,255,255,0.65);">' +
      SITE.company.serviceArea +
      '</strong> &amp; surrounding areas in Virginia';
  }

  // ── Footer: copyright ──────────────────────────────────────────
  var copyrightEl = document.getElementById('footer-copyright');
  if (copyrightEl) copyrightEl.textContent = '© ' + SITE.company.copyright + '. All rights reserved.';

  // ════════════════════════════════════════════════════════════════
  //  HOME PAGE SECTIONS
  //  (IDs only present on roofing-landing.html — safe to skip elsewhere)
  // ════════════════════════════════════════════════════════════════

  // ── Hero: badge ────────────────────────────────────────────────
  var heroBadge = document.getElementById('hero-badge');
  if (heroBadge) heroBadge.innerHTML = SITE.hero.badge;

  // ── Hero: heading ──────────────────────────────────────────────
  var heroHeading = document.getElementById('hero-heading');
  if (heroHeading) heroHeading.innerHTML = SITE.hero.headline + '<span>' + SITE.hero.headlineAccent + '</span>';

  // ── Hero: sub-headline ─────────────────────────────────────────
  var heroSub = document.getElementById('hero-sub');
  if (heroSub) heroSub.textContent = SITE.hero.subheadline;

  // ── Hero: stats ────────────────────────────────────────────────
  var heroStats = document.getElementById('hero-stats');
  if (heroStats) {
    heroStats.innerHTML = SITE.hero.stats.map(function (s) {
      return '<div><div class="hero-stat-num">' + s.value + '<span>' + s.suffix + '</span></div><div class="hero-stat-label">' + s.label + '</div></div>';
    }).join('');
  }

  // ── Hero: background image ─────────────────────────────────────
  var heroBg = document.getElementById('heroBg');
  if (heroBg) {
    heroBg.style.backgroundImage = "url('" + SITE.hero.image + "')";
    var preload = new Image();
    preload.onload = function () { heroBg.classList.add('loaded'); };
    preload.src = SITE.hero.image;
  }

  // ── Financing: image ───────────────────────────────────────────
  var financingImg = document.getElementById('financing-img');
  if (financingImg) financingImg.src = SITE.financing.image;

  // ── Financing: bullet points ───────────────────────────────────
  var financingPoints = document.getElementById('financing-points');
  if (financingPoints) {
    financingPoints.innerHTML = SITE.financing.points.map(function (p) {
      return '<li><i class="fa-solid fa-circle-check"></i><span><strong style="color:#fff;">' + p.bold + '</strong> ' + p.text + '</span></li>';
    }).join('');
  }

  // ── Why-Us: cards ──────────────────────────────────────────────
  var whyGrid = document.getElementById('why-grid');
  if (whyGrid) {
    whyGrid.innerHTML = SITE.whyUs.map(function (card) {
      return '<div class="why-card">' +
        '<div class="why-icon"><i class="' + card.icon + '"></i></div>' +
        '<h4>' + card.title + '</h4>' +
        '<p>' + card.body + '</p>' +
        '</div>';
    }).join('');
  }

});
