import { BeforePlugin } from '@getcircuit/amplitude-analytics-types';

export interface Options {
  excludeReferrers?: (string | RegExp)[];
  initialEmptyValue?: string;
  resetSessionOnNewCampaign?: boolean;
}

export interface CreateWebAttributionPlugin {
  (options?: Options): BeforePlugin;
}
