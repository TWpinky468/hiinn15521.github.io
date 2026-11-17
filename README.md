# Yi Ning Huang | Portfolio

個人作品集網站，使用純 HTML、CSS、JavaScript 建立，可直接發布到 GitHub Pages。

## 使用方式

1. 在 VS Code 開啟本專案資料夾。
2. 對 `index.html` 使用 Live Server 預覽。
3. 修改完成後，使用 GitHub Desktop Commit，再 Push 到 GitHub。
4. `index.html` 是首頁；`project.html?id=boss-battle` 是作品詳細頁範例。

## 新增一件作品

1. 將封面放進 `assets/images/` 下的分類資料夾。
2. 開啟 `projects.js`，在 `projects` 陣列增加一個項目。
3. `id` 必須唯一、使用英數字與連字號。`category` 可以是 `game`、`props`、`creature`、`environment`、`animation`、`drawing`。
4. `title`、`description`、`highlights` 都能分別填入 `zh`、`en`、`ja` 三種語言。
5. `image` 是封面，`gallery` 是詳細頁的其他圖片。圖片路徑請使用相對路徑，不要加最前面的 `/`。

## 目前素材資料夾如何對應網站分類

| 現有作品／資料夾 | 網站 `category` | 建議呈現方式 |
| --- | --- | --- |
| `BOSS水晶戰`、`2D`、`3D酒館` | `game` | 三個主要專案，各自一張卡片及獨立詳細頁 |
| `物品建模` | `props` | 多件零散物件可整理為一組作品集錦 |
| `3D服裝設計` | `props` | 一套完成度高的服裝可單獨一頁，其他習作合併 |
| `雕刻`（ZBrush 怪物） | `creature` | 生物雕刻、轉面圖、細節特寫 |
| `場景建模` | `environment` | 每個完整場景各自一頁，附製作過程 |
| `素描`、`電繪繪圖.png` | `drawing` | 作品集錦，保留大圖展示 |
| Blender 戰鬥動作等 | `animation` | 完成影片、關鍵 Pose、骨架及製作說明 |

這些名稱是分類方式，**不代表以上圖片都已上傳**。目前 ZIP 只有三張 Unity 專案封面；動畫封面路徑尚未有實體檔案，網頁會暫時顯示文字。空白分類會顯示「作品正在整理中」。

範例（請放在 `projects` 陣列裡，並把圖片替換成實際存在的檔案）：

```js
{
    id: "my-3d-prop",
    category: "props",
    kind: "single",
    year: 2026,
    featured: false,
    title: { zh: "科幻道具", en: "Sci-Fi Prop", ja: "SFプロップ" },
    description: { zh: "作品介紹", en: "Project summary", ja: "作品概要" },
    tools: ["Blender", "Substance Painter"],
    image: "assets/images/modeling/prop-cover.webp",
    gallery: [
        "assets/images/modeling/prop-wireframe.webp",
        "assets/images/modeling/prop-detail.webp"
    ],
    highlights: {
        zh: ["高模與低模製作", "材質與貼圖"],
        en: ["High- and low-poly modeling", "Materials and textures"],
        ja: ["ハイポリ・ローポリ制作", "マテリアル・テクスチャ"]
    }
}
```

## 將小型練習合併成作品集錦

使用相同的資料格式，但將 `kind` 設為 `"collection"`，並把其他練習圖放進 `gallery`。首頁只顯示一張集合封面，點進去會出現多圖畫廊。

```js
{
    id: "modeling-studies",
    category: "props",
    kind: "collection",
    year: 2026,
    featured: false,
    title: { zh: "3D 道具練習集", en: "3D Prop Studies", ja: "3D小物制作集" },
    description: { zh: "不同材質與造型的練習。", en: "Studies in form and materials.", ja: "形状と質感の習作。" },
    tools: ["Blender"],
    image: "assets/images/modeling/studies-cover.webp",
    gallery: [
        "assets/images/modeling/study-01.webp",
        "assets/images/modeling/study-02.webp"
    ],
    highlights: { zh: ["造型練習"], en: ["Form studies"], ja: ["形状の習作"] }
}
```

若想在詳細頁加影片，可新增 `video: "assets/videos/my-demo.mp4"`。建議先壓縮影片，過大的影片可使用外部影片平台後再設計嵌入。

## 更新前的檢查

- 首頁分類按鈕可篩選作品。
- 點擊作品卡片可開啟詳細頁。
- 在詳細頁切換語言、點擊圖片放大都正常。
- 沒有圖片的作品會顯示文字佔位，不會顯示無關的圖片。
- 公開網站上的素材、遊戲截圖和程式碼應遵守原始資產授權；請清楚標註第三方素材、Mixamo 或 AI 協助的部分。
- 若用其他電腦修改，開始前先 Pull、結束後再 Commit 與 Push。
