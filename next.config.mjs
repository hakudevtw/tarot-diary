import { fileURLToPath } from 'node:url';

import bundleAnalyzer from '@next/bundle-analyzer';
import createJiti from "jiti";

// Import env here to validate during build
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/libs/env");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzer(nextConfig);
