# 合同会社RiN コーポレートサイト

HTML・CSS・JavaScriptだけで動く静的サイトです。ビルド、npm、PHP、有料サービスは不要です。外部フォント、解析ツール、フォーム送信機能はありません。

## ファイル一覧

```text
rin-corporate/
├── index.html                 トップ・会社概要・お問い合わせ
├── privacy.html               プライバシーポリシー
├── css/style.css              PC・スマートフォン共通のデザイン
├── js/main.js                 メニュー・メール窓口の設定
├── assets/images/favicon.svg  仮のRiNアイコン（差し替え可能）
├── robots.txt                 検索エンジン向け案内
├── sitemap.xml                ページ一覧
├── CNAME                      独自ドメイン指定
├── .nojekyll                  ビルド不要の指定（空ファイル）
└── README.md                  この説明書
```

## サイトの構成と手元での確認

`index.html` をダブルクリックするとブラウザーで確認できます。トップ、私たちについて、事業内容、RiNが大切にしていること、会社概要、お問い合わせの順に並びます。プライバシーポリシーは別ページです。ブラウザーの幅を狭めるとスマートフォン向けの表示になります。

## 公開前に入力・確認する箇所

1. 会社概要には、ご提供の本社所在地「東京都新宿区新宿 1-36-2」、代表者「中澤 龍璽」、設立「2026年2月」を反映済みです。変更する場合は `index.html` の「会社情報の編集箇所」を検索してください。郵便番号、建物名、設立日、電話番号、資本金、許認可番号などは補完していません。
2. 事業説明が実際の業務内容と合っていることを確認してください。サービスの実績・人数・取引先などの数値は掲載していません。
3. `info@ri-n1.com` のメールボックスを別途用意し、送受信を確認します。GitHub PagesやDNSのWeb設定だけではメールは開通しません。既存のメールサービスがあれば、その事業者の案内に沿ってMX・SPF・DKIM等を設定します。
4. 開通後は `js/main.js` 冒頭の `const CONTACT_ENABLED = false;` を `const CONTACT_ENABLED = true;` に変更します。アドレス変更はその下の `CONTACT_EMAIL` です。JavaScriptを無効にしている閲覧者にも案内する場合、`index.html` 内の `contact-status` と `contact-note` の文章も更新します。必要に応じて同じ箇所に通常のメールリンクを記載できます。
5. プライバシーポリシーは現在の静的サイト構成に合わせた初期文面です。公開前に実際の個人情報の管理・窓口と整合するか確認してください。フォームや解析ツールを導入するときは文面も更新します。
6. faviconは `assets/images/favicon.svg` の差し替えで変更できます。OGPのタイトル・説明・URLは設定済みです。共有画像が必要な場合は1200×630px程度のPNGを `assets/images/ogp.png` として追加し、両HTMLのheadに `<meta property="og:image" content="https://ri-n1.com/assets/images/ogp.png">` を追加します。実在する倉庫写真のように見せるための架空写真は使用していません。

## GitHub Pagesで無料公開する手順

無料プランでは公開（Public）リポジトリを使います。公開先のGitHubアカウント・リポジトリは、この納品時点では未設定です。

1. GitHubにログインし、右上の「+」→「New repository」で `rin-corporate` などの名前の **Public** リポジトリを作ります。「Add a README file」を選んで作成するとアップロードに進みやすくなります。
2. 「Add file」→「Upload files」で、このフォルダーの**中身**をアップロードします。`index.html` がリポジトリ直下にある状態にしてください。フォルダーごと一段深く入れないでください。最初からあるREADMEは今回のREADMEに置き換えて構いません。
3. `css`、`js`、`assets` のフォルダーも一緒にアップロードします。ドットで始まる `.nojekyll` も含めます。アップロードできない場合は「Add file」→「Create new file」で `.nojekyll` を作成してください。
4. 独自ドメイン接続前に `https://ユーザー名.github.io/リポジトリ名/` で動作を見たい場合は、GitHub上の `CNAME` をいったん削除してください。残していると未接続の独自ドメインへ転送される場合があります。canonicalとsitemapは指定どおり最終ドメインのままなので、仮URLは確認用です。
5. 「Settings」→「Pages」→「Build and deployment」の「Source」で **Deploy from a branch** を選び、「Branch」を **main**、フォルダーを **/(root)** にして「Save」。しばらくすると公開URLが表示されます。
6. 公開URLを開き、スマートフォンでも表示、メニュー、プライバシーポリシーへのリンクを確認してください。

公式手順： https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## ri-n1.comを接続する手順

ドメインを管理しているサービスのDNS設定画面と、GitHubの設定画面で作業します。ドメインの所有・契約状態はこの納品では確認していません。

1. GitHubのアカウント「Settings」→「Pages」でドメインの検証を行うと、第三者による利用を防ぐ助けになります。画面に表示されるTXTレコードをDNSに登録してください。
2. 対象リポジトリの「Settings」→「Pages」→「Custom domain」に `ri-n1.com` を入力して保存します。ブランチ公開では `CNAME` が作成されます。納品のCNAMEをそのまま使うこともできます。
3. ドメイン管理サービスで、ルート（名前は `@` または空欄などサービスにより異なります）に次の4件の **Aレコード**を設定します。既存のWeb用A・AAAAレコードと競合しないよう、対象を確認して整理します。メール用MX・TXTレコードは削除しないでください。

| 種別 | 名前 | 値 |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

4. `www.ri-n1.com` も使用する場合は、名前 `www`、種別 `CNAME`、値 `あなたのGitHubユーザー名.github.io` を追加します（リポジトリ名は付けません）。ルートドメインをGitHubのCustom domainにした場合、適切なDNS設定後はwww側からルートへ誘導されます。
5. DNS反映には最大24時間程度かかる場合があります。GitHubのPagesでDNSチェックと証明書発行を待ち、利用可能になったら **Enforce HTTPS** を有効にします。
6. `https://ri-n1.com/` と `https://ri-n1.com/privacy.html` を開いて確認します。

DNS情報の公式出典（2026年10月15日確認）： https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

GitHub Pagesは無料でも、独自ドメインの契約・更新やメールサービスは別途費用がかかる場合があります。このサイトにAPIキーや認証情報を入力しないでください。

## 更新方法

GitHubでファイルを開き、鉛筆アイコンから編集して「Commit changes」で保存すると自動的に再公開されます。文言はHTML、色・余白はCSS、メニュー・メール窓口はJavaScriptです。文字コードはUTF-8のまま保存してください。

## トップの写真について

`assets/images/warehouse.jpg` はTiger Lily撮影の実写ストック写真です。RiNの実際の施設写真ではありません。Pexels Licenseに基づきサイトに使用しています。画像は同梱しているため閲覧時にPexelsへの通信は行いません。

写真出典：https://www.pexels.com/photo/shelves-on-a-warehouse-4483608/
ライセンス：https://www.pexels.com/license/ （2026年10月15日確認）

## 勤務地・採用情報の更新

index.html の「勤務地の編集箇所」を検索してください。ご提供の36地域を7つの地域区分に整理しています。各location-group内のliを編集して勤務地を変更できます。具体的な住所や採用条件は未提供のため補完していません。募集状況が確定したら該当箇所を更新してください。
