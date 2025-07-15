# レスポンシブデザイン仕様

## ブレークポイント定義

Tailwind CSSのデフォルトブレークポイントを採用：

```css
/* モバイルファースト設計 */
- sm: 640px以上   /* 大型スマートフォン・小型タブレット */
- md: 768px以上   /* タブレット */
- lg: 1024px以上  /* デスクトップ */
- xl: 1280px以上  /* 大型デスクトップ */
- 2xl: 1536px以上 /* フルHDディスプレイ */
```

## デバイス別の表示仕様

### モバイル（デフォルト〜639px）
- コンテナ幅：100%（左右padding: 16px）
- フォントサイズ：
  - 本文：14px
  - 見出し（h1）：24px
  - 見出し（h2）：20px
  - 見出し（h3）：18px
- 画像：width: 100%
- カラム：すべて1列表示

### 大型スマートフォン（sm: 640px〜767px）
- コンテナ幅：100%（左右padding: 24px）
- フォントサイズ：
  - 本文：15px
  - 見出し（h1）：28px
  - 見出し（h2）：24px
  - 見出し（h3）：20px

### タブレット（md: 768px〜1023px）
- コンテナ幅：100%（左右padding: 32px）
- フォントサイズ：
  - 本文：16px
  - 見出し（h1）：32px
  - 見出し（h2）：28px
  - 見出し（h3）：22px
- 2カラムレイアウト開始

### デスクトップ（lg: 1024px〜1279px）
- コンテナ幅：960px（中央揃え）
- フォントサイズ：
  - 本文：16px
  - 見出し（h1）：40px
  - 見出し（h2）：32px
  - 見出し（h3）：24px
- 3カラムレイアウト対応

### 大型デスクトップ（xl: 1280px〜1535px）
- コンテナ幅：1200px（中央揃え）
- フォントサイズ：
  - 本文：17px
  - 見出し（h1）：48px
  - 見出し（h2）：36px
  - 見出し（h3）：26px

### フルHD（2xl: 1536px以上）
- コンテナ幅：1400px（中央揃え）
- フォントサイズ：xlと同じ

## コンポーネント別の対応

### ナビゲーション
- 〜767px：ハンバーガーメニュー
- 768px〜：横並びメニュー

### ヒーローセクション
- 〜767px：高さ 60vh、テキスト中央揃え
- 768px〜：高さ 80vh、テキスト左揃え

### カード・グリッド
- 〜639px：1列
- 640px〜1023px：2列
- 1024px〜：3列

### フッター
- 〜767px：1列（縦並び）
- 768px〜：3列（横並び）

## 実装例（Tailwind CSS）

```html
<!-- コンテナ -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">

<!-- レスポンシブテキスト -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">

<!-- レスポンシブグリッド -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

<!-- レスポンシブ表示/非表示 -->
<div class="block lg:hidden">モバイル・タブレットのみ表示</div>
<div class="hidden lg:block">デスクトップのみ表示</div>
```

## 画像の取り扱い

### レスポンシブ画像
```html
<picture>
  <source media="(min-width: 1024px)" srcset="./assets/images/hero/hero-desktop.jpg">
  <source media="(min-width: 768px)" srcset="./assets/images/hero/hero-tablet.jpg">
  <img src="./assets/images/hero/hero-mobile.jpg" alt="ヒーロー画像" class="w-full h-auto">
</picture>
```

### アスペクト比の維持
- モバイル：16:9
- タブレット以上：21:9（ワイド）

## パフォーマンス考慮事項

1. **画像最適化**
   - モバイル用：最大幅 800px
   - タブレット用：最大幅 1200px
   - デスクトップ用：最大幅 1920px

2. **フォント読み込み**
   - モバイルでは必要最小限のウェイトのみ
   - display: swapで初期表示を高速化

3. **アニメーション**
   - モバイルでは控えめに
   - prefers-reduced-motionに対応

## テスト項目
- Chrome DevToolsでの各ブレークポイント確認
- 実機での表示確認（iOS Safari、Android Chrome）
- 横向き表示での確認
- タッチ操作の確認（リンク・ボタンのタップ領域）