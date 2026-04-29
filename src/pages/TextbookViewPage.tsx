import { useState, useEffect, useMemo } from 'react';

interface Props {
  onBack: () => void;
  category: string;
}

interface Section {
  title: string;
  content: string;
}

interface Topic {
  id: string;
  title: string;
  sections: Section[];
}

const categoryLabels: Record<string, string> = {
  audit_planning: '監査計画',
  internal_control: '内部統制',
  it_governance: 'ITガバナンス',
  audit_procedures: '監査手続',
  audit_evidence: '監査証拠',
  compliance_legal: 'コンプライアンス',
  information_systems_audit: '情報システム監査',
  audit_reporting: '監査報告',
  fraud_detection: '不正検出',
  emerging_topics: '最新トピック',
};

const textbookFiles: Record<string, () => Promise<Topic[]>> = {
  audit_planning: () => import('../data/textbook-audit-planning.json').then(m => m.default),
  internal_control: () => import('../data/textbook-internal-control.json').then(m => m.default),
  it_governance: () => import('../data/textbook-it-governance.json').then(m => m.default),
  audit_procedures: () => import('../data/textbook-audit-procedures.json').then(m => m.default),
  audit_evidence: () => import('../data/textbook-audit-evidence.json').then(m => m.default),
  compliance_legal: () => import('../data/textbook-compliance-legal.json').then(m => m.default),
  information_systems_audit: () => import('../data/textbook-information-systems-audit.json').then(m => m.default),
  audit_reporting: () => import('../data/textbook-audit-reporting.json').then(m => m.default),
  fraud_detection: () => import('../data/textbook-fraud-detection.json').then(m => m.default),
  emerging_topics: () => import('../data/textbook-emerging-topics.json').then(m => m.default),
};

/** Simple markdown-ish renderer: **bold**, • bullet lists, numbered lists */
function renderContent(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) {
      elements.push(<br key={i} />);
      continue;
    }
    // Process bold
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} className="text-audit-300">{part.slice(2, -2)}</strong>;
      }
      return <span key={j}>{part}</span>;
    });

    if (line.trim().startsWith('- ')) {
      elements.push(
        <div key={i} className="flex gap-2 pl-2">
          <span className="text-audit-500 flex-shrink-0">•</span>
          <span>{rendered}</span>
        </div>
      );
    } else if (/^\d+\.\s/.test(line.trim())) {
      elements.push(
        <div key={i} className="pl-2">
          {rendered}
        </div>
      );
    } else {
      elements.push(
        <div key={i}>{rendered}</div>
      );
    }
  }

  return elements;
}

export default function TextbookViewPage({ onBack, category }: Props) {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loader = textbookFiles[category];
    if (!loader) {
      setLoading(false);
      return;
    }
    loader()
      .then(data => {
        setTopics(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  const filteredTopics = useMemo(() => {
    if (!search) return topics;
    const s = search.toLowerCase();
    return topics.filter(t =>
      t.title.toLowerCase().includes(s) ||
      t.sections.some(sec =>
        sec.title.toLowerCase().includes(s) ||
        sec.content.toLowerCase().includes(s)
      )
    );
  }, [topics, search]);

  const label = categoryLabels[category] || category;

  return (
    <div className="space-y-4">
      {/* Back */}
      <button
        onClick={onBack}
        className="text-sm text-dark-400 hover:text-audit-400 transition-colors flex items-center gap-1"
      >
        <span>←</span>
        <span>テキスト一覧に戻る</span>
      </button>

      <h2 className="text-lg font-bold text-dark-50">📚 {label}</h2>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="キーワードで検索…"
        className="w-full px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-sm text-dark-100 placeholder:text-dark-500 focus:outline-none focus:border-audit-400"
      />

      {loading ? (
        <div className="text-center py-12 text-dark-400">
          <div className="text-4xl mb-3">⏳</div>
          <p>読み込み中…</p>
        </div>
      ) : filteredTopics.length === 0 ? (
        <div className="text-center py-12 text-dark-400">
          <div className="text-4xl mb-3">🔍</div>
          <p>条件に一致するトピックがありません</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTopics.map(topic => (
            <div
              key={topic.id}
              className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedTopic(prev => prev === topic.id ? null : topic.id)}
                className="w-full text-left p-4 hover:bg-dark-700/50 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-dark-100">{topic.title}</span>
                <span className="text-dark-400 text-sm">
                  {expandedTopic === topic.id ? '▲' : '▼'}
                </span>
              </button>

              {expandedTopic === topic.id && (
                <div className="px-4 pb-4 space-y-4 border-t border-dark-700">
                  {topic.sections.map((section, idx) => (
                    <div key={idx} className="mt-3">
                      <h4 className="text-sm font-semibold text-audit-400 mb-1">
                        {section.title}
                      </h4>
                      <div className="text-sm text-dark-200 leading-relaxed">
                        {renderContent(section.content)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
