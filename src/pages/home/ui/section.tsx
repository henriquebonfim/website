import { t } from '@lingui/core/macro';
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
} from 'react';
import { About } from '../contents/about';
import { Contact } from '../contents/contact';
import { Projects } from '../contents/projects';
import { Resume } from '../contents/resume';
import { Timeline } from '../contents/timeline';
import { Terminal } from './';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

/**
 * Returns the tab id from the hash, or defaults to the first tab.
 * @param hash - The window location hash.
 * @param tabs - The list of available tabs.
 */
const getTabIdFromHash = (hash: string, tabs: readonly Tab[]): string => {
  const id = hash.replace(/^#/, '');
  return tabs.some((tab) => tab.id === id) ? id : tabs[0].id;
};

const Section: FC = () => {
  const TABS = useMemo(
    () =>
      [
        { id: 'about', label: t`About`, content: <About /> },
        { id: 'projects', label: t`Projects`, content: <Projects /> },
        { id: 'timeline', label: t`Timeline`, content: <Timeline /> },
        { id: 'resume', label: t`Resume`, content: <Resume /> },
        { id: 'contact', label: t`Contact`, content: <Contact /> },
      ] as const,
    [],
  );

  const [selectedTabId, setSelectedTabId] = useState(() =>
    getTabIdFromHash(window.location.hash, TABS),
  );

  useEffect(() => {
    const onHashChange = () =>
      setSelectedTabId(getTabIdFromHash(window.location.hash, TABS));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [TABS]);

  const handleTabClick = useCallback((id: string) => {
    window.location.hash = `#${id}`;
    setSelectedTabId(id);
  }, []);

  const currentTab = useMemo(
    () => TABS.find((tab) => tab.id === selectedTabId) ?? TABS[0],
    [TABS, selectedTabId],
  );

  return (
    <Terminal
      title={currentTab.label}
      className="lg:col-span-2 lg:row-span-3"
      id="main-terminal"
    >
      <nav
        aria-label="Main navigation"
        className="join m-0 mb-3 flex flex-row justify-center gap-2"
        role="tablist"
      >
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            id={`tab-${id}`}
            aria-label={label}
            aria-selected={selectedTabId === id}
            aria-controls={`tab-${id}-panel`}
            tabIndex={selectedTabId === id ? 0 : -1}
            className={`join-item btn btn-ghost btn-xs md:btn-sm hover:bg-base-100/50 border-base-content/50 focus-visible:ring-primary/70 rounded-full border-1 border-dashed focus:outline-none focus-visible:ring-2 ${selectedTabId === id ? 'bg-primary text-base-300' : ''}`}
            role="tab"
            onClick={() => handleTabClick(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      <main
        className="border-primary/20 bg-neutral/90 w-full rounded-xl border-2 shadow-xl/30"
        id={`tab-${currentTab.id}-panel`}
        role="tabpanel"
        aria-label="Main content area"
        aria-labelledby={`tab-${currentTab.id}`}
        tabIndex={0}
      >
        <article
          className="prose prose-h1:mt-3 prose-h1:-mb-3 m-3 flex min-h-screen !max-w-none flex-col justify-start gap-0 px-0 text-center"
          aria-labelledby={`${currentTab.id}-title`}
        >
          <h1 id={`${currentTab.id}-title`} className="uppercase">
            {currentTab.label}
          </h1>
          <hr className="divider divider-neutral m-0 p-0" />
          {currentTab.content}
        </article>
      </main>
    </Terminal>
  );
};

export default memo(Section);
