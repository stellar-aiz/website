# パララックス効果実装仕様

## 使用ライブラリ

**Rellax.js**を採用（軽量で使いやすい）
- CDN: https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js
- ファイルサイズ: 約5KB（gzip）

## 実装箇所と効果詳細

### 1. TOPページ - ヒーローセクション
**要素**: 背景画像
**効果**: 
- スクロール速度: -5（背景がゆっくり動く）
- 視差効果で奥行き感を演出
```html
<div class="hero-bg rellax" data-rellax-speed="-5">
  <img src="./assets/images/hero/hero-bg.jpg" alt="">
</div>
```

### 2. TOPページ - 行動原則セクション
**要素**: 各原則カード
**効果**:
- 奇数カード: speed="-2"
- 偶数カード: speed="-3"
- 交互に異なる速度で浮遊感を演出
```html
<div class="principle-card rellax" data-rellax-speed="-2">
  <!-- 原則1の内容 -->
</div>
```

### 3. サービスページ - セクション区切り
**要素**: 装飾的な背景図形
**効果**:
- スクロール速度: -1
- 微細な動きで洗練された印象
```html
<div class="section-decoration rellax" data-rellax-speed="-1">
  <svg><!-- 装飾図形 --></svg>
</div>
```

### 4. 実績ページ - 実績カード
**要素**: 実績カードの背景パターン
**効果**:
- スクロール速度: -2
- カード間で異なる速度設定も可
```html
<div class="case-card">
  <div class="case-bg-pattern rellax" data-rellax-speed="-2"></div>
  <!-- カード内容 -->
</div>
```

### 5. 全ページ共通 - フッター前の装飾
**要素**: 波型の装飾ライン
**効果**:
- スクロール速度: -4
- フッターへの自然な遷移
```html
<div class="footer-wave rellax" data-rellax-speed="-4">
  <svg><!-- 波形SVG --></svg>
</div>
```

## レスポンシブ対応

### モバイル（〜767px）
- **パララックス効果を無効化**
- パフォーマンスとUX考慮
```javascript
if (window.innerWidth > 767) {
  var rellax = new Rellax('.rellax');
}
```

### タブレット（768px〜）
- 効果を有効化
- 速度を若干控えめに調整

## 実装コード例

### JavaScript初期化
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // レスポンシブ対応
  if (window.innerWidth > 767) {
    // Rellax初期化
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    
    // ウィンドウリサイズ時の対応
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth <= 767 && rellax) {
          rellax.destroy();
          rellax = null;
        } else if (window.innerWidth > 767 && !rellax) {
          rellax = new Rellax('.rellax');
        }
      }, 250);
    });
  }
});
```

### CSS補助クラス
```css
/* パララックス要素の基本設定 */
.rellax {
  will-change: transform;
  transform: translateZ(0); /* ハードウェアアクセラレーション */
}

/* モバイルでの無効化 */
@media (max-width: 767px) {
  .rellax {
    transform: none !important;
  }
}

/* スムーズな表示のための設定 */
.hero-bg {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  z-index: -1;
  overflow: hidden;
}
```

## パフォーマンス最適化

1. **遅延読み込み**
   - パララックス要素の画像はlazyload
   
2. **GPU活用**
   - transform3dでハードウェアアクセラレーション

3. **要素数制限**
   - 1ページあたり最大10要素まで

4. **アクセシビリティ**
   - prefers-reduced-motion対応
   ```css
   @media (prefers-reduced-motion: reduce) {
     .rellax {
       transform: none !important;
     }
   }
   ```

## 注意事項
- 過度な使用は避ける（ユーザビリティ優先）
- 重要なコンテンツには適用しない
- テキストの可読性を損なわないよう配慮
- iOSのモバイルSafariでの動作確認必須