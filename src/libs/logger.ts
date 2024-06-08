import pino from 'pino';

import { env, isProd } from './env';

const devTransport = pino.transport({
  level: 'debug',
  target: 'pino-pretty',
  options: { colorize: true },
});

const prodTransport = pino.transport({
  level: 'warn',
  target: '@logtail/pino',
  options: { sourceToken: env.LOGTAIL_SOURCE_TOKEN },
});

export default pino({ base: undefined }, isProd ? prodTransport : devTransport);
