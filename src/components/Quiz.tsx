import { useState, useEffect, useMemo } from 'react';
import questionsData from '../data/au-exam.json';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Stats {
  total: number;
  correct: number;
  byCategory: Record<string, { total: number; correct: number }>;
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

export default function Quiz() {
  const questions = questionsData as Question[];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mode, setMode] = useState<'normal' | 'wrong'>('normal');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [stats, setStats] = useState<Stats>({ total: 0, correct: 0, byCategory: {} });
  const [wrongIds, setWrongIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('au-quiz-stats');
      if (saved) setStats(JSON.parse(saved));
      const w = localStorage.getItem('au-quiz-wrong');
      if (w) setWrongIds(JSON.parse(w));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('au-quiz-stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('au-quiz-wrong', JSON.stringify(wrongIds));
  }, [wrongIds]);

  const filtered = useMemo(() => {
    let pool = selectedCategory === 'all' ? questions : questions.filter(q => q.category === selectedCategory);
    if (mode === 'wrong') pool = pool.filter(q => wrongIds.includes(q.id));
    return pool;
  }, [questions, selectedCategory, mode, wrongIds]);

  const q = filtered[currentIdx];
  const progress = filtered.length > 0 ? ((currentIdx + 1) / filtered.length) * 100 : 0;

  function handleSelect(opt: number) {
    if (selected !== null) return;
    setSelected(opt);
    setShowExplanation(true);
    const isCorrect = opt === q.correct;
    setStats(prev => {
      const byCat = { ...prev.byCategory };
      if (!byCat[q.category]) byCat[q.category] = { total: 0, correct: 0 };
      return {
        total: prev.total + 1,
        correct: prev.correct + (isCorrect ? 1 : 0),
        byCategory: {
          ...byCat,
          [q.category]: {
            total: byCat[q.category].total + 1,
            correct: byCat[q.category].correct + (isCorrect ? 1 : 0),
          },
        },
      };
    });
    if (!isCorrect && !wrongIds.includes(q.id)) {
      setWrongIds(prev => [...prev, q.id]);
    } else if (isCorrect) {
      setWrongIds(prev => prev.filter(id => id !== q.id));
    }
  }

  function next() {
    if (currentIdx < filtered.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }

  function reset() {
    setCurrentIdx(0);
    setSelected(null);
    setShowExplanation(false);
  }

  function resetStats() {
    if (confirm('Reset all stats and wrong answers?')) {
      setStats({ total: 0, correct: 0, byCategory: {} });
      setWrongIds([]);
      localStorage.removeItem('au-quiz-stats');
      localStorage.removeItem('au-quiz-wrong');
    }
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); reset(); }}
              className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                selectedCategory === cat
                  ? 'bg-audit-600 border-audit-500 text-white'
                  : 'bg-dark-800 border-dark-600 text-dark-200 hover:border-audit-500'
              }`}
            >
              {categoryNames[cat] || cat}
            </button>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => { setMode('normal'); reset(); }}
            className={`px-3 py-1 text-xs rounded border ${mode === 'normal' ? 'bg-audit-600 border-audit-500 text-white' : 'bg-dark-800 border-dark-600 text-dark-200'}`}
          >
            全問 ({selectedCategory === 'all' ? questions.length : questions.filter(q => q.category === selectedCategory).length})
          </button>
          <button
            onClick={() => { setMode('wrong'); reset(); }}
            className={`px-3 py-1 text-xs rounded border ${mode === 'wrong' ? 'bg-red-700 border-red-600 text-white' : 'bg-dark-800 border-dark-600 text-dark-200'}`}
          >
            不正解 ({filtered.filter(q => wrongIds.includes(q.id)).length})
          </button>
          <div className="flex-1" />
          <span className="text-xs text-dark-400">
            {stats.total > 0 ? `正解率 ${Math.round((stats.correct / stats.total) * 100)}% (${stats.correct}/${stats.total})` : 'データなし'}
          </span>
          <button onClick={resetStats} className="text-xs text-red-400 hover:text-red-300 px-2 py-1">リセット</button>
        </div>
      </div>

      {/* Progress bar */}
      {filtered.length > 0 && (
        <div className="w-full bg-dark-800 rounded-full h-1.5">
          <div className="bg-audit-500 h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Question */}
      {q ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-dark-400">
            <span>{categoryNames[q.category] || q.category}</span>
            <span>{currentIdx + 1} / {filtered.length}</span>
          </div>

          <p className="text-base leading-relaxed">{q.question}</p>

          <div className="space-y-2">
            {q.options.map((opt, i) => {
              let cls = 'border rounded-lg p-3 text-sm transition-colors cursor-pointer ';
              if (selected === null) {
                cls += 'bg-dark-800 border-dark-600 hover:border-audit-400';
              } else if (i === q.correct) {
                cls += 'bg-green-900/40 border-green-600 text-green-200';
              } else if (i === selected && i !== q.correct) {
                cls += 'bg-red-900/40 border-red-600 text-red-200';
              } else {
                cls += 'bg-dark-800 border-dark-700 text-dark-400';
              }
              return (
                <button key={i} onClick={() => handleSelect(i)} className={cls + ' text-left w-full'}>
                  <span className="font-medium mr-2 text-dark-300">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="bg-dark-800 border border-dark-600 rounded-lg p-4 text-sm text-dark-200 leading-relaxed">
              <p className="font-medium text-audit-400 mb-1">解説</p>
              <p>{q.explanation}</p>
            </div>
          )}

          {selected !== null && currentIdx < filtered.length - 1 && (
            <button onClick={next} className="w-full py-2.5 bg-audit-600 hover:bg-audit-700 text-white rounded-lg font-medium transition-colors">
              次へ
            </button>
          )}
          {selected !== null && currentIdx === filtered.length - 1 && (
            <div className="text-center py-4 text-audit-400 font-medium">
              完了! {filtered.length}問終了しました。
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 text-dark-400">
          <p className="text-lg mb-2">問題がありません</p>
          <p className="text-sm">カテゴリを変更するか、通常モードに切り替えてください。</p>
        </div>
      )}
    </div>
  );
}
