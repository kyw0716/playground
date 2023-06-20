import { setupWorker } from 'msw';
import { mockApis } from './handler';

export const worker = setupWorker(...mockApis);
