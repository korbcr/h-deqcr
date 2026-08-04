// utils/env-checker.js
// Utilidad para verificar que todas las variables de ambiente estén configuradas

export const checkEnvironmentVariables = () => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_API_URL',
    'API_TOKEN',
    'NEXT_PUBLIC_SITE_URL'
  ];

  const missingVars = [];
  const envStatus = {};

  requiredEnvVars.forEach(varName => {
    const value = process.env[varName];
    if (!value) {
      missingVars.push(varName);
    }
    
    // Solo mostrar información parcial de variables sensibles
    if (varName.includes('TOKEN')) {
      envStatus[varName] = value ? `${value.substring(0, 10)}...` : 'MISSING';
    } else {
      envStatus[varName] = value || 'MISSING';
    }
  });

  return {
    isValid: missingVars.length === 0,
    missingVars,
    envStatus,
    environment: process.env.NODE_ENV
  };
};

// Solo para debugging - remover en producción
export const logEnvironmentStatus = () => {
  if (process.env.NODE_ENV === 'development') {
    const status = checkEnvironmentVariables();
    console.group('🔧 Environment Variables Status');
    console.log('Environment:', status.environment);
    console.log('All variables present:', status.isValid);
    if (status.missingVars.length > 0) {
      console.error('Missing variables:', status.missingVars);
    }
    console.table(status.envStatus);
    console.groupEnd();
  }
};
