import axios from "axios";
import authApi from "./authApi";
import { LOCALSTORAGE_KEYS } from "../constants";
const { REACT_APP_API_URL, REACT_APP_API_VER } = process.env;

const instance = axios.create({
  baseURL: `${REACT_APP_API_URL}/api/${REACT_APP_API_VER}`,
  timeout: 20000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const refreshAccessToken = async () => {
  try {
    const response = await authApi.RefreshToken({
      refreshToken: localStorage.getItem(LOCALSTORAGE_KEYS.REFRESH_TOKEN),
    });

    if (!response.succeed) return null;

    localStorage.setItem(LOCALSTORAGE_KEYS.ACCESS_TOKEN, response.data.token);
    localStorage.setItem(LOCALSTORAGE_KEYS.REFRESH_TOKEN, response.data.refreshToken);
    return response.data.token;
  } catch (error) {
    console.error('Failed to refresh token', error);
    window.location.href = '/login';
    return null;
  }
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      const newToken = await refreshAccessToken();
      return new Promise((resolve, reject) => {
        originalRequest._retry = true;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        resolve(axios(originalRequest));
      });
    }
    return Promise.reject(error);
  }
);


export default instance;
