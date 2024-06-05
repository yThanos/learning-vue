import { defineStore } from 'pinia';

export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

const defaultUser = {
  id: 0,
  name: '',
  email: '',
  token: '',
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
  },
});
