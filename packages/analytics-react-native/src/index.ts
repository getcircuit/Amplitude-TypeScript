/* eslint-disable @typescript-eslint/unbound-method */
import client from './react-native-client';
export { createInstance } from './react-native-client';
export const {
  add,
  flush,
  getDeviceId,
  getSessionId,
  getUserId,
  groupIdentify,
  identify,
  init,
  logEvent,
  remove,
  reset,
  revenue,
  setDeviceId,
  setGroup,
  setOptOut,
  setSessionId,
  setUserId,
  track,
} = client;
export { Revenue, Identify } from '@getcircuit/amplitude-analytics-core';
// Hack - react-native apps have trouble with:
// export * as Types from '@getcircuit/amplitude-analytics-types
import * as Types from '@getcircuit/amplitude-analytics-types';
export { Types };
