/* ==========================================================================
   站点交互逻辑 —— 从 data.js 读取内容渲染页面
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 填充基本信息 ---------- */
  function applyBasic() {
    document.title = `${SITE.name} · ${SITE.title}`;
    document.getElementById("heroName").textContent = SITE.name;
    document.getElementById("heroEyebrow").textContent = SITE.eyebrow;
    document.getElementById("heroTagline").textContent = SITE.tagline;
    document.getElementById("navLogo").textContent = SITE.nameEn || SITE.name;
    document.getElementById("aboutText").textContent = SITE.about;

    const navGh = document.getElementById("navGithub");
    if (SITE.github && SITE.github !== "#") navGh.href = SITE.github;

    const contactEmail = document.getElementById("contactEmail");
    contactEmail.href = "mailto:" + SITE.email;
    const contactGh = document.getElementById("contactGithub");
    if (SITE.github) contactGh.href = SITE.github;
  }

  /* ---------- 关于我 · 数据亮点 ---------- */
  function renderHighlights() {
    const wrap = document.getElementById("aboutHighlights");
    wrap.innerHTML = SITE.highlights.map(function (h) {
      return (
        '<div class="highlight">' +
          '<div class="highlight-num">' + escapeHtml(h.num) + '</div>' +
          '<div class="highlight-label">' + escapeHtml(h.label) + '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ---------- 项目卡片 ---------- */
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = SITE.projects.map(function (p) {
      const href = p.github && p.github !== "#" ? p.github : "#";
      const target = href.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
      return (
        '<a class="project-card" href="' + href + '"' + target + '>' +
          '<div class="project-cover" style="background:' + (p.color || "#f5f5f7") + '">' +
            escapeHtml(p.emoji || "🚀") +
          '</div>' +
          '<div class="project-body">' +
            '<div class="project-meta">' +
              '<span class="project-category">' + escapeHtml(p.category || "") + '</span>' +
            '</div>' +
            '<h3 class="project-title">' + escapeHtml(p.title) + '</h3>' +
            '<p class="project-desc">' + escapeHtml(p.desc) + '</p>' +
            '<div class="project-tags">' +
              (p.tags || []).map(function (t) {
                return '<span class="tag">' + escapeHtml(t) + '</span>';
              }).join("") +
            '</div>' +
            '<span class="project-link">查看项目 →</span>' +
          '</div>' +
        '</a>'
      );
    }).join("");
  }

  /* ---------- 技能 ---------- */
  function renderSkills() {
    const wrap = document.getElementById("skillsList");
    wrap.innerHTML = SITE.skills.map(function (g) {
      return (
        '<div class="skill-group">' +
          '<div class="skill-group-title">' + escapeHtml(g.group) + '</div>' +
          '<div class="skill-group-items">' +
            g.items.map(function (it) {
              return '<span class="tag">' + escapeHtml(it) + '</span>';
            }).join("") +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ---------- 联系 & 页脚 ---------- */
  function renderContactFooter() {
    document.getElementById("contactTitle").textContent = SITE.contactTitle;
    document.getElementById("contactSub").textContent = SITE.contactSub;

    const fl = document.getElementById("footerLinks");
    fl.innerHTML = SITE.footerLinks.map(function (l) {
      return '<a href="' + escapeHtml(l.url) + '">' + escapeHtml(l.label) + '</a>';
    }).join("");

    document.getElementById("footerFine").textContent = SITE.copyright;
  }

  /* ---------- 移动端菜单 ---------- */
  function initMenu() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 滚动显现动画 ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 工具 ---------- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ---------- 启动 ---------- */
  function init() {
    applyBasic();
    renderHighlights();
    renderProjects();
    renderSkills();
    renderContactFooter();
    initMenu();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
