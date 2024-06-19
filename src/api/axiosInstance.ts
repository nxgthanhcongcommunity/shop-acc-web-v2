import axios from "axios";
const { REACT_APP_API_URL, REACT_APP_API_VER } = process.env;

const instance = axios.create({
  baseURL: `${REACT_APP_API_URL}/api/${REACT_APP_API_VER}`,
  timeout: 20000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const { pathname, search } = window.location;
      window.location.href = `/login?redirect-from=${pathname}${search}`;
    }
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     debugger
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         const newToken = await refreshAccessToken();
//         if (newToken) {
//           onRrefreshed(newToken);
//         }
//         isRefreshing = false;
//         refreshSubscribers = [];
//       }

//       return new Promise((resolve, reject) => {
//         subscribeTokenRefresh((token: string) => {
//           originalRequest.headers['Authorization'] = `Bearer ${token}`;
//           resolve(axios(originalRequest));
//         });
//       });
//     }
//     return Promise.reject(error);
//   }
// );

// let isRefreshing = false;
// let refreshSubscribers: any[] = [];

// const subscribeTokenRefresh = (cb: any) => {
//   refreshSubscribers.push(cb);
// };

// const onRrefreshed = (token: string) => {
//   refreshSubscribers.map((cb) => cb(token));
// };

// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post(`${REACT_APP_API_URL}/api/${REACT_APP_API_VER}/auth/refresh`, {
//       refreshToken: localStorage.getItem('refreshToken'),
//     });

//     console.log(response)


//     const newAccessToken = response.data.token;
//     const newRefreshToken = response.data.refreshToken;
//     localStorage.setItem('authToken', newAccessToken);
//     localStorage.setItem('refreshToken', newRefreshToken);
//     return newAccessToken;
//   } catch (error) {
//     console.error('Failed to refresh token', error);
//     return null;
//   }
// }

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     debugger
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         const newToken = await refreshAccessToken();
//         if (newToken) {
//           onRrefreshed(newToken);
//         }
//         isRefreshing = false;
//         refreshSubscribers = [];
//       }

//       return new Promise((resolve, reject) => {
//         subscribeTokenRefresh((token: string) => {
//           originalRequest.headers['Authorization'] = `Bearer ${token}`;
//           resolve(axios(originalRequest));
//         });
//       });
//     }
//     return Promise.reject(error);
//   }
// );


export default instance;
