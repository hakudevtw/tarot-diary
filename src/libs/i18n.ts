import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { APP_CONFIG } from '@/constants/app-config';

// Using internationalization in Server Components
export default getRequestConfig(async ({ locale }) => {
  if (!APP_CONFIG.locales.includes(locale)) notFound();
  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
