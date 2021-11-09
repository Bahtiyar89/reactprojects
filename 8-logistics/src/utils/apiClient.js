import axios from "axios";
// import Cookies from 'js-cookie';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
  config.withCredentials = true;
  // config.headers.Authorization = localStorage.getItem('token');
  config.headers["authorization"] = `Bearer ${localStorage.getItem("token")}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default axiosInstance;
