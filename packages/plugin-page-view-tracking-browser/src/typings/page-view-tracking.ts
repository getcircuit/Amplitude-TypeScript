import { EnrichmentPlugin, PageTrackingOptions as Options } from '@getcircuit/amplitude-analytics-types';

export {
  PageTrackingOptions as Options,
  PageTrackingTrackOn,
  PageTrackingHistoryChanges,
} from '@getcircuit/amplitude-analytics-types';

export interface CreatePageViewTrackingPlugin {
  (options?: Options): EnrichmentPlugin;
}
