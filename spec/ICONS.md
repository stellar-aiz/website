# アイコン仕様

## 採用アイコンライブラリ

**Heroicons**を採用
- 理由：Tailwind CSSとの親和性、軽量、必要なものだけ使用可能
- URL: https://heroicons.com/
- ライセンス：MIT

## 実装方法

個別のSVGを直接HTMLに埋め込む方式を採用（最も軽量）

## 使用アイコン一覧

### ナビゲーション
```html
<!-- ハンバーガーメニュー（開く） -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>

<!-- ハンバーガーメニュー（閉じる） -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
```

### サービスページ
```html
<!-- 戦略（LightBulb） -->
<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>

<!-- 開発（Code） -->
<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>

<!-- スピード（Lightning） -->
<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>

<!-- チーム（Users） -->
<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
```

### フッター・共通
```html
<!-- メール -->
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

<!-- 外部リンク -->
<svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>

<!-- チェックマーク -->
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
```

## スタイリング方法

Tailwind CSSのユーティリティクラスを使用：

```html
<!-- サイズ -->
<svg class="w-6 h-6">  <!-- 24x24px -->
<svg class="w-8 h-8">  <!-- 32x32px -->

<!-- 色 -->
<svg class="text-gray-600">  <!-- stroke/fillがcurrentColorなので文字色で制御 -->
<svg class="text-blue-500 hover:text-blue-700">

<!-- アニメーション -->
<svg class="transition-colors duration-200">
<svg class="animate-spin">  <!-- ローディング用 -->
```

## パフォーマンス最適化

1. **インライン化**
   - 外部ファイル読み込み不要
   - HTTPリクエスト削減

2. **SVG最適化**
   - 不要な属性削除
   - viewBoxのみ保持

3. **再利用**
   - 頻出アイコンは`<symbol>`で定義
   ```html
   <svg style="display: none;">
     <symbol id="icon-menu" viewBox="0 0 24 24">
       <path d="M4 6h16M4 12h16M4 18h16" />
     </symbol>
   </svg>
   
   <!-- 使用 -->
   <svg class="w-6 h-6"><use href="#icon-menu"></use></svg>
   ```

## アクセシビリティ

```html
<!-- 装飾的アイコン -->
<svg aria-hidden="true">

<!-- 意味のあるアイコン -->
<svg role="img" aria-label="メニューを開く">
```