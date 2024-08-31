import axios from "axios";

const AxiosInstance = (token: string | null) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',//'http://18.206.57.93:8080/'
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    },
  });

  return axiosInstance;
};

export default AxiosInstance;