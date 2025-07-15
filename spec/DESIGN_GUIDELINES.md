# デザインガイドライン - Tailwind CSS併用版

## 基本方針

Tailwind CSSの利便性を活かしつつ、Stellar AIz独自のデザインシステムを維持します。

## カラーパレット使用ルール

### 推奨カラー（カスタム定義）
```html
<!-- プライマリカラー -->
<div class="text-stellar-primary bg-stellar-primary">

<!-- セカンダリカラー -->
<div class="text-stellar-secondary bg-stellar-secondary">

<!-- アクセントカラー -->
<div class="text-stellar-accent bg-stellar-accent">

<!-- ダークカラー -->
<div class="text-stellar-dark bg-stellar-dark">

<!-- グレースケール -->
<div class="text-stellar-gray-600 bg-stellar-gray-100">
```

### 使用禁止
- Tailwindのデフォルトカラー（red-500, green-400など）は使用しない
- 必ずstellar-プレフィックスのカラーを使用

## コンポーネント使用ルール

### ボタン
```html
<!-- プライマリボタン -->
<button class="btn-primary-stellar">お問い合わせ</button>

<!-- セカンダリボタン -->
<button class="btn-secondary-stellar">詳細を見る</button>

<!-- アクセントボタン -->
<button class="btn-accent-stellar">今すぐ始める</button>

<!-- Tailwindクラスでの実装も可（統一感を保つ） -->
<button class="inline-block px-6 py-3 bg-stellar-primary text-white font-medium 
               rounded-md hover:bg-blue-700 transition-all duration-300">
  カスタムボタン
</button>
```

### セクションタイトル
```html
<!-- 統一されたセクションタイトル -->
<h2 class="section-title-stellar">サービス紹介</h2>
<p class="section-subtitle-stellar">
  Stellar AIzが提供する最先端のAIソリューション
</p>
```

### カード
```html
<!-- 統一されたカードスタイル -->
<div class="card-stellar">
  <h3 class="text-xl font-bold mb-4">爆速開発</h3>
  <p class="text-stellar-gray-600">2-3ヶ月でPoCを実現</p>
</div>
```

## スペーシングルール

### 推奨スペーシング
- セクション間: `py-16 md:py-24` (64px / 96px)
- コンテナ内余白: `px-4 md:px-6 lg:px-8`
- 要素間: `mb-4` (16px), `mb-6` (24px), `mb-8` (32px)

### 統一ルール
```html
<!-- セクション -->
<section class="py-16 md:py-24">
  <div class="container mx-auto px-4 md:px-6 lg:px-8">
    <!-- コンテンツ -->
  </div>
</section>

<!-- グリッドレイアウト -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <!-- アイテム -->
</div>
```

## レスポンシブルール

### ブレークポイント使用
```html
<!-- モバイルファースト -->
<div class="text-base md:text-lg lg:text-xl">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div class="py-12 md:py-16 lg:py-20">
```

### 表示/非表示
```html
<!-- モバイルのみ表示 -->
<div class="block md:hidden">

<!-- デスクトップのみ表示 -->
<div class="hidden md:block">
```

## アニメーションルール

### 推奨アニメーション
```html
<!-- ホバー効果 -->
<div class="transition-all duration-300 hover:shadow-stellar">

<!-- フェードイン（カスタムクラス） -->
<div class="animate-fadein">

<!-- Tailwindのアニメーション -->
<div class="animate-pulse">
```

## 禁止事項

1. **インラインスタイルの使用禁止**
   ```html
   <!-- NG -->
   <div style="color: blue;">
   
   <!-- OK -->
   <div class="text-stellar-primary">
   ```

2. **任意の色値の使用禁止**
   ```html
   <!-- NG -->
   <div class="text-[#123456]">
   
   <!-- OK -->
   <div class="text-stellar-primary">
   ```

3. **過度なクラスの連結**
   ```html
   <!-- NG -->
   <div class="px-4 py-2 mt-4 mb-4 ml-2 mr-2 text-sm font-medium ...">
   
   <!-- OK: カスタムコンポーネントクラスを作成 -->
   <div class="card-stellar">
   ```

## ファイル構成

```
HTMLファイル
├── Tailwind CSS CDN
├── tailwind-config.js (カスタム設定)
├── common.css (Tailwind補完用)
└── ページ固有のCSS（必要に応じて）
```

## 実装例

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- カスタム設定 -->
  <script src="./assets/js/tailwind-config.js"></script>
  
  <!-- 共通CSS -->
  <link rel="stylesheet" href="./assets/css/common.css">
</head>
<body class="bg-white text-stellar-gray-800">
  <!-- コンテンツ -->
</body>
</html>
```