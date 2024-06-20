<template>
  <q-page>
    <q-card>
      <q-card-section> {{ text }} </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-center">
        <q-btn color="primary" label="Click me">
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Open...</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Preferences</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list>
                    <q-item v-for="n in 3" :key="n" dense clickable>
                      <q-item-section>Submenu Label</q-item-section>
                      <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list>
                          <q-item v-for="n in 3" :key="n" dense clickable>
                            <q-item-section>3rd level Label</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Quit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-card v-if="visible" :style="style">
          <q-resize-observer @resize="onResize" />
          <q-bar
            style="min-width: 250px"
            class="bg-teal text-white rounded-borders"
          >
            <div class="cursor-pointer non-selectable">
              File
              <q-menu>
                <q-list dense style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Open...</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>New</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Preferences</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>

                    <q-menu anchor="top end" self="top start">
                      <q-list dense>
                        <q-item v-for="n in 3" :key="n" clickable>
                          <q-item-section>Submenu Label</q-item-section>
                          <q-item-section side>
                            <q-icon name="keyboard_arrow_right" />
                          </q-item-section>
                          <q-menu auto-close anchor="top end" self="top start">
                            <q-list dense>
                              <q-item v-for="n in 3" :key="n" clickable>
                                <q-item-section>3rd level Label</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Quit</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <div class="cursor-pointer non-selectable">
              Edit
              <q-menu>
                <q-list dense style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Cut</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Copy</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Paste</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Select All</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <q-space />
            <q-btn @click="toggleVisibility()" dense flat icon="minimize" />
            <q-btn
              @click="toggleFullScreen()"
              dense
              flat
              :icon="fullScreen ? 'fullscreen_exit' : 'fullscreen'"
            />
            <q-btn @click="toggleVisibility" dense flat :icon="'close'" />
          </q-bar>
          <q-card-section>
            <q-card>
              <q-card-section>
                <q-item>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Title</q-item-label>
                    <q-item-label caption>Subhead</q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-section>

              <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
            </q-card>
          </q-card-section>
        </q-card>
        <q-btn color="primary" v-else @click="toggleVisibility()">Abrir</q-btn>

        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>

          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const expanded = ref(true);
const fullScreen = ref(false);
const visible = ref(true);
const style = ref({ width: '500px', height: '400px' });

function toggleFullScreen() {
  fullScreen.value = !fullScreen.value;
  style.value = expanded.value
    ? { width: '250px', height: '200px' }
    : { width: '500px', height: '400px' };
}

function toggleVisibility() {
  visible.value = !visible.value;
}

function onResize() {
  console.log('resized');
  console.log(style.value);
}

const text = ref('Texto');
</script>

<style lang="sass">
.my-card
  width: 250px
  height: 200px
</style>
