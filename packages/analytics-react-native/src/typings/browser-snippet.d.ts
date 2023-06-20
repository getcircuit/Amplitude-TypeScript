import { InstanceProxy } from '@getcircuit/amplitude-analytics-types';

declare global {
  // globalThis only includes `var` declarations
  // eslint-disable-next-line no-var
  var amplitude: InstanceProxy & { invoked: boolean };
}
