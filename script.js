
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
        projectsTitle: "精選作品",
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
        skillsTitle: "技術スキル",
        contactTitle: "お問い合わせ",
        contactText: "ゲーム開発、3Dアート、共同制作について、お気軽にご連絡ください。"
    }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatedElements = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    translatedElements.forEach(element => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    languageButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );
    });

    document.documentElement.lang = {
        zh: "zh-Hant",
        en: "en",
        ja: "ja"
    }[language];

    localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(translations[savedLanguage] ? savedLanguage : "zh");
