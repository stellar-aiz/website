# ナビゲーション仕様

## ヘッダーナビゲーション

### 構成要素と配置
```
[ロゴ]                                    [ホーム] [サービス] [実績] [会社情報] [ニュース] [お問い合わせ]
```

### メニュー項目と順序
1. ホーム（TOPページでは非表示または非リンク化）
2. サービス
3. 実績
4. 会社情報
5. ニュース
6. お問い合わせ（CTAボタンスタイル）

### デザイン仕様

#### デスクトップ（1024px以上）
- ヘッダー高さ：80px
- 背景：白（opacity: 0.95）
- 上部固定（sticky）、スクロール時も追従
- ロゴ：左端配置、クリックでTOPへ
- メニュー：右端配置、横並び
- フォントサイズ：16px
- メニュー間隔：32px

#### タブレット（768px〜1023px）
- ヘッダー高さ：70px
- 基本的にデスクトップと同じレイアウト
- メニュー間隔：24px
- フォントサイズ：15px

#### モバイル（767px以下）
- ヘッダー高さ：60px
- ハンバーガーメニュー表示
- ロゴ：左端、ハンバーガー：右端

### ハンバーガーメニュー仕様
- アイコン：3本線 → ×に変化
- 開閉：スライドダウンアニメーション（0.3秒）
- メニュー背景：白（opacity: 0.98）
- メニュー項目：縦並び、中央揃え
- 各項目の高さ：60px
- メニュー開時：背景スクロール無効化

### 現在ページの表示
- アクティブページ：下線表示（アクセントカラー）
- ホバー時：opacity 0.7、トランジション 0.2秒

### ロゴ仕様
- サイズ：高さ40px（デスクトップ）、32px（モバイル）
- クリック時：TOPページへ遷移（相対パス使用）
- TOPページでは非リンク化

## 実装例

### HTML構造
```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <!-- ロゴ -->
      <div class="logo">
        <a href="./" aria-label="Stellar AIz ホーム">
          <img src="./assets/images/logo/logo.svg" alt="Stellar AIz">
        </a>
      </div>
      
      <!-- ナビゲーション -->
      <nav class="main-nav" aria-label="メインナビゲーション">
        <!-- モバイル用ハンバーガー -->
        <button class="mobile-menu-toggle" aria-label="メニューを開く">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <!-- メニューリスト -->
        <ul class="nav-list">
          <li><a href="./" class="nav-link">ホーム</a></li>
          <li><a href="./services/" class="nav-link">サービス</a></li>
          <li><a href="./record/" class="nav-link">実績</a></li>
          <li><a href="./about/" class="nav-link">会社情報</a></li>
          <li><a href="./news/" class="nav-link">ニュース</a></li>
          <li><a href="./inquiry/" class="nav-link nav-cta">お問い合わせ</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

### JavaScript機能
1. ハンバーガーメニューの開閉
2. 現在ページの自動判定とアクティブ表示
3. スムーススクロール（ページ内リンクがある場合）
4. ヘッダーの固定表示制御

## アクセシビリティ
- aria-label の適切な設定
- キーボードナビゲーション対応
- フォーカス表示の実装
- 適切なコントラスト比の確保