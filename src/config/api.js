// config/api.js
// Configuración centralizada para el API

export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337',
  token: process.env.API_TOKEN,
  endpoints: {
    mainPage: '/api/main-page?populate=slider.image&populate=projects.image&populate=featured_projects.image&populate=services',
    heroSliders: '/api/hero-sliders'
  }
};

// Función helper para hacer requests al API
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.baseURL}${endpoint}`;
  
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(API_CONFIG.token && { Authorization: `Bearer ${API_CONFIG.token}` }),
    },
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, finalOptions);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
};
