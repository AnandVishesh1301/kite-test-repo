import { appConfig } from '../config/app';

/**
 * getAppInfo
 * Lightweight helper to surface a snapshot of app configuration.
 * Added purely for webhook test commit.
 */
export function getAppInfo() {
  const { name, version, features } = appConfig;
  return {
    name,
    version,
    featureCount: Object.keys(features).length,
    featuresEnabled: Object.entries(features)
      .filter(([, enabled]) => enabled)
      .map(([key]) => key),
    generatedAt: new Date().toISOString()
  };
}

// Example (manual) usage:
// console.log(getAppInfo());
