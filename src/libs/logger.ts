import pino from 'pino';

import { env, isProd } from './env';

const devTransport = pino.transport({
  target: 'pino-pretty',
  options: { colorize: true },
});

const prodTransport = pino.transport({
  targets: [
    {
      target: '@logtail/pino',
      options: { sourceToken: env.LOGTAIL_SOURCE_TOKEN },
    },
    {
      target: 'pino-pretty',
      options: { colorize: true },
    },
  ],
});

export const logger = pino(
  { base: undefined },
  isProd ? prodTransport : devTransport,
);
