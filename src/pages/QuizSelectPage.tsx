import { useState, useMemo } from 'react';
import questionsData from '../data/au-exam.json';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizSelectPageProps {
  onStart: (category: string, mode: 'normal' | 'wrong') => void;
  onBack: () => void;
}

const categories = [
  'Audit Planning',
  'Internal Control',
  'IT Governance',
  'Audit Procedures',
  'Audit Evidence',
  'Compliance & Legal',
  'Information Systems Audit',
  'Audit Reporting',
  'Fraud Detection',
  'Emerging Topics',
];

const categoryNames: Record<string, string> = {
  'Audit Planning': '監査計画',
  'Internal Control': '内部統制',
  'IT Governance': 'ITガバナンス',
  'Audit Procedures': '監査手続',
  'Audit Evidence': '監査証拠',
  'Compliance & Legal': 'コンプライアンスと法務',
  'Information Systems Audit': '情報システム監査',
  'Audit Reporting': '監査報告',
  'Fraud Detection': '不正検出',
  'Emerging Topics': '最新トピック',
};

export default function QuizSelectPage({ onStart, onBack }: QuizSelectPageProps) {
  const questions = questionsData as Question[];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get wrong IDs from localStorage
  const wrongIds = useMemo(() => {
    try {
      const w = localStorage.getItem('au-quiz-wrong');
      return w ? (JSON.parse(w) as number[]) : [];
    } catch {
      return [];
    }
  }, []);

  const categoryCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    for (const q of questions) {
      map[q.category] = (map[q.category] || 0) + 1;
    }
    return map;
  }, [questions]);

  const wrongCount = useMemo(() => {
    if (selectedCategory === 'all') return wrongIds.length;
    return wrongIds.filter(id => questions.find(q => q.id === id)?.category === selectedCategory).length;
  }, [selectedCategory, wrongIds, questions]);

  const totalCount = selectedCategory === 'all'
    ? questions.length
    : categoryCountMap[selectedCategory] || 0;

  return (
    <div className="space-y-5">
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-sm text-dark-400 hover:text-audit-400 transition-colors flex items-center gap-1"
      >
        <span>←</span>
        <span>ホームに戻る</span>
      </button>

      <h2 className="text-lg font-bold text-dark-50">科目A — カテゴリ選択</h2>

      {/* Category grid */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`text-left p-3 rounded-lg border transition-colors ${
            selectedCategory === 'all'
              ? 'bg-audit-600/20 border-audit-500'
              : 'bg-dark-800 border-dark-700 hover:border-audit-400'
          }`}
        >
          <div className="font-semibold text-sm">全問</div>
          <div className="text-xs text-dark-400 mt-0.5">{questions.length}問</div>
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left p-3 rounded-lg border transition-colors ${
              selectedCategory === cat
                ? 'bg-audit-600/20 border-audit-500'
                : 'bg-dark-800 border-dark-700 hover:border-audit-400'
            }`}
          >
            <div className="font-semibold text-sm">{categoryNames[cat]}</div>
            <div className="text-xs text-dark-400 mt-0.5">{categoryCountMap[cat] || 0}問</div>
          </button>
        ))}
      </div>

      {/* Mode selection */}
      <div className="flex gap-3">
        <button
          onClick={() => onStart(selectedCategory, 'normal')}
          className="flex-1 py-3 bg-audit-600 hover:bg-audit-700 text-white rounded-lg font-medium transition-colors"
        >
          全問モード ({totalCount})
        </button>
        <button
          onClick={() => onStart(selectedCategory, 'wrong')}
          disabled={wrongCount === 0}
          className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
            wrongCount === 0
              ? 'bg-dark-800 text-dark-500 cursor-not-allowed'
              : 'bg-red-700 hover:bg-red-600 text-white'
          }`}
        >
          間違い直し ({wrongCount})
        </button>
      </div>
    </div>
  );
}
