import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      process.env.NEXT_PUBLIC_BACKEND_URL &&
      !originalRequest.url.includes("/auth/refresh-token") &&
      !originalRequest.url.includes("/auth/login")
    ) {
      originalRequest._retry = true;
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/refresh-token`,
          {},
          { withCredentials: true }
        );
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;