// Reusable detail page. Each entry in projects.js uses this same page.
const detailRoot = document.getElementById("project-detail");
const detailId = new URLSearchParams(window.location.search).get("id");
const detailProject = Array.isArray(window.projects)
    ? window.projects.find(item => item.id === detailId)
    : null;

const detailLabels = {
    zh: {
        back: "返回所有作品", overview: "作品介紹", highlights: "製作重點",
        gallery: "更多畫面", tools: "使用工具", year: "製作年份",
        imagePending: "作品圖片準備中", next: "下一件作品",
        unavailable: "找不到這件作品", zoom: "放大觀看",
        close: "關閉預覽"
    },
    en: {
        back: "Back to all works", overview: "Overview", highlights: "Key work",
        gallery: "More views", tools: "Tools", year: "Year",
        imagePending: "Image coming soon", next: "Next project",
        unavailable: "Project not found", zoom: "View larger",
        close: "Close preview"
    },
    ja: {
        back: "作品一覧へ", overview: "作品概要", highlights: "制作内容",
        gallery: "ギャラリー", tools: "使用ツール", year: "制作年",
        imagePending: "画像を準備中", next: "次の作品",
        unavailable: "作品が見つかりません", zoom: "拡大表示",
        close: "プレビューを閉じる"
    }
};

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeLightbox = document.getElementById("lightbox-close");

function detailLanguage() {
    const language = document.documentElement.lang;
    return language === "en" || language === "ja" ? language : "zh";
}

function translated(value, language) {
    if (typeof value === "string") return value;
    return value?.[language] || value?.en || value?.zh || "";
}

function element(tag, className = "", content = "") {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = content;
    return node;
}

function showLightbox(source, alt, language) {
    if (!lightbox || typeof lightbox.showModal !== "function") return;
    lightboxImage.src = source;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = alt;
    closeLightbox.setAttribute("aria-label", detailLabels[language].close);
    lightbox.showModal();
}

function pictureButton(source, name, language, className) {
    const button = element("button", className);
    button.type = "button";
    button.setAttribute("aria-label", `${detailLabels[language].zoom}: ${name}`);

    const loadingText = element("span", "detail-image-fallback", detailLabels[language].imagePending);
    button.appendChild(loadingText);

    if (source) {
        const image = document.createElement("img");
        image.alt = name;
        image.loading = "lazy";
        image.addEventListener("load", () => loadingText.remove());
        image.addEventListener("error", () => image.remove());
        button.appendChild(image);
        image.src = source;
        button.addEventListener("click", () => {
            if (image.complete && image.naturalWidth > 0) {
                showLightbox(source, name, language);
            }
        });
    } else {
        button.disabled = true;
    }

    return button;
}

function renderProjectDetail() {
    if (!detailRoot) return;
    const language = detailLanguage();
    const labels = detailLabels[language];
    detailRoot.replaceChildren();

    const back = element("a", "detail-back", `← ${labels.back}`);
    back.href = "index.html#projects";
    detailRoot.appendChild(back);

    if (!detailProject) {
        detailRoot.appendChild(element("h1", "detail-title", labels.unavailable));
        return;
    }

    const project = detailProject;
    const name = translated(project.title, language);
    document.title = `${name} | Yi Ning Huang`;

    const head = element("section", "detail-heading");
    head.appendChild(element("p", "section-number", `${project.category.toUpperCase()} / ${project.year}`));
    head.appendChild(element("h1", "detail-title", name));
    head.appendChild(element("p", "detail-lead", translated(project.description, language)));
    const tags = element("div", "detail-tags");
    (project.tools || []).forEach(tool => tags.appendChild(element("span", "detail-tag", tool)));
    head.appendChild(tags);
    detailRoot.appendChild(head);

    const hero = pictureButton(project.image, name, language, "detail-hero-image");
    detailRoot.appendChild(hero);

    const info = element("div", "detail-info");
    const overview = element("section", "detail-info-section");
    overview.appendChild(element("p", "section-number", "01 / OVERVIEW"));
    overview.appendChild(element("h2", "detail-section-title", labels.overview));
    overview.appendChild(element("p", "detail-copy", translated(project.description, language)));
    info.appendChild(overview);

    const highlights = element("section", "detail-info-section");
    highlights.appendChild(element("p", "section-number", "02 / BREAKDOWN"));
    highlights.appendChild(element("h2", "detail-section-title", labels.highlights));
    const list = element("ul", "detail-highlights");
    const items = project.highlights?.[language] || project.highlights?.zh || [];
    items.forEach(item => list.appendChild(element("li", "", item)));
    highlights.appendChild(list);
    info.appendChild(highlights);
    detailRoot.appendChild(info);

    // Additional images form a gallery. This also works for project collections.
    const galleryPaths = Array.isArray(project.gallery) ? project.gallery : [];
    if (galleryPaths.length) {
        const gallery = element("section", "detail-gallery-section");
        gallery.appendChild(element("p", "section-number", "03 / GALLERY"));
        gallery.appendChild(element("h2", "detail-section-title", labels.gallery));
        const grid = element("div", "detail-gallery");
        galleryPaths.forEach((path, index) => {
            const source = typeof path === "string" ? path : path.src;
            const caption = typeof path === "string"
                ? `${name} — ${index + 1}`
                : translated(path.caption, language) || `${name} — ${index + 1}`;
            grid.appendChild(pictureButton(source, caption, language, "detail-gallery-image"));
        });
        gallery.appendChild(grid);
        detailRoot.appendChild(gallery);
    }

    // Optionally show a locally hosted MP4 when added to projects.js.
    if (project.video) {
        const section = element("section", "detail-video-section");
        section.appendChild(element("p", "section-number", "VIDEO / DEMO"));
        const video = document.createElement("video");
        video.controls = true;
        video.preload = "metadata";
        video.playsInline = true;
        video.src = project.video;
        if (project.image) video.poster = project.image;
        section.appendChild(video);
        detailRoot.appendChild(section);
    }

    const projects = window.projects;
    if (projects.length > 1) {
        const next = projects[(projects.indexOf(project) + 1) % projects.length];
        const nextLink = element("a", "detail-next");
        nextLink.href = `project.html?id=${encodeURIComponent(next.id)}`;
        nextLink.appendChild(element("span", "section-number", labels.next));
        nextLink.appendChild(element("strong", "", `${translated(next.title, language)} ↗`));
        detailRoot.appendChild(nextLink);
    }
}

closeLightbox?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.close();
});

// script.js updates the language before this handler runs.
document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", renderProjectDetail);
});

renderProjectDetail();
