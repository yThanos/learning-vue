<template>
  <q-page padding align="center">
    <q-card>
      <q-card-section> Card Section </q-card-section>
      <q-card-section>
        <q-card>
          <q-card-section> Card Section dentro do outro card </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TemplatePage',
});
</script>
