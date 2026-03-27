/**
 * TRUE NORTH WATCHES — Main Application Script
 */

/* ================================================================
   NAVIGATION — scroll + hamburger
================================================================ */
(function initNav() {
  const nav  = document.getElementById("nav");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!nav) return;

  // Scroll behavior
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    lastScroll = y;
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Close on link click
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
})();

/* ================================================================
   REVEAL ANIMATIONS — Intersection Observer
================================================================ */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  els.forEach(el => observer.observe(el));
})();

/* ================================================================
   WATCH CARDS — render engine
================================================================ */
function renderWatchCard(watch, options = {}) {
  const { compact = false } = options;

  const priceHtml = watch.price > 0
    ? `<div class="watch-card__price">${formatPrice(watch.price)}</div>`
    : `<div class="watch-card__price price-on-request">Price on Request</div>`;

  const badgeHtml = watch.isRare
    ? `<span class="watch-card__badge watch-card__badge--rare">Rare</span>`
    : watch.isNew
    ? `<span class="watch-card__badge watch-card__badge--new">New In</span>`
    : "";

  const soldClass = watch.status === "sold" ? " watch-card--sold" : "";
  const featuredClass = watch.featured && !compact ? " watch-card--featured" : "";

  const mediaHtml = watch.image
    ? `<img class="watch-card__img" src="${watch.image}" alt="${watch.brand} ${watch.model}" loading="lazy">`
    : `<div class="watch-card__img-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1">
          <circle cx="12" cy="12" r="9"/><line x1="12" y1="6" x2="12" y2="12.5"/><line x1="12" y1="12.5" x2="15.5" y2="14.5"/>
        </svg>
        <span>Photo Coming Soon</span>
      </div>`;

  const tagsHtml = [watch.year, watch.caseMaterial, watch.condition]
    .filter(Boolean)
    .map(t => `<span class="watch-card__tag">${t}</span>`)
    .join("");

  const actionHtml = watch.status !== "sold"
    ? `<button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="openInquiry('${watch.id}')">Inquire Now</button>`
    : "";

  return `
    <article class="watch-card${soldClass}${featuredClass}" onclick="goToWatch('${watch.id}')">
      <div class="watch-card__media">
        ${mediaHtml}
        ${badgeHtml}
        <div class="watch-card__overlay">
          <div class="watch-card__action">${actionHtml}</div>
        </div>
      </div>
      <div class="watch-card__body">
        <div class="watch-card__brand">${watch.brand}</div>
        <div class="watch-card__name">${watch.model}</div>
        <div class="watch-card__ref">Ref. ${watch.reference} · ${watch.diameter}</div>
        <div class="watch-card__meta">${tagsHtml}</div>
        <div class="watch-card__footer">
          <div>
            <div class="watch-card__price-label">Asking Price</div>
            ${priceHtml}
          </div>
          ${watch.status !== "sold"
            ? `<button class="watch-card__inquire" onclick="event.stopPropagation(); openInquiry('${watch.id}')">
                Inquire <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>`
            : `<span class="watch-card__inquire" style="color:var(--muted);cursor:default;">Sold</span>`
          }
        </div>
      </div>
    </article>`;
}

/* ================================================================
   WATCH GRID — render to container
================================================================ */
function renderWatchGrid(containerId, watches, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!watches.length) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="12" cy="12" r="9"/><line x1="12" y1="6" x2="12" y2="12.5"/><line x1="12" y1="12.5" x2="15.5" y2="14.5"/>
        </svg>
        <p>No watches found matching your selection.</p>
      </div>`;
    return;
  }

  container.innerHTML = watches.map(w => renderWatchCard(w, options)).join("");
}

/* ================================================================
   FILTER SYSTEM
================================================================ */
function initFilters(gridId, defaultStatus = "available") {
  const filterBtns = document.querySelectorAll("[data-filter]");
  const sortSelect = document.getElementById("sort-select");
  let activeFilter = { brand: "all", status: defaultStatus, sort: "default" };

  function applyFilters() {
    const watches = filterWatches(activeFilter);
    renderWatchGrid(gridId, watches);
    // Re-init reveal for new cards
    document.querySelectorAll(`#${gridId} .reveal`).forEach(el => {
      new IntersectionObserver(entries => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
      }, { threshold: 0.1 }).observe(el);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterType = btn.dataset.filter;
      const filterVal  = btn.dataset.value || "all";

      if (filterType === "brand") activeFilter.brand = filterVal;
      if (filterType === "status") activeFilter.status = filterVal;
      applyFilters();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      activeFilter.sort = sortSelect.value;
      applyFilters();
    });
  }
}

/* ================================================================
   INQUIRY MODAL
================================================================ */
let currentInquiryWatch = null;

function openInquiry(watchId) {
  currentInquiryWatch = getWatchById(watchId);
  const overlay = document.getElementById("inquiry-modal");
  const watchName = document.getElementById("modal-watch-name");
  const watchInput = document.getElementById("modal-watch-field");

  if (!overlay) return;
  if (watchName && currentInquiryWatch) {
    watchName.textContent = `${currentInquiryWatch.brand} ${currentInquiryWatch.model} · Ref. ${currentInquiryWatch.reference}`;
  }
  if (watchInput && currentInquiryWatch) {
    watchInput.value = `${currentInquiryWatch.brand} ${currentInquiryWatch.model} (${currentInquiryWatch.reference})`;
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeInquiry() {
  const overlay = document.getElementById("inquiry-modal");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
  currentInquiryWatch = null;
}

(function initModal() {
  const overlay = document.getElementById("inquiry-modal");
  if (!overlay) return;

  // Close on backdrop click
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeInquiry();
  });

  // Close on ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeInquiry();
  });

  // Handle form submit
  const form = document.getElementById("inquiry-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const name     = form.querySelector('[name="name"]').value.trim();
      const email    = form.querySelector('[name="email"]').value.trim();
      const phone    = form.querySelector('[name="phone"]').value.trim();
      const message  = form.querySelector('[name="message"]').value.trim();
      const watchRef = form.querySelector('[name="watch"]').value;

      // Build mailto link (no server needed)
      const subject = encodeURIComponent(`Watch Inquiry — ${watchRef}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nWatch: ${watchRef}\n\nMessage:\n${message}`
      );
      const mailto = `mailto:info@truenorthwatches.ca?subject=${subject}&body=${body}`;
      window.location.href = mailto;

      btn.textContent = "Opening email client...";
      setTimeout(() => {
        btn.textContent = "Send Inquiry";
        closeInquiry();
      }, 2000);
    });
  }
})();

/* ================================================================
   NAVIGATION TO WATCH DETAIL
================================================================ */
function goToWatch(watchId) {
  window.location.href = `watch.html?id=${watchId}`;
}

/* ================================================================
   SMOOTH ANCHOR SCROLL
================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================================================================
   ACTIVE NAV LINK
================================================================ */
(function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href.includes(path) || (path === "index.html" && href === "index.html")) {
      link.classList.add("active");
    }
  });
})();
