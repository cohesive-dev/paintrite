/* PaintRite Painters — shared chrome + interactions */

const SITE = {
  phone: "(619) 843-9026",
  phoneHref: "tel:+16198439026",
  quoteUrl: "http://paintritepainters.dripjobs.com",
  hours: "Mon–Sat: 7am–7pm &middot; Sun: Closed",
  license: "CSLB Lic. #684193",
};

const NAV = [
  { label: "About", href: "about.html" },
  { label: "Residential", href: "residential.html" },
  { label: "Commercial", href: "commercial.html" },
  { label: "Service Areas", href: "service-areas.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Contact", href: "contact.html" },
];

function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

function renderHeader() {
  const here = currentPage();
  const links = NAV.map(
    (n) =>
      `<li><a href="${n.href}"${n.href === here ? ' class="is-active" aria-current="page"' : ""}>${n.label}</a></li>`
  ).join("");

  return `
  <div class="topbar">
    <div class="wrap topbar__inner">
      <div class="topbar__meta">
        <span>${SITE.hours}</span>
        <a href="${SITE.phoneHref}">${SITE.phone}</a>
      </div>
      <div class="topbar__badges">
        <span>Licensed &amp; Insured</span>
        <span>${SITE.license}</span>
        <span>Serving San Diego since 1994</span>
      </div>
    </div>
  </div>
  <header class="header">
    <div class="wrap header__inner">
      <a href="index.html" class="logo" aria-label="PaintRite Painters home">
        <img src="images/logo.png" alt="PaintRite Painters" width="1024" height="315">
      </a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" id="site-nav">
        <ul class="nav__list">${links}</ul>
        <a href="contact.html" class="btn btn--primary">Get a Quote</a>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  const areas = ["Chula Vista", "Escondido", "Oceanside", "El Cajon", "La Mesa", "Del Mar", "Carlsbad", "Encinitas"];
  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          <div class="footer__logo"><img src="images/logo.png" alt="PaintRite Painters"></div>
          <p>Family owned and operated since 1994. Premiere residential &amp; commercial painting experts serving San Diego County.</p>
          <p style="color:var(--yellow);font-weight:600;margin-bottom:0">"When it's worth doing right, call PaintRite."</p>
          <div class="footer__creds">
            <span class="footer__cred">${SITE.license}</span>
            <span class="footer__cred">Insurance #A9WC2295</span>
            <span class="footer__cred">Google Guaranteed</span>
            <span class="footer__cred">PCA Accredited</span>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="residential.html">Interior Painting</a></li>
            <li><a href="residential.html">Exterior Painting</a></li>
            <li><a href="residential.html">Wood Staining &amp; Painting</a></li>
            <li><a href="commercial.html">Commercial Interior</a></li>
            <li><a href="commercial.html">Commercial Exterior</a></li>
          </ul>
        </div>
        <div>
          <h4>Service Areas</h4>
          <ul>
            ${areas.map((a) => `<li><a href="service-areas.html">${a}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul class="footer__contact">
            <li>
              <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
              <a href="${SITE.phoneHref}">${SITE.phone}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>San Diego, CA</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Mon–Sat: 7am–7pm<br>Sunday: Closed</span>
            </li>
          </ul>
          <a href="contact.html" class="btn btn--primary" style="margin-top:1.2rem">Get a Free Quote</a>
        </div>
      </div>
      <div class="footer__bar">
        <span>&copy; ${new Date().getFullYear()} PaintRite Painters. All rights reserved.</span>
        <span>Locally owned &amp; operated in San Diego, CA &middot; ${SITE.license} &middot; <a href="privacy-policy.html">Privacy Policy</a></span>
      </div>
    </div>
  </footer>`;
}

/* ---------- Mount chrome ---------- */
function mountChrome() {
  const head = document.querySelector("[data-site-header]");
  const foot = document.querySelector("[data-site-footer]");
  if (head) head.innerHTML = renderHeader();
  if (foot) foot.innerHTML = renderFooter();
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    })
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) toggle.click();
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add("is-in"), i * 70);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- FAQ accordion ---------- */
function initFaq() {
  document.querySelectorAll(".faq__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const open = btn.getAttribute("aria-expanded") === "true";

      btn.closest(".faq").querySelectorAll(".faq__q").forEach((other) => {
        other.setAttribute("aria-expanded", "false");
        other.nextElementSibling.style.maxHeight = null;
      });

      if (!open) {
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* ---------- Gallery filters ---------- */
function initFilters() {
  const filters = document.querySelectorAll(".filter");
  if (!filters.length) return;

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((f) => f.classList.remove("is-active"));
      btn.classList.add("is-active");
      const cat = btn.dataset.filter;

      document.querySelectorAll("[data-cat]").forEach((item) => {
        const show = cat === "all" || item.dataset.cat === cat;
        item.style.display = show ? "" : "none";
      });
    });
  });
}

/* ---------- Quote form ---------- */
function initForms() {
  document.querySelectorAll("[data-quote-form]").forEach((form) => {
    const status = form.querySelector(".form-status");
    const submit = form.querySelector('button[type="submit"]');
    const original = submit ? submit.textContent : "";

    const show = (message, ok) => {
      if (!status) return;
      status.textContent = message;
      status.classList.toggle("form-status--error", !ok);
      status.classList.add("is-visible");
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (form.dataset.submitting === "true") return;

      // Let the browser surface its own messages for required/typed fields.
      if (!form.checkValidity()) return form.reportValidity();

      form.dataset.submitting = "true";
      if (submit) {
        submit.disabled = true;
        submit.textContent = "Sending…";
      }

      const lead = Object.fromEntries(new FormData(form).entries());
      const first = (lead.name || "").trim().split(" ")[0];

      try {
        const res = await fetch("/api/intake", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error || "Something went wrong.");
        }
        show(
          `Thanks${first ? ", " + first : ""}! Your request is in — we'll get back to you within one business day. Need us sooner? Call ${SITE.phone}.`,
          true
        );
        form.reset();
      } catch (err) {
        show(
          `${err.message || "We couldn't submit your request."} Please call us at ${SITE.phone}.`,
          false
        );
      } finally {
        form.dataset.submitting = "false";
        if (submit) {
          submit.disabled = false;
          submit.textContent = original;
        }
      }
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  mountChrome();
  initNav();
  initReveal();
  initFaq();
  initFilters();
  initForms();
});
