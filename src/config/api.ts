// API Configuration
const getApiUrl = () => {
  // Check if we're in development (localhost)
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3001';
  }
  
  // Production API URL - you'll need to replace this with your actual backend URL
  // Options for deployment:
  // 1. Railway: https://your-app-name.railway.app
  // 2. Vercel: https://your-app-name.vercel.app
  // 3. Heroku: https://your-app-name.herokuapp.com
  // 4. Your own server: https://api.yourdomain.com
  
  return 'https://your-backend-url.com'; // Replace with your actual backend URL
};

export const API_BASE_URL = getApiUrl();
export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  health: `${API_BASE_URL}/api/health`
};
