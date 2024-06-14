<template>
  <q-page>
    <q-card>
      <q-card-section> {{ text }} </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('Texto');
</script>
