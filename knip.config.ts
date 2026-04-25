import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['lingui.config.ts'],
  ignoreDependencies: ['@lingui/*'],
  ignoreBinaries: ['tree'],
  ignoreExportsUsedInFile: false,
};

export default config;
