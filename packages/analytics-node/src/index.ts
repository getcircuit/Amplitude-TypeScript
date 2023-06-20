/* eslint-disable @typescript-eslint/unbound-method */

import client from './node-client';
export { createInstance } from './node-client';
export const { add, groupIdentify, identify, init, logEvent, remove, revenue, setGroup, setOptOut, track, flush } =
  client;
export { Revenue, Identify } from '@getcircuit/amplitude-analytics-core';
export * as Types from '@getcircuit/amplitude-analytics-types';
