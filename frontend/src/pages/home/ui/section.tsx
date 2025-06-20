import { Terminal } from '#/widgets/terminal';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { lazy, useEffect, useState, type FC } from 'react';

interface Tab {
  readonly id: string;
  readonly labelMsg: ReturnType<typeof msg>;
  readonly content: React.ReactNode;
}

const About = lazy(() => import('../contents/about'));
const Projects = lazy(() => import('../contents/projects'));
const Timeline = lazy(() => import('../contents/timeline'));
const Resume = lazy(() => import('../contents/resume'));
const Contact = lazy(() => import('../contents/contact'));

const TAB_CONFIG: readonly Tab[] = [
  { id: 'about', labelMsg: msg`About`, content: <About /> },
  { id: 'projects', labelMsg: msg`Projects`, content: <Projects /> },
  { id: 'timeline', labelMsg: msg`Timeline`, content: <Timeline /> },
  { id: 'resume', labelMsg: msg`Resume`, content: <Resume /> },
  { id: 'contact', labelMsg: msg`Contact`, content: <Contact /> },
] as const;

const getTabFromHash = (): Tab => {
  const id = window.location.hash.replace(/^#/, '');
  return TAB_CONFIG.find((tab) => tab.id === id) ?? TAB_CONFIG[0];
};

const Section: FC = () => {
  const { i18n } = useLingui();
  const [activeTab, setActiveTab] = useState<Tab>(getTabFromHash);

  useEffect(() => {
    const handleHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (tab: Tab) => {
    window.location.hash = `#${tab.id}`;
    setActiveTab(tab);
  };

  return (
    <Terminal
      title={i18n._(activeTab.labelMsg)}
      className="lg:col-span-2 lg:row-span-3"
    >
      <nav
        aria-label={i18n._(msg`Tab navigation`)}
        className="join m-0 mb-3 flex flex-row justify-center gap-[0.3rem]"
        role="tablist"
        tabIndex={0}
      >
        {TAB_CONFIG.map((tab) => {
          const isSelected = activeTab.id === tab.id;
          const label = i18n._(tab.labelMsg);

          return (
            <button
              key={tab.id}
              type="button"
              id={`tab-${tab.id}`}
              aria-label={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`tab-${tab.id}-panel`}
              tabIndex={isSelected ? 0 : -1}
              className={`join-item btn btn-ghost btn-xs md:btn-sm hover:bg-base-100/50 border-base-content/50 focus-visible:ring-primary/70 rounded-full border-1 border-dashed font-sans focus:outline-none focus-visible:ring-2 ${isSelected ? 'bg-primary text-base-300' : ''}`}
              role="tab"
              onClick={() => handleTabClick(tab)}
            >
              {label}
            </button>
          );
        })}
      </nav>

      <main
        className="border-primary bg-neutral/90 w-full rounded-xl border-3 border-dashed shadow-xl/30"
        id={`tab-${activeTab.id}-panel`}
        role="tabpanel"
        aria-label={`${i18n._(activeTab.labelMsg)} content`}
        aria-labelledby={`tab-${activeTab.id}`}
        tabIndex={0}
      >
        <article
          className="prose prose-h2:m-0 flex !max-w-none flex-col justify-start text-center"
          aria-labelledby={`${activeTab.id}-title`}
        >
          <h1
            id={`${activeTab.id}-title`}
            className="sr-only lowercase"
            role="heading"
          >
            {i18n._(activeTab.labelMsg)}
          </h1>
          <section className="m-auto max-w-3xl">{activeTab.content}</section>
        </article>
      </main>
    </Terminal>
  );
};

export default Section;
