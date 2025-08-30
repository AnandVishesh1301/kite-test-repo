export const appConfig = {
  name: 'Kite RAG Test App',
  version: '1.0.0',
  // Build timestamp (added for webhook test commit)
  buildTimestamp: new Date().toISOString(),
  features: {
    darkMode: true,
    analytics: false,
    notifications: true
  },
  api: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    timeout: 5000
  }
};