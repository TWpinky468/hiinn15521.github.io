
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
    },

{
    id: "bottles-glassware",
    category: "props",
    kind: "single",
    year: "2025",
    featured: false,

    title: {
        zh: "酒瓶與玻璃器皿",
        en: "Bottles & Glassware",
        ja: "ボトルとグラス"
    },

    description: {
        zh: "以日常酒類容器為主題的 3D 靜物建模作品，包含不同造型的酒瓶、瓶蓋與玻璃杯。透過透明材質、表面反射與燈光配置，呈現玻璃、液體及瓶身細節在不同展示環境中的視覺效果。",

        en: "A 3D still-life modeling project featuring different types of bottles and glassware. The work explores transparent materials, reflections, and lighting to present the visual qualities of glass, liquids, and bottle details in different environments.",

        ja: "さまざまな酒瓶やグラスを制作した3D静物モデリング作品です。透明なマテリアル、反射、ライティングを通して、ガラスや液体、ボトルのディテールを異なる環境で表現しました。"
    },

    tools: [
        "3D Modeling",
        "Shading",
        "Lighting",
        "Rendering"
    ],

    image: "assets/images/modeling/glassware-rice-wine.png",

    gallery: [
        {
            src: "assets/images/modeling/glassware-wine.png",

            caption: {
                zh: "葡萄酒瓶與高腳杯的材質展示",
                en: "Wine bottles and glasses material study",
                ja: "ワインボトルとグラスのマテリアル表現"
            }
        }
    ],

    highlights: {
        zh: [
            "製作不同瓶型、瓶蓋與玻璃杯的 3D 模型",
            "呈現玻璃和液體的透明質感與反射效果",
            "利用不同燈光及場景配置展示物件材質"
        ],

        en: [
            "Modeled different bottles, caps, and drinking glasses",
            "Explored transparency and reflections in glass and liquids",
            "Presented materials under different lighting conditions"
        ],

        ja: [
            "異なる形状のボトル、キャップ、グラスを制作",
            "ガラスや液体の透明感と反射を表現",
            "異なる照明環境でマテリアルを展示"
        ]
    }
},
{
    id: "kaiyuan-temple",
    category: "environment",
    kind: "single",
    year: 2022,
    featured: true,

    title: {
        zh: "開元寺",
        en: "Kaiyuan Temple",
        ja: "開元寺"
    },

    description: {
        zh: "高中二年級時製作的傳統建築建模作品。以臺南開元寺為參考，透過實地觀察、拍攝照片與蒐集建築資料，使用 Blender 重現寺廟的主要建築外觀。製作過程著重於傳統屋頂、門窗、樑柱等建築結構的觀察與建模。",

        en: "A traditional architecture modeling project created during my second year of high school. Inspired by Kaiyuan Temple in Tainan, the project involved on-site observation, photography, and architectural references. I used Blender to recreate the temple's exterior, focusing on traditional roof structures, doors, windows, and wooden beams.",

        ja: "高校2年生のときに制作した伝統建築の3Dモデリング作品です。台南の開元寺を参考に、現地での観察や写真撮影、建築資料の収集を行い、Blenderで寺院の外観を再現しました。伝統的な屋根、扉、窓、梁などの建築構造を重点的に制作しました。"
    },

    tools: [
        "Blender",
        "3D Modeling",
        "Environment Art"
    ],

    image: "assets/images/environments/kaiyuan-temple.png",

    gallery: [
        {
            src: "assets/images/environments/kaiyuan-entrance.png",

            caption: {
                zh: "寺廟正門與外牆結構",
                en: "Main entrance and exterior architecture",
                ja: "寺院の正門と外壁構造"
            }
        },
        {
            src: "assets/images/environments/kaiyuan-beams.png",

            caption: {
                zh: "屋頂內部的樑柱結構",
                en: "Interior roof beams and structural details",
                ja: "屋根内部の梁と構造ディテール"
            }
        }
    ],

    highlights: {
        zh: [
            "透過實地觀察與拍攝照片蒐集建築參考資料",
            "使用 Blender 製作寺廟主要建築外觀",
            "研究傳統屋頂、門窗與樑柱的造型結構",
            "從實際建築觀察練習複雜場景的建模"
        ],

        en: [
            "Collected architectural references through site visits and photography",
            "Modeled the temple's main exterior using Blender",
            "Studied traditional roofs, doors, windows, and beams",
            "Practiced complex environment modeling based on real architecture"
        ],

        ja: [
            "現地調査と写真撮影による建築資料の収集",
            "Blenderを使用した寺院の外観制作",
            "伝統的な屋根、扉、窓、梁の構造を研究",
            "実際の建築物を参考にした複雑な背景モデリング"
        ]
    }
},

{
    id: "abandoned-ruins",
    category: "environment",
    kind: "single",
    year: "2022",
    featured: true,

    title: {
        zh: "廢墟",
        en: "Abandoned Ruins",
        ja: "廃墟の環境"
    },

    description: {
        zh: "受到戰爭造成家園毀損的畫面啟發，以逐漸荒廢的建築為主題製作的 3D 場景。透過破損的建築結構、蔓延的植被與偏黃綠色的自然光線，營造出被時間侵蝕的環境氛圍。作品著重於場景構圖、材質表現與環境敘事。",

        en: "A 3D environment inspired by images of homes damaged by war. The scene depicts an abandoned building gradually reclaimed by nature. Damaged architecture, overgrown vegetation, and warm greenish lighting create a sense of decay and isolation, with a focus on composition, materials, and environmental storytelling.",

        ja: "戦争によって破壊された住居の風景から着想を得て制作した3D背景作品です。損傷した建築物、繁茂する植物、黄緑色を帯びた自然光を組み合わせ、時間の経過とともに荒廃した空間を表現しました。構図、マテリアル、環境によるストーリーテリングを重視しています。"
    },

    tools: [
        "Blender",
        "3D Modeling",
        "Environment Art",
        "Lighting"
    ],

    image: "assets/images/environments/abandoned-building.png",

    gallery: [],

    highlights: {
        zh: [
            "以荒廢建築為主題進行環境場景設計",
            "結合破損建築與自然植被呈現時間流逝的痕跡",
            "利用黃綠色調與光影營造沉寂的場景氛圍",
            "練習場景構圖、材質表現與環境敘事"
        ],

        en: [
            "Designed an environment centered on abandoned architecture",
            "Combined damaged structures and vegetation to suggest the passage of time",
            "Used warm greenish lighting to create a quiet, desolate atmosphere",
            "Explored environment composition, materials, and visual storytelling"
        ],

        ja: [
            "廃墟となった建築物をテーマに背景を制作",
            "損傷した建物と植物で時間の経過を表現",
            "黄緑色のライティングで静寂な雰囲気を演出",
            "背景構図、マテリアル、環境による物語表現を研究"
        ]
    }
},

{
    id: "stylized-islands",
    category: "environment",
    kind: "collection",
    year: "2022",
    featured: false,

    title: {
        zh: "海島",
        en: "Stylized Island Dioramas",
        ja: "スタイライズされた島のジオラマ"
    },

    description: {
        zh: "以低多邊形風格製作的小型海島場景，包含船隻、椰子樹、海岸與島嶼建築。透過簡化的幾何造型、明亮色彩及場景配置，探索風格化環境的視覺表現。",

        en: "A collection of small stylized island environments featuring boats, palm trees, coastlines, and island buildings. The scenes explore simplified geometric shapes, vibrant colors, and composition in low-poly environment art.",

        ja: "船、ヤシの木、海岸、島の建物などを制作したローポリスタイルの小規模な背景作品集です。シンプルな形状、鮮やかな色彩、構図によるスタイライズ表現を研究しました。"
    },

    tools: [
        "Blender",
        "Low Poly",
        "Environment Art"
    ],

    image: "assets/images/environments/island-boat.png",

    gallery: [
        {
            src: "assets/images/environments/island-boat.png",

            caption: {
                zh: "熱帶小島與船隻",
                en: "Tropical island and boat",
                ja: "南国の島とボート"
            }
        },
        {
            src: "assets/images/environments/island-house.png",

            caption: {
                zh: "海島小屋場景",
                en: "Island house diorama",
                ja: "島の小屋のジオラマ"
            }
        }
    ],

    highlights: {
        zh: [
            "使用簡化的幾何造型製作風格化場景",
            "練習海水、地形與植被的視覺配置",
            "透過色彩與構圖建立小型場景的整體氛圍"
        ],

        en: [
            "Created stylized environments with simplified geometry",
            "Explored the arrangement of water, terrain, and vegetation",
            "Used color and composition to establish visual atmosphere"
        ],

        ja: [
            "シンプルな形状による背景制作",
            "水面、地形、植物の配置を研究",
            "色彩と構図による雰囲気作り"
        ]
    }
},

{
    id: "environment-studies",
    category: "environment",
    kind: "collection",
    year: "2022-2023",
    featured: false,

    title: {
        zh: "小型場景練習集",
        en: "Environment Art Studies",
        ja: "背景モデリング習作集"
    },

    description: {
        zh: "使用 Blender 製作的多個小型 3D 場景練習，包含沙漠夕陽、中世紀室內空間與水岸商店街。透過不同主題探索場景構圖、色彩配置、物件擺放及燈光表現，累積環境建模的基礎經驗。",

        en: "A collection of small 3D environments created in Blender, including a desert sunset, a medieval interior, and a waterfront shopping street. These studies explore composition, color, prop placement, and lighting across different visual themes.",

        ja: "Blenderで制作した小規模な3D背景の習作集です。砂漠の夕日、中世ヨーロッパ風の室内、水辺の商店街など、異なるテーマを通して構図、色彩、オブジェクト配置、ライティングを練習しました。"
    },

    tools: [
        "Blender",
        "3D Modeling",
        "Environment Art",
        "Lighting"
    ],

    image: "assets/images/environments/shopping-street.png",

    gallery: [
        {
            src: "assets/images/environments/desert-sunset.png",

            caption: {
                zh: "沙漠夕陽與金字塔場景",
                en: "Desert sunset and pyramids",
                ja: "砂漠の夕日とピラミッド"
            }
        },
        {
            src: "assets/images/environments/medieval-interior.png",

            caption: {
                zh: "中世紀風格室內場景",
                en: "Medieval-style interior",
                ja: "中世ヨーロッパ風の室内"
            }
        },
        {
            src: "assets/images/environments/shopping-street.png",

            caption: {
                zh: "水岸商店街場景",
                en: "Waterfront shopping street",
                ja: "水辺の商店街"
            }
        }
    ],

    highlights: {
        zh: [
            "練習不同主題的小型環境建模",
            "探索室內與室外場景的物件配置",
            "使用色彩、光線與構圖呈現不同環境氛圍"
        ],

        en: [
            "Practiced modeling small environments across different themes",
            "Explored object placement in interior and exterior scenes",
            "Used color, lighting, and composition to create distinct atmospheres"
        ],

        ja: [
            "異なるテーマの小規模な背景を制作",
            "屋内外のオブジェクト配置を練習",
            "色彩、光、構図による雰囲気の表現"
        ]
    }
},

{
    id: "zaku-model-diorama",
    category: "modelcraft",
    kind: "single",
    year: "2022",
    featured: false,

    title: {
        zh: "薩克模型製作與場景塗裝",
        en: "Zaku Model Kit & Diorama",
        ja: "ザク模型・ジオラマ制作"
    },

    description: {
        zh: "以薩克機體為主題的實體模型製作作品，包含模型組裝、噴漆塗裝、舊化處理以及場景地台製作。透過裝甲表面的磨損與污漬效果，搭配地台和藤蔓裝飾，呈現機體經歷戰鬥與長時間環境侵蝕後的樣貌。",

        en: "A physical Zaku model kit project involving assembly, airbrush painting, weathering, and diorama construction. Surface wear and weathering effects are combined with a custom display base and vines to create the appearance of a machine affected by battle and prolonged environmental exposure.",

        ja: "ザクを題材としたプラモデル制作作品です。組み立て、エアブラシ塗装、ウェザリング、ジオラマ台座の制作を行いました。装甲の傷や汚れ、台座とツタの表現を組み合わせ、戦闘や長年の環境による劣化を感じさせる仕上がりを目指しました。"
    },

    tools: [
        "Model Kit Assembly",
        "Airbrush Painting",
        "Weathering",
        "Diorama"
    ],

    image: "assets/images/modelcraft/zaku-model-painting.png",

    gallery: [],

    highlights: {
        zh: [
            "完成薩克模型的組裝與表面處理",
            "使用噴漆製作裝甲的主要色彩",
            "透過舊化處理呈現磨損、污漬與使用痕跡",
            "製作場景地台並加入藤蔓元素",
            "結合機體塗裝與環境配置，營造具有故事性的展示效果"
        ],

        en: [
            "Assembled and prepared the Zaku model kit",
            "Applied the main armor colors using airbrush painting",
            "Created wear, stains, and signs of use through weathering",
            "Constructed a display base with vine details",
            "Combined model painting and environment design to create a narrative display"
        ],

        ja: [
            "ザク模型の組み立てと表面処理",
            "エアブラシによる装甲の基本塗装",
            "ウェザリングによる傷、汚れ、使用感の表現",
            "ツタを取り入れたジオラマ台座の制作",
            "機体と背景を組み合わせた物語性のある展示"
        ]
    }
},

{
    id: "portrait-sketches",
    category: "drawing",
    kind: "collection",
    display: "portrait",
    year: "2024",
    featured: false,

    title: {
        zh: "人物肖像素描集",
        en: "Portrait Drawing Studies",
        ja: "人物肖像デッサン集"
    },

    description: {
        zh: "以不同人物為對象進行的鉛筆肖像素描練習。透過觀察臉部比例、五官結構及光影關係，練習人物特徵的掌握與立體感的表現。作品著重於線條控制、明暗層次及人物神情的描繪。",

        en: "A collection of pencil portrait studies featuring different subjects. The drawings focus on facial proportions, anatomical structure, and lighting to develop an understanding of individual features, form, and expression.",

        ja: "さまざまな人物を題材にした鉛筆デッサンの習作集です。顔の比率、目鼻などの構造、光と影の関係を観察し、人物の特徴や立体感、表情の表現を練習しました。"
    },

    tools: [
        "Graphite Pencil",
        "Portrait Drawing",
        "Traditional Art"
    ],

    image: "assets/images/artwork/portrait-lin.jpg",

    gallery: [
        {
            src: "assets/images/artwork/portrait-lin.jpg",

            caption: {
                zh: "人物肖像素描 — 林家正",
                en: "Portrait drawing — Lin",
                ja: "人物デッサン — 林"
            }
        },
        {
            src: "assets/images/artwork/portrait-zhao.jpg",

            caption: {
                zh: "人物肖像素描 — 趙天佑",
                en: "Portrait drawing — Zhao",
                ja: "人物デッサン — 趙"
            }
        },
        {
            src: "assets/images/artwork/portrait-shelby.jpg",

            caption: {
                zh: "人物肖像素描 — 謝爾比",
                en: "Portrait drawing — Shelby",
                ja: "人物デッサン — シェルビー"
            }
        }
    ],

    highlights: {
        zh: [
            "觀察不同人物的臉部比例與五官結構",
            "透過鉛筆明暗表現人物的立體感",
            "練習頭髮、皮膚與衣物的質感表現",
            "掌握人物特徵與神情的描繪"
        ],

        en: [
            "Studied facial proportions and features",
            "Used pencil shading to establish three-dimensional form",
            "Practiced hair, skin, and clothing textures",
            "Explored individual characteristics and facial expressions"
        ],

        ja: [
            "人物ごとの顔の比率と構造を観察",
            "鉛筆の明暗による立体感の表現",
            "髪、肌、衣服の質感を練習",
            "人物の特徴や表情を描写"
        ]
    }
},

{
    id: "digital-still-life",
    category: "drawing",
    kind: "single",
    year: "",
    featured: false,

    title: {
        zh: "玻璃杯電繪",
        en: "Digital Still Life Study",
        ja: "デジタル静物画"
    },

    description: {
        zh: "使用 Adobe Photoshop 製作的電腦繪圖作品，以透明玻璃器皿為主要表現對象。透過色彩、光影及透明材質的描繪，練習物件的立體感、反射效果與畫面空間的呈現。",

        en: "A digital still-life painting created in Adobe Photoshop, focusing on transparent glassware. The study explores color, lighting, transparency, and reflections to develop a sense of form and depth.",

        ja: "Adobe Photoshopで制作したデジタル静物画です。透明なガラス容器を主な題材とし、色彩、光と影、透明感、反射の表現を通して、立体感と奥行きを練習しました。"
    },

    tools: [
        "Adobe Photoshop",
        "Digital Painting"
    ],

    image: "assets/images/artwork/digital-still-life.png",

    gallery: [],

    highlights: {
        zh: [
            "使用Photoshop",
            "練習透明玻璃材質的視覺表現",
            "觀察反射、高光與陰影的關係",
            "透過色彩與明暗建立物件立體感"
        ],

        en: [
            "Created a digital painting in Photoshop",
            "Studied the appearance of transparent glass",
            "Observed reflections, highlights, and shadows",
            "Used color and shading to establish depth"
        ],

        ja: [
            "Photoshopによるデジタルペインティング",
            "透明なガラスの質感表現",
            "反射、ハイライト、影の関係を観察",
            "色彩と明暗による立体感の表現"
        ]
    }
}

];
window.projects = projects;
