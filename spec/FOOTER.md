# フッター仕様

## フッター構成

### レイアウト（3カラム構成）

```
[ロゴ・会社情報]          [サイトマップ]           [お問い合わせ情報]

                    [コピーライト・リンク]
```

### 詳細内容

#### 左カラム：会社情報
- Stellar AIzロゴ（モノクロまたは白抜き）
- 簡潔なミッション文（1行）
- 会社名：Stellar AIz

#### 中央カラム：サイトマップ
- ホーム
- サービス
- 実績
- 会社情報
- ニュース
- お問い合わせ

#### 右カラム：お問い合わせ
- 「お問い合わせはこちら」ボタン
- ※メールアドレスは記載しない（スパム対策）

### 最下部：コピーライト行
- © 2025 Stellar AIz. All rights reserved.
- プライバシーポリシー（リンク）
- 利用規約（リンク）※必要に応じて

## デザイン仕様

### カラー
- 背景：ネイビー（#1a202c）
- テキスト：白（#ffffff）
- リンク：ライトグレー（#e2e8f0）
- リンクホバー：白（#ffffff）

### スペーシング
- 上下パディング：80px（デスクトップ）、60px（モバイル）
- カラム間隔：48px
- 行間：1.8

### レスポンシブ対応

#### デスクトップ（1024px以上）
- 3カラム横並び
- 各カラム均等幅

#### タブレット（768px〜1023px）
- 3カラム横並び（幅調整）
- フォントサイズ微調整

#### モバイル（767px以下）
- 1カラム縦並び
- 中央揃え
- 各セクション間：40px

## 実装例

### HTML構造
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <!-- 会社情報 -->
      <div class="footer-column">
        <div class="footer-logo">
          <img src="./assets/images/logo/logo-white.svg" alt="Stellar AIz">
        </div>
        <p class="footer-mission">戦略と爆速開発で、AIの実践力を極める</p>
        <p class="footer-company">Stellar AIz</p>
      </div>
      
      <!-- サイトマップ -->
      <div class="footer-column">
        <h3 class="footer-title">サイトマップ</h3>
        <nav class="footer-nav" aria-label="フッターナビゲーション">
          <ul class="footer-nav-list">
            <li><a href="./">ホーム</a></li>
            <li><a href="./services/">サービス</a></li>
            <li><a href="./record/">実績</a></li>
            <li><a href="./about/">会社情報</a></li>
            <li><a href="./news/">ニュース</a></li>
            <li><a href="./inquiry/">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
      
      <!-- お問い合わせ -->
      <div class="footer-column">
        <h3 class="footer-title">お問い合わせ</h3>
        <p class="footer-text">AI導入のご相談はお気軽に</p>
        <a href="./inquiry/" class="footer-cta-button">お問い合わせはこちら</a>
      </div>
    </div>
    
    <!-- コピーライト -->
    <div class="footer-bottom">
      <p class="copyright">© 2025 Stellar AIz. All rights reserved.</p>
      <div class="footer-legal">
        <a href="./privacy/">プライバシーポリシー</a>
      </div>
    </div>
  </div>
</footer>
```

## 注意事項
- サブページからのリンクは相対パス（../）を使用
- プライバシーポリシーページは別途作成が必要
- SNSリンクは現時点では含まない（将来的に追加可能）