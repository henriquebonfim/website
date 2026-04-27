import { defineConfig } from '@lingui/cli';
import { formatter } from '@lingui/format-po';

export default defineConfig({
  sourceLocale: 'en',
  locales: ['en', 'pt-BR', 'es'],
  catalogs: [
    {
      path: 'src/shared/i18n/locales/{locale}',
      include: ['src'],
    },
  ],
  format: formatter({ lineNumbers: false }),
});
