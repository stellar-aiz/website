# URL構造仕様

## ディレクトリ構造
```
/docs/                     → ドキュメントルート（GitHub Pages設定）
  ├── index.html          → TOPページ
  ├── services/
  │   └── index.html      → サービス紹介
  ├── record/
  │   └── index.html      → 実績紹介
  ├── about/
  │   └── index.html      → 会社情報
  ├── news/
  │   └── index.html      → ニュース
  ├── inquiry/
  │   └── index.html      → お問い合わせ
  ├── 404.html            → 404エラーページ
  └── assets/
      ├── images/         → 画像ファイル
      │   ├── logo/       → ロゴ関連
      │   ├── hero/       → ヒーロー画像
      │   └── common/     → 共通画像
      ├── icons/          → ファビコン、アイコン類
      ├── css/            → スタイルシート
      └── js/             → JavaScript
```

## URL対応表

### 開発環境（GitHub Pages）
- ベースURL: `https://stellar-aiz.github.io/website/`
- 例: `https://stellar-aiz.github.io/website/services/`

### 本番環境（カスタムドメイン）
- ベースURL: `https://stellar-aiz.com/`
- 例: `https://stellar-aiz.com/services/`

## パス記述ルール

### 重要：すべて相対パスで統一

#### ナビゲーションリンク
```html
<!-- TOPページ（/docs/index.html）から他ページへ -->
<a href="./services/">サービス</a>
<a href="./record/">実績</a>
<a href="./about/">会社情報</a>

<!-- サブページ（例：/docs/services/index.html）からTOPへ -->
<a href="../">ホーム</a>

<!-- サブページから別のサブページへ -->
<a href="../record/">実績</a>
<a href="../about/">会社情報</a>
```

#### アセット読み込み
```html
<!-- TOPページから -->
<link rel="stylesheet" href="./assets/css/style.css">
<script src="./assets/js/main.js"></script>
<img src="./assets/images/logo/logo.png" alt="Stellar AIz">

<!-- サブページから -->
<link rel="stylesheet" href="../assets/css/style.css">
<script src="../assets/js/main.js"></script>
<img src="../assets/images/logo/logo.png" alt="Stellar AIz">
```

## その他の仕様
- 言語：日本語のみ
- 文字コード：UTF-8
- トレーリングスラッシュ：ディレクトリ形式のURLには必須
- 大文字小文字：すべて小文字で統一

## 移行時の注意
- GitHub PagesからカスタムドメインへCNAME設定で移行予定
- 相対パスで実装しているため、コード変更は不要