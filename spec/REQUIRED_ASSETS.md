# 必要アセット一覧

## 最低限必要なアセット

### 1. ロゴ画像 【必須】
```
/docs/assets/images/logo/
├── logo.svg              # メインロゴ（推奨）
├── logo.png              # PNG版（フォールバック用）
└── logo-white.svg        # 白抜き版（フッター用）
```
- 推奨サイズ：高さ40px相当でクリアに表示される解像度
- SVG推奨（スケーラブル、軽量）

### 2. ファビコン 【必須】
```
/docs/assets/icons/
├── favicon.ico           # 基本ファビコン（必須）
├── favicon-32x32.png     # 32x32px
├── favicon-16x16.png     # 16x16px
└── apple-touch-icon.png  # 180x180px（iOS用）
```

### 3. OGP画像 【重要】
```
/docs/assets/images/ogp/
├── home.jpg              # 1200x630px
├── services.jpg          # 1200x630px
├── record.jpg            # 1200x630px
├── about.jpg             # 1200x630px
├── news.jpg              # 1200x630px
└── inquiry.jpg           # 1200x630px
```
- サイズ：1200x630px（Facebook/Twitter推奨）
- 形式：JPG（ファイルサイズ考慮）
- 内容：各ページを象徴する画像＋ロゴ

### 4. ヒーロー画像 【重要】
```
/docs/assets/images/hero/
├── hero-bg.jpg           # デスクトップ用（1920x1080px以上）
├── hero-mobile.jpg       # モバイル用（800x1200px）
└── hero-tablet.jpg       # タブレット用（1200x800px）
```
- AI/テクノロジーを想起させる抽象的な背景
- 暗めのトーンで文字が読みやすいもの

## 今すぐ用意できない場合の代替案

### 1. 仮ロゴ
```html
<!-- テキストロゴで代替 -->
<div class="logo text-2xl font-bold">Stellar AIz</div>
```

### 2. 仮ファビコン
- https://favicon.io/favicon-generator/ で生成
- "S" や "SA" の文字で作成

### 3. 仮OGP画像
- グラデーション背景＋ロゴ＋キャッチコピー
- Canvaなどで簡単に作成可能

### 4. 仮ヒーロー画像
- Unsplashなどのフリー素材
  - 検索キーワード：AI, technology, abstract, network
  - 例：https://unsplash.com/s/photos/ai-technology

## プレースホルダー画像の作成

実装時の仮画像として：
```html
<!-- プレースホルダーサービス -->
<img src="https://via.placeholder.com/1200x630/1a202c/ffffff?text=Stellar+AIz" alt="OGP画像">
```

## 最優先で準備すべきもの

1. **ロゴ（SVGまたはPNG）** - これがないと始まらない
2. **ファビコン** - 最低限favicon.icoだけでもOK
3. **ヒーロー背景画像1枚** - TOPページの印象を決める

その他は実装を進めながら順次追加でも問題ありません。

## 画像要件

- **ファイル名**：小文字、ハイフン区切り
- **圧縮**：適切に圧縮（JPG品質80-85%程度）
- **著作権**：商用利用可能なもの