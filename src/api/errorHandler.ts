import { logoutUser } from "./auth";
import { api } from "./config";

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshedToken = await refreshToken();
        originalRequest.headers['Authorization'] = `Bearer ${refreshedToken}`;
        return api(originalRequest);
      } catch (_error) {
        // Если не удалось обновить токен - логиним пользователя
        await logoutUser();
        throw _error;
      }
    }
    
    throw error;
  }
);

export const refreshToken = async () => {
  const response = await api.post('/auth/refresh');
  localStorage.setItem('token', response.data.token);
  return response.data.token;
};