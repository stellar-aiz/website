# SEO・メタ情報仕様

## 共通設定

### 基本メタタグ
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
```

### 共通OGP設定
```html
<meta property="og:site_name" content="Stellar AIz">
<meta property="og:type" content="website">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
```

## 各ページのメタ情報

### TOPページ
```html
<title>Stellar AIz - 戦略と爆速開発で、AIの実践力を極める</title>
<meta name="description" content="Stellar AIzは、戦略策定から爆速開発まで一貫したAI導入支援を提供。PoCを2-3ヶ月で実現し、ビジネスインパクトを最大化します。">
<meta property="og:title" content="Stellar AIz - 戦略と爆速開発で、AIの実践力を極める">
<meta property="og:description" content="Stellar AIzは、戦略策定から爆速開発まで一貫したAI導入支援を提供。PoCを2-3ヶ月で実現し、ビジネスインパクトを最大化します。">
<meta property="og:url" content="https://stellar-aiz.com/">
<meta property="og:image" content="https://stellar-aiz.com/assets/images/ogp/home.jpg">
```

### サービス紹介
```html
<title>サービス | Stellar AIz - AI戦略策定・PoC開発・組織支援</title>
<meta name="description" content="生成AI導入支援、DX/AI戦略策定、爆速PoC開発、開発組織支援まで。Stellar AIzの提供サービスをご紹介します。">
<meta property="og:title" content="サービス | Stellar AIz">
<meta property="og:description" content="生成AI導入支援、DX/AI戦略策定、爆速PoC開発、開発組織支援まで。Stellar AIzの提供サービスをご紹介します。">
<meta property="og:url" content="https://stellar-aiz.com/services/">
<meta property="og:image" content="https://stellar-aiz.com/assets/images/ogp/services.jpg">
```

### 実績紹介
```html
<title>実績 | Stellar AIz - 製造業・金融・海外企業のAI導入実績</title>
<meta name="description" content="大手電機メーカーのAI戦略策定、メガバンクのAIアーキテクチャ構築など、Stellar AIzの豊富な実績をご紹介します。">
<meta property="og:title" content="実績 | Stellar AIz">
<meta property="og:description" content="大手電機メーカーのAI戦略策定、メガバンクのAIアーキテクチャ構築など、Stellar AIzの豊富な実績をご紹介します。">
<meta property="og:url" content="https://stellar-aiz.com/record/">
<meta property="og:image" content="https://stellar-aiz.com/assets/images/ogp/record.jpg">
```

### 会社情報
```html
<title>会社情報 | Stellar AIz</title>
<meta name="description" content="Stellar AIzの会社概要。東京を拠点に、AI戦略策定と爆速開発でお客様のDXを支援します。">
<meta property="og:title" content="会社情報 | Stellar AIz">
<meta property="og:description" content="Stellar AIzの会社概要。東京を拠点に、AI戦略策定と爆速開発でお客様のDXを支援します。">
<meta property="og:url" content="https://stellar-aiz.com/about/">
<meta property="og:image" content="https://stellar-aiz.com/assets/images/ogp/about.jpg">
```

### ニュース
```html
<title>ニュース | Stellar AIz</title>
<meta name="description" content="Stellar AIzの最新情報、プレスリリース、イベント情報をお届けします。">
<meta property="og:title" content="ニュース | Stellar AIz">
<meta property="og:description" content="Stellar AIzの最新情報、プレスリリース、イベント情報をお届けします。">
<meta property="og:url" content="https://stellar-aiz.com/news/">
<meta property="og:image" content="https://stellar-aiz.com/assets/images/ogp/news.jpg">
```

### お問い合わせ
```html
<title>お問い合わせ | Stellar AIz</title>
<meta name="description" content="AI導入のご相談、サービスに関するお問い合わせはこちらから。Stellar AIzが貴社のDXを支援します。">
<meta property="og:title" content="お問い合わせ | Stellar AIz">
<meta property="og:description" content="AI導入のご相談、サービスに関するお問い合わせはこちらから。Stellar AIzが貴社のDXを支援します。">
<meta property="og:url" content="https://stellar-aiz.com/inquiry/">
<meta property="og:image" content="https://stellar-aiz.com/assets/images/ogp/inquiry.jpg">
```

### 404エラーページ
```html
<title>ページが見つかりません | Stellar AIz</title>
<meta name="description" content="お探しのページが見つかりませんでした。恐れ入りますが、トップページからお探しください。">
<meta name="robots" content="noindex, nofollow">
```

## その他のSEO対策

### 構造化データ（JSON-LD）
TOPページに組織情報を追加：
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stellar AIz",
  "url": "https://stellar-aiz.com/",
  "logo": "https://stellar-aiz.com/assets/images/logo/logo.png",
  "description": "戦略と爆速開発で、AIの実践力を極める",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "東京都",
    "addressCountry": "JP"
  }
}
```

### ファビコン設定
```html
<link rel="icon" type="image/x-icon" href="./assets/icons/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="./assets/icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/icons/favicon-16x16.png">
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://stellar-aiz.com/sitemap.xml
```

### sitemap.xml
全ページのURLを記載した標準的なXMLサイトマップを生成

## 注意事項
- OGP画像は1200x630pxで作成
- descriptionは120文字以内を目安に
- titleは30文字以内を目安に
- 重要なキーワード：「AI導入」「戦略策定」「PoC開発」「爆速開発」を適切に配置