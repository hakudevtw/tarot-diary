import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

export const APP_CONFIG = {
  name: 'Tarot Diary',
  locales: ['zh', 'en', 'ja'],
  defaultLocale: 'zh',
  localePrefix,
};
