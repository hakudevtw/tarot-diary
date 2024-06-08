/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath } from 'node:url';

import bundleAnalyzer from '@next/bundle-analyzer';
import createJiti from 'jiti';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti('./src/libs/env'); // Import env here to validate during build

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pino'],
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
