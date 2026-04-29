import { useState, useMemo, useCallback } from 'react';
import { auTerms, AuTerm } from '../data/terms';

interface Props {
  onBack: () => void;
}

const categories = [
  { id: 'all', label: '全て' },
  { id: 'audit_planning', label: '監査計画' },
  { id: 'internal_control', label: '内部統制' },
  { id: 'it_governance', label: 'ITガバナンス' },
  { id: 'audit_procedures', label: '監査手続' },
  { id: 'audit_evidence', label: '監査証拠' },
  { id: 'compliance_legal', label: 'コンプライアンス' },
  { id: 'information_systems_audit', label: '情報システム監査' },
  { id: 'audit_reporting', label: '監査報告' },
  { id: 'fraud_detection', label: '不正検出' },
  { id: 'emerging_topics', label: '最新トピック' },
];

const difficultyLabels: Record<string, { label: string; color: string }> = {
  essential: { label: '基本', color: 'bg-green-900/40 text-green-400' },
  intermediate: { label: '中級', color: 'bg-yellow-900/40 text-yellow-400' },
  advanced: { label: '上級', color: 'bg-red-900/40 text-red-400' },
};

function speak(word: string) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

export default function TermsPage({ onBack }: Props) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    return auTerms.filter(t => {
      if (categoryFilter !== 'all' && t.category !== categoryFilter) return false;
      if (difficultyFilter !== 'all' && t.difficulty !== difficultyFilter) return false;
      if (search) {
        const s = search.toLowerCase();
        return (
          t.word.toLowerCase().includes(s) ||
          t.meaning.toLowerCase().includes(s) ||
          t.reading.includes(s)
        );
      }
      return true;
    });
  }, [search, categoryFilter, difficultyFilter]);

  const countByCategory = useMemo(() => {
    const map: Record<string, number> = {};
    for (const t of auTerms) {
      map[t.category] = (map[t.category] || 0) + 1;
    }
    return map;
  }, []);

  return (
    <div className="space-y-4">
      {/* Back */}
      <button
        onClick={onBack}
        className="text-sm text-dark-400 hover:text-audit-400 transition-colors flex items-center gap-1"
      >
        <span>←</span>
        <span>ホームに戻る</span>
      </button>

      <h2 className="text-lg font-bold text-dark-50">📖 単語帳</h2>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="用語・意味で検索…"
        className="w-full px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-sm text-dark-100 placeholder:text-dark-500 focus:outline-none focus:border-audit-400"
      />

      {/* Category tabs */}
      <div className="flex gap-1.5 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategoryFilter(cat.id)}
            className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
              categoryFilter === cat.id
                ? 'bg-audit-600 border-audit-500 text-white'
                : 'bg-dark-800 border-dark-600 text-dark-200 hover:border-audit-500'
            }`}
          >
            {cat.label}
            {cat.id !== 'all' && (
              <span className="ml-1 opacity-60">{countByCategory[cat.id] || 0}</span>
            )}
          </button>
        ))}
      </div>

      {/* Difficulty tabs */}
      <div className="flex gap-1.5">
        {(['all', 'essential', 'intermediate', 'advanced'] as const).map(d => (
          <button
            key={d}
            onClick={() => setDifficultyFilter(d)}
            className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
              difficultyFilter === d
                ? 'bg-audit-600 border-audit-500 text-white'
                : 'bg-dark-800 border-dark-600 text-dark-200 hover:border-audit-500'
            }`}
          >
            {d === 'all' ? '全難易度' : difficultyLabels[d].label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-xs text-dark-400">{filtered.length}語表示中 / {auTerms.length}語</p>

      {/* Terms list */}
      <div className="space-y-2">
        {filtered.map(term => (
          <TermCard key={term.id} term={term} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-dark-400">
          <div className="text-4xl mb-3">🔍</div>
          <p>条件に一致する用語がありません</p>
        </div>
      )}
    </div>
  );
}

function TermCard({ term }: { term: AuTerm }) {
  const handleSpeak = useCallback(() => {
    // Extract English part before Japanese parenthesis
    const englishPart = term.word.split('(')[0].trim();
    speak(englishPart);
  }, [term.word]);

  const diff = difficultyLabels[term.difficulty];

  return (
    <div className="bg-dark-800 border border-dark-600 rounded-lg p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <button
            onClick={handleSpeak}
            className="text-base font-bold text-dark-50 hover:text-audit-400 transition-colors text-left"
            title="タップで読み上げ"
          >
            🔊 {term.word}
          </button>
          <div className="text-xs text-dark-400 mt-0.5">{term.reading}</div>
        </div>
      </div>

      <p className="text-sm text-dark-200 mt-2 leading-relaxed">{term.meaning}</p>

      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-audit-900/40 text-audit-400">
          {term.categoryLabel}
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${diff.color}`}>
          {diff.label}
        </span>
      </div>

      {term.example && (
        <div className="mt-2 pl-3 border-l-2 border-audit-700">
          <p className="text-xs text-dark-300 leading-relaxed">
            <span className="text-audit-400 font-medium">例:</span> {term.example}
          </p>
        </div>
      )}
    </div>
  );
}
