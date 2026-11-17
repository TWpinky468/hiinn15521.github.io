
const projects = [
    {
        id: "boss-battle",
        category: "game",
        year: 2025,
        featured: true,
        title: {
            zh: "3D Boss 戰鬥遊戲",
            en: "3D Boss Battle",
            ja: "3Dボスバトル"
        },
        description: {
            zh: "使用 Unity 與 C# 開發的 3D Boss 戰鬥遊戲，包含敵人 AI、技能與戰鬥系統。",
            en: "A 3D boss battle game developed with Unity and C#, featuring enemy AI, abilities, and combat systems.",
            ja: "UnityとC#で開発した3Dボスバトルゲーム。敵AI、スキル、戦闘システムを実装しました。"
        },
        tools: ["Unity", "C#", "NavMesh"],
        image: "assets/images/games/boss-battle.jpg",
        gallery: [],
        highlights: {
            zh: ["使用 NavMesh 製作 Boss 的追蹤與移動", "設計火球、延遲尖刺與核心機制", "製作血量、暫停、勝敗畫面等戰鬥介面"],
            en: ["Implemented boss movement and pursuit with NavMesh", "Built fireball, delayed spike, and core mechanics", "Created health, pause, victory, and defeat interfaces"],
            ja: ["NavMeshを使ったボスの移動と追跡", "火球・時間差攻撃・コアのギミック", "HP・ポーズ・勝敗画面などのUI制作"]
        }
    },
    {
        id: "adventure",
        category: "game",
        year: 2025,
        featured: true,
        title: {
            zh: "2D 冒險遊戲",
            en: "2D Adventure",
            ja: "2Dアドベンチャー"
        },
        description: {
            zh: "包含角色移動、戰鬥、敵人 AI、村莊、礦坑與存檔系統的冒險遊戲。",
            en: "An adventure game featuring combat, enemy AI, village and mine areas, and a save system.",
            ja: "戦闘、敵AI、村、鉱山、セーブシステムを備えたアドベンチャーゲームです。"
        },
        tools: ["Unity", "C#"],
        image: "assets/images/games/adventure.png",
        gallery: [],
        highlights: {
            zh: ["角色移動、衝刺及近戰戰鬥系統", "史萊姆敵人 AI 與血量介面", "村莊、礦坑切換和遊戲存檔"],
            en: ["Character movement, dash, and melee combat", "Slime enemy AI and health UI", "Village, mine, and save systems"],
            ja: ["移動・ダッシュ・近接戦闘", "スライムの敵AIとHP表示", "村・鉱山・セーブシステム"]
        }
    },
    {
        id: "tavern",
        category: "game",
        year: 2026,
        featured: true,
        title: {
            zh: "3D 酒館經營遊戲",
            en: "Tavern Simulator",
            ja: "酒場経営シミュレーター"
        },
        description: {
            zh: "第一人稱酒館經營遊戲，包含顧客需求、料理流程、時間與金錢管理。",
            en: "A first-person tavern management game with customer orders, cooking interactions, and time management.",
            ja: "注文、調理、時間管理などを実装した一人称視点の酒場経営ゲームです。"
        },
        tools: ["Unity", "C#"],
        image: "assets/images/games/tavern.png",
        gallery: [],
        highlights: {
            zh: ["第一人稱物件互動與料理流程", "顧客訂單、耐心條及金錢系統", "營業時間、打烊條件與結算畫面"],
            en: ["First-person interactions and cooking workflow", "Customer orders, patience, and money systems", "Business hours, closing rules, and daily results"],
            ja: ["一人称視点の操作と調理フロー", "注文・待機ゲージ・お金の管理", "営業時間・閉店条件・精算画面"]
        }
    },
    {
        id: "combat-animation",
        category: "animation",
        year: 2026,
        featured: false,
        title: {
            zh: "角色戰鬥動畫",
            en: "Character Combat Animation",
            ja: "キャラクター戦闘アニメーション"
        },
        description: {
            zh: "使用 Blender 製作角色戰鬥動作，包含骨架控制、權重修正及武器軌跡。",
            en: "Character combat animation created in Blender, featuring rig controls, deformation fixes, and weapon trails.",
            ja: "Blenderで制作した戦闘アニメーション。リグ制御、変形修正、武器の軌跡表現を含みます。"
        },
        tools: ["Blender", "Rigging", "Animation"],
        image: "assets/images/animation/combat.webp",
        gallery: [],
        highlights: {
            zh: ["戰鬥動作的節奏與關鍵姿勢調整", "IK 控制器、權重及骨架變形修正", "Corrective Shape Key 與武器移動軌跡"],
            en: ["Combat timing and key pose refinement", "IK controls, weight painting, and deformation fixes", "Corrective Shape Keys and weapon trails"],
            ja: ["戦闘モーションのタイミング・キーポーズ調整", "IK制御・ウェイト・変形の修正", "補正シェイプキーと武器軌跡の表現"]
        }
    },
    {
        id: "crystal-cluster",
        category: "props",
        kind: "single",
        year: "2025",
        featured: false,

        title: {
            zh: "水晶礦簇",
            en: "Crystal Cluster",
            ja: "クリスタルクラスター"
        },

        description: {
            zh: "以奇幻遊戲中的礦物為概念，將高低錯落的晶柱組合成水晶礦簇。透過藍色半透明質感、不規則表面紋理及不同的照明環境，呈現晶體的層次與氛圍。",

            en: "A fantasy-inspired crystal cluster composed of prisms of varying heights. Translucent blue surfaces, irregular details, and contrasting lighting environments explore the material's depth and atmosphere.",

            ja: "ファンタジーゲームの鉱石をイメージした結晶モデルです。高さの異なる結晶を組み合わせ、半透明の質感や不規則な表面、異なるライティングによる奥行きと雰囲気を表現しました。"
        },

        tools: [
            "3D Modeling",
            "Shading",
            "Lighting"
        ],

        image: "assets/images/modeling/crystal-cluster-studio.png",

        gallery: [
            {
                src: "assets/images/modeling/crystal-cluster-studio.png",

                caption: {
                    zh: "明亮環境下的水晶材質展示",
                    en: "Crystal material under bright lighting",
                    ja: "明るい環境での結晶表現"
                }
            },
            {
                src: "assets/images/modeling/crystal-cluster-cave.png",

                caption: {
                    zh: "幽暗岩洞中的水晶礦簇",
                    en: "Crystal cluster in a dark cave",
                    ja: "暗い洞窟の結晶クラスター"
                }
            }
        ],

        highlights: {
            zh: [
                "高低不一的晶柱排列，形成自然生長的輪廓",
                "以透光感與不規則紋理呈現晶體層次",
                "比較明亮展示環境與幽暗岩洞中的視覺表現"
            ],

            en: [
                "Varied crystal heights form an organic silhouette",
                "Translucent shading and irregular textures create depth",
                "Contrasting bright studio and dark cave presentations"
            ],

            ja: [
                "異なる高さの結晶で自然なシルエットを構成",
                "半透明の質感と不規則な模様による奥行き",
                "明るいスタジオと暗い洞窟での見え方を比較"
            ]
        }
    }
];
window.projects = projects;
