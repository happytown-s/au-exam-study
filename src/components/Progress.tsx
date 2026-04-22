import { useState, useEffect } from 'react';
import auQuestions from '../data/au-exam.json';
import calcQuestions from '../data/calc-training.json';
import subjectBQuestions from '../data/subject-b-training.json';

interface Stats {
  total: number;
  correct: number;
  byCategory: Record<string, { total: number; correct: number }>;
}

function getStorage(key: string): Stats {
  try {
    const s = localStorage.getItem(key);
    return s ? JSON.parse(s) : { total: 0, correct: 0, byCategory: {} };
  } catch {
    return { total: 0, correct: 0, byCategory: {} };
  }
}

function pct(s: Stats): number {
  return s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
}

export default function Progress() {
  const [auStats, setAuStats] = useState<Stats>(() => getStorage('au-quiz-stats'));
  const [calcStats, setCalcStats] = useState<Stats>(() => getStorage('au-calc-stats'));
  const [bStats, setBStats] = useState<Stats>(() => getStorage('au-b-stats'));
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    try {
      const w = localStorage.getItem('au-quiz-wrong');
      setWrongCount(w ? JSON.parse(w).length : 0);
    } catch {}
    const handler = (e: StorageEvent) => {
      if (e.key === 'au-quiz-stats') setAuStats(getStorage('au-quiz-stats'));
      if (e.key === 'au-calc-stats') setCalcStats(getStorage('au-calc-stats'));
      if (e.key === 'au-b-stats') setBStats(getStorage('au-b-stats'));
      if (e.key === 'au-quiz-wrong') {
        try { setWrongCount(JSON.parse(e.newValue || '[]').length); } catch {}
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const totalQ = auQuestions.length + calcQuestions.length + subjectBQuestions.length;
  const totalAnswered = auStats.total + calcStats.total + bStats.total;
  const totalCorrect = auStats.correct + calcStats.correct + bStats.correct;
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  function CategoryBreakdown({ stats, label }: { stats: Stats; label: string }) {
    const cats = Object.entries(stats.byCategory).sort((a, b) => b[1].total - a[1].total);
    if (cats.length === 0) return <p className="text-dark-400 text-sm">No data yet</p>;
    return (
      <div className="space-y-2">
        {cats.map(([cat, s]) => {
          const p = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
          return (
            <div key={cat}>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-dark-200">{cat}</span>
                <span className="text-dark-400">{p}% ({s.correct}/{s.total})</span>
              </div>
              <div className="w-full bg-dark-800 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all ${p >= 80 ? 'bg-green-500' : p >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${p}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overall Summary */}
      <div className="bg-dark-800 rounded-xl p-5 border border-dark-700">
        <h2 className="text-lg font-bold mb-4 text-audit-400">Overall Progress</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{totalAnswered}</div>
            <div className="text-xs text-dark-400">Answered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-audit-400">{overallPct}%</div>
            <div className="text-xs text-dark-400">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{totalQ}</div>
            <div className="text-xs text-dark-400">Total Questions</div>
          </div>
        </div>
        <div className="w-full bg-dark-900 rounded-full h-2">
          <div className="bg-audit-500 h-2 rounded-full transition-all" style={{ width: `${overallPct}%` }} />
        </div>
        <p className="text-xs text-dark-400 mt-2">{totalAnswered} of {totalQ} questions attempted</p>
      </div>

      {/* Subject A */}
      <div className="bg-dark-800 rounded-xl p-5 border border-dark-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-sm">Subject A - Quiz ({auQuestions.length} questions)</h3>
          <span className={`text-sm font-bold ${pct(auStats) >= 80 ? 'text-green-400' : pct(auStats) >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
            {pct(auStats)}%
          </span>
        </div>
        <div className="flex gap-4 text-xs text-dark-400 mb-3">
          <span>Correct: {auStats.correct}/{auStats.total}</span>
          <span>Wrong answers saved: {wrongCount}</span>
        </div>
        <CategoryBreakdown stats={auStats} label="Subject A" />
      </div>

      {/* Calc Training */}
      <div className="bg-dark-800 rounded-xl p-5 border border-dark-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-sm">Calc Training ({calcQuestions.length} questions)</h3>
          <span className={`text-sm font-bold ${pct(calcStats) >= 80 ? 'text-green-400' : pct(calcStats) >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
            {pct(calcStats)}%
          </span>
        </div>
        <div className="flex gap-4 text-xs text-dark-400 mb-3">
          <span>Correct: {calcStats.correct}/{calcStats.total}</span>
        </div>
        <CategoryBreakdown stats={calcStats} label="Calc" />
      </div>

      {/* Subject B */}
      <div className="bg-dark-800 rounded-xl p-5 border border-dark-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-sm">Subject B - Training ({subjectBQuestions.length} questions)</h3>
          <span className={`text-sm font-bold ${pct(bStats) >= 80 ? 'text-green-400' : pct(bStats) >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
            {pct(bStats)}%
          </span>
        </div>
        <div className="flex gap-4 text-xs text-dark-400 mb-3">
          <span>Correct: {bStats.correct}/{bStats.total}</span>
        </div>
        <CategoryBreakdown stats={bStats} label="Subject B" />
      </div>

      {/* Reset */}
      <div className="text-center">
        <button
          onClick={() => {
            if (confirm('Reset ALL progress data? This cannot be undone.')) {
              localStorage.removeItem('au-quiz-stats');
              localStorage.removeItem('au-quiz-wrong');
              localStorage.removeItem('au-calc-stats');
              localStorage.removeItem('au-b-stats');
              setAuStats({ total: 0, correct: 0, byCategory: {} });
              setCalcStats({ total: 0, correct: 0, byCategory: {} });
              setBStats({ total: 0, correct: 0, byCategory: {} });
              setWrongCount(0);
            }
          }}
          className="text-xs text-red-400 hover:text-red-300 px-4 py-2 border border-red-800 rounded-lg hover:bg-red-900/30 transition-colors"
        >
          Reset All Progress
        </button>
      </div>
    </div>
  );
}
