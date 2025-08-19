// config/env.js
// Configuración centralizada de variables de ambiente

const config = {
  // API Configuration
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337',
    token: process.env.API_TOKEN,
  },
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // URLs
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

// Validar que las variables críticas estén definidas
if (!config.api.token && config.isProduction) {
  console.warn('⚠️  API_TOKEN no está definido en producción');
}

export default config;
