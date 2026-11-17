
const translations = {
    zh: {
        navAbout: "關於我",
        navProjects: "作品",
        navSkills: "技能",
        navContact: "聯絡",

        heroText: "從遊戲開發到三維藝術，探索互動世界的無限可能。",
        viewWorks: "探索作品",

        aboutTitle: "關於我",
        aboutText: "你好，我是黃依甯，目前就讀於實踐大學資訊與模擬設計學系。我對遊戲開發、3D 建模與角色動畫充滿熱情，希望未來能前往日本，參與專業遊戲開發。",

        projectsTitle: "作品總覽",
        projectsIntro: "探索我的遊戲開發、3D 建模、角色動畫與美術創作。",

        filterAll: "全部作品",
        filterGame: "遊戲開發",
        filterProps: "3D 建模",
        filterCreature: "角色與生物",
        filterEnvironment: "場景建模",
        filterAnimation: "動畫",
        filterDrawing: "2D 美術",
        filterModelcraft: "模型製作",
        emptyProjects: "這個分類的作品正在整理中，之後會陸續更新。",
        viewProject: "查看專案",
        viewCollection: "瀏覽集錦",

        skillsTitle: "專業技能",
        contactTitle: "聯絡我",
        contactText: "歡迎與我交流遊戲開發、3D 藝術及合作機會。"
    },

    en: {
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",

        heroText: "Exploring interactive worlds through game development and 3D art.",
        viewWorks: "Explore Works",

        aboutTitle: "About Me",
        aboutText: "Hello, I'm Yi Ning Huang, a student in the Department of Information and Simulation Design at Shih Chien University. I'm passionate about game development, 3D modeling, and character animation, and I hope to pursue a career in Japan's game industry.",

        projectsTitle: "Selected Works",
        projectsIntro: "Explore my work in game development, 3D modeling, animation, and visual art.",

        filterAll: "All Works",
        filterGame: "Game Development",
        filterProps: "3D Modeling",
        filterCreature: "Character & Creature",
        filterEnvironment: "Environment Art",
        filterAnimation: "Animation",
        filterDrawing: "2D Art",
        filterModelcraft: "Model Making",
        emptyProjects: "More work in this category is coming soon.",
        viewProject: "View project",
        viewCollection: "View collection",

        skillsTitle: "Technical Skills",
        contactTitle: "Contact",
        contactText: "Feel free to reach out about game development, 3D art, or collaboration opportunities."
    },

    ja: {
        navAbout: "私について",
        navProjects: "作品",
        navSkills: "スキル",
        navContact: "お問い合わせ",

        heroText: "ゲーム開発と3Dアートを通じて、インタラクティブな世界を探求しています。",
        viewWorks: "作品を見る",

        aboutTitle: "自己紹介",
        aboutText: "こんにちは、黄依甯です。現在、実践大学で情報・シミュレーションデザインを学んでいます。ゲーム開発、3Dモデリング、キャラクターアニメーションに興味があり、将来は日本のゲーム業界で働くことを目指しています。",

        projectsTitle: "主な作品",
        projectsIntro: "ゲーム開発、3Dモデリング、アニメーション、美術作品をご紹介します。",

        filterAll: "すべて",
        filterGame: "ゲーム開発",
        filterProps: "3Dモデリング",
        filterCreature: "キャラクター・クリーチャー",
        filterEnvironment: "背景・環境",
        filterAnimation: "アニメーション",
        filterDrawing: "2Dアート",
        filterModelcraft: "模型製作",
        emptyProjects: "このカテゴリーの作品は準備中です。",
        viewProject: "作品を見る",
        viewCollection: "作品集を見る",

        skillsTitle: "技術スキル",
        contactTitle: "お問い合わせ",
        contactText: "ゲーム開発、3Dアート、共同制作について、お気軽にご連絡ください。"
    }
};


// ==========================================
// Language Settings
// ==========================================

const languageButtons = document.querySelectorAll("[data-lang]");
const translatedElements = document.querySelectorAll("[data-i18n]");

let currentLanguage = "zh";
let currentFilter = "all";


// ==========================================
// Project Elements
// ==========================================

const projectContainer = document.getElementById("project-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// ==========================================
// Update Website Language
// ==========================================

function setLanguage(language) {
    const dictionary = translations[language];

    if (!dictionary) {
        return;
    }

    currentLanguage = language;

    // Update translated text

    translatedElements.forEach(element => {
        const key = element.dataset.i18n;

        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.textContent = dictionary[key];
        }
    });

    // Update language buttons

    languageButtons.forEach(button => {
        const isActive = button.dataset.lang === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    // Update HTML language

    const htmlLanguages = {
        zh: "zh-Hant",
        en: "en",
        ja: "ja"
    };

    document.documentElement.lang = htmlLanguages[language];

    // Save selected language

    try {
        localStorage.setItem("portfolio-language", language);
    } catch (error) {
        // Continue without local storage.
    }

    // Refresh project cards

    renderProjects();
}


// ==========================================
// Create Project Cards
// ==========================================

function renderProjects() {

    if (!projectContainer || !Array.isArray(window.projects)) {
        return;
    }

    // Filter projects by category

    const filteredProjects = window.projects.filter(project => {
        return currentFilter === "all" ||
            project.category === currentFilter;
    });

    // Clear previous cards

    projectContainer.replaceChildren();

    if (filteredProjects.length === 0) {
        const empty = document.createElement("p");
        empty.className = "project-empty";
        empty.textContent = translations[currentLanguage].emptyProjects;
        projectContainer.appendChild(empty);
        return;
    }

    // Create each project card

    filteredProjects.forEach(project => {

        const article = document.createElement("a");
        article.className = "project-card";
        article.href = `project.html?id=${encodeURIComponent(project.id)}`;
        article.setAttribute("aria-label", `${project.title[currentLanguage] || project.title.en} — ${translations[currentLanguage].viewProject}`);


        // ----------------------------------
        // Project Image
        // ----------------------------------

        const imageContainer = document.createElement("div");
        imageContainer.className = "project-image";

        const projectName =
            project.title[currentLanguage] || project.title.en;

        // Placeholder before image loads

        const placeholder = document.createElement("span");
        placeholder.className = "project-placeholder";
        placeholder.textContent = projectName;

        imageContainer.appendChild(placeholder);

        // Load project image

        if (project.image) {

            const image = document.createElement("img");

            image.alt = projectName;

            // Keep the image in the DOM so lazy loading can work.
            image.loading = "lazy";
            image.className = "project-cover";

            // Image successfully loaded
            image.addEventListener("load", () => {

                image.classList.add("is-loaded");
                placeholder.remove();

            });

            // Image failed to load
            image.addEventListener("error", () => {

                image.remove();

                placeholder.textContent = projectName;

            });

            // Add image to the document before setting source
            imageContainer.appendChild(image);

            image.src = project.image;
        }


        // ----------------------------------
        // Project Title
        // ----------------------------------

        const eyebrow = document.createElement("div");
        eyebrow.className = "project-eyebrow";
        eyebrow.textContent = `${project.year} / ${project.category.toUpperCase()}`;

        const title = document.createElement("h3");

        title.textContent = projectName;


        // ----------------------------------
        // Project Description
        // ----------------------------------

        const description = document.createElement("p");

        description.className = "project-description";

        description.textContent =
            project.description[currentLanguage] ||
            project.description.en;


        // ----------------------------------
        // Software and Tools
        // ----------------------------------

        const tools = document.createElement("p");

        tools.className = "project-tools";

        tools.textContent = project.tools.join(" / ");


        // ----------------------------------
        // Add Elements to Card
        // ----------------------------------

        const action = document.createElement("span");
        action.className = "project-action";
        action.textContent = `${project.kind === "collection" ? translations[currentLanguage].viewCollection : translations[currentLanguage].viewProject} ↗`;

        article.append(
            imageContainer,
            eyebrow,
            title,
            description,
            tools,
            action
        );


        // ----------------------------------
        // Add Card to Website
        // ----------------------------------

        projectContainer.appendChild(article);

    });
}


// ==========================================
// Language Button Events
// ==========================================

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        setLanguage(button.dataset.lang);

    });

});


// ==========================================
// Category Filter Events
// ==========================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        // Update active button

        filterButtons.forEach(item => {

            const isActive = item === button;

            item.classList.toggle("active", isActive);

            item.setAttribute("aria-pressed", String(isActive));

        });

        // Refresh cards

        renderProjects();

    });

});


// ==========================================
// Initialize Website
// ==========================================

let savedLanguage = "zh";

try {

    savedLanguage =
        localStorage.getItem("portfolio-language") || "zh";

} catch (error) {

    savedLanguage = "zh";

}

// Apply saved language and render projects

setLanguage(
    translations[savedLanguage] ? savedLanguage : "zh"
);
