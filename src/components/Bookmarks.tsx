import { useState, useEffect, useMemo } from 'react';
import questionsData from '../data/au-exam.json';
import { getBookmarks, toggleBookmark } from '../utils/storage';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

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

const questions = questionsData as Question[];

export default function Bookmarks() {
  const [bookmarkIds, setBookmarkIds] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setBookmarkIds(getBookmarks());
  }, []);

  const handleRemove = (id: number) => {
    toggleBookmark(id);
    setBookmarkIds(getBookmarks());
  };

  const filtered = useMemo(() => {
    const bm = bookmarkIds
      .map(id => questions.find(q => q.id === id))
      .filter((q): q is Question => q !== undefined);
    return selectedCategory === 'all' ? bm : bm.filter(q => q.category === selectedCategory);
  }, [bookmarkIds, selectedCategory]);

  const allCategories = [...new Set(filtered.map(q => q.category))];

  return (
    <div className="space-y-4">
      {bookmarkIds.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
              selectedCategory === 'all'
                ? 'bg-audit-600 border-audit-500 text-white'
                : 'bg-dark-800 border-dark-600 text-dark-200 hover:border-audit-500'
            }`}
          >
            全て ({bookmarkIds.length})
          </button>
          {Object.entries(categoryNames).map(([cat, label]) => {
            const count = bookmarkIds.filter(id => questions.find(q => q.id === id)?.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-audit-600 border-audit-500 text-white'
                    : 'bg-dark-800 border-dark-600 text-dark-200 hover:border-audit-500'
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-dark-400">
          <div className="text-4xl mb-3">📌</div>
          <p className="text-lg mb-1">ブックマークされた問題がありません</p>
          <p className="text-sm">問題集で⭐️ボタンを押して問題を保存しましょう</p>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-dark-400">{filtered.length}問表示中</p>
          {filtered.map(q => (
            <BookmarkCard key={q.id} question={q} onRemove={handleRemove} />
          ))}
        </div>
      )}
    </div>
  );
}

function BookmarkCard({ question: q, onRemove }: { question: Question; onRemove: (id: number) => void }) {
  const [expanded, setExpanded] = useState(false);
  const correctText = q.options[q.correct];

  return (
    <div className="bg-dark-800 border border-dark-600 rounded-lg p-4">
      <div className="flex items-start gap-2">
        <button
          onClick={() => onRemove(q.id)}
          className="text-yellow-400 hover:text-yellow-300 text-lg flex-shrink-0 mt-0.5"
          title="ブックマーク解除"
        >
          ★
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-audit-900/40 text-audit-400">
              {categoryNames[q.category] || q.category}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-dark-100">
            {q.question.length > 80 ? q.question.slice(0, 80) + '…' : q.question}
          </p>
        </div>
      </div>

      <button
        onClick={() => setExpanded(e => !e)}
        className="mt-2 text-xs text-audit-400 hover:text-audit-300 transition-colors"
      >
        {expanded ? '閉じる ▲' : '正解・解説を見る ▼'}
      </button>

      {expanded && (
        <div className="mt-3 pl-6 border-l-2 border-audit-700 space-y-2">
          <p className="text-sm text-dark-200">
            <span className="font-medium text-green-400">正解:</span> {correctText}
          </p>
          <p className="text-sm text-dark-300 leading-relaxed">{q.explanation}</p>
        </div>
      )}
    </div>
  );
}
