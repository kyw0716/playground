import { setupWorker } from 'msw';
import { suspenseHandlers } from './suspenseHandlers';
import { todoHandlers } from './todoHandlers';

export const worker = setupWorker(...suspenseHandlers, ...todoHandlers);
