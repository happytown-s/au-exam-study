import { useState, useMemo } from 'react';

interface Props {
  onBack: () => void;
  onSelectCategory: (categoryId: string) => void;
}

const textbookCategories = [
  { id: 'audit_planning', label: '監査計画', emoji: '📋' },
  { id: 'internal_control', label: '内部統制', emoji: '🛡️' },
  { id: 'it_governance', label: 'ITガバナンス', emoji: '🏛️' },
  { id: 'audit_procedures', label: '監査手続', emoji: '🔍' },
  { id: 'audit_evidence', label: '監査証拠', emoji: '📄' },
  { id: 'compliance_legal', label: 'コンプライアンス', emoji: '⚖️' },
  { id: 'information_systems_audit', label: '情報システム監査', emoji: '💻' },
  { id: 'audit_reporting', label: '監査報告', emoji: '📝' },
  { id: 'fraud_detection', label: '不正検出', emoji: '🚨' },
  { id: 'emerging_topics', label: '最新トピック', emoji: '🚀' },
];

// Lazy-load topic counts from JSON files
const topicCountMap: Record<string, number> = {
  audit_planning: 4,
  internal_control: 5,
  it_governance: 4,
  audit_procedures: 4,
  audit_evidence: 3,
  compliance_legal: 3,
  information_systems_audit: 5,
  audit_reporting: 3,
  fraud_detection: 3,
  emerging_topics: 3,
};

export default function TextbookSelectPage({ onBack, onSelectCategory }: Props) {
  return (
    <div className="space-y-5">
      {/* Back */}
      <button
        onClick={onBack}
        className="text-sm text-dark-400 hover:text-audit-400 transition-colors flex items-center gap-1"
      >
        <span>←</span>
        <span>ホームに戻る</span>
      </button>

      <h2 className="text-lg font-bold text-dark-50">📚 テキスト</h2>
      <p className="text-xs text-dark-400">カテゴリ別の解説テキストを読む</p>

      {/* Category grid */}
      <div className="grid grid-cols-2 gap-2">
        {textbookCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="text-left p-3 rounded-lg border bg-dark-800 border-dark-700 hover:border-audit-400 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{cat.emoji}</span>
              <div>
                <div className="font-semibold text-sm group-hover:text-audit-400 transition-colors">
                  {cat.label}
                </div>
                <div className="text-xs text-dark-400 mt-0.5">
                  {topicCountMap[cat.id] || '—'}トピック
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
