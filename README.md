# AU Exam Study

> システム監査技術者（AU）試験対策のWebアプリケーション

## Features

- 科目A（午前）対策クイズ -- カテゴリ別・ランダム出題に対応
- 計算トレーニング -- サンプリング・リスク評価等の数値計算問題
- 科目B（午後）演習 -- シナリオベースの実践的問題
- 学習進捗管理 -- localStorageによる解答履歴の記録
- ダークテーマUI -- 緑系アクセントのダークスキーム

## Contents

### Quiz（科目A）
- 250問
- カテゴリ一覧（問題数）:
  - Audit Planning: 30
  - Audit Procedures: 30
  - Information Systems Audit: 30
  - Internal Control: 30
  - Compliance & Legal: 25
  - IT Governance: 25
  - Audit Evidence: 25
  - Audit Reporting: 25
  - Fraud Detection: 15
  - Emerging Topics: 15
- クイズモード: カテゴリ選択、ランダム出題、解説表示

### Calc Training（計算トレーニング）
- 100問
- カテゴリ一覧（問題数）:
  - Sampling: 20
  - Statistical Analysis: 20
  - Risk Assessment: 15
  - Materiality: 15
  - Audit Efficiency: 15
  - Internal Control Metrics: 15

### Subject B Training（科目B演習）
- 80問
- カテゴリ一覧（問題数）:
  - Comprehensive Audits: 20
  - Control Evaluation: 15
  - Finding Development: 15
  - Compliance Assessment: 15
  - Audit Program Design: 15

### Progress（進捗管理）
- 解答履歴と正答率の確認

## Tech Stack

- React 19 + TypeScript
- Vite（ビルドツール）
- Tailwind CSS（スタイリング）
- localStorage（進捗データ永続化）

## Usage

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` にアクセス。

## Deployment

```bash
npm run build
```

`dist/` ディレクトリを任意の静的ホスティングサービスにデプロイ。

## License: MIT
