<template>
  <q-page-container>
    <q-page padding>
      <q-card class="q-pa-md">
        <q-card-section align="center">
          <q-img
            align="center"
            src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
            style="max-width: 200px"
          />
        </q-card-section>
        <q-card-section>
          <q-card>
            <q-card-section>
              <q-form @submit="logar">
                <q-input
                  v-model="email"
                  label="Email"
                  type="email"
                  outlined
                  lazy-rules
                  :rules="[(val) => !!val || 'Please enter your email']"
                />
                <q-input
                  v-model="password"
                  label="Password"
                  type="password"
                  outlined
                  lazy-rules
                  :rules="[(val) => !!val || 'Please enter your password']"
                />
                <q-btn
                  type="submit"
                  color="primary"
                  label="Login"
                  class="q-mt-md"
                />
              </q-form>
            </q-card-section>
            <!-- Create account btn leading to /register-->
            <q-card-actions align="left">
              <q-btn flat dense to="/register" label="Create account" />
            </q-card-actions>
          </q-card>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from 'src/service/loginService';

const email = ref('');
const password = ref('');
const router = useRouter();

const logar = () => {
  login(email.value, password.value).then((e) => {
    if (e) {
      router.push('/home');
    }
  });
};
</script>
