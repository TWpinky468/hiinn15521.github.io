
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
        filterGameDesign: "遊戲企劃",
        emptyProjects: "這個分類的作品正在整理中，之後會陸續更新。",
        viewProject: "查看專案",
        viewCollection: "瀏覽集錦",

        skillsTitle: "專業技能",
        skillsIntro: "點選下方技能卡片，了解我的軟體使用經驗與製作能力。",
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
        filterGameDesign: "Game Design",
        emptyProjects: "More work in this category is coming soon.",
        viewProject: "View project",
        viewCollection: "View collection",

        skillsTitle: "Technical Skills",
        skillsIntro: "Select a skill to explore my tools, workflows, and practical experience.",
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
        filterGameDesign: "ゲーム企画",
        emptyProjects: "このカテゴリーの作品は準備中です。",
        viewProject: "作品を見る",
        viewCollection: "作品集を見る",

        skillsTitle: "技術スキル",
        skillsIntro: "各スキルを選択すると、使用ツールや制作経験の詳細をご覧いただけます。",
        contactTitle: "お問い合わせ",
        contactText: "ゲーム開発、3Dアート、共同制作について、お気軽にご連絡ください。"
    }
};


// ==========================================
// Language Settings
// ==========================================

// ==========================================
// Skill Data
// ==========================================

const skills = [
    {
        id: "unity",
        name: "Unity & C#",
        category: "Game Development / Gameplay Programming",

        details: {
            zh: [
                "2D 遊戲開發：Tilemap、Tile Palette、場景配置與碰撞設定",
                "角色控制：移動、跑步、衝刺、跳躍與角色動畫",
                "戰鬥系統：近戰攻擊、攻擊範圍判定、傷害計算與血量管理",
                "AI 與 NPC：敵人巡邏追蹤、NavMesh 尋路、NPC 移動與對話互動",
                "UI 系統：主選單、暫停選單、血條、商店、任務提示與結算畫面",
                "遊戲系統：金錢、飢餓值、道具、顧客訂單與時間管理",
                "資料管理：遊戲存檔、讀檔、場景切換與傳送系統",
                "音效與動畫：Animator、AudioMixer、環境音效與互動音效",
                "除錯與整合：功能測試、遊戲流程整合與問題修正"
            ],

            en: [
                "2D Development: Tilemap, Tile Palette, level layout, and collision setup",
                "Character Control: Movement, running, dashing, jumping, and animation",
                "Combat Systems: Melee attacks, hit detection, damage calculation, and health management",
                "AI & NPC: Enemy patrol and pursuit, NavMesh pathfinding, NPC movement, and dialogue interactions",
                "UI Systems: Main menu, pause menu, health bars, shops, quest prompts, and result screens",
                "Gameplay Systems: Currency, hunger, items, customer orders, and time management",
                "Data Management: Save/load systems, scene transitions, and teleportation",
                "Audio & Animation: Animator, AudioMixer, ambient sounds, and interaction audio",
                "Debugging & Integration: Gameplay testing, system integration, and troubleshooting"
            ],

            ja: [
                "2Dゲーム開発：Tilemap、Tile Palette、レベル配置、当たり判定設定",
                "キャラクター操作：移動、ダッシュ、ジャンプ、アニメーション",
                "戦闘システム：近接攻撃、攻撃範囲判定、ダメージ計算、HP管理",
                "AI・NPC：敵の巡回・追跡、NavMesh経路探索、NPC移動、会話システム",
                "UIシステム：メインメニュー、ポーズ画面、HPバー、ショップ、クエスト表示、リザルト画面",
                "ゲームシステム：通貨、空腹度、アイテム、注文管理、時間管理",
                "データ管理：セーブ・ロード、シーン遷移、テレポート機能",
                "サウンド・アニメーション：Animator、AudioMixer、環境音、インタラクション音",
                "デバッグ・統合：動作テスト、システム統合、不具合修正"
            ]
        }
    },

    {
        id: "blender",
        name: "Blender",
        category: "3D Modeling / Rigging / Animation",

        details: {
            zh: [
                "3D 道具、建築與場景建模",
                "UV 展開、接縫規劃與貼圖配置",
                "Shader Nodes 材質節點製作",
                "角色骨架、IK 控制與權重繪製",
                "角色動作與戰鬥動畫",
                "燈光配置、攝影機構圖與渲染"
            ],

            en: [
                "3D prop, architecture, and environment modeling",
                "UV unwrapping, seams, and texture layout",
                "Material creation with Shader Nodes",
                "Character rigging, IK controls, and weight painting",
                "Character and combat animation",
                "Lighting, camera composition, and rendering"
            ],

            ja: [
                "3Dプロップ、建築、背景モデリング",
                "UV展開、シーム設定、テクスチャ配置",
                "Shader Nodesを使用したマテリアル制作",
                "リギング、IK制御、ウェイトペイント",
                "キャラクター・戦闘アニメーション",
                "ライティング、カメラ構図、レンダリング"
            ]
        }
    },

    {
        id: "zbrush",
        name: "ZBrush",
        category: "Digital Sculpting",

        details: {
            zh: [
                "角色與生物的數位雕刻",
                "高模形體與細節製作",
                "使用雕刻筆刷調整表面結構",
                "角色造型與立體形態研究"
            ],

            en: [
                "Character and creature digital sculpting",
                "High-resolution forms and surface details",
                "Surface refinement with sculpting brushes",
                "Character forms and anatomical studies"
            ],

            ja: [
                "キャラクター・クリーチャーのデジタルスカルプト",
                "ハイポリモデルの形状・ディテール制作",
                "スカルプトブラシによる表面調整",
                "キャラクター造形と立体形状の研究"
            ]
        }
    },

    {
        id: "substance",
        name: "Substance 3D Painter",
        category: "PBR Texturing",

        details: {
            zh: [
                "PBR 材質與紋理繪製",
                "金屬、粗糙度與表面質感表現",
                "遮罩、圖層與材質分層",
                "磨損、髒污與舊化效果"
            ],

            en: [
                "PBR material and texture painting",
                "Metallic, roughness, and surface properties",
                "Masks, layers, and material organization",
                "Wear, dirt, and weathering effects"
            ],

            ja: [
                "PBRマテリアル・テクスチャ制作",
                "金属感、粗さ、表面質感の表現",
                "マスク、レイヤー、マテリアル管理",
                "摩耗、汚れ、ウェザリング表現"
            ]
        }
    },

    {
        id: "photoshop",
        name: "Adobe Photoshop",
        category: "Digital Painting / Post-Processing",

        details: {
            zh: [
                "數位繪畫、厚塗與插畫創作",
                "筆刷、圖層與遮色片運用",
                "照片合成、修圖與視覺設計",
                "光影、色彩校正與作品後製"
            ],

            en: [
                "Digital painting, painterly rendering, and illustration",
                "Brushes, layers, and masking techniques",
                "Photo compositing, retouching, and visual design",
                "Lighting adjustments, color grading, and post-processing"
            ],

            ja: [
                "デジタルペイント、厚塗り、イラスト制作",
                "ブラシ、レイヤー、マスクの活用",
                "画像合成、レタッチ、ビジュアルデザイン",
                "光と影の調整、色補正、画像加工"
            ]
        }
    },

    {
        id: "marvelous",
        name: "Marvelous Designer",
        category: "3D Clothing Simulation",

        details: {
            zh: [
                "2D 紙樣繪製與服裝打版",
                "布料縫合、模擬與版型調整",
                "多層服裝與服裝細節製作",
                "布料材質、花紋與貼圖配置"
            ],

            en: [
                "2D pattern drafting and garment construction",
                "Fabric sewing, simulation, and fitting",
                "Layered garments and clothing details",
                "Fabric materials, patterns, and texture placement"
            ],

            ja: [
                "2Dパターン作成と衣服の設計",
                "縫製、クロスシミュレーション、フィッティング",
                "重ね着構造と衣装ディテール制作",
                "布素材、柄、テクスチャ配置"
            ]
        }
    },

    {
        id: "maya",
        name: "Autodesk Maya",
        category: "3D Modeling",

        details: {
            zh: [
                "基礎多邊形建模與物件編輯",
                "3D 模型結構與場景整理"
            ],

            en: [
                "Basic polygon modeling and object editing",
                "3D model structure and scene organization"
            ],

            ja: [
                "基本的なポリゴンモデリングとオブジェクト編集",
                "3Dモデル構造とシーン整理"
            ]
        }
    },
    // ==========================================
    // GIMP
    // ==========================================

    {
        id: "gimp",
        name: "GIMP",
        category: "Pixel Art / GIF Animation",

        details: {
            zh: [
                "像素美術與 Pixel Art 創作",
                "GIF 動畫製作與影格編輯",
                "逐格動畫與動態圖像設計",
                "圖層管理、影像編輯與素材製作"
            ],

            en: [
                "Pixel art creation and editing",
                "GIF animation and frame editing",
                "Frame-by-frame animation and animated graphics",
                "Layer management, image editing, and asset creation"
            ],

            ja: [
                "ピクセルアートの制作・編集",
                "GIFアニメーションとフレーム編集",
                "コマ撮りアニメーションと動く画像の制作",
                "レイヤー管理、画像編集、素材制作"
            ]
        }
    },

    // ==========================================
    // KeyShot
    // ==========================================

    {
        id: "keyshot",
        name: "KeyShot",
        category: "3D Rendering / Presentation",

        details: {
            zh: [
                "3D 角色與模型展示渲染",
                "材質、表面質感與顏色調整",
                "燈光配置與展示環境設定",
                "攝影機角度、構圖與渲染輸出"
            ],

            en: [
                "3D character and model presentation rendering",
                "Material, surface, and color adjustments",
                "Lighting setups and presentation environments",
                "Camera angles, composition, and rendering"
            ],

            ja: [
                "3Dキャラクター・モデルの展示レンダリング",
                "マテリアル、表面質感、カラー調整",
                "ライティングと展示環境の設定",
                "カメラアングル、構図、レンダリング出力"
            ]
        }
    },

    // ==========================================
    // After Effects & Premiere Pro
    // ==========================================

    {
        id: "adobe-video",
        name: "After Effects / Premiere Pro",
        category: "VFX / Motion Graphics / Video Editing",

        details: {
            zh: [
                "After Effects 動態圖形與視覺特效製作",
                "3D 作品展示影片的特效與後製",
                "影像合成、轉場與動畫效果",
                "Premiere Pro 影片剪輯與鏡頭編排",
                "音訊、畫面節奏與色彩調整",
                "影片輸出與展示作品製作"
            ],

            en: [
                "Motion graphics and visual effects with After Effects",
                "Effects and post-production for 3D showcase videos",
                "Compositing, transitions, and animation effects",
                "Video editing and sequencing with Premiere Pro",
                "Audio, pacing, and color adjustments",
                "Video export and portfolio presentation"
            ],

            ja: [
                "After Effectsによるモーショングラフィックス・VFX制作",
                "3D作品紹介動画のエフェクト・ポストプロダクション",
                "映像合成、トランジション、アニメーション効果",
                "Premiere Proによる映像編集・カット構成",
                "音声、映像テンポ、カラー調整",
                "動画書き出しとポートフォリオ映像制作"
            ]
        }
    }
];

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

    // Refresh project cards and skill cards

    renderProjects();
    renderSkills();
}
// ==========================================
// Render Skill Cards
// ==========================================

// ==========================================
// Skills Navigation
// ==========================================

let selectedSkillId = "unity";

function renderSkills() {

    const navigation = document.getElementById("skills-navigation");
    const container = document.getElementById("skills-container");

    if (!navigation || !container) {
        return;
    }

    navigation.replaceChildren();
    container.replaceChildren();

    // Create software navigation

    skills.forEach((skill, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "skill-nav-button";

        button.textContent = skill.name;

        button.classList.toggle(
            "active",
            selectedSkillId === skill.id
        );

        button.setAttribute(
            "aria-pressed",
            String(selectedSkillId === skill.id)
        );

        button.addEventListener("click", () => {

            if (selectedSkillId === skill.id) {
                selectedSkillId = null;
            } else {
                selectedSkillId = skill.id;
            }

            renderSkills();

        });

        navigation.appendChild(button);

        // Separator

        if (index < skills.length - 1) {

            const separator = document.createElement("span");

            separator.className = "skill-separator";
            separator.textContent = "·";

            navigation.appendChild(separator);
        }

    });

    // Do not show details if nothing is selected

    if (!selectedSkillId) {
        return;
    }

    const selectedSkill = skills.find(
        skill => skill.id === selectedSkillId
    );

    if (!selectedSkill) {
        return;
    }

    // Create detail panel

    const panel = document.createElement("div");
    panel.className = "skill-detail-panel";

    const header = document.createElement("div");
    header.className = "skill-detail-header";

    const title = document.createElement("h3");
    title.textContent = selectedSkill.name;

    const category = document.createElement("p");
    category.className = "skill-detail-category";
    category.textContent = selectedSkill.category;

    header.append(title, category);

    // Skill details

    const list = document.createElement("ul");
    list.className = "skill-detail-list";

    const details =
        selectedSkill.details[currentLanguage] ||
        selectedSkill.details.en;

    details.forEach(detail => {

        const item = document.createElement("li");

        item.textContent = detail;

        list.appendChild(item);

    });

    panel.append(header, list);

    container.appendChild(panel);

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
/* ==========================================
   Scroll Reveal Animation
   ========================================== */

function initializeScrollReveal() {

    const revealSelector = [
        ".section-number",
        ".section h2",
        ".projects-intro",
        ".content",
        ".project-card",
        ".detail-title",
        ".detail-lead",
        ".detail-info-section",
        ".detail-gallery-section"
    ].join(", ");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    function registerRevealElements() {

        const elements = document.querySelectorAll(
            revealSelector
        );

        elements.forEach(element => {

            if (element.classList.contains("scroll-reveal")) {
                return;
            }

            element.classList.add("scroll-reveal");

            revealObserver.observe(element);

        });

    }

    // Watch dynamically generated project cards
    const mutationObserver = new MutationObserver(() => {
        registerRevealElements();
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });

    registerRevealElements();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeScrollReveal);
} else {
    initializeScrollReveal();
}
