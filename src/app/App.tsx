import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Index from '@/pages/Index.tsx';
import NotFound from '@/pages/NotFound.tsx';
import { LocaleProvider } from '@/shared/i18n/LocaleProvider';
import { locales } from '@/shared/i18n/lingui';

const MainLayout = () => {
  const { lang } = useParams();
  const isValidLocale = lang && lang in locales;

  return (
    <LocaleProvider>
      <Routes>
        <Route index element={isValidLocale ? <Index /> : <NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LocaleProvider>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/:lang/*" element={<MainLayout />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  </BrowserRouter>
);

export default App;
