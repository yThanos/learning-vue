import axios, { AxiosInstance } from 'axios';
import { Optional } from 'src/model/types';
import { useUserStore } from 'src/stores/user';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const API: string = 'http://localhost:3000';

const http: AxiosInstance = axios.create({ baseURL: API });

const store = useUserStore();

export function login(email: string, password: string): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    const response = await http.get<User[]>('/users');
    const user = response.data.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      store.saveUser({
        name: user.name,
        email: user.email,
        token: 'Bearer aaaaa',
        id: user.id,
      });
      resolve(true);
    } else {
      reject(false);
    }
  });
}

export function createAcc(user: Optional<User, 'id'>) {
  return http.post('/users', user);
}

export function logout() {
  store.removeUser();
}
