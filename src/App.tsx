import { useState, useCallback } from 'react';
import HomePage from './pages/HomePage';
import QuizSelectPage from './pages/QuizSelectPage';
import QuizPlayPage from './pages/QuizPlayPage';
import CalcTraining from './components/CalcTraining';
import SubjectBTraining from './components/SubjectBTraining';
import Progress from './components/Progress';
import Bookmarks from './components/Bookmarks';

type Page = 'home' | 'quiz-select' | 'quiz-play' | 'calc' | 'subjectB' | 'bookmarks' | 'progress';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [quizCategory, setQuizCategory] = useState<string>('all');
  const [quizMode, setQuizMode] = useState<'normal' | 'wrong'>('normal');

  const navigate = useCallback((p: Page) => setPage(p), []);

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50">
      <header className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur border-b border-dark-700">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between h-14">
          <h1 className="text-lg font-bold text-audit-400 cursor-pointer" onClick={() => navigate('home')}>AU Exam Study</h1>
          <span className="text-xs text-dark-400">System Auditor</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {page === 'home' && (
          <HomePage onNavigate={(p) => navigate(p)} />
        )}
        {page === 'quiz-select' && (
          <QuizSelectPage
            onStart={(cat, mode) => {
              setQuizCategory(cat);
              setQuizMode(mode);
              navigate('quiz-play');
            }}
            onBack={() => navigate('home')}
          />
        )}
        {page === 'quiz-play' && (
          <QuizPlayPage
            category={quizCategory}
            mode={quizMode}
            onBack={() => navigate('quiz-select')}
          />
        )}
        {page === 'calc' && <CalcTraining />}
        {page === 'subjectB' && <SubjectBTraining />}
        {page === 'bookmarks' && <Bookmarks />}
        {page === 'progress' && <Progress />}
      </main>
    </div>
  );
}
