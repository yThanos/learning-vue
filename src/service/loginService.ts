import { Optional } from 'src/model/types';
import { useUserStore } from 'src/stores/user';
import useApi from './apiService';
import { useRouter } from 'vue-router';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const store = useUserStore();

export function login(email: string, password: string): Promise<boolean> {
  const { api } = useApi();
  return new Promise<boolean>(async (resolve, reject) => {
    const response = await api.get<User[]>('/users');
    const user = response.data.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      console.log(user);
      store.saveUser({
        name: user.name,
        email: user.email,
        token: 'aaaaaaa',
        id: user.id,
        logged: true,
      });
      //api.put('/isTokenValid', { isTokenValid: true });
      store.setLogged(true);
      resolve(true);
    } else {
      console.log('User not found');
      reject(false);
    }
  });
}

export function createAcc(user: Optional<User, 'id'>) {
  const { api } = useApi();
  return api.post('/users', user);
}

export function logout() {
  const router = useRouter();
  store.removeUser();
  store.setLogged(false);
  router.replace('/');
}
