import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index.tsx';
import NotFound from '@/pages/NotFound.tsx';
import { LocaleProvider } from '@/shared/i18n/LocaleProvider';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/:lang?"
        element={
          <LocaleProvider>
            <Index />
          </LocaleProvider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
