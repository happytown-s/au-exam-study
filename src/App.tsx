import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import CalcTraining from './components/CalcTraining';
import SubjectBTraining from './components/SubjectBTraining';
import Progress from './components/Progress';
import Bookmarks from './components/Bookmarks';

import { getBookmarks } from './utils/storage';

const tabs = [
  { key: 'quiz', label: '科目A問題集' },
  { key: 'bookmarks', label: '⭐️ ブックマーク' },
  { key: 'calc', label: '計算トレーニング' },
  { key: 'subjectB', label: '科目Bトレーニング' },
  { key: 'progress', label: '進捗' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('quiz');
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    const updateCount = () => setBookmarkCount(getBookmarks().length);
    updateCount();
    const interval = setInterval(updateCount, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50">
      <header className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <h1 className="text-lg font-bold text-audit-400">AU Exam Study</h1>
            <span className="text-xs text-dark-400">System Auditor</span>
          </div>
          <nav className="flex gap-1 -mb-px overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-audit-400 text-audit-400'
                    : 'border-transparent text-dark-300 hover:text-dark-100 hover:border-dark-500'
                }`}
              >
                {tab.key === 'bookmarks' && bookmarkCount > 0 && (
                  <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] rounded-full bg-yellow-500 text-dark-950 mr-1">{bookmarkCount}</span>
                )}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'bookmarks' && <Bookmarks />}
        {activeTab === 'calc' && <CalcTraining />}
        {activeTab === 'subjectB' && <SubjectBTraining />}
        {activeTab === 'progress' && <Progress />}
      </main>
    </div>
  );
}
