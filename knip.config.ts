import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main.tsx', 'vite.config.ts', 'vitest.config.ts', 'eslint.config.js'],
  ignore: ['lingui.config.ts'],
  ignoreDependencies: ['@lingui/*'],
  ignoreBinaries: ['tree'],
  ignoreExportsUsedInFile: false,
  ignoreFiles: ['src/hooks/use-mobile.tsx'],
};

export default config;
