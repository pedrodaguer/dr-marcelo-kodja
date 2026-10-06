/* ============================================================
   Dr. Marcelo Kodja - interacoes v2 (Vanilla JS, sem dependencias)
   Escopado ao #mk-site. Fail-safe: se o JS falhar, o conteudo
   permanece visivel (nunca preso em opacity:0).
   ============================================================ */
(function () {
  "use strict";
  var site = document.getElementById("mk-site");
  if (!site) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  site.classList.add("is-ready");

  var y = site.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Nav + barra de progresso ---- */
  var nav = site.querySelector(".mk-nav");
  var bar = site.querySelector(".mk-progress span");
  function onScroll() {
    var sy = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", sy > 40);
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (sy / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var burger = site.querySelector(".mk-burger");
  var drawer = site.querySelector(".mk-drawer");
  function setMenu(open) {
    if (!drawer || !burger) return;
    drawer.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (burger) burger.addEventListener("click", function () { setMenu(!drawer.classList.contains("open")); });
  if (drawer) drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  /* ---- Ancoras com offset ---- */
  site.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      var target = site.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var navH = nav ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navH + 1;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---- Reveal com stagger ---- */
  var reveals = site.querySelectorAll(".reveal, .reveal-l, .reveal-r, .reveal-s");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var group = Array.prototype.filter.call(el.parentElement.children, function (c) {
          return c.className && /reveal/.test(c.className);
        });
        var idx = group.indexOf(el);
        el.style.transitionDelay = Math.min(idx, 6) * 0.08 + "s";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Contadores ---- */
  function runCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var dur = 1500, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  var counters = site.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && !reduce) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  }

  /* ---- Acordeao ---- */
  site.querySelectorAll(".mk-accordion__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = btn.nextElementSibling;
      btn.classList.toggle("open");
      if (panel) panel.classList.toggle("open");
    });
  });

  /* ---- Link ativo ---- */
  var sections = site.querySelectorAll("section[id]");
  var navLinks = site.querySelectorAll(".mk-nav-links a");
  window.addEventListener("scroll", function () {
    var cur = "";
    sections.forEach(function (s) { if (window.scrollY >= s.offsetTop - 160) cur = s.id; });
    navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + cur); });
  }, { passive: true });

  /* ---- Lite YouTube (carrega o iframe so no clique) ---- */
  site.querySelectorAll("[data-yt]").forEach(function (box) {
    box.addEventListener("click", function () {
      if (box.querySelector("iframe")) return;
      var id = box.getAttribute("data-yt");
      var f = document.createElement("iframe");
      f.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0");
      f.setAttribute("title", "Vídeo do caso clínico");
      f.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      f.setAttribute("allowfullscreen", "");
      box.appendChild(f);
    });
  });
})();
