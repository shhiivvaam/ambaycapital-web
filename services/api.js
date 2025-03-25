import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

const getAuthTokens = () => {
    const token = localStorage.getItem("authToken");
    // const refreshToken = localStorage.getItem("refreshToken");
    return { token };
    // return { token, refreshToken };
};

const refreshAccessToken = async () => {
    try {
        const response = await api.post('/api/auth/refresh-token');
        const { refreshToken } = response.data;
        localStorage.setItem("authToken", refreshToken);
        return refreshToken;
    } catch (error) {
        logger.error('Failed to refresh access token:', error.message);
        throw Error('Failed to refresh access token');
    }
};

api.interceptors.request.use(
    (config) => {
        const { token } = getAuthTokens();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        logger.error('Request error:', error.message);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newToken = await refreshAccessToken();
                originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
                return axios(originalRequest);
            } catch (refreshError) {
                logger.error("Error during token refresh:", refreshError.message);
                localStorage.removeItem("authToken");
                window.location.href = "/login";
            }
        }

        logger.error(
            `API Error: ${error.response?.status || "Unknown"} - ${error.response?.data?.message || error.message}`
        );
        return Promise.reject(error);
    }
);

export default api;