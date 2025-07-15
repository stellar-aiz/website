# ヒーロー画像の代替案

## 1. CSSグラデーション背景（推奨）
画像なしで美しい背景を作成：

```css
/* グラデーション背景の例 */
.hero-section {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%);
  /* または */
  background: linear-gradient(120deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

/* メッシュグラデーション風 */
.hero-section {
  background: 
    radial-gradient(at 20% 80%, #3b82f6 0, transparent 50%),
    radial-gradient(at 80% 20%, #8b5cf6 0, transparent 50%),
    radial-gradient(at 40% 40%, #06b6d4 0, transparent 50%),
    #1a202c;
}
```

## 2. パーティクルアニメーション
Particles.jsでAI感のある背景：

```html
<div class="hero-section">
  <div id="particles-js"></div>
  <div class="hero-content">
    <!-- コンテンツ -->
  </div>
</div>
```

## 3. SVGパターン背景
軽量でスケーラブル：

```css
.hero-section {
  background-color: #1a202c;
  background-image: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a5568' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

## 4. 無料素材サイトから取得

### Unsplash（商用利用可）
おすすめ画像URL：
- https://unsplash.com/photos/jIBMSMs4_kA (AI network)
- https://unsplash.com/photos/IgWNxx7paz4 (abstract tech)
- https://unsplash.com/photos/Q1p7bh3SHj8 (data visualization)

### Pexels
- https://www.pexels.com/search/artificial%20intelligence/

## 5. 実装時の仮対応（最もシンプル）

```css
.hero-section {
  background: #1a202c;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}
```

## 推奨アプローチ

**まずはCSSグラデーション背景で実装を進める**ことをおすすめします：
- 追加ファイル不要
- 高速読み込み
- レスポンシブ対応が簡単
- 後から画像に差し替え可能

実装を始めましょうか？