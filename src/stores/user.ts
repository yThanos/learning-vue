import { defineStore } from 'pinia';

export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
  logged: boolean;
};

const defaultUser: User = {
  id: 0,
  name: '',
  email: '',
  token: '',
  logged: false,
};
/*
const getUser = () => {
  const storage = localStorage.getItem('user');
  return storage ? JSON.parse(storage) : defaultUser;
};
*/
export const useUserStore = defineStore('user', {
  state: () => ({
    user: defaultUser, //getUser(),
  }),
  getters: {
    getToken(state) {
      return state.user.token;
    },
    isLoggedIn(state) {
      return state.user.logged;
    },
  },
  actions: {
    saveUser(user: User) {
      this.user = user;
      //localStorage.setItem('user', JSON.stringify(user));
    },
    removeUser() {
      this.user = defaultUser;
      //localStorage.removeItem('user');
    },
    setLogged(value: boolean) {
      this.user.logged = value;
    },
  },
});
