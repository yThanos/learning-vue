import axios, { AxiosInstance } from 'axios';
import { useUserStore } from 'src/stores/user';
//import { useUserStore } from 'src/stores/user';

export default function useApi() {
  const API: string = 'http://localhost:3000';

  const api: AxiosInstance = axios.create({ baseURL: API });

  //const store = useUserStore();

  api.interceptors.request.use((config) => {
    /*if (store.getToken) {
      config.headers.Authorization = `Bearer ${store.getToken}`;
    }*/
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  async function isUserAutehnticated(): Promise<boolean> {
    /*const response = await api.get<{ isTokenValid: boolean }>('/isTokenValid');
    return response.data.isTokenValid;*/
    const { isLoggedIn } = useUserStore();
    return isLoggedIn;
  }

  return { api, isUserAutehnticated };
}
