import createMiddleware from 'next-intl/middleware';

import { APP_CONFIG } from '@/constants/app-config';

export default createMiddleware({
  locales: APP_CONFIG.locales,
  defaultLocale: APP_CONFIG.defaultLocale,
});

export const config = {
  matcher: ['/', '/(zh|en|ja)/:path*'],
};
