import { useEffect, useState } from 'react';
import { getBookmarks } from '../utils/storage';

interface HomePageProps {
  onNavigate: (page: 'quiz-select' | 'calc' | 'subjectB' | 'bookmarks' | 'progress') => void;
}

interface CardConfig {
  emoji: string;
  title: string;
  description: string;
  page: 'quiz-select' | 'calc' | 'subjectB' | 'bookmarks' | 'progress';
  badge?: string;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    setBookmarkCount(getBookmarks().length);
    const interval = setInterval(() => setBookmarkCount(getBookmarks().length), 2000);
    return () => clearInterval(interval);
  }, []);

  const cards: CardConfig[] = [
    {
      emoji: '📚',
      title: '科目A問題',
      description: 'カテゴリ別ドリル',
      page: 'quiz-select',
    },
    {
      emoji: '🧮',
      title: '計算トレーニング',
      description: 'サンプリング・統計・リスク評価',
      page: 'calc',
    },
    {
      emoji: '📋',
      title: '科目Bトレーニング',
      description: '総合監査シナリオ',
      page: 'subjectB',
    },
    {
      emoji: '⭐',
      title: 'ブックマーク',
      description: '保存した問題を復習',
      page: 'bookmarks',
      badge: bookmarkCount > 0 ? `${bookmarkCount}` : undefined,
    },
    {
      emoji: '📊',
      title: '進捗',
      description: '学習状況を確認',
      page: 'progress',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-xl font-bold text-dark-50">AU Exam Study</h2>
        <p className="text-sm text-dark-400 mt-1">システム監査技術者 試験対策</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {cards.map(card => (
          <button
            key={card.page}
            onClick={() => onNavigate(card.page)}
            className="w-full text-left bg-dark-800 border border-dark-700 rounded-xl p-4 hover:border-audit-400 hover:bg-dark-800/80 transition-all group"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{card.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-dark-50 group-hover:text-audit-400 transition-colors">
                    {card.title}
                  </span>
                  {card.badge && (
                    <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-[10px] font-bold rounded-full bg-yellow-500 text-dark-950">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-dark-400 mt-0.5">{card.description}</p>
              </div>
              <span className="text-dark-500 group-hover:text-audit-400 transition-colors text-lg">›</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
