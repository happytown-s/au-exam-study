export interface AuTerm {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  category: string;
  categoryLabel: string;
  difficulty: 'essential' | 'intermediate' | 'advanced';
  example?: string;
}

export const auTerms: AuTerm[] = [
  // ========================================
  // Audit Planning (audit_planning) - 25語
  // ========================================
  { id: 1, word: 'Audit Risk Model (監査リスクモデル)', reading: 'かんさりすくもでる', meaning: '監査リスク(AR) = 固有リスク(IR) × 統制リスク(CR) × 発見リスク(DR)。監査人が全体リスクを評価・管理するための基本モデル。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential', example: '固有・統制リスクが高い場合、発見リスクをより広範な実質テストで削減する必要がある。' },
  { id: 2, word: 'Inherent Risk (固有リスク)', reading: 'こゆうりすく', meaning: '監査対象の勘定や取引に、内部統制を考慮せずに存在する重要な虚偽表示のリスク。被監査者の環境・業務特性に起因する。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 3, word: 'Control Risk (統制リスク)', reading: 'とうせいりすく', meaning: '内部統制が重要な虚偽表示を適時に防止または検出できないリスク。監査人は統制テストの結果に基づいて評価レベルを決定する。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 4, word: 'Detection Risk (発見リスク)', reading: 'はっけんりすく', meaning: '監査人の手続が存在する重要な虚偽表示を検出しないリスク。監査人が直接制御可能な唯一のリスク要素。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 5, word: 'Materiality (重要性)', reading: 'じゅうようせい', meaning: '虚偽表示が利用者の意思決定に影響を与える閾値。監査人が監査手続の性質・時期・範囲を計画する基準となる。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 6, word: 'Performance Materiality (パフォーマンスの重要性)', reading: 'ぱふぉーまんすのじゅうようせい', meaning: '総合重要性以下に設定され、未修正・未検出誤謬の合計が総合重要性を超える確率を削減するための閾値。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 7, word: 'Risk-Based Audit (リスクベース監査)', reading: 'りすくべーすかんさ', meaning: 'リスクの発生可能性と影響の両方を評価し、高リスク領域に監査リソースを集中的に配分する監査アプローチ。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 8, word: 'Walkthrough (ウォークスルー)', reading: 'うぉーくするー', meaning: '単一取引をプロセス全体に追跡し、コントロールが存在し設計通りに運用していることを検証するリスク評価手続。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 9, word: 'Audit Plan Memorandum (監査計画メモ)', reading: 'かんさけいかくめも', meaning: '監査戦略、範囲、時期、リソース配分に関する主要決定を文書化したもの。監査のロードマップとして機能する。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 10, word: 'Dual-Purpose Test (二重目的テスト)', reading: 'にじゅうもくてきてすと', meaning: '単一監査手続がコントロールテスト（運用有効性評価）と実質テスト（重要な虚偽表示検出）の両方を兼ねるもの。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 11, word: 'Stratified Sampling (層化サンプリング)', reading: 'そうかさんぷりんぐ', meaning: '母集団を特性（通常は価値）に基づいて副集合に分割し、代表性を確保しつつ精度を向上させるサンプリング手法。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 12, word: 'Block Sampling (ブロックサンプリング)', reading: 'ぶろっくさんぷりんぐ', meaning: '定義されたブロック（特定週の全取引等）の全項目を選択する手法。シンプルだが代表性に統計的限界がある。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 13, word: 'Variable Sampling (変数サンプリング)', reading: 'へんすうさんぷりんぐ', meaning: '母集団の誤謬金額を推定するために使用するサンプリング。定量的特性（勘定残高等）を測定する。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 14, word: 'Analytical Procedures (分析手続)', reading: 'ぶんせきてづき', meaning: '財務データを業界動向・前期・予算と比較し、異常な関係や取引を特定する手続。計画時のリスク評価に有用。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 15, word: 'ISA 315', reading: 'あいえすえーさんいいちご', meaning: '監査人が被監査者とその環境を理解し、重要な虚偽表示リスクを評価するための国際監査基準。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'advanced' },
  { id: 16, word: 'Significant Risk (重大なリスク)', reading: 'じゅうだいなりすく', meaning: 'ISA 315に基づき、複雑または異常な取引、重要な判断、不正の影響を受けやすい領域と評価されるリスク。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'advanced' },
  { id: 17, word: 'Tolerable Error (許容誤差)', reading: 'きょようごさ', meaning: '監査人がコントロールを信頼できると結論付けるために受け入れる最大偏差率。サンプルサイズに直接影響する。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 18, word: 'Preliminary Materiality (暫定的な重要性)', reading: 'ざんていてきじゅうようせい', meaning: '監査手続の指針として計画フェーズで早期に設定する重要性の水準。監査人の理解が深まるにつれ改訂可能。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 19, word: 'Overreliance Risk (過信頼リスク)', reading: 'かしんらいりすく', meaning: '監査人が実際には有効でないコントロールを有効と結論付け、不十分な実質テストに繋がるリスク（タイプIエラー）。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'advanced' },
  { id: 20, word: 'Trivial Threshold (些細な閾値)', reading: 'ささいなしきいち', meaning: '個別に明らかに重要性が低い誤謬の閾値。他の誤謬と累積する必要がなく、極小項目での監査作業を簡素化する。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'advanced' },
  { id: 21, word: 'Audit Universe (監査ユニバース)', reading: 'かんさゆにばーす', meaning: '組織内の監査可能単位（部門、プロセス、システム、拠点）の完全なインベントリ。リスクベース計画で優先付けに使用。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },
  { id: 22, word: 'Entry Conference (開始会議)', reading: 'かいしかいぎ', meaning: '監査開始時に経営陣と監査範囲・タイムラインを確認し、協力とアクセスの期待を確立する会議。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 23, word: 'Time Budget (時間予算)', reading: 'じかんよさん', meaning: '各監査フェーズと手続の所要時間を見積ったもの。リソース管理、進捗追跡、超過の早期発見に役立つ。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 24, word: 'Management Override (経営者によるコントロールの回避)', reading: 'けいえいしゃによるこんとろーるのかいひ', meaning: '権限のある者が記録を操作または内部統制をバイパスすること。不正リスクが高く監査人の特別な注意が必要。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'essential' },
  { id: 25, word: 'Preliminary Analytical Review (予備分析レビュー)', reading: 'よぶぶんせきれびゅー', meaning: '当期財務データを前期・予算・業界データと比較し、異常な変動を特定して高リスク領域を示唆する手続。', category: 'audit_planning', categoryLabel: '監査計画', difficulty: 'intermediate' },

  // ========================================
  // Internal Control (internal_control) - 25語
  // ========================================
  { id: 26, word: 'COSO Framework (COSOフレームワーク)', reading: 'こそふれーむわーく', meaning: '内部統制の5構成要素（統制環境、リスク評価、統制活動、情報・通信、監視活動）を定義する包括的フレームワーク。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 27, word: 'Control Environment (統制環境)', reading: 'とうせいかんきょう', meaning: 'COSOの基盤コンポーネント。「トーン・アット・ザ・トップ」として誠実性、倫理的価値、経営者理念を包含。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 28, word: 'Segregation of Duties (職務の分離)', reading: 'しょくむのぶんり', meaning: '重要機能（承認、記録、保管）を異なる個人に分割し、単一人物がエラーや不正を発生と隠蔽の両方を行えないようにする統制。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 29, word: 'Preventive Control (予防的コントロール)', reading: 'よぼうてきこんとろーる', meaning: 'エラーや不正が発生する前に阻止する統制。例: しきい値を超える購買の管理者承認要求。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 30, word: 'Detective Control (発見的コントロール)', reading: 'はっけんてきこんとろーる', meaning: '発生後のエラーや不規則を識別する統制。例: 照合、差異分析、定期的な実地棚卸。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 31, word: 'Corrective Control (是正コントロール)', reading: 'ぜせいこんとろーる', meaning: '発見的コントロールが特定した問題を修正する統制。例: 照合で差異が発見された場合のエラー修正プロセス。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 32, word: 'Compensating Control (補償制御)', reading: 'ほしょうせいぎょ', meaning: '一次コントロールが不在または非有効な場合にリスクを許容レベルに低減する代替コントロール。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 33, word: 'Entity-Level Control (エンティティレベルコントロール)', reading: 'えんてぃてぃれべるこんとろーる', meaning: '組織全体にわたり統制意識のトーンを設定するコントロール。例: 経営者のリスク評価プロセス、行動規範、内部監査機能。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 34, word: 'Key Control (キーコントロール)', reading: 'きーこんとろーる', meaning: 'J-SOXで財務報告の重要な虚偽表示を防止または検出するよう設計された、コンプライアンス上テスト必須のコントロール。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 35, word: 'IT General Controls / ITGC (IT一般統制)', reading: 'あいてぃーいっぱんとうせい', meaning: 'アプリケーションが確実に機能しデータ完全性が維持されるようIT環境全体をカバーする統制。アクセス制御、変更管理、運用、システム開発を含む。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 36, word: 'Application Control (アプリケーションコントロール)', reading: 'あぷりけーしょんこんとろーる', meaning: '取引が正確、完全、承認済みに処理されるようアプリケーションに組み込まれた統制。例: 入力検証、照合チェック。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 37, word: 'Change Management Control (変更管理統制)', reading: 'へんこうかんりとうせい', meaning: 'システム変更が本番移行前に適切に承認、テスト、文書化されることを確保する統制。不正変更を防止。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 38, word: 'Material Weakness (重大な弱点)', reading: 'じゅうだいなじゃくてん', meaning: '最も深刻な統制欠陥カテゴリ。財務諸表の重要な虚偽表示が適時に防止または検出されない合理的な可能性がある状態。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 39, word: 'Control Deficiency (統制欠陥)', reading: 'とうせいけっかん', meaning: 'コントロールが設計または運用上、誤謬を適時に防止または検出できない場合に存在する欠陥。重大度に応じ分類される。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 40, word: 'Control Self-Assessment / CSA (自己評価)', reading: 'じこひょうか', meaning: '部門管理者が自部門のコントロールを評価する監視活動。コントロールの所有意識を促進し有効性情報を提供。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 41, word: 'Reasonable Assurance (合理的保証)', reading: 'ごうりてきほしょう', meaning: '内部統制が目標達成に対して高いが絶対ではない保証を提供すること。人的エラー、共謀、コスト考慮による制限がある。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 42, word: 'Risk Appetite (リスク選好)', reading: 'りすくせんこう', meaning: 'COSO ERMで組織が目標追求のために許容するリスクの量とタイプ。どのリスクを許容・軽減・回避・移転するかを決定。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'advanced' },
  { id: 43, word: 'Monitoring Activities (監視活動)', reading: 'かんしかつどう', meaning: 'COSOの構成要素の一つ。継続的監視と個別評価を含み、内部統制が長期間有効に運用しているかを評価。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 44, word: 'Information & Communication (情報と通信)', reading: 'じょうほうとつうしん', meaning: 'COSOの構成要素の一つ。識別情報の確保、捕捉、適時交換を支援するシステム。人々が責任を果たせるようにする。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 45, word: 'J-SOX', reading: 'じぇいそっくす', meaning: '金融商品取引法に基づく内部統制報告制度。上場企業に財務報告の内部統制の有効性評価・報告を義務付ける。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 46, word: 'Incompatible Duties (両立しない職務)', reading: 'りょうりつしないしょくむ', meaning: '適切な内部統制維持のために同一人物が行ってはならない機能。例: 支払いの承認者と記録者は別であるべき。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 47, word: 'Reconciliation (照合)', reading: 'しょうごう', meaning: '2つの独立した記録（例: 銀行取引明細書と元帳）を比較し差異を検出する発見的コントロール。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'essential' },
  { id: 48, word: 'Continuous Monitoring (継続的監視)', reading: 'けいぞくてきかんし', meaning: '自動化ツールでリアルタイムにコントロール有効性を評価する監視活動。長期間の運用評価に有用。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 49, word: 'Three-way Match (三者マッチング)', reading: 'さんしゃまっちんぐ', meaning: '購買における発注書、受領書、請求書の3点を照合するアプリケーションコントロール。支払いの正当性を検証。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },
  { id: 50, word: 'Design Effectiveness (設計の有効性)', reading: 'せっけいのゆうこうせい', meaning: 'コントロールが設計通りに運用する場合に重要な虚偽表示を防止または検出できるかどうかの評価。運用履歴ではなく設計に焦点。', category: 'internal_control', categoryLabel: '内部統制', difficulty: 'intermediate' },

  // ========================================
  // IT Governance (it_governance) - 20語
  // ========================================
  { id: 51, word: 'COBIT', reading: 'こびっと', meaning: 'ITガバナンスフレームワーク。IT戦略とビジネス目標の整合、リスク管理、IT投資からの価値提供を支援。2019版は40のガバナンス・管理目的を定義。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 52, word: 'EDM Domain (EDMドメイン)', reading: 'いーでぃーえむどめいん', meaning: 'COBITのガバナンスドメイン。Evaluate（評価）、Direct（指示）、Monitor（監視）の3プロセスで構成。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'advanced' },
  { id: 53, word: 'ITIL', reading: 'あいてぃあいる', meaning: 'ITサービス管理のベストプラクティスフレームワーク。サービス設計、移行、運用、改善を通じた顧客への価値提供に焦点。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 54, word: 'ISO 27001', reading: 'あいえすおーにーぜろなないち', meaning: '情報セキュリティ管理システム（ISMS）の国際規格。組織内の情報セキュリティの確立、実装、維持、継続的改善のフレームワーク。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 55, word: 'Statement of Applicability / SoA (適用可能性宣言)', reading: 'てきようかのうせいせんげん', meaning: 'ISO 27001の必須文書。附属書Aの全コントロールをリストし、適用するものと実装状態を記述。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'advanced' },
  { id: 56, word: 'Incident Management (インシデント管理)', reading: 'いんしでんとかんり', meaning: 'ITILのプロセス。ビジネス運用への悪影響を最小限に抑えつつ通常サービス運用を可能な限り迅速に復旧させる。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 57, word: 'Problem Management (問題管理)', reading: 'もんだいかんり', meaning: 'ITILのプロセス。インシデントの根本原因を特定し、再発を防止することに焦点を当てる。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 58, word: 'Balanced Scorecard / BSC (バランススコアカード)', reading: 'ばらんすすこあかーど', meaning: '財務、顧客、内部プロセス、学習・成長の4視点でパフォーマンスを測定する手法。ITガバナンスでも活用。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 59, word: 'IT Steering Committee (IT運営委員会)', reading: 'あいてぃーすてぃありんぐいいんかい', meaning: 'ITの戦略的方向、イニシアチブの優先順位、リソース配分を提供し、IT投資とビジネス戦略の整合を確保する委員会。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 60, word: 'Risk Treatment (リスク処理)', reading: 'りすくしょり', meaning: 'リスクに対する対応オプション：回避、移転、軽減、受容。「リスク無視」は有効な処理ではない。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 61, word: 'Goal Cascade (ゴールカスケード)', reading: 'ごーるかすけーど', meaning: 'COBITのMEAN原則で、ステークホルダーニーズを企業目標→IT目標→ガバナンス/管理目的に変換する仕組み。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'advanced' },
  { id: 62, word: 'Continual Service Improvement / CSI (継続的サービス改善)', reading: 'けいぞくてきさーびすかいぜん', meaning: 'ITILのライフサイクル段階。改善機会の特定、メトリクス定義、データ収集、結果分析のサイクルでサービス品質を維持・改善。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 63, word: 'Value Delivery (価値の提供)', reading: 'かちのていきょう', meaning: 'ITガバナンスの主要原則。組織がIT投資から最適な価値を受けることを確保。コスト最適化とビジネスニーズの整合を含む。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 64, word: 'Strategic Alignment (IT戦略の整合)', reading: 'あいてぃーせんりゃくのせいごう', meaning: 'IT計画、投資、活動が組織の全体的ビジネス戦略を直接サポートし推進することを確保するITガバナンスの原則。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 65, word: 'ISMS', reading: 'あいえすえむえす', meaning: 'Information Security Management System。ISO 27001が規定する情報セキュリティ管理の体系的アプローチ。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'essential' },
  { id: 66, word: 'COBIT APO12 (Manage Risk)', reading: 'こびっとえーぴーおーじゅうに', meaning: 'COBITの管理プロセスでリスク管理を担当。リスク管理フレームワークの確立・維持、リスクプロファイルの維持をカバー。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'advanced' },
  { id: 67, word: 'Privacy by Design (プライバシー・バイ・デザイン)', reading: 'ぷらいばしーばいでざいん', meaning: 'データ保護をITシステムの設計・アーキテクチャに最初から組み込む原則。事後対応ではなく事前予防が基本。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 68, word: 'Resource Management Metrics (リソース管理指標)', reading: 'りそーすかんりしひょう', meaning: 'スタッフ利用率、スキル開発追跡、研修時間、コンピテンシー評価など。ITが価値を提供するための人材確保を評価。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 69, word: 'IT Service Operation (ITサービス運用)', reading: 'あいてぃーさーびすうんよう', meaning: 'ITILのライフサイクル段階。インシデント管理、問題管理、リクエスト履行、アクセス管理を含む日々のサービス管理。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'intermediate' },
  { id: 70, word: 'COBIT 5 Domains (COBIT 5領域)', reading: 'こびっとごりょういき', meaning: 'EDM（ガバナンス）+ APO（計画・組織）+ BAI（構築・取得・実装）+ DSS（提供・サポート）+ MEA（監視・評価）の5領域。', category: 'it_governance', categoryLabel: 'ITガバナンス', difficulty: 'advanced' },

  // ========================================
  // Audit Procedures (audit_procedures) - 25語
  // ========================================
  { id: 71, word: 'Vouching (ボウチャシング)', reading: 'ぼうちゃしんぐ', meaning: '会計記録から支持証拠にさかのぼって記録金額を追跡する手続。存在/発生アサーションを検証。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 72, word: 'Tracing (トレーシング)', reading: 'とれーしんぐ', meaning: '証拠から会計記録へ前方向に追跡する手続。完全性アサーション（すべての取引が記録されていること）をテスト。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 73, word: 'Reperformance (再実施)', reading: 'さいじっし', meaning: '監査人が被監査者が実施した手続を独立して再実行する手続。非常に信頼性の高い証拠を提供。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 74, word: 'CAAT (コンピューター支援監査技術)', reading: 'しえーえーてぃー', meaning: 'テクノロジーを使用して監査手続を効率的・効果的に実行する手法。データ抽出、分析、照会、テストを含む。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 75, word: 'External Confirmation (外部確認)', reading: 'がいぶかくにん', meaning: '独立した外部ソースから直接取得する確認。偏りがなく監査人がプロセスを管理できるため最も高い信頼性を提供。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 76, word: 'Observation (観察)', reading: 'かんさつ', meaning: '監査人がプロセスを直接目撃または物品を物理的に視認する手続。棚卸の観察などが該当。瞬間のみの証拠に注意。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 77, word: 'Inquiry (質問・調査)', reading: 'しつもん・ちょうさ', meaning: '被監査者への質問による証拠収集。有用だが、回答が不正確・意図的に誤導的な可能性があるため唯一の証拠源にはできない。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 78, word: 'Cutoff Test (カットオフテスト)', reading: 'かっとおふてすと', meaning: '取引が正しい会計期間に記録されていることを検証する手続。収益・費用の早期認識や繰延を防止。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 79, word: 'Circular Confirmation (循環確認)', reading: 'じゅんかんかくにん', meaning: '債務者に直接確認状を送信し残高確認を依頼する手続。売掛金の存在と正確性の非常に信頼性の高い外部証拠。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 80, word: 'Benford\'s Law (ベンフォードの法則)', reading: 'べんふぉーどのほうそく', meaning: '自然発生データの先頭数字分布に関する法則。期待分布からの逸脱はデータ操作や不正を示唆。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 81, word: 'Gap Analysis (ギャップ分析)', reading: 'ぎゃっぷぶんせき', meaning: '現状を目標状態（規格やベストプラクティス）と比較し、改善領域を特定するIS監査手法。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 82, word: 'Test Data (テストデータ)', reading: 'てすとでーた', meaning: 'システムが指定ルールに従って正しく処理することを検証するため、架空または特別に準備されたデータを投入する手法。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 83, word: 'Recalculation (再計算)', reading: 'さいけいさん', meaning: '監査人が独立して金額（減価償却、利息等）を再計算し、数学的正確性を検証する手続。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },
  { id: 84, word: 'Integrated Test Facility / ITF (統合テスト施設)', reading: 'とうごうてすとしせつ', meaning: '本番システム内にダミーエンティティを作成し、実取引と並行してテスト取引を処理する手法。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'advanced' },
  { id: 85, word: 'Parallel Simulation (並列シミュレーション)', reading: 'へいれつしみゅれーしょん', meaning: '監査人がアプリケーションロジックを複製するプログラムを作成し、被監査データを処理して結果を比較するCAAT手法。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'advanced' },
  { id: 86, word: 'Budget vs. Actual Analysis (予算対実績分析)', reading: 'よさんたいじっせきぶんせき', meaning: '実績結果と予算期待値を比較する分析手続。著しい差異は誤謬や運用上の問題を示唆。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 87, word: 'Substantive Analytical Procedures (実質的分析手続)', reading: 'じっしつてきぶんせきてづき', meaning: '財務・非財務データ関係を使用して重要な虚偽表示を検出する手続。関係が予測可能でデータが信頼できる場合に有効。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 88, word: 'Journal Entry Test (仕訳入力テスト)', reading: 'しわけにゅうりょくてすと', meaning: '非標準仕訳（異常な時期、丸数字、権限外者のエントリ等）をターゲットにする不正検出手続。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 89, word: 'Security Scanning (セキュリティスキャニング)', reading: 'せきゅりてぃすきゃにんぐ', meaning: '自動化ツールでITシステムの脆弱性、オープンポート、設定不備を識別する手続。脆弱性スキャン、ポートスキャン等。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 90, word: 'Dual Test (IS監査デュアルテスト)', reading: 'でゅあるてすと', meaning: 'IS監査でコントロールの技術的実装と業務ロジックの両方を評価する手法。両視点からの有効性を確保。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'advanced' },
  { id: 91, word: 'Active Testing (アクティブテスト)', reading: 'あくてぃぶてすと', meaning: '実際にシステムにアクセスを試みるなどしてコントロールの有効性を直接検証するテスト手法。パスワードテスト等に使用。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 92, word: 'Subsequent Events Review (後発事象レビュー)', reading: 'こうはつじざれびゅー', meaning: '貸借対照表日後の事象をレビューし、評価アサーションの証拠を提供する手続。現金回収で売掛金の実現可能価値を確認。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 93, word: 'Data Mining (データマイニング)', reading: 'でーたまいにんぐ', meaning: '統計的手法とアルゴリズムで大規模データセット内のパターン、異常、関係、外れ値を識別するCAAT手法。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'intermediate' },
  { id: 94, word: 'Lawyer\'s Letter (弁護士への確認)', reading: 'べんごしへのかくにん', meaning: '保留中または脅迫されている訴訟と請求を識別・評価する監査手続。偶発負債の可能性を確認。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'advanced' },
  { id: 95, word: 'Physical Inventory Observation (棚卸観察)', reading: 'たなおろしかんさつ', meaning: '棚卸の物理的カウントを観察し、在庫の存在を確認する手続。カットオフテストと組み合わせて過大計上を検出。', category: 'audit_procedures', categoryLabel: '監査手続', difficulty: 'essential' },

  // ========================================
  // Audit Evidence (audit_evidence) - 20語
  // ========================================
  { id: 96, word: 'Sufficiency (十分性)', reading: 'じゅうぶんせい', meaning: '監査証拠の量に関連する概念。監査人の結論を支持するのに十分な証拠が収集されたか。誤謬リスク・重要性に依存。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 97, word: 'Appropriateness (適切性)', reading: 'てきせつせい', meaning: '監査証拠の品質の尺度。関連性（テスト中アサーションとの関連）と信頼性（依存可能性）を包含。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 98, word: 'Corroborating Evidence (裏付け証拠)', reading: 'うらづけしょうこ', meaning: '異なるソースから同じ結論を支持する追加証拠。複数ソースが同一所見を確認し結論の信頼性を向上。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 99, word: 'Best Evidence (最良の証拠/原本)', reading: 'さいりょうのしょうこ', meaning: '契約書、株式証券、権利証書等の原本文書。権利、義務、資産存在の主要証拠としてコピーより信頼性が高い。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 100, word: 'Electronic Evidence (電子監査証拠)', reading: 'でんしかんさしょうこ', meaning: '電子的に保存・処理された監査証拠。真正性、完全性、網羅性の検証が必要。メタデータ保存が重要。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 101, word: 'Working Papers (監査調書)', reading: 'かんさちょうしょ', meaning: '監査の一次記録。実施手続、取得証拠、到達結論、監査意見の基盤を文書化。品質レビューと将来の監査の参考。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 102, word: 'Lead Schedule (要約/リードスケジュール)', reading: 'りーどすけじゅーる', meaning: '各重要勘定の監査作業を要約し財務諸表数値に紐付ける、最も重要な監査調書。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 103, word: 'Management Representation Letter (経営者確認書)', reading: 'けいえいしゃかくにんしょ', meaning: '財務諸表への経営者責任、提供情報の完全性を確認する書面。他の監査手続の代替ではなく補助的証拠。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 104, word: 'Direct Evidence (直接証拠)', reading: 'ちょくせつしょうこ', meaning: '監査人が観察、検査、再実施を通じて直接取得する証拠。間接証拠より信頼性が高い。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 105, word: 'Circumstantial Evidence (状況証拠)', reading: 'じょうきょうしょうこ', meaning: '推論に基づき間接的に結論を支持する証拠。例: 異常な財務比率が売上過大計上を示唆。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 106, word: 'Preponderance of Evidence (証拠の優位性)', reading: 'しょうこのゆういせい', meaning: '利用可能な証拠が監査人の結論を明確に支持し、矛盾証拠を上回る状態。絶対的確実性ではなく高い信頼水準。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'advanced' },
  { id: 107, word: 'Metadata (メタデータ)', reading: 'めたでーた', meaning: '電子データについていつ、どのように、誰によって作成・変更・アクセスされたかのコンテキスト。電子証拠の真正性評価に不可欠。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 108, word: 'Expert\'s Work (専門家の作業)', reading: 'せんもんかのさぎょう', meaning: '監査人が証拠として利用する専門家の作業。能力（資格・スキル）、ケイパビリティ（リソース）、客観性（偏りの自由）を評価が必要。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'advanced' },
  { id: 109, word: 'Documentation Standard (文書化基準)', reading: 'ぶんしょかきじゅん', meaning: '事前の関与のない経験豊富な監査人が手続の性質・時期・範囲・結果・結論を理解できる程度の詳細を監査調書に求める基準。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'intermediate' },
  { id: 110, word: 'Retention Period (保管期間)', reading: 'ほかんきかん', meaning: '監査調書の最低保管期間。通常監査報告書日から5-7年。職業的基準と法的要件で規定。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 111, word: 'Third-Party Evidence (第三者の証拠)', reading: 'だいさんしゃのしょうこ', meaning: '被監査者の管理と影響の外にあるソースから取得される証拠。外部確認等は操作困難で信頼性が高い。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 112, word: 'Oral Evidence (口頭証拠)', reading: 'こうとうしょうこ', meaning: '口頭での経営者供述。客観的に検証できず最も信頼性が低い。常に他の証拠で裏付けが必要。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'essential' },
  { id: 113, word: 'Subsequent Discovery (その後の事実の発見)', reading: 'そのごのじじつのはっけん', meaning: '報告書日後に報告書日当時存在した事実が発見された場合、重要性を評価し報告書改訂を含む措置を講じる必要がある。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'advanced' },
  { id: 114, word: 'Evidence from Interim Date (中間日証拠)', reading: 'ちゅうかんじつしょうこ', meaning: '貸借対照表日前に取得した証拠。使用可能だが期間中の変化を考慮し、追加手続（カットオフテスト等）が必要。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'advanced' },
  { id: 115, word: 'Chain of Custody (証拠保全チェーン)', reading: 'しょうこほぜんちぇーん', meaning: '証拠の取得から保管までの経路を文書化し、証拠の真正性と改ざん防止を確保する手続き。電子証拠で特に重要。', category: 'audit_evidence', categoryLabel: '監査証拠', difficulty: 'advanced' },

  // ========================================
  // Compliance & Legal (compliance_legal) - 20語
  // ========================================
  { id: 116, word: 'J-SOX (金融商品取引法)', reading: 'じぇいそっくす', meaning: '上場企業に財務報告の内部統制(ICFR)の有効性評価・報告を義務付ける日本の制度。経営者がコントロール有効性を認証。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 117, word: 'APPI (個人情報保護法)', reading: 'あっぴ', meaning: '個人情報の利用目的の明確化、データ主体の同意取得、セキュリティ対策実装、利用を記載目的に限定することを組織に義務付ける法律。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 118, word: 'GDPR', reading: 'じーでぃーぴーあーる', meaning: 'EU一般データ保護規則。個人データの保護に関する包括的規則。違反時の最大罰金は2,000万EURまたは世界年間売上高の4%。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 119, word: 'Data Minimization (データの最小化)', reading: 'でーたのさいしょうか', meaning: 'GDPRの原則。指定目的に直接関連し必要な個人データのみを収集すること。過剰データの収集を防止。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 120, word: 'Right to Be Forgotten (忘れられる権利)', reading: 'わすれられるけんり', meaning: 'GDPRに基づく消去権。データが不要になった場合、同意撤回後、または違法処理された場合に個人データの削除を要求可能。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 121, word: 'DPIA (データ保護影響評価)', reading: 'でーたほごえいきょうひょうか', meaning: 'GDPRが個人データ処理が個人の権利に高いリスクをもたらす場合に要求する評価。体系的プロファイリング等が該当。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 122, word: 'Corporate Governance Code (コーポレートガバナンス・コード)', reading: 'こーぽれーとがばなんすこーど', meaning: '日本の取締役会の独立性・多様性確保、持ち合い分析、継承計画開示等を推奨するコード。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 123, word: 'Insider Trading (インサイダー取引)', reading: 'いんさいだーとりひき', meaning: '公開されていない重要情報を保有した状態で証券を取引すること。金融商品取引法で禁止され重い罰則がある。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 124, word: 'Whistleblower Protection (内部告発者保護)', reading: 'ないぶこくはつしゃほご', meaning: '日本の公益通報者保護法。誠実に法律違反を報告する従業員を保護。公益通報者への報復を禁止。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 125, word: 'Auditor Independence (監査人の独立性)', reading: 'かんさにんのどくせつせい', meaning: '関係、利益、または状況が客観性を損なう可能性があるものからの自由。金融的利益、雇用関係を含む。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 126, word: 'My Number Act (マイナンバー法)', reading: 'まいなんばーほう', meaning: '日本の全居住者に12桁の一意識別番号を付与し、社会保障、税、災害対策行政で使用する制度。個人情報保護を確保。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 127, word: 'FIEA (金融商品取引法)', reading: 'きんゆうしょうひんとりひきほう', meaning: '上場企業に証券報告書等の継続的開示を義務付ける法律。透明で適時な財務情報による投資家保護が目的。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 128, word: 'Specially Care-Required Personal Information (要配慮個人情報)', reading: 'ようはいりょこじんじょうほう', meaning: 'APPIで人種、信条、社会的身分、病歴、犯罪歴等を分類。強化された取扱いと保護が必要な機密情報。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 129, word: 'Legal Basis for Processing (処理の法的根拠)', reading: 'しょりのほうてきこんきょ', meaning: 'GDPRが要求する6つの適法根拠：同意、契約上の必要性、法的義務、重要利益、公的任務、正当な利益。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 130, word: 'Confidentiality (機密保持)', reading: 'きみつほじ', meaning: '監査人の職業的倫理原則。クライアント情報の機密性を維持することを要求。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 131, word: 'Professional Integrity (誠実さ)', reading: 'せいじつさ', meaning: '監査人が正直で率直であり、職業的懐疑心を維持し、虚偽または誤解を招く情報に関与しないことを要求する倫理原則。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'essential' },
  { id: 132, word: 'Unfair Competition Prevention Act (不正競争防止法)', reading: 'ふせいきょうそうぼうしほう', meaning: '営業秘密の不正取得、虚偽表示、周知の営業表示の無断使用等の不正行為を禁止する法律。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 133, word: 'Personal Information Protection Officer (個人情報保護責任者)', reading: 'こじんじょうほうほごせきにんしゃ', meaning: 'APPIで5,000名以上の個人情報を取り扱う組織に任命が義務付けられる責任者。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'intermediate' },
  { id: 134, word: 'Cross-Border Data Transfer (越境データ移転)', reading: 'えっきょうでーたいてん', meaning: '個人データを外国へ移転する際の法的要件。GDPRでは適切性決定等が必要。日本はEUから適切性認定済み。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'advanced' },
  { id: 135, word: 'Policy Holding of Shares (株式の政策保有)', reading: 'かぶしきのせいさくほゆう', meaning: 'コーポレートガバナンス・コードが開示と根拠説明を要求する持ち合い株式。株主利益との整合がない場合は削減方針が必要。', category: 'compliance_legal', categoryLabel: 'コンプライアンス・法務', difficulty: 'advanced' },

  // ========================================
  // Information Systems Audit (information_systems_audit) - 25語
  // ========================================
  { id: 136, word: 'Disaster Recovery Plan / DRP (災害復旧計画)', reading: 'さいがいふっきゅうけいかく', meaning: '災害または重大中断後にITシステム、データ、運用の復旧に焦点を当てた計画。復旧手順、リソース要件、優先順位付けを含む。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 137, word: 'Business Continuity Plan / BCP (事業継続計画)', reading: 'じぎょうけいぞくけいかく', meaning: 'DRPより広範で、すべての重要ビジネス運営の継続をカバー。手作業回避策、代替施設、人員配置、通信戦略を含む。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 138, word: 'RTO (目標復旧時間)', reading: 'あーるてぃーおー', meaning: 'Recovery Time Objective。中断後に許容できない結果を回避するためビジネスプロセスが復旧されなければならない最大許容時間。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 139, word: 'RPO (目標復旧時点)', reading: 'あーるぴーおー', meaning: 'Recovery Point Objective。最大許容データ損失量を時間で定義。RPOが1時間なら1時間ごとのバックアップが必要。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 140, word: 'CDP (継続的データ保護)', reading: 'しーでぃーぴー', meaning: 'Continuous Data Protection。全データ変更をリアルタイムで捕捉し、任意の時点への復旧を可能にするバックアップ戦略。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 141, word: 'User Acceptance Testing / UAT (ユーザー受け入れテスト)', reading: 'ゆーざーうけいれてすと', meaning: 'エンドユーザーがシステムがビジネス要件を満たすことを検証するテスト。本番移行前の最終テストフェーズ。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 142, word: 'Vulnerability Assessment (脆弱性評価)', reading: 'ぜいじゃくせいひょうか', meaning: 'システムのセキュリティ上の弱点を体系的に識別する評価。設定不備、未パッチ、デフォルトパスワード、不要サービスを検出。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 143, word: 'Penetration Testing (侵入テスト)', reading: 'しんにゅうてすと', meaning: 'システム・ネットワークの脆弱性を悪用する正当な試み。現実の攻撃をシミュレートし悪用可能な弱点を特定する。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 144, word: 'Principle of Least Privilege (最小権限の原則)', reading: 'さいしょうけんげんのげんそく', meaning: 'ユーザーに職務責任に必要な最小のアクセス権のみを付与する原則。不正アクセス、偶発的損害のリスクを削減。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 145, word: 'Network Segmentation (ネットワークセグメンテーション)', reading: 'ねっとわーくせぐめんてーしょん', meaning: 'ネットワークを独自のセキュリティコントロールを持つ小セグメントに分割。攻撃者の横移動を制限し侵害を封じ込める。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 146, word: 'CMDB (構成管理データベース)', reading: 'しーえむでぃーびー', meaning: 'IT資産とその関係を保存する中央リポジトリ。ITサービス管理をサポートし環境の効果的管理に役立つ。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 147, word: 'Encryption at Rest (保存時の暗号化)', reading: 'ほぞんじのあんごうか', meaning: '物理メディアに保存されたデータを暗号化鍵なしでは読めない形式に変換して保護。物理的盗難から保護。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 148, word: 'Multi-Factor Authentication / MFA (多要素認証)', reading: 'たようそにんしょう', meaning: '知識（パスワード）、所持（トークン）、生体の3カテゴリから2つ以上を要求する認証。不正アクセスリスクを大幅削減。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 149, word: 'SQL Injection (SQLインジェクション)', reading: 'えすきゅーえるいんじぇくしょん', meaning: '不適切な入力検証を悪用し悪意のあるSQLコマンドを挿入する攻撃。対策にはパラメータ化クエリ、入力検証等。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 150, word: 'Data Integrity Controls (データ整合性制御)', reading: 'でーたせいごうせいせいぎょ', meaning: '入力検証、参照完全性、チェックサム、照合でデータが入力から出力まで正確・完全・一貫していることを確保。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 151, word: 'Privilege Escalation (権限昇格)', reading: 'けんげんしょうかく', meaning: '攻撃者が昇格されたアクセス権を取得する攻撃。脆弱性・設定不備・弱いアクセス制御を悪用。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 152, word: 'IAM (ID およびアクセス管理)', reading: 'あいえーえむ', meaning: 'ユーザーライフサイクル管理、RBAC、アクセス認証、SSO、アクセスレビューをサポートするシステム。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 153, word: 'Patch Management (パッチ管理)', reading: 'ぱっちかんり', meaning: '必要パッチの適時特定、展開前テスト、重要セキュリティパッチの優先順位付け、適用確認を含むプロセス。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 154, word: 'Container Security (コンテナセキュリティ)', reading: 'こんてなせきゅりてぃ', meaning: 'Docker/Kubernetes環境のセキュリティ。脆弱性スキャン、シークレット管理、ネットワークポリシー、ランタイム監視を含む。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'advanced' },
  { id: 155, word: 'Virtualization Security (仮想化セキュリティ)', reading: 'かそうかせきゅりてぃ', meaning: 'ハイパーバイザ、VM分離、仮想ネットワーク、VMイメージ管理のセキュリティに対応する監査領域。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'advanced' },
  { id: 156, word: 'Firewall (ファイアウォール)', reading: 'ふぁいあうぉーる', meaning: 'セキュリティルールに基づいてネットワークトラフィックを監視・フィルタリングし、信頼/非信頼ネットワーク間の障壁として機能。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 157, word: 'System Logging (システムログ)', reading: 'しすてむろぐ', meaning: 'ユーザーアクセス、データ変更、システムエラー、セキュリティイベント等の重要イベントを捕捉。監査証跡を提供。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'essential' },
  { id: 158, word: 'Emergency Change (緊急変更)', reading: 'きんきゅうへんこう', meaning: '通常のテスト・文書化・承認をバイパスする緊急変更。新たなエラーや脆弱性導入リスクが高く実装後レビューが必要。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 159, word: 'Production Access Control (本番アクセス制御)', reading: 'ほんばんあくせすせいぎょ', meaning: '本番システムへのアクセスを権限者に制限し、正式な変更承認プロセスと組み合わせる不正プログラム変更防止の最も有効な統制。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },
  { id: 160, word: 'Database Security Review (データベースセキュリティレビュー)', reading: 'でーたべーすせきゅりてぃれびゅー', meaning: 'アクセス制御、機密データの暗号化、監査ログ、認証メカニズム、セキュリティパッチを検証するIS監査手続。', category: 'information_systems_audit', categoryLabel: '情報システム監査', difficulty: 'intermediate' },

  // ========================================
  // Audit Reporting (audit_reporting) - 15語
  // ========================================
  { id: 161, word: 'Unqualified Opinion (無修正意見/クリーン意見)', reading: 'むしゅうせいけん', meaning: '財務諸表が適用財務報告基準に準拠し、すべての重要点で真実かつ適正な見解を示すという監査人の判断。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 162, word: 'Qualified Opinion (限定付き適正意見)', reading: 'げんていづきてきせいいけん', meaning: '誤謬が重要だが遍在しない、または十分適切な証拠を取得できないが影響が遍在しない場合に付与される意見。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 163, word: 'Adverse Opinion (反対意見)', reading: 'はんたいいけん', meaning: '最も否定的な意見。誤謬が重要かつ遍在し、財務諸表を根本的に歪め適正表示と見なせない場合に発行。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 164, word: 'Disclaimer of Opinion (意見の放棄)', reading: 'いけんのほうき', meaning: '範囲制限により十分適切な証拠を取得できない場合、または重要な不確実性が存在し意見形成が不可能な場合に発行。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 165, word: 'Management Letter (経営者あて手紙)', reading: 'けいえいしゃあててがみ', meaning: '内部統制の欠陥、運用改善、推奨事項を経営陣に伝達する書面。重大な弱点には至らない重要な所見を対象。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'intermediate' },
  { id: 166, word: 'Key Audit Matters / KAM (重要な監査事項)', reading: 'じゅうようなかんさじこう', meaning: 'ISA 700に基づき当期監査で最も重要性の高い事項。財務諸表利用者に伝達し監査報告書の情報性を高める。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'advanced' },
  { id: 167, word: 'Emphasis of Matter (重要事項の強調)', reading: 'じゅうようじこうのきょうちょう', meaning: '財務諸表ですでに開示されている重要事項を強調する段落。監査意見を変更せず読者の注意を向け。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'intermediate' },
  { id: 168, word: 'Going Concern (継続企業の前提)', reading: 'けいぞくきぎょうのよてい', meaning: '財務諸表作成の基礎。事業体が可及的長期間（少なくとも12ヶ月）継続して事業を営むこと。不確実性は開示が必要。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 169, word: 'Finding Framework (所見フレームワーク)', reading: 'しょけんふれーむわーく', meaning: '監査所見の構造：条件（現状）-基準（期待）-原因（根本理由）-影響（インパクト）-推奨。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 170, word: 'Scope Limitation (範囲の制限)', reading: 'はんいのせいげん', meaning: '監査人の十分な証拠収集能力を制限する要因。重要だが遍在しない場合は限定意見、重要かつ遍在する場合は意見表明不能。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'intermediate' },
  { id: 171, word: 'Follow-up (フォローアップ)', reading: 'ふぉろーあっぷ', meaning: '経営者が合意した是正措置を実施し、有効性を検証するプロセス。監査ループを閉じ推奨が実際の改善に繋がることを確保。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'essential' },
  { id: 172, word: 'Trend Analysis (傾向分析)', reading: 'けいこうぶんせき', meaning: '複数監査サイクルにわたり反復する問題、悪化する統制状態、持続的な不コンプライアンスを識別する分析。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'intermediate' },
  { id: 173, word: 'Significant Deficiency (重大な欠陥)', reading: 'じゅうだいなけっかん', meaning: '重大な弱点より深刻度が低いが、ガバナンス責任者の注意に値する内部統制の欠陥。報告すべき事項。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'intermediate' },
  { id: 174, word: 'Other Matter Paragraph (その他の事項段落)', reading: 'そのたのじこうだんらく', meaning: '財務諸表に提示・開示されていない問題に対処する段落。強調事項はすでに開示された事項に関連。意見は変更しない。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'advanced' },
  { id: 175, word: 'Basis for Modification (修正の根拠)', reading: 'しゅうせいのこんきょ', meaning: '監査人が修正意見を発行するに至った特定の事情を説明する段落。限定・否定的意見または意見表明不能の理由を提供。', category: 'audit_reporting', categoryLabel: '監査報告', difficulty: 'advanced' },

  // ========================================
  // Fraud Detection (fraud_detection) - 15語
  // ========================================
  { id: 176, word: 'Fraud Triangle (不正のトライアングル)', reading: 'ふせいのとらいあんぐる', meaning: '不正発生の3要素：圧力または動機（財務ストレス）、機会（弱い統制）、正当化（行動の合理化）。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },
  { id: 177, word: 'Fraud Diamond (不正のダイヤモンド)', reading: 'ふせいのだいやもんど', meaning: 'トライアングルに「能力」を追加した拡張モデル。実行者に実行能力（地位、知性、自信）が必要。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 178, word: 'Forensic Audit (フォレンジック監査)', reading: 'ふぉれんじっくかんさ', meaning: '会計、監査、調査スキルを組み合わせ不正と紛争を調査。証拠収集の法的基準に従い専門家証言を含む。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 179, word: 'Red Flags (危険信号)', reading: 'きけんしんごう', meaning: '不正の指標。期末の異常な取引、説明不能な収益成長、業界変動にかかわらない一貫した利益率等が含まれる。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },
  { id: 180, word: 'Whistleblower Hotline (内部告発ホットライン)', reading: 'ないぶこくはつほっとらいん', meaning: '経営者回避や従業員間の共謀を含む不正の発見に最も有効な手段。複数人が不正を隠蔽するシナリオの検出に有効。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },
  { id: 181, word: 'Asset Misappropriation (資産横領)', reading: 'しさんおうだつ', meaning: '最も一般的な職業上の不正。会社資産の窃取または不正使用。現金スキミング、在庫窃取、不正経費請求を含む。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },
  { id: 182, word: 'Financial Statement Fraud (財務諸表不正)', reading: 'ざいむしょうひょうふせい', meaning: '投資家等を欺くための財務諸表の意図的操作。早期収益認識、隠蔽費用、資産過大計上等。通常経営者が関与。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },
  { id: 183, word: 'Corruption (汚職)', reading: 'おしょく', meaning: '贈賄、キックバック、利益相反を含む不正スキーム。決定に影響を与えるための支払いや契約付与。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 184, word: 'Ghost Employee (ゴースト従業員)', reading: 'ごーすとじゅうぎょういん', meaning: '架空の人物が給与台帳に追加され給与が加害者に転送される給与不正。現役従業員記録との比較で検出可能。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 185, word: 'Professional Skepticism (職業的懐疑論)', reading: 'しょくぎょうてきかいぎろん', meaning: '疑問を持つ心を維持し、証拠を批判的に評価し、矛盾証拠に警戒し、情報を額面通り受け取らない監査人の姿勢。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },
  { id: 186, word: 'Duplicate Payment Detection (重複支払検出)', reading: 'ちょうふくしはらいけんしゅつ', meaning: '類似属性を共有する支払いを識別するアルゴリズム。同一ベンダー、金額、請求書番号、日付の重複を検出。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 187, word: 'Fictitious Revenue Detection (架空収益検出)', reading: 'かくうしゅうえきけんしゅつ', meaning: '収益分析、後続現金回収テスト、顧客確認を組み合わせて架空の収益を検出する監査手続。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 188, word: 'Inventory Overstatement Detection (在庫過大計上検出)', reading: 'ざいこかだいけいじょうけんしゅつ', meaning: '在庫回転率が業界基準または前期から大幅に逸脱する場合に架空在庫を示唆。粗利益マージン分析と組み合わせ。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 189, word: 'Kickback (キックバック)', reading: 'きっくばっく', meaning: '契約と引き換えにベンダーに支払う不正な見返り。汚職スキームの一形態。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'intermediate' },
  { id: 190, word: 'Reasonable Assurance for Fraud (不正に関する合理的保証)', reading: 'ふせいにかんするごうりてきほしょう', meaning: '監査人は財務諸表が不正による重要な虚偽表示から自由であることについて合理的保証を得る責任がある。', category: 'fraud_detection', categoryLabel: '不正検出', difficulty: 'essential' },

  // ========================================
  // Emerging Topics (emerging_topics) - 10語
  // ========================================
  { id: 191, word: 'Shared Responsibility Model (責任共有モデル)', reading: 'せきにんきょうゆうもでる', meaning: 'クラウドでプロバイダーがインフラを保護し、顧客がアプリケーション・データ・アクセス管理を保護する責任分担モデル。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'essential' },
  { id: 192, word: 'Zero Trust Architecture (ゼロトラストアーキテクチャ)', reading: 'ぜろとらすとあーきてくちゃ', meaning: 'ネットワークの内外に脅威が存在すると仮定し、すべてのアクセス要求を認証・承認・継続的に検証するセキュリティ原則。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'essential' },
  { id: 193, word: 'SOC 2 Type II', reading: 'えすおーしーつーたいぷつー', meaning: 'サービス組織のコントロールの設計と運用有効性に関する独立監査人の意見を指定期間にわたり提供するレポート。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'intermediate' },
  { id: 194, word: 'ESG Audit (ESG監査)', reading: 'いーえすじーかんさ', meaning: '環境・社会・ガバナンスの開示が正確、完全、関連フレームワーク（GRI、SASB、TCFD）に準拠していることを検証する監査。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'essential' },
  { id: 195, word: 'Cybersecurity Audit (サイバーセキュリティ監査)', reading: 'さいばーせきゅりてぃかんさ', meaning: 'セキュリティポリシー、アクセス制御、ネットワークセキュリティ、インシデント対応、脆弱性管理を包括的に評価する監査。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'essential' },
  { id: 196, word: 'DevSecOps', reading: 'でぶせくおっぷす', meaning: 'セキュリティ実践をソフトウェア開発ライフサイクルの全フェーズに統合し、セキュリティを事後対応ではなく共有責任にする手法。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'intermediate' },
  { id: 197, word: 'AI Model Bias (AIモデルのバイアス)', reading: 'えーあいもでるのばいあす', meaning: 'AI/MLシステムが特定の人口統計グループに対して体系的に不公平な結果を生成する問題。監査人は公平性を評価すべき。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'intermediate' },
  { id: 198, word: 'Right to Audit Clause (監査する権利条項)', reading: 'かんさするけんりじょうこう', meaning: 'クラウドサービス契約で顧客または監査人がプロバイダーのセキュリティコントロールを検査できるようにする条項。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'intermediate' },
  { id: 199, word: 'TCFD Recommendations (TCFD勧告)', reading: 'てぃーしーえふでぃーかんこく', meaning: 'ガバナンス、戦略、リスク管理、指標/目標の4つの開示柱を推奨する気候関連財務情報開示タスクフォースの勧告。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'intermediate' },
  { id: 200, word: 'Ransomware Preparedness (ランサムウェア対策)', reading: 'らんさむうぇあたいさく', meaning: '定期的バックアップ、インシデント対応計画、従業員研修、ネットワークセグメンテーション、エンドポイント検出を含む多層防御。', category: 'emerging_topics', categoryLabel: '新興トピック', difficulty: 'essential' },
];
