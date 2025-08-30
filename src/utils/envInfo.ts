/**
 * Returns a minimal view of selected environment variables (non-sensitive) for demo.
 * Added for webhook testing.
 */
export function getEnvInfo() {
  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    platform: process.platform,
  };
}
