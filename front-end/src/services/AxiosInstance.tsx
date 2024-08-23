import axios from "axios";

const AxiosInstance = (token: string | null) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    },
  });

  return axiosInstance;
};

export default AxiosInstance;