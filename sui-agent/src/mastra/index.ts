
import { createLogger } from '@mastra/core/logger';
import { Mastra } from '@mastra/core/mastra';

import { weatherAgent } from './agents';

/**
 * Mastra instance
 */
export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Sui Agent Kit',
    level: 'info',
  }),
});
