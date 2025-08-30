import { appConfig } from '../config/app';

/**
 * Returns whether a given feature flag is enabled.
 * Added purely for webhook test commit.
 */
export function isFeatureEnabled(flag: keyof typeof appConfig.features): boolean {
  return Boolean(appConfig.features[flag]);
}

/**
 * Lists all enabled feature flags.
 */
export function listEnabledFeatures(): string[] {
  return Object.entries(appConfig.features)
    .filter(([, enabled]) => enabled)
    .map(([key]) => key);
}
