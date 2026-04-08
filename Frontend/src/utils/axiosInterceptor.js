import axios from 'axios';
import AuthService from '../services/auth.service';

// ✅ Correct base URL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL?.replace('/auth/', '') || 'http://localhost:8080/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ✅ Attach token automatically
api.interceptors.request.use(
    (config) => {
        const user = AuthService.getCurrentUser();
        if (user?.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Handle 401 → logout
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error("Unauthorized - logging out");
            AuthService.logout();

            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;