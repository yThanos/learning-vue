<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            />
          </q-avatar>
          Vue Project
        </q-toolbar-title>

        <q-item v-if="isLoggedIn" clickable v-ripple @click="toggleRightDrawer">
          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="menu" />
          </q-item-section>
        </q-item>
        <q-item v-if="!isLoggedIn" clickable v-ripple @click="goToLogin">
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="login" />
          </q-item-section>
        </q-item>
      </q-toolbar>

      <!--q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/teste" label="Teste" />
      </q-tabs-->
    </q-header>

    <q-drawer show-if-above side="left" behavior="desktop" bordered>
      <q-list separator>
        <q-item
          clickable
          v-ripple
          v-for="item in menuItems"
          :key="item.id"
          :active="active == item.id"
          @click="navigate(item)"
          active-class="my-menu-link"
          :to="item.route"
        >
          <q-item-section avatar>
            <q-avatar
              :icon="item.icon"
              :size="active == item.id ? '40px' : '30px'"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      v-if="isLoggedIn"
      v-model="rightDrawerOpen"
      side="right"
      elevated
      overlay
    >
      <q-item clickable v-ripple @click="toggleRightDrawer">
        <q-item-section avatar>
          <q-avatar icon="close" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Fechar</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="sair">
        <q-item-section avatar>
          <q-avatar icon="logout" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Sair</q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { DrawerItem } from 'src/model/types';
import { logout } from 'src/service/loginService';
import { useUserStore } from 'src/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const data = useUserStore();
const { user, isLoggedIn } = storeToRefs(data);
const router = useRouter();
const active = ref(1);
const rightDrawerOpen = ref(false);

const menuItems = ref<DrawerItem[]>([
  { icon: 'home', label: 'Home', id: 1, route: '/' },
  { icon: 'dashboard', label: 'DashBoard', id: 2, route: '/dashboard' },
  { icon: 'people', label: 'Admin', id: 3, route: '/teste' },
  { icon: 'settings', label: 'Configurações', id: 4, route: '/settings' },
]);

function navigate(item: DrawerItem) {
  active.value = item.id;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

function goToLogin() {
  router.push('/login');
}

function sair() {
  active.value = 1;
  router.push('/');
  logout();
}
</script>

<style lang="sass">
.my-menu-link
  color: black
  background: #f07816
</style>
