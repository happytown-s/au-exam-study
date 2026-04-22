import { useState, useEffect, useMemo } from 'react';
import questionsData from '../data/calc-training.json';

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

const categories = ['Sampling', 'Materiality', 'Risk Assessment', 'Internal Control Metrics', 'Audit Efficiency', 'Statistical Analysis'];

export default function CalcTraining() {
  const questions = questionsData as Question[];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [stats, setStats] = useState<Stats>({ total: 0, correct: 0, byCategory: {} });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('au-calc-stats');
      if (saved) setStats(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('au-calc-stats', JSON.stringify(stats));
  }, [stats]);

  const filtered = useMemo(() => {
    return selectedCategory === 'all' ? questions : questions.filter(q => q.category === selectedCategory);
  }, [questions, selectedCategory]);

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
    if (confirm('Reset all calc training stats?')) {
      setStats({ total: 0, correct: 0, byCategory: {} });
      localStorage.removeItem('au-calc-stats');
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 flex-wrap">
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
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xs text-dark-400">
            {stats.total > 0 ? `${Math.round((stats.correct / stats.total) * 100)}% (${stats.correct}/${stats.total})` : 'No data'}
          </span>
          <div className="flex-1" />
          <button onClick={resetStats} className="text-xs text-red-400 hover:text-red-300 px-2 py-1">Reset</button>
        </div>
      </div>

      {filtered.length > 0 && (
        <div className="w-full bg-dark-800 rounded-full h-1.5">
          <div className="bg-audit-500 h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      )}

      {q ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-dark-400">
            <span>{q.category}</span>
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
              <p className="font-medium text-audit-400 mb-1">Solution</p>
              <p>{q.explanation}</p>
            </div>
          )}

          {selected !== null && currentIdx < filtered.length - 1 && (
            <button onClick={next} className="w-full py-2.5 bg-audit-600 hover:bg-audit-700 text-white rounded-lg font-medium transition-colors">
              Next
            </button>
          )}
          {selected !== null && currentIdx === filtered.length - 1 && (
            <div className="text-center py-4 text-audit-400 font-medium">
              Complete! {filtered.length} questions finished.
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 text-dark-400">
          <p>No questions available for this category.</p>
        </div>
      )}
    </div>
  );
}
